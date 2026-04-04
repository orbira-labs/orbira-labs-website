"use client";

import { Bell } from "lucide-react";
import { Avatar } from "../ui/Avatar";
import { useProContext } from "@/lib/pro/context";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const { professional } = useProContext();

  return (
    <header className="h-16 border-b border-pro-border bg-gradient-to-r from-pro-surface via-pro-surface to-[var(--pro-surface-alt)] flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30 backdrop-blur-sm">
      <h1 className="text-lg font-semibold text-pro-text">{title}</h1>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-xl text-pro-text-secondary hover:bg-pro-primary-light hover:text-pro-primary transition-all duration-200">
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
