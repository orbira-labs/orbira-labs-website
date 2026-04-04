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
import type { Professional } from "@/lib/pro/types";

const NAV_ITEMS = [
  { href: "/pro/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pro/clients", label: "Danışanlar", icon: Users },
  { href: "/pro/appointments", label: "Randevular", icon: Calendar },
  { href: "/pro/tests", label: "Testler", icon: FlaskConical },
  { href: "/pro/billing", label: "Bakiye", icon: CreditCard },
];

interface SidebarProps {
  professional: Professional | null;
  onSignOut: () => void;
}

export function Sidebar({ professional, onSignOut }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "hidden lg:flex flex-col bg-pro-surface border-r border-pro-border",
        "h-screen sticky top-0 transition-all duration-200",
        collapsed ? "w-[68px]" : "w-[256px]"
      )}
    >
      <div
        className={clsx(
          "flex items-center h-16 border-b border-pro-border px-4",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        {!collapsed && (
          <Link href="/pro/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-pro-primary flex items-center justify-center">
              <span className="text-white text-sm font-bold">O</span>
            </div>
            <span className="font-semibold text-pro-text">Orbira <span className="font-light text-pro-text-secondary">Karakter Analiz</span></span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={clsx(
            "p-1.5 rounded-lg text-pro-text-tertiary hover:text-pro-text hover:bg-pro-surface-alt transition-colors",
            collapsed && "rotate-180"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 py-3 px-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-lg transition-colors duration-150",
                collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5",
                isActive
                  ? "bg-pro-primary-light text-pro-primary font-medium"
                  : "text-pro-text-secondary hover:bg-pro-surface-alt hover:text-pro-text"
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-pro-border p-2 space-y-1">
        <Link
          href="/pro/settings"
          className={clsx(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-pro-text-secondary hover:bg-pro-surface-alt hover:text-pro-text transition-colors",
            collapsed && "justify-center px-2"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />
          {!collapsed && <span className="text-sm">Ayarlar</span>}
        </Link>
      </div>

      <div className="border-t border-pro-border p-3">
        <div
          className={clsx(
            "flex items-center",
            collapsed ? "justify-center" : "gap-3"
          )}
        >
          <Avatar
            firstName={professional?.first_name || "U"}
            lastName={professional?.last_name || ""}
            src={professional?.avatar_url}
            size="sm"
          />
          {!collapsed && professional && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-pro-text truncate">
                {professional.first_name} {professional.last_name}
              </p>
              <button
                onClick={onSignOut}
                className="text-xs text-pro-text-tertiary hover:text-pro-danger transition-colors flex items-center gap-1"
              >
                <LogOut className="h-3 w-3" />
                Çıkış
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
