"use client";

import { useState } from "react";
import { isToday, isFuture, isPast } from "date-fns";
import { useAppointments } from "@/lib/pro/hooks/useAppointments";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Skeleton } from "@/components/pro/ui/Skeleton";
import { CreateAppointmentModal } from "@/components/pro/appointments";
import { Calendar, Plus, Clock } from "lucide-react";
import { formatDateTime } from "@/lib/pro/utils";
import { clsx } from "clsx";

type Filter = "upcoming" | "past" | "all";

export default function AppointmentsPage() {
  const { appointments, loading, refresh } = useAppointments();
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<Filter>("upcoming");

  const filtered = appointments.filter((a) => {
    const d = new Date(a.starts_at);
    if (filter === "upcoming") return isFuture(d) || isToday(d);
    if (filter === "past") return isPast(d) && !isToday(d);
    return true;
  });

  return (
    <>
      <TopBar title="Randevular" />
      <CreateAppointmentModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onCreated={refresh}
      />
      <main className="flex-1 p-3 sm:p-5 lg:p-6">
        <div className="mx-auto max-w-6xl">
          {/* Main Container - like Ofisim */}
          <div className="bg-gradient-to-br from-[#5B7B6A]/20 to-[#5B7B6A]/8 rounded-2xl p-4 sm:p-5">
            <Card padding="lg" variant="elevated">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <h2 className="font-semibold text-pro-text flex items-center gap-2">
                    <span className="h-4 w-0.5 rounded-full bg-pro-primary" />
                    Randevular
                  </h2>
                  <div className="flex gap-1 bg-pro-surface-alt rounded-lg p-1">
                    {(["upcoming", "past", "all"] as Filter[]).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={clsx(
                          "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                          filter === f
                            ? "bg-pro-surface text-pro-text shadow-sm"
                            : "text-pro-text-secondary hover:text-pro-text"
                        )}
                      >
                        {f === "upcoming" ? "Yaklaşan" : f === "past" ? "Geçmiş" : "Tümü"}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pro-primary hover:bg-pro-primary-hover text-white text-sm font-medium transition-all shadow-sm hover:shadow-md"
                >
                  <Plus className="h-4 w-4" />
                  Randevu Ekle
                </button>
              </div>

              {/* Content */}
              {loading ? (
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-pro-surface-alt">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                      <Skeleton className="h-6 w-20" />
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <EmptyState
                  icon={Calendar}
                  title="Randevu yok"
                  description={filter === "upcoming" ? "Yaklaşan randevunuz bulunmuyor" : "Randevu kaydınız bulunmuyor"}
                  actionLabel="Randevu Ekle"
                  onAction={() => setShowModal(true)}
                />
              ) : (
                <div className="space-y-2">
                  {filtered.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-pro-surface-alt hover:bg-pro-surface-alt/80 transition-colors"
                    >
                      <Avatar
                        firstName={apt.client?.first_name || "?"}
                        lastName={apt.client?.last_name || ""}
                        size="sm"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-pro-text">
                          {apt.client?.first_name} {apt.client?.last_name}
                        </p>
                        <p className="text-xs text-pro-text-tertiary">
                          {apt.subject || "Randevu"} · {apt.duration_minutes} dk
                        </p>
                      </div>
                      <div className="text-right shrink-0 flex items-center gap-3">
                        <div>
                          <p className="text-sm font-medium text-pro-text flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {formatDateTime(apt.starts_at)}
                          </p>
                        </div>
                        <Badge
                          variant={
                            apt.status === "completed" ? "success" :
                            apt.status === "cancelled" ? "danger" : "info"
                          }
                          size="sm"
                        >
                          {apt.status === "scheduled" ? "Planlandı" :
                           apt.status === "completed" ? "Tamamlandı" : "İptal"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
