"use client";

import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { PageDecoration } from "../ui/PageDecoration";

interface ProShellProps {
  children: React.ReactNode;
}

export function ProShell({ children }: ProShellProps) {
  return (
    <div className="flex min-h-screen bg-[var(--background)] relative">
      <PageDecoration />
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative z-[1]">
        {children}
        <div className="h-20 lg:hidden" />
      </div>
      <BottomNav />
    </div>
  );
}
