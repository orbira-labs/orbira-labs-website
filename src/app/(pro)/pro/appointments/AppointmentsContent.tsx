"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProShell } from "@/components/pro/layout/ProShell";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Badge } from "@/components/pro/ui/Badge";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { Select } from "@/components/pro/ui/Select";
import { Modal } from "@/components/pro/ui/Modal";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Calendar, Plus, Clock } from "lucide-react";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { appointmentSchema, type AppointmentInput } from "@/lib/pro/validations";
import { APPOINTMENT_DURATIONS } from "@/lib/pro/constants";
import { formatDateTime, formatDayLabel } from "@/lib/pro/utils";
import type { Professional, Appointment } from "@/lib/pro/types";
import { clsx } from "clsx";
import { isToday, isFuture, isPast } from "date-fns";

interface Props {
  professional: Professional | null;
  appointments: (Appointment & { client: { first_name: string; last_name: string } | null })[];
  clients: { id: string; first_name: string; last_name: string }[];
}

type Filter = "upcoming" | "past" | "all";

export function AppointmentsContent({ professional, appointments, clients }: Props) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<Filter>("upcoming");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { duration_minutes: 60 },
  });

  const filtered = appointments.filter((a) => {
    const d = new Date(a.starts_at);
    if (filter === "upcoming") return isFuture(d) || isToday(d);
    if (filter === "past") return isPast(d) && !isToday(d);
    return true;
  });

  async function onSubmit(data: AppointmentInput) {
    setSaving(true);
    try {
      const supabase = createSupabase();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase.from("appointments").insert({
        professional_id: user!.id,
        client_id: data.client_id,
        starts_at: new Date(data.starts_at).toISOString(),
        duration_minutes: data.duration_minutes,
        subject: data.subject || null,
        note: data.note || null,
      });

      if (error) {
        toast.error("Randevu oluşturulamadı");
        return;
      }

      toast.success("Randevu oluşturuldu");
      setShowModal(false);
      reset();
      router.refresh();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  }

  return (
    <ProShell professional={professional}>
      <TopBar title="Randevular" professional={professional} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 bg-pro-surface-alt rounded-lg p-1">
            {(["upcoming", "past", "all"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={clsx(
                  "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                  filter === f
                    ? "bg-pro-surface text-pro-text shadow-[var(--pro-shadow-sm)]"
                    : "text-pro-text-secondary"
                )}
              >
                {f === "upcoming" ? "Yaklaşan" : f === "past" ? "Geçmiş" : "Tümü"}
              </button>
            ))}
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="h-4 w-4" /> Randevu Ekle
          </Button>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={Calendar}
            title="Randevu yok"
            description={filter === "upcoming" ? "Yaklaşan randevunuz bulunmuyor" : "Randevu kaydınız bulunmuyor"}
            actionLabel="Randevu Ekle"
            onAction={() => setShowModal(true)}
          />
        ) : (
          <div className="space-y-3">
            {filtered.map((apt) => (
              <Card key={apt.id} padding="sm" hover>
                <div className="flex items-center gap-3">
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
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-pro-text flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {formatDateTime(apt.starts_at)}
                    </p>
                    <Badge
                      variant={
                        apt.status === "completed" ? "success" :
                        apt.status === "cancelled" ? "danger" : "info"
                      }
                    >
                      {apt.status === "scheduled" ? "Planlandı" :
                       apt.status === "completed" ? "Tamamlandı" : "İptal"}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal
          open={showModal}
          onClose={() => { setShowModal(false); reset(); }}
          title="Yeni Randevu"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Select
              label="Danışan"
              placeholder="Danışan seçin"
              options={clients.map((c) => ({
                value: c.id,
                label: `${c.first_name} ${c.last_name}`,
              }))}
              error={errors.client_id?.message}
              {...register("client_id")}
            />
            <Input
              label="Tarih ve Saat"
              type="datetime-local"
              error={errors.starts_at?.message}
              {...register("starts_at")}
            />
            <Select
              label="Süre"
              options={APPOINTMENT_DURATIONS.map((d) => ({
                value: d.value.toString(),
                label: d.label,
              }))}
              {...register("duration_minutes", { valueAsNumber: true })}
            />
            <Input
              label="Konu"
              placeholder="Randevu konusu"
              hint="Opsiyonel"
              {...register("subject")}
            />
            <Input
              label="Not"
              placeholder="Eklemek istediğiniz not"
              hint="Opsiyonel"
              {...register("note")}
            />
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="secondary"
                className="flex-1"
                onClick={() => { setShowModal(false); reset(); }}
              >
                İptal
              </Button>
              <Button type="submit" loading={saving} className="flex-1">
                Oluştur
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </ProShell>
  );
}
