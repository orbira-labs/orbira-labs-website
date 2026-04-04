"use client";

import { Bell } from "lucide-react";
import { Avatar } from "../ui/Avatar";
import type { Professional } from "@/lib/pro/types";

interface TopBarProps {
  title: string;
  professional: Professional | null;
}

export function TopBar({ title, professional }: TopBarProps) {
  return (
    <header className="h-16 border-b border-pro-border bg-pro-surface flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <h1 className="text-lg font-semibold text-pro-text">{title}</h1>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg text-pro-text-secondary hover:bg-pro-surface-alt hover:text-pro-text transition-colors">
          <Bell className="h-5 w-5" />
        </button>

        <div className="lg:hidden">
          <Avatar
            firstName={professional?.first_name || "U"}
            lastName={professional?.last_name || ""}
            src={professional?.avatar_url}
            size="sm"
          />
        </div>
      </div>
    </header>
  );
}
