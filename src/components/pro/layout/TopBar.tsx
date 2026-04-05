"use client";

import { Bell, FlaskConical } from "lucide-react";
import Link from "next/link";
import { Avatar } from "../ui/Avatar";
import { useProContext } from "@/lib/pro/context";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const { professional, creditBalance } = useProContext();

  return (
    <header className="h-16 border-b border-[#B8CCBE] bg-gradient-to-r from-[#DCE8E0] via-[#E3ECE6] to-[#E8EDE9] flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      <h1 className="text-lg font-semibold text-[#3D5A4C]">{title}</h1>

      <div className="flex items-center gap-2.5">
        <Link
          href="/pro/billing"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 hover:bg-white/80 border border-[#B8CCBE] transition-all duration-200"
        >
          <FlaskConical className="h-3.5 w-3.5 text-[#5B7B6A]" />
          <span className="text-sm font-semibold text-[#3D5A4C]">{creditBalance}</span>
          <span className="text-xs text-[#6B8F7B]">kredi</span>
        </Link>

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
