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
import { Modal } from "@/components/pro/ui/Modal";
import { Avatar } from "@/components/pro/ui/Avatar";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { Users, Plus, Search } from "lucide-react";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { clientSchema, type ClientInput } from "@/lib/pro/validations";
import { CLIENT_STATUSES } from "@/lib/pro/constants";
import type { Professional, Client } from "@/lib/pro/types";
import Link from "next/link";

interface ClientsContentProps {
  professional: Professional | null;
  clients: Client[];
}

export function ClientsContent({ professional, clients: initialClients }: ClientsContentProps) {
  const router = useRouter();
  const [clients, setClients] = useState(initialClients);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientInput>({
    resolver: zodResolver(clientSchema),
  });

  const filtered = clients.filter((c) => {
    const matchesSearch =
      `${c.first_name} ${c.last_name}`.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  async function onSubmit(data: ClientInput) {
    setSaving(true);
    try {
      const supabase = createSupabase();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data: newClient, error } = await supabase
        .from("clients")
        .insert({
          professional_id: user!.id,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email || null,
          phone: data.phone || null,
          birth_date: data.birth_date || null,
          gender: data.gender || null,
        })
        .select()
        .single();

      if (error) {
        toast.error("Danışan eklenemedi");
        return;
      }

      setClients((prev) => [newClient, ...prev]);
      setShowModal(false);
      reset();
      toast.success("Danışan eklendi");
      router.refresh();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  }

  return (
    <ProShell professional={professional}>
      <TopBar title="Danışanlar" professional={professional} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pro-text-tertiary" />
            <input
              type="text"
              placeholder="Danışan ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-pro-border bg-pro-surface text-sm text-pro-text placeholder:text-pro-text-tertiary focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-pro-surface-alt rounded-lg p-1">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${statusFilter === "all" ? "bg-pro-surface text-pro-text shadow-[var(--pro-shadow-sm)]" : "text-pro-text-secondary"}`}
              >
                Tümü
              </button>
              {CLIENT_STATUSES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStatusFilter(s.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${statusFilter === s.id ? "bg-pro-surface text-pro-text shadow-[var(--pro-shadow-sm)]" : "text-pro-text-secondary"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <Button onClick={() => setShowModal(true)}>
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Danışan Ekle</span>
            </Button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={Users}
            title={clients.length === 0 ? "Henüz danışan yok" : "Sonuç bulunamadı"}
            description={
              clients.length === 0
                ? "İlk danışanınızı ekleyerek başlayın"
                : "Farklı bir arama veya filtre deneyin"
            }
            actionLabel={clients.length === 0 ? "Danışan Ekle" : undefined}
            onAction={clients.length === 0 ? () => setShowModal(true) : undefined}
          />
        ) : (
          <div className="grid gap-3">
            {filtered.map((client) => {
              const statusInfo = CLIENT_STATUSES.find((s) => s.id === client.status);
              return (
                <Link key={client.id} href={`/pro/clients/${client.id}`}>
                  <Card hover padding="sm">
                    <div className="flex items-center gap-3">
                      <Avatar
                        firstName={client.first_name}
                        lastName={client.last_name}
                        size="md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-pro-text">
                          {client.first_name} {client.last_name}
                        </p>
                        <p className="text-xs text-pro-text-tertiary truncate">
                          {client.email || client.phone || "İletişim bilgisi yok"}
                        </p>
                      </div>
                      <Badge
                        variant={statusInfo?.color as "success" | "warning" | "muted" || "muted"}
                        dot
                      >
                        {statusInfo?.label || client.status}
                      </Badge>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        <Modal
          open={showModal}
          onClose={() => { setShowModal(false); reset(); }}
          title="Yeni Danışan"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Ad"
                placeholder="Adı"
                error={errors.first_name?.message}
                {...register("first_name")}
              />
              <Input
                label="Soyad"
                placeholder="Soyadı"
                error={errors.last_name?.message}
                {...register("last_name")}
              />
            </div>
            <Input
              label="Email"
              type="email"
              placeholder="ornek@email.com"
              hint="Test linki göndermek için"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Telefon"
              type="tel"
              placeholder="0532 XXX XX XX"
              hint="WhatsApp ile göndermek için"
              {...register("phone")}
            />
            <Input
              label="Doğum Tarihi"
              type="date"
              hint="Opsiyonel"
              {...register("birth_date")}
            />

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => { setShowModal(false); reset(); }}
                className="flex-1"
              >
                İptal
              </Button>
              <Button type="submit" loading={saving} className="flex-1">
                Kaydet
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </ProShell>
  );
}
