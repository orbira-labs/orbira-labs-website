"use client";

import { useState, useRef, useEffect } from "react";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Avatar } from "@/components/pro/ui/Avatar";
import { Skeleton } from "@/components/pro/ui/Skeleton";
import { Users, Calendar, FlaskConical, CheckCircle2, Eye, Send, Share2, Copy, Mail, MessageCircle, Check } from "lucide-react";
import { useProContext } from "@/lib/pro/context";
import { useDashboard } from "@/lib/pro/hooks/useDashboard";
import { formatTime, formatRelative, formatDayLabel, generateWhatsAppLink, buildTestMessage } from "@/lib/pro/utils";
import { toast } from "sonner";
import Link from "next/link";

const STAT_CARDS = [
  {
    key: "total_clients" as const,
    label: "Danışan",
    icon: Users,
    href: "/pro/clients",
    gradient: "from-[#E8F0EB] to-[#D4E5DA]",
    iconBg: "bg-[#5B7B6A]",
    iconColor: "text-white",
    accentBar: "bg-[#5B7B6A]",
    valueColor: "text-[#3D5A4C]",
  },
  {
    key: "todays_appointments" as const,
    label: "Bugünkü Randevu",
    icon: Calendar,
    href: "/pro/appointments",
    gradient: "from-[#FDF5EE] to-[#F8EBD9]",
    iconBg: "bg-[#C4956A]",
    iconColor: "text-white",
    accentBar: "bg-[#C4956A]",
    valueColor: "text-[#8B5E3C]",
  },
  {
    key: "remaining_tests" as const,
    label: "Kullanılabilir Test",
    icon: FlaskConical,
    href: "/pro/tests",
    gradient: "from-[#EBF0F8] to-[#D8E3F1]",
    iconBg: "bg-[#5B7BA0]",
    iconColor: "text-white",
    accentBar: "bg-[#5B7BA0]",
    valueColor: "text-[#3A5270]",
  },
  {
    key: "completed_tests" as const,
    label: "Tamamlanan Test",
    icon: CheckCircle2,
    href: "/pro/tests",
    gradient: "from-[#E9F7EF] to-[#D0EDDB]",
    iconBg: "bg-[#27AE60]",
    iconColor: "text-white",
    accentBar: "bg-[#27AE60]",
    valueColor: "text-[#1B7A43]",
  },
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

function formatTodayDate(): string {
  return new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
}

function SharePopover({ testToken, clientName, professionalName, onClose }: {
  testToken: string;
  clientName: string;
  professionalName: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const testLink = `${window.location.origin}/t/${testToken}`;
  const message = buildTestMessage(clientName, professionalName, testLink);

  const actions = [
    {
      icon: copied ? Check : Copy,
      label: copied ? "Kopyalandı!" : "Linki Kopyala",
      onClick: async () => {
        await navigator.clipboard.writeText(testLink);
        setCopied(true);
        toast.success("Link kopyalandı!");
        setTimeout(() => onClose(), 800);
      },
      accent: copied,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp ile Gönder",
      onClick: () => {
        window.open(generateWhatsAppLink("", message), "_blank");
        onClose();
      },
    },
    {
      icon: Mail,
      label: "E-posta Gönder",
      onClick: () => {
        const subject = encodeURIComponent("Karakter Analizi Testi");
        const body = encodeURIComponent(message);
        window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
        onClose();
      },
    },
  ];

  return (
    <div ref={ref} className="absolute right-0 top-full mt-1 z-50 w-52 bg-white rounded-xl shadow-lg border border-pro-border py-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
      {actions.map((a) => (
        <button
          key={a.label}
          onClick={a.onClick}
          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
            a.accent ? "text-pro-success bg-pro-success-light/50" : "text-pro-text-secondary hover:bg-pro-surface-alt hover:text-pro-text"
          }`}
        >
          <a.icon className="h-4 w-4 shrink-0" />
          {a.label}
        </button>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const { professional } = useProContext();
  const { stats, upcomingAppointments, recentTests, loading } = useDashboard();
  const [shareOpenId, setShareOpenId] = useState<string | null>(null);

  return (
    <>
      <TopBar title="Ofisim" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Greeting + quick action */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-pro-primary animate-pulse" />
                <h2 className="text-xl sm:text-2xl font-semibold text-pro-text">
                  {getGreeting()}, <span className="text-pro-primary">{professional?.first_name || "Hoş geldiniz"}</span>
                </h2>
              </div>
              <p className="text-sm text-pro-text-tertiary mt-1 ml-[18px]">{formatTodayDate()}</p>
            </div>
            <Link
              href="/pro/tests"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pro-primary text-white text-sm font-medium hover:bg-pro-primary-hover transition-colors shadow-sm"
            >
              <Send className="h-4 w-4" />
              Test Gönder
            </Link>
          </div>

          {/* Stat cards */}
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
                  <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${card.gradient} border border-white/60 p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group`}>
                    <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full ${card.accentBar}`} />
                    <div className="flex items-start justify-between pl-2">
                      <div>
                        <p className="text-xs sm:text-sm text-pro-text-secondary font-medium">{card.label}</p>
                        <p className={`text-2xl sm:text-3xl font-bold mt-1 ${card.valueColor}`}>{stats[card.key]}</p>
                      </div>
                      <div className={`h-10 w-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                        <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Bottom panels */}
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
                  Son Testler
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
                    const isCompleted = test.status === "completed";
                    const isPending = test.status !== "completed" && test.status !== "expired";
                    const profName = professional ? `${professional.first_name} ${professional.last_name}` : "";

                    return (
                      <div key={test.id} className="flex items-center gap-3 p-3 rounded-xl bg-pro-surface-alt">
                        <Avatar firstName={test.client?.first_name || "?"} lastName={test.client?.last_name || ""} size="sm" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-pro-text truncate">{test.client?.first_name} {test.client?.last_name}</p>
                          <p className="text-xs text-pro-text-tertiary">{formatRelative(test.created_at)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={s.variant} dot>{s.label}</Badge>
                          {isCompleted && (
                            <Link
                              href={`/pro/tests/${test.id}`}
                              className="p-1.5 rounded-lg text-pro-primary hover:bg-pro-primary-light transition-colors"
                              title="Sonuçları Gör"
                            >
                              <Eye className="h-4 w-4" />
                            </Link>
                          )}
                          {isPending && (
                            <div className="relative">
                              <button
                                onClick={() => setShareOpenId(shareOpenId === test.id ? null : test.id)}
                                className="p-1.5 rounded-lg text-pro-text-tertiary hover:text-pro-primary hover:bg-pro-primary-light transition-colors"
                                title="Testi Paylaş"
                              >
                                <Share2 className="h-4 w-4" />
                              </button>
                              {shareOpenId === test.id && (
                                <SharePopover
                                  testToken={test.token}
                                  clientName={test.client?.first_name || ""}
                                  professionalName={profName}
                                  onClose={() => setShareOpenId(null)}
                                />
                              )}
                            </div>
                          )}
                        </div>
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
