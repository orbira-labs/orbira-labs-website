"use client";

import { useRouter } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { createClient } from "@/lib/pro/supabase/client";
import type { Professional } from "@/lib/pro/types";

interface ProShellProps {
  professional: Professional | null;
  children: React.ReactNode;
}

export function ProShell({ professional, children }: ProShellProps) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/pro/auth/login");
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Sidebar professional={professional} onSignOut={handleSignOut} />
      <div className="flex-1 flex flex-col min-w-0">
        {children}
        <div className="h-16 lg:hidden" />
      </div>
      <BottomNav />
    </div>
  );
}
