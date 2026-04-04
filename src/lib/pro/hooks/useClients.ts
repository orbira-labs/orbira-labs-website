"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/pro/supabase/client";
import type { Client } from "@/lib/pro/types";

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("clients")
      .select("*")
      .eq("professional_id", user.id)
      .order("created_at", { ascending: false });

    setClients(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { clients, setClients, loading, refresh };
}
