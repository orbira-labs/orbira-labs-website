"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/pro/supabase/client";
import type { Appointment } from "@/lib/pro/types";

interface AppointmentWithClient extends Appointment {
  client: { first_name: string; last_name: string } | null;
}

export function useAppointments() {
  const [appointments, setAppointments] = useState<AppointmentWithClient[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("appointments")
      .select("*, client:clients(first_name, last_name)")
      .eq("professional_id", user.id)
      .order("starts_at", { ascending: true });

    setAppointments((data as AppointmentWithClient[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { appointments, loading, refresh };
}
