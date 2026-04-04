"use client";

import { ProShell } from "@/components/pro/layout/ProShell";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Avatar } from "@/components/pro/ui/Avatar";
import { Users, Calendar, FlaskConical, CheckCircle2, Clock } from "lucide-react";
import type { Professional, DashboardStats } from "@/lib/pro/types";
import { formatTime, formatRelative, formatDayLabel } from "@/lib/pro/utils";
import Link from "next/link";

interface DashboardContentProps {
  professional: Professional | null;
  stats: DashboardStats;
  upcomingAppointments: Array<{
    id: string;
    starts_at: string;
    subject: string | null;
    client: { first_name: string; last_name: string } | null;
  }>;
  recentTests: Array<{
    id: string;
    status: string;
    created_at: string;
    client: { first_name: string; last_name: string } | null;
  }>;
}

const STAT_CARDS = [
  { key: "total_clients", label: "Danışan", icon: Users, href: "/pro/clients" },
  { key: "todays_appointments", label: "Bugünkü Randevu", icon: Calendar, href: "/pro/appointments" },
  { key: "remaining_tests", label: "Kalan Test", icon: FlaskConical, href: "/pro/tests" },
  { key: "completed_tests", label: "Tamamlanan", icon: CheckCircle2, href: "/pro/tests" },
] as const;

const STATUS_MAP: Record<string, { label: string; variant: "success" | "warning" | "info" | "danger" }> = {
  sent: { label: "Bekliyor", variant: "warning" },
  started: { label: "Devam Ediyor", variant: "info" },
  completed: { label: "Tamamlandı", variant: "success" },
  expired: { label: "Süresi Doldu", variant: "danger" },
};

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Günaydın";
  if (h < 18) return "İyi günler";
  return "İyi akşamlar";
}

export function DashboardContent({
  professional,
  stats,
  upcomingAppointments,
  recentTests,
}: DashboardContentProps) {
  return (
    <ProShell professional={professional}>
      <TopBar title="Dashboard" professional={professional} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-pro-text">
          {getGreeting()}, {professional?.first_name || "Hoş geldiniz"} 👋
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STAT_CARDS.map((card) => (
            <Link key={card.key} href={card.href}>
              <Card hover padding="md">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-pro-text-secondary">
                      {card.label}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-pro-text mt-1">
                      {stats[card.key]}
                    </p>
                  </div>
                  <div className="h-9 w-9 rounded-lg bg-pro-primary-light flex items-center justify-center">
                    <card.icon className="h-4 w-4 text-pro-primary" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          <Card padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-pro-text">
                Yaklaşan Randevular
              </h3>
              <Link
                href="/pro/appointments"
                className="text-sm text-pro-primary hover:underline"
              >
                Tümü
              </Link>
            </div>
            {upcomingAppointments.length === 0 ? (
              <EmptyState
                icon={Calendar}
                title="Randevu yok"
                description="Yaklaşan randevunuz bulunmuyor"
              />
            ) : (
              <div className="space-y-3">
                {upcomingAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-pro-surface-alt"
                  >
                    <Avatar
                      firstName={apt.client?.first_name || "?"}
                      lastName={apt.client?.last_name || ""}
                      size="sm"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-pro-text truncate">
                        {apt.client?.first_name} {apt.client?.last_name}
                      </p>
                      <p className="text-xs text-pro-text-secondary">
                        {apt.subject || "Randevu"}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-pro-text">
                        {formatTime(apt.starts_at)}
                      </p>
                      <p className="text-xs text-pro-text-tertiary">
                        {formatDayLabel(apt.starts_at)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card padding="lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-pro-text">
                Son Test Aktivitesi
              </h3>
              <Link
                href="/pro/tests"
                className="text-sm text-pro-primary hover:underline"
              >
                Tümü
              </Link>
            </div>
            {recentTests.length === 0 ? (
              <EmptyState
                icon={FlaskConical}
                title="Henüz test yok"
                description="İlk testinizi bir danışana gönderin"
                actionLabel="Test Gönder"
                onAction={() => {}}
              />
            ) : (
              <div className="space-y-3">
                {recentTests.map((test) => {
                  const s = STATUS_MAP[test.status] || STATUS_MAP.sent;
                  return (
                    <div
                      key={test.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-pro-surface-alt"
                    >
                      <Avatar
                        firstName={test.client?.first_name || "?"}
                        lastName={test.client?.last_name || ""}
                        size="sm"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-pro-text truncate">
                          {test.client?.first_name} {test.client?.last_name}
                        </p>
                        <p className="text-xs text-pro-text-tertiary">
                          {formatRelative(test.created_at)}
                        </p>
                      </div>
                      <Badge variant={s.variant} dot>
                        {s.label}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </div>
      </main>
    </ProShell>
  );
}
