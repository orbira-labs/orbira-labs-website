"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Modal } from "@/components/pro/ui/Modal";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { Select } from "@/components/pro/ui/Select";
import { useClients } from "@/lib/pro/hooks/useClients";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { APPOINTMENT_DURATIONS } from "@/lib/pro/constants";
import { UserPlus, Users } from "lucide-react";
import { clsx } from "clsx";

interface AppointmentInput {
  client_id?: string;
  new_first_name?: string;
  new_last_name?: string;
  starts_at: string;
  duration_minutes: number;
  subject?: string;
  note?: string;
}

interface CreateAppointmentModalProps {
  open: boolean;
  onClose: () => void;
  onCreated?: () => void;
}

export function CreateAppointmentModal({ open, onClose, onCreated }: CreateAppointmentModalProps) {
  const { clients, refresh: refreshClients } = useClients();
  const [saving, setSaving] = useState(false);
  const [clientMode, setClientMode] = useState<"existing" | "new">("existing");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentInput>({
    defaultValues: { duration_minutes: 60 },
  });

  useEffect(() => {
    if (!open) {
      reset();
      setClientMode("existing");
    }
  }, [open, reset]);

  async function onSubmit(data: AppointmentInput) {
    setSaving(true);
    try {
      const supabase = createSupabase();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast.error("Oturum hatası");
        return;
      }

      let clientId = data.client_id;

      if (clientMode === "new") {
        if (!data.new_first_name?.trim() || !data.new_last_name?.trim()) {
          toast.error("Ad ve soyad gerekli");
          setSaving(false);
          return;
        }

        const { data: newClient, error: clientError } = await supabase
          .from("clients")
          .insert({
            professional_id: user.id,
            first_name: data.new_first_name.trim(),
            last_name: data.new_last_name.trim(),
          })
          .select()
          .single();

        if (clientError) {
          toast.error("Danışan oluşturulamadı");
          setSaving(false);
          return;
        }

        clientId = newClient.id;
        refreshClients();
      }

      if (!clientId) {
        toast.error("Danışan seçin");
        setSaving(false);
        return;
      }

      const { error } = await supabase.from("appointments").insert({
        professional_id: user.id,
        client_id: clientId,
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
      onClose();
      onCreated?.();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Yeni Randevu" size="md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Client Mode Toggle */}
        <div className="flex gap-2 p-1 bg-pro-surface-alt rounded-lg">
          <button
            type="button"
            onClick={() => setClientMode("existing")}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
              clientMode === "existing"
                ? "bg-white text-pro-text shadow-sm"
                : "text-pro-text-secondary hover:text-pro-text"
            )}
          >
            <Users className="h-4 w-4" />
            Mevcut Danışan
          </button>
          <button
            type="button"
            onClick={() => setClientMode("new")}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
              clientMode === "new"
                ? "bg-white text-pro-text shadow-sm"
                : "text-pro-text-secondary hover:text-pro-text"
            )}
          >
            <UserPlus className="h-4 w-4" />
            Yeni Danışan
          </button>
        </div>

        {/* Client Selection or New Client Form */}
        {clientMode === "existing" ? (
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
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Ad"
              placeholder="Danışan adı"
              {...register("new_first_name")}
            />
            <Input
              label="Soyad"
              placeholder="Danışan soyadı"
              {...register("new_last_name")}
            />
          </div>
        )}

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
            onClick={onClose}
          >
            İptal
          </Button>
          <Button type="submit" loading={saving} className="flex-1">
            Oluştur
          </Button>
        </div>
      </form>
    </Modal>
  );
}
