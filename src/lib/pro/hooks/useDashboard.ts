"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/pro/supabase/client";
import { useProContext } from "@/lib/pro/context";
import type { DashboardStats } from "@/lib/pro/types";

interface DashboardAppointment {
  id: string;
  starts_at: string;
  subject: string | null;
  client: { first_name: string; last_name: string } | null;
}

interface DashboardTest {
  id: string;
  token: string;
  status: string;
  created_at: string;
  client: { first_name: string; last_name: string } | null;
}

const CACHE_KEY = "pro_dashboard_cache";
const CACHE_TTL = 60_000;

interface CacheData {
  stats: DashboardStats;
  upcomingAppointments: DashboardAppointment[];
  recentTests: DashboardTest[];
  timestamp: number;
}

function getCache(): CacheData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as CacheData;
    if (Date.now() - data.timestamp > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function setCache(data: Omit<CacheData, "timestamp">) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ...data, timestamp: Date.now() }));
  } catch {}
}

export function useDashboard() {
  const { professional, creditBalance } = useProContext();
  const initialCache = useRef<CacheData | null>(null);
  const isMounted = useRef(false);
  const channelRef = useRef<ReturnType<ReturnType<typeof createClient>["channel"]> | null>(null);

  if (!isMounted.current && typeof window !== "undefined") {
    initialCache.current = getCache();
  }

  const [stats, setStats] = useState<DashboardStats>(
    initialCache.current?.stats ?? {
      total_clients: 0,
      todays_appointments: 0,
      remaining_tests: creditBalance,
      completed_tests: 0,
    }
  );
  const [upcomingAppointments, setUpcomingAppointments] = useState<DashboardAppointment[]>(
    initialCache.current?.upcomingAppointments ?? []
  );
  const [recentTests, setRecentTests] = useState<DashboardTest[]>(
    initialCache.current?.recentTests ?? []
  );
  const [loading, setLoading] = useState(!initialCache.current);

  const fetchData = useCallback(async () => {
    if (!professional?.id) return;

    const supabase = createClient();

    const [statsRes, aptsRes, testsRes] = await Promise.all([
      supabase.rpc("get_dashboard_stats", { p_professional_id: professional.id }),
      supabase
        .from("appointments")
        .select("id, starts_at, subject, client:clients(first_name, last_name)")
        .eq("professional_id", professional.id)
        .eq("status", "scheduled")
        .gte("starts_at", new Date().toISOString())
        .order("starts_at", { ascending: true })
        .limit(5),
      supabase
        .from("test_invitations")
        .select("id, token, status, created_at, client:clients(first_name, last_name)")
        .eq("professional_id", professional.id)
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

    const defaultStats: DashboardStats = {
      total_clients: 0,
      todays_appointments: 0,
      remaining_tests: 0,
      completed_tests: 0,
    };
    const newStats = statsRes.data ?? defaultStats;
    const newApts = (aptsRes.data || []).map((a: Record<string, unknown>) => ({
      ...a,
      client: Array.isArray(a.client) ? a.client[0] || null : a.client,
    })) as DashboardAppointment[];
    const newTests = (testsRes.data || []).map((t: Record<string, unknown>) => ({
      ...t,
      client: Array.isArray(t.client) ? t.client[0] || null : t.client,
    })) as DashboardTest[];

    setStats(newStats);
    setUpcomingAppointments(newApts);
    setRecentTests(newTests);
    setLoading(false);

    setCache({ stats: newStats, upcomingAppointments: newApts, recentTests: newTests });
  }, [professional?.id]);

  useEffect(() => {
    isMounted.current = true;
    
    if (!professional?.id) return;

    if (initialCache.current) {
      setLoading(false);
    }
    
    fetchData();
  }, [professional?.id, fetchData]);

  useEffect(() => {
    if (!professional?.id) return;

    const supabase = createClient();

    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
    }

    channelRef.current = supabase
      .channel(`dashboard-${professional.id}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "pro",
          table: "test_invitations",
          filter: `professional_id=eq.${professional.id}`,
        },
        () => fetchData()
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "pro",
          table: "appointments",
          filter: `professional_id=eq.${professional.id}`,
        },
        () => fetchData()
      )
      .subscribe();

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, [professional?.id, fetchData]);

  return { stats, upcomingAppointments, recentTests, loading, refresh: fetchData };
}
