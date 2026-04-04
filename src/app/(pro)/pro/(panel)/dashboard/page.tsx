"use client";

import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Avatar } from "@/components/pro/ui/Avatar";
import { Skeleton } from "@/components/pro/ui/Skeleton";
import { Users, Calendar, FlaskConical, CheckCircle2 } from "lucide-react";
import { useProContext } from "@/lib/pro/context";
import { useDashboard } from "@/lib/pro/hooks/useDashboard";
import { formatTime, formatRelative, formatDayLabel } from "@/lib/pro/utils";
import Link from "next/link";

const STAT_CARDS = [
  { key: "total_clients" as const, label: "Danışan", icon: Users, href: "/pro/clients", color: "bg-pro-primary-light text-pro-primary" },
  { key: "todays_appointments" as const, label: "Bugünkü Randevu", icon: Calendar, href: "/pro/appointments", color: "bg-pro-accent-light text-pro-accent" },
  { key: "remaining_tests" as const, label: "Kalan Test", icon: FlaskConical, href: "/pro/tests", color: "bg-[#E8EDF0] text-[#5B8A9A]" },
  { key: "completed_tests" as const, label: "Tamamlanan", icon: CheckCircle2, href: "/pro/tests", color: "bg-pro-success-light text-pro-success" },
];

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

export default function DashboardPage() {
  const { professional } = useProContext();
  const { stats, upcomingAppointments, recentTests, loading } = useDashboard();

  return (
    <>
      <TopBar title="Ofisim" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-pro-primary animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-semibold text-pro-text">
              {getGreeting()}, <span className="text-pro-primary">{professional?.first_name || "Hoş geldiniz"}</span> 👋
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-pro-surface rounded-xl border border-pro-border p-4 sm:p-5">
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="h-8 w-14" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {STAT_CARDS.map((card) => (
                <Link key={card.key} href={card.href}>
                  <Card hover padding="md">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-pro-text-secondary">{card.label}</p>
                        <p className="text-2xl sm:text-3xl font-bold text-pro-text mt-1">{stats[card.key]}</p>
                      </div>
                      <div className={`h-10 w-10 rounded-xl ${card.color} flex items-center justify-center shrink-0`}>
                        <card.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <Card padding="lg" accent="primary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-pro-text flex items-center gap-2">
                  <span className="h-4 w-0.5 rounded-full bg-pro-primary" />
                  Yaklaşan Randevular
                </h3>
                <Link href="/pro/appointments" className="text-sm text-pro-primary hover:underline">Tümü</Link>
              </div>
              {loading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 p-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-40" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : upcomingAppointments.length === 0 ? (
                <EmptyState icon={Calendar} title="Henüz randevu yok" description="Danışanlarınızla randevu oluşturarak takibinizi kolaylaştırın" />
              ) : (
                <div className="space-y-2.5">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="flex items-center gap-3 p-3 rounded-xl bg-pro-surface-alt">
                      <Avatar firstName={apt.client?.first_name || "?"} lastName={apt.client?.last_name || ""} size="sm" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-pro-text truncate">{apt.client?.first_name} {apt.client?.last_name}</p>
                        <p className="text-xs text-pro-text-secondary">{apt.subject || "Randevu"}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-medium text-pro-text">{formatTime(apt.starts_at)}</p>
                        <p className="text-xs text-pro-text-tertiary">{formatDayLabel(apt.starts_at)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card padding="lg" accent="accent">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-pro-text flex items-center gap-2">
                  <span className="h-4 w-0.5 rounded-full bg-pro-accent" />
                  Son Test Aktivitesi
                </h3>
                <Link href="/pro/tests" className="text-sm text-pro-primary hover:underline">Tümü</Link>
              </div>
              {loading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 p-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-40" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : recentTests.length === 0 ? (
                <EmptyState icon={FlaskConical} title="Henüz test yok" description="İlk karakter analizinizi bir danışanınıza gönderin" actionLabel="Test Gönder" onAction={() => {}} />
              ) : (
                <div className="space-y-2.5">
                  {recentTests.map((test) => {
                    const s = STATUS_MAP[test.status] || STATUS_MAP.sent;
                    return (
                      <div key={test.id} className="flex items-center gap-3 p-3 rounded-xl bg-pro-surface-alt">
                        <Avatar firstName={test.client?.first_name || "?"} lastName={test.client?.last_name || ""} size="sm" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-pro-text truncate">{test.client?.first_name} {test.client?.last_name}</p>
                          <p className="text-xs text-pro-text-tertiary">{formatRelative(test.created_at)}</p>
                        </div>
                        <Badge variant={s.variant} dot>{s.label}</Badge>
                      </div>
                    );
                  })}
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
