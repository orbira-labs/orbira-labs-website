"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/pro/supabase/client";
import type { TestInvitation } from "@/lib/pro/types";

interface TestWithClient extends TestInvitation {
  client: { first_name: string; last_name: string } | null;
}

export function useTests() {
  const [tests, setTests] = useState<TestWithClient[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("test_invitations")
      .select("*, client:clients(first_name, last_name)")
      .eq("professional_id", user.id)
      .order("created_at", { ascending: false });

    setTests((data as TestWithClient[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const completedCount = tests.filter((t) => t.status === "completed").length;

  return { tests, loading, refresh, completedCount };
}
