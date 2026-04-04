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
  { href: "/pro/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pro/clients", label: "Danışanlar", icon: Users },
  { href: "/pro/appointments", label: "Randevular", icon: Calendar },
  { href: "/pro/tests", label: "Testler", icon: FlaskConical },
  { href: "/pro/billing", label: "Bakiye", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();
  const { professional, signOut } = useProContext();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "hidden lg:flex flex-col border-r border-pro-border",
        "h-screen sticky top-0 transition-all duration-200",
        collapsed ? "w-[68px]" : "w-[260px]"
      )}
    >
      <div
        className={clsx(
          "flex items-center h-[68px] px-4 bg-pro-surface",
          "border-b border-pro-border",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        {!collapsed && (
          <Link href="/pro/dashboard" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pro-primary to-pro-primary-hover flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">O</span>
            </div>
            <div className="leading-tight">
              <span className="text-sm font-semibold text-pro-text">Orbira</span>
              <span className="text-sm font-light text-pro-text-secondary ml-1">Karakter</span>
            </div>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={clsx(
            "p-1.5 rounded-lg text-pro-text-tertiary hover:text-pro-text hover:bg-pro-surface transition-colors",
            collapsed && "rotate-180"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 py-4 px-2.5 space-y-1 bg-pro-surface">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group flex items-center gap-3 rounded-xl transition-all duration-200",
                collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5",
                isActive
                  ? "bg-pro-primary-light text-pro-primary font-medium"
                  : "text-pro-text-secondary hover:bg-pro-surface-alt hover:text-pro-text"
              )}
              title={collapsed ? item.label : undefined}
            >
              {isActive && !collapsed && (
                <div className="absolute left-0 w-[3px] h-5 rounded-r-full bg-pro-primary" />
              )}
              <item.icon className={clsx("h-5 w-5 shrink-0 transition-transform duration-200", !isActive && "group-hover:scale-110")} />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-pro-border p-2.5 bg-pro-surface">
        <Link
          href="/pro/settings"
          className={clsx(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-pro-text-secondary hover:bg-pro-surface-alt hover:text-pro-text transition-all duration-200",
            collapsed && "justify-center px-2",
            pathname.startsWith("/pro/settings") && "bg-pro-surface-alt text-pro-text"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />
          {!collapsed && <span className="text-sm">Ayarlar</span>}
        </Link>
      </div>

      <div className="border-t border-pro-border p-3.5 bg-pro-surface">
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
                onClick={signOut}
                className="text-xs text-pro-text-tertiary hover:text-pro-danger transition-colors flex items-center gap-1 mt-0.5"
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
