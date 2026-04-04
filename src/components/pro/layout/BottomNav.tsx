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
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/pro/dashboard", label: "Ana", icon: LayoutDashboard },
  { href: "/pro/clients", label: "Danışan", icon: Users },
  { href: "/pro/appointments", label: "Randevu", icon: Calendar },
  { href: "/pro/tests", label: "Test", icon: FlaskConical },
  { href: "/pro/billing", label: "Bakiye", icon: CreditCard },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-pro-surface border-t border-pro-border">
      <div className="flex items-center justify-around h-16 pb-[env(safe-area-inset-bottom)]">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1.5 transition-colors",
                isActive
                  ? "text-pro-primary"
                  : "text-pro-text-tertiary active:text-pro-text"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
