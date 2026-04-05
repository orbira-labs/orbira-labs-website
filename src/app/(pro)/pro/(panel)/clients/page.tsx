"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useProContext } from "@/lib/pro/context";
import { useClients } from "@/lib/pro/hooks/useClients";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { Modal } from "@/components/pro/ui/Modal";
import { EmptyState } from "@/components/pro/ui/EmptyState";
import { ListItemSkeleton } from "@/components/pro/ui/Skeleton";
import { ClientCard, ClientFilters, type FilterType } from "@/components/pro/clients";
import { Users, Plus, Search, LayoutGrid, LayoutList } from "lucide-react";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { clientSchema, type ClientInput } from "@/lib/pro/validations";
import { staggerContainer, cardReveal } from "@/lib/pro/animations";
import Link from "next/link";

export default function ClientsPage() {
  const router = useRouter();
  const { professional } = useProContext();
  const { clients, setClients, loading } = useClients();
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [extendedFilters, setExtendedFilters] = useState<FilterType[]>([]);
  const [showExtendedFilters, setShowExtendedFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"card" | "row">("row");
  const [saving, setSaving] = useState(false);

  const toggleExtendedFilter = (filter: FilterType) => {
    setExtendedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

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
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <TopBar title="Danışanlar" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pro-text-tertiary" />
                <input
                  type="text"
                  placeholder="Danışan ara..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-pro-border bg-pro-surface text-sm text-pro-text placeholder:text-pro-text-tertiary focus:outline-none focus:ring-2 focus:ring-pro-primary/30 focus:border-pro-primary transition-shadow"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex gap-1 bg-pro-surface-alt rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("row")}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === "row" ? "bg-pro-surface text-pro-text shadow-[var(--pro-shadow-sm)]" : "text-pro-text-tertiary hover:text-pro-text"}`}
                    title="Liste görünümü"
                  >
                    <LayoutList className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("card")}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === "card" ? "bg-pro-surface text-pro-text shadow-[var(--pro-shadow-sm)]" : "text-pro-text-tertiary hover:text-pro-text"}`}
                    title="Kart görünümü"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>

                <Button onClick={() => setShowModal(true)}>
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">Danışan Ekle</span>
                </Button>
              </div>
            </div>

            <ClientFilters
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              extendedFilters={extendedFilters}
              onExtendedFilterToggle={toggleExtendedFilter}
              showExtended={showExtendedFilters}
              onToggleExtended={() => setShowExtendedFilters(!showExtendedFilters)}
            />
          </div>

          {loading ? (
            <div className={viewMode === "card" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" : "grid gap-3"}>
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} padding="sm">
                  <ListItemSkeleton />
                </Card>
              ))}
            </div>
          ) : filtered.length === 0 ? (
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
            <motion.div 
              className={viewMode === "card" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" : "grid gap-3"}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((client) => (
                <motion.div key={client.id} variants={cardReveal}>
                  <ClientCard
                    client={client}
                    viewMode={viewMode}
                    lastContactAt={client.updated_at}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

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
              hint="Analiz linki göndermek için"
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
    </>
  );
}
