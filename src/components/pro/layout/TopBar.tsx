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
    <header className="h-16 border-b border-[#C8D8CE] bg-gradient-to-r from-[#E8F0EB] via-[#EEF3F0] to-[#F2F5F3] flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <h1 className="text-lg font-semibold text-[#3D5A4C]">{title}</h1>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-xl text-[#6B8F7B] hover:bg-white/60 hover:text-[#3D5A4C] transition-all duration-200">
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
