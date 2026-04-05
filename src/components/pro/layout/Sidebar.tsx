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
              <span className="text-white text-sm font-bold">K</span>
            </div>
            <div className="leading-tight">
              <span className="text-sm font-semibold text-white">Karakter Analizi</span>
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

      {/* Neural network wrapping decoration */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" 
        viewBox="0 0 260 800" 
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Vertical flowing lines - left edge */}
        <path d="M10 0 Q25 100, 15 200 Q5 300, 20 400 Q35 500, 10 600 Q-5 700, 15 800" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M30 0 Q45 120, 35 240 Q25 360, 40 480 Q55 600, 30 720 Q15 800, 35 900" stroke="white" strokeWidth="1" fill="none" />
        
        {/* Vertical flowing lines - right edge */}
        <path d="M250 0 Q235 100, 245 200 Q255 300, 240 400 Q225 500, 250 600 Q265 700, 245 800" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M230 0 Q215 120, 225 240 Q235 360, 220 480 Q205 600, 230 720 Q245 800, 225 900" stroke="white" strokeWidth="1" fill="none" />
        
        {/* Horizontal connections - creating a web effect */}
        <path d="M15 120 Q130 100, 245 120" stroke="white" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M20 250 Q130 230, 240 250" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M10 380 Q130 400, 250 380" stroke="white" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M25 510 Q130 490, 235 510" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M15 640 Q130 660, 245 640" stroke="white" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M30 770 Q130 750, 230 770" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5" />
        
        {/* Center flowing spine */}
        <path d="M130 0 Q140 100, 125 200 Q110 300, 135 400 Q160 500, 130 600 Q100 700, 130 800" stroke="white" strokeWidth="1.2" fill="none" opacity="0.7" />
        
        {/* Neural nodes at intersections */}
        <circle cx="15" cy="120" r="4" fill="white" opacity="0.5" />
        <circle cx="130" cy="100" r="5" fill="white" opacity="0.6" />
        <circle cx="245" cy="120" r="4" fill="white" opacity="0.5" />
        
        <circle cx="20" cy="250" r="3" fill="white" opacity="0.4" />
        <circle cx="130" cy="230" r="4" fill="white" opacity="0.5" />
        <circle cx="240" cy="250" r="3" fill="white" opacity="0.4" />
        
        <circle cx="10" cy="380" r="4" fill="white" opacity="0.5" />
        <circle cx="130" cy="400" r="5" fill="white" opacity="0.6" />
        <circle cx="250" cy="380" r="4" fill="white" opacity="0.5" />
        
        <circle cx="25" cy="510" r="3" fill="white" opacity="0.4" />
        <circle cx="130" cy="490" r="4" fill="white" opacity="0.5" />
        <circle cx="235" cy="510" r="3" fill="white" opacity="0.4" />
        
        <circle cx="15" cy="640" r="4" fill="white" opacity="0.5" />
        <circle cx="130" cy="660" r="5" fill="white" opacity="0.6" />
        <circle cx="245" cy="640" r="4" fill="white" opacity="0.5" />
        
        <circle cx="30" cy="770" r="3" fill="white" opacity="0.4" />
        <circle cx="130" cy="750" r="4" fill="white" opacity="0.5" />
        <circle cx="230" cy="770" r="3" fill="white" opacity="0.4" />
        
        {/* Diagonal cross connections */}
        <line x1="15" y1="120" x2="130" y2="230" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="245" y1="120" x2="130" y2="230" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="20" y1="250" x2="130" y2="400" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="240" y1="250" x2="130" y2="400" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="10" y1="380" x2="130" y2="490" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="250" y1="380" x2="130" y2="490" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="25" y1="510" x2="130" y2="660" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="235" y1="510" x2="130" y2="660" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="15" y1="640" x2="130" y2="750" stroke="white" strokeWidth="0.6" opacity="0.3" />
        <line x1="245" y1="640" x2="130" y2="750" stroke="white" strokeWidth="0.6" opacity="0.3" />
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

      {/* Powered by label */}
      {!collapsed && (
        <div className="px-4 pb-3 text-center">
          <span className="text-[10px] text-white/30 tracking-wide">
            Powered by <span className="font-medium">Orbira Labs</span>
          </span>
        </div>
      )}
    </aside>
  );
}
