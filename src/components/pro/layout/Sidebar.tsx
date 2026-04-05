"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FlaskConical,
  CreditCard,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { Avatar } from "../ui/Avatar";
import { useProContext } from "@/lib/pro/context";

const NAV_ITEMS = [
  { href: "/pro/dashboard", label: "Ofisim", icon: LayoutDashboard },
  { href: "/pro/clients", label: "Danışanlar", icon: Users },
  { href: "/pro/appointments", label: "Randevular", icon: Calendar },
  { href: "/pro/tests", label: "Testler", icon: FlaskConical },
  { href: "/pro/billing", label: "Satın Al", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();
  const { professional, signOut } = useProContext();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "hidden lg:flex flex-col",
        "h-screen sticky top-0 transition-all duration-200",
        "bg-gradient-to-b from-[#4A6A59] via-[#5B7B6A] to-[#4A6A59]",
        collapsed ? "w-[68px]" : "w-[260px]"
      )}
    >
      <div
        className={clsx(
          "flex items-center h-[68px] px-4",
          "border-b border-white/10",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        {!collapsed && (
          <Link href="/pro/dashboard" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-sm font-bold">O</span>
            </div>
            <div className="leading-tight">
              <span className="text-sm font-semibold text-white">Orbira</span>
              <span className="text-sm font-light text-white/60 ml-1">Karakter</span>
            </div>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={clsx(
            "p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors",
            collapsed && "rotate-180"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      {/* AI brain circuit decoration */}
      <svg className="absolute bottom-[110px] left-1/2 -translate-x-1/2 w-[140px] h-[140px] opacity-[0.12] pointer-events-none" viewBox="0 0 140 140" fill="none">
        {/* Outer brain shape */}
        <ellipse cx="70" cy="65" rx="50" ry="45" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M45 65 C45 40, 95 40, 95 65" stroke="white" strokeWidth="1.2" fill="none" />
        {/* Circuit nodes */}
        <circle cx="70" cy="45" r="4" fill="white" />
        <circle cx="50" cy="60" r="3" fill="white" />
        <circle cx="90" cy="60" r="3" fill="white" />
        <circle cx="55" cy="80" r="3" fill="white" />
        <circle cx="85" cy="80" r="3" fill="white" />
        <circle cx="70" cy="70" r="5" fill="white" />
        {/* Circuit connections */}
        <line x1="70" y1="45" x2="50" y2="60" stroke="white" strokeWidth="1" />
        <line x1="70" y1="45" x2="90" y2="60" stroke="white" strokeWidth="1" />
        <line x1="50" y1="60" x2="70" y2="70" stroke="white" strokeWidth="0.8" />
        <line x1="90" y1="60" x2="70" y2="70" stroke="white" strokeWidth="0.8" />
        <line x1="70" y1="70" x2="55" y2="80" stroke="white" strokeWidth="0.8" />
        <line x1="70" y1="70" x2="85" y2="80" stroke="white" strokeWidth="0.8" />
        {/* Signal pulses */}
        <circle cx="70" cy="70" r="10" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
        <circle cx="70" cy="70" r="18" stroke="white" strokeWidth="0.4" fill="none" opacity="0.3" />
        {/* AI text */}
        <text x="70" y="122" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" letterSpacing="3" opacity="0.6">AI</text>
      </svg>

      <nav className="flex-1 py-4 px-2.5 space-y-1 relative">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group relative flex items-center gap-3 rounded-xl transition-all duration-200",
                collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5",
                isActive
                  ? "bg-white/20 text-white font-medium backdrop-blur-sm"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              )}
              title={collapsed ? item.label : undefined}
            >
              {isActive && !collapsed && (
                <div className="absolute left-0 w-[3px] h-5 rounded-r-full bg-white" />
              )}
              <item.icon className={clsx("h-5 w-5 shrink-0 transition-transform duration-200", !isActive && "group-hover:scale-110")} />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-2.5">
        <Link
          href="/pro/settings"
          className={clsx(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-white/50 hover:bg-white/10 hover:text-white transition-all duration-200",
            collapsed && "justify-center px-2",
            pathname.startsWith("/pro/settings") && "bg-white/15 text-white"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />
          {!collapsed && <span className="text-sm">Ayarlar</span>}
        </Link>
      </div>

      <div className="border-t border-white/10 p-3.5">
        <div
          className={clsx(
            "flex items-center",
            collapsed ? "justify-center" : "gap-3"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-white/20 text-white text-xs font-semibold flex items-center justify-center">
            {professional ? `${professional.first_name.charAt(0)}${professional.last_name.charAt(0)}` : "U"}
          </div>
          {!collapsed && professional && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {professional.first_name} {professional.last_name}
              </p>
              <button
                onClick={signOut}
                className="text-xs text-white/40 hover:text-white/80 transition-colors flex items-center gap-1 mt-0.5"
              >
                <LogOut className="h-3 w-3" />
                Çıkış yap
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
