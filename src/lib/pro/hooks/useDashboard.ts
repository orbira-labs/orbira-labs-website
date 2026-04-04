"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/pro/supabase/client";
import type { DashboardStats } from "@/lib/pro/types";

interface DashboardAppointment {
  id: string;
  starts_at: string;
  subject: string | null;
  client: { first_name: string; last_name: string } | null;
}

interface DashboardTest {
  id: string;
  status: string;
  created_at: string;
  client: { first_name: string; last_name: string } | null;
}

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total_clients: 0,
    todays_appointments: 0,
    remaining_tests: 0,
    completed_tests: 0,
  });
  const [upcomingAppointments, setUpcomingAppointments] = useState<DashboardAppointment[]>([]);
  const [recentTests, setRecentTests] = useState<DashboardTest[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const [statsRes, aptsRes, testsRes] = await Promise.all([
      supabase.rpc("get_dashboard_stats", { p_professional_id: user.id }),
      supabase
        .from("appointments")
        .select("id, starts_at, subject, client:clients(first_name, last_name)")
        .eq("professional_id", user.id)
        .eq("status", "scheduled")
        .gte("starts_at", new Date().toISOString())
        .order("starts_at", { ascending: true })
        .limit(5),
      supabase
        .from("test_invitations")
        .select("id, status, created_at, client:clients(first_name, last_name)")
        .eq("professional_id", user.id)
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

    if (statsRes.data) setStats(statsRes.data);
    setUpcomingAppointments(
      (aptsRes.data || []).map((a: Record<string, unknown>) => ({
        ...a,
        client: Array.isArray(a.client) ? a.client[0] || null : a.client,
      })) as DashboardAppointment[]
    );
    setRecentTests(
      (testsRes.data || []).map((t: Record<string, unknown>) => ({
        ...t,
        client: Array.isArray(t.client) ? t.client[0] || null : t.client,
      })) as DashboardTest[]
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { stats, upcomingAppointments, recentTests, loading, refresh };
}
