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
import { useState, useEffect } from "react";
import { Avatar } from "../ui/Avatar";
import { useProContext } from "@/lib/pro/context";

const NAV_ITEMS = [
  { href: "/pro/dashboard", label: "Ofisim", icon: LayoutDashboard },
  { href: "/pro/clients", label: "Danışanlar", icon: Users },
  { href: "/pro/appointments", label: "Randevular", icon: Calendar },
  { href: "/pro/tests", label: "Analizler", icon: FlaskConical },
  { href: "/pro/billing", label: "Satın Al", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();
  const { professional, signOut } = useProContext();
  const [collapsed, setCollapsed] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => {
    setPendingHref(null);
  }, [pathname]);

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

      {/* Minimal dot pattern decoration */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="sidebarDots" 
            x="0" 
            y="0" 
            width="20" 
            height="20" 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sidebarDots)" />
      </svg>

      <nav className="flex-1 py-4 px-2.5 space-y-1 relative">
        {NAV_ITEMS.map((item) => {
          const isActive = (pendingHref ?? pathname).startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setPendingHref(item.href)}
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

        {/* Neural Network Illustration with Flowing Light */}
        {!collapsed && (
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[200px] opacity-30 pointer-events-none">
            <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <defs>
                {/* Gradient for glowing effect */}
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                {/* Radial glow for nodes */}
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                {/* Filter for soft glow */}
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Layer 1 - Input nodes (bottom) */}
              <circle cx="30" cy="150" r="6" fill="white" opacity="0.5" />
              <circle cx="70" cy="150" r="6" fill="white" opacity="0.5" />
              <circle cx="100" cy="150" r="6" fill="white" opacity="0.5" />
              <circle cx="130" cy="150" r="6" fill="white" opacity="0.5" />
              <circle cx="170" cy="150" r="6" fill="white" opacity="0.5" />

              {/* Layer 2 - Hidden layer 1 */}
              <circle cx="50" cy="110" r="5" fill="white" opacity="0.6" />
              <circle cx="100" cy="110" r="5" fill="white" opacity="0.6" />
              <circle cx="150" cy="110" r="5" fill="white" opacity="0.6" />

              {/* Layer 3 - Hidden layer 2 */}
              <circle cx="40" cy="70" r="5" fill="white" opacity="0.6" />
              <circle cx="80" cy="70" r="5" fill="white" opacity="0.6" />
              <circle cx="120" cy="70" r="5" fill="white" opacity="0.6" />
              <circle cx="160" cy="70" r="5" fill="white" opacity="0.6" />

              {/* Layer 4 - Output (top) - Main AI node */}
              <circle cx="100" cy="30" r="10" fill="url(#nodeGlow)" filter="url(#softGlow)" />
              <circle cx="100" cy="30" r="6" fill="white" opacity="0.9" />

              {/* Connection lines - Layer 1 to Layer 2 */}
              <g opacity="0.2">
                <line x1="30" y1="150" x2="50" y2="110" stroke="white" strokeWidth="1" />
                <line x1="30" y1="150" x2="100" y2="110" stroke="white" strokeWidth="1" />
                <line x1="70" y1="150" x2="50" y2="110" stroke="white" strokeWidth="1" />
                <line x1="70" y1="150" x2="100" y2="110" stroke="white" strokeWidth="1" />
                <line x1="70" y1="150" x2="150" y2="110" stroke="white" strokeWidth="1" />
                <line x1="100" y1="150" x2="50" y2="110" stroke="white" strokeWidth="1" />
                <line x1="100" y1="150" x2="100" y2="110" stroke="white" strokeWidth="1" />
                <line x1="100" y1="150" x2="150" y2="110" stroke="white" strokeWidth="1" />
                <line x1="130" y1="150" x2="100" y2="110" stroke="white" strokeWidth="1" />
                <line x1="130" y1="150" x2="150" y2="110" stroke="white" strokeWidth="1" />
                <line x1="170" y1="150" x2="100" y2="110" stroke="white" strokeWidth="1" />
                <line x1="170" y1="150" x2="150" y2="110" stroke="white" strokeWidth="1" />
              </g>

              {/* Connection lines - Layer 2 to Layer 3 */}
              <g opacity="0.25">
                <line x1="50" y1="110" x2="40" y2="70" stroke="white" strokeWidth="1" />
                <line x1="50" y1="110" x2="80" y2="70" stroke="white" strokeWidth="1" />
                <line x1="100" y1="110" x2="80" y2="70" stroke="white" strokeWidth="1" />
                <line x1="100" y1="110" x2="120" y2="70" stroke="white" strokeWidth="1" />
                <line x1="150" y1="110" x2="120" y2="70" stroke="white" strokeWidth="1" />
                <line x1="150" y1="110" x2="160" y2="70" stroke="white" strokeWidth="1" />
              </g>

              {/* Connection lines - Layer 3 to Output */}
              <g opacity="0.3">
                <line x1="40" y1="70" x2="100" y2="30" stroke="white" strokeWidth="1.5" />
                <line x1="80" y1="70" x2="100" y2="30" stroke="white" strokeWidth="1.5" />
                <line x1="120" y1="70" x2="100" y2="30" stroke="white" strokeWidth="1.5" />
                <line x1="160" y1="70" x2="100" y2="30" stroke="white" strokeWidth="1.5" />
              </g>

              {/* Flowing light pulse - Path 1 (left side) */}
              <circle r="3" fill="white" opacity="0.9" filter="url(#softGlow)">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#flowPath1" />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" />
              </circle>
              <path id="flowPath1" d="M30 150 L50 110 L40 70 L100 30" fill="none" stroke="none" />

              {/* Flowing light pulse - Path 2 (center) */}
              <circle r="3" fill="white" opacity="0.9" filter="url(#softGlow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s">
                  <mpath href="#flowPath2" />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <path id="flowPath2" d="M100 150 L100 110 L80 70 L100 30" fill="none" stroke="none" />

              {/* Flowing light pulse - Path 3 (right side) */}
              <circle r="3" fill="white" opacity="0.9" filter="url(#softGlow)">
                <animateMotion dur="3.5s" repeatCount="indefinite" begin="1s">
                  <mpath href="#flowPath3" />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
              </circle>
              <path id="flowPath3" d="M170 150 L150 110 L160 70 L100 30" fill="none" stroke="none" />

              {/* Flowing light pulse - Path 4 (cross) */}
              <circle r="2.5" fill="white" opacity="0.8" filter="url(#softGlow)">
                <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s">
                  <mpath href="#flowPath4" />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.8;0.8;0" dur="4s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <path id="flowPath4" d="M70 150 L100 110 L120 70 L100 30" fill="none" stroke="none" />

              {/* Top node pulsing glow */}
              <circle cx="100" cy="30" r="14" fill="none" stroke="white" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" values="14;20;14" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="30" r="10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite" begin="0.3s" />
                <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" begin="0.3s" />
              </circle>

              {/* Subtle sparkles on some nodes */}
              <circle cx="50" cy="110" r="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
              </circle>
              <circle cx="150" cy="110" r="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="1.5s" repeatCount="indefinite" begin="0.7s" />
              </circle>
            </svg>
          </div>
        )}
      </nav>

      <div className="border-t border-white/10 p-2.5">
        <Link
          href="/pro/settings"
          onClick={() => setPendingHref("/pro/settings")}
          className={clsx(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-white/50 hover:bg-white/10 hover:text-white transition-all duration-200",
            collapsed && "justify-center px-2",
            (pendingHref ?? pathname).startsWith("/pro/settings") && "bg-white/15 text-white"
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
