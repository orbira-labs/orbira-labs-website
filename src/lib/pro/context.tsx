"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/pro/supabase/client";
import type { Professional } from "@/lib/pro/types";

interface ProContextValue {
  professional: Professional | null;
  creditBalance: number;
  loading: boolean;
  refreshProfile: () => Promise<void>;
  refreshCredits: () => Promise<void>;
  signOut: () => Promise<void>;
}

const ProContext = createContext<ProContextValue | null>(null);

interface ProProviderProps {
  initialProfessional: Professional | null;
  initialCredits: number;
  children: ReactNode;
}

export function ProProvider({
  initialProfessional,
  initialCredits,
  children,
}: ProProviderProps) {
  const router = useRouter();
  const [professional, setProfessional] = useState(initialProfessional);
  const [creditBalance, setCreditBalance] = useState(initialCredits);
  const [loading, setLoading] = useState(false);

  const refreshProfile = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("professionals")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) setProfessional(data);
  }, []);

  const refreshCredits = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase.rpc("get_credit_balance", {
      p_professional_id: user.id,
    });

    if (typeof data === "number") setCreditBalance(data);
  }, []);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/pro/auth/login");
  }, [router]);

  return (
    <ProContext.Provider
      value={{
        professional,
        creditBalance,
        loading,
        refreshProfile,
        refreshCredits,
        signOut,
      }}
    >
      {children}
    </ProContext.Provider>
  );
}

export function useProContext() {
  const ctx = useContext(ProContext);
  if (!ctx) {
    throw new Error("useProContext must be used within ProProvider");
  }
  return ctx;
}
