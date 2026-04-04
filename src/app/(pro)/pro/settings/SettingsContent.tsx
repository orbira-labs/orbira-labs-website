"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ProShell } from "@/components/pro/layout/ProShell";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { SPECIALIZATIONS } from "@/lib/pro/constants";
import type { Professional } from "@/lib/pro/types";
import { clsx } from "clsx";

interface Props {
  professional: Professional | null;
}

export function SettingsContent({ professional }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [firstName, setFirstName] = useState(professional?.first_name || "");
  const [lastName, setLastName] = useState(professional?.last_name || "");
  const [phone, setPhone] = useState(professional?.phone || "");
  const [city, setCity] = useState(professional?.city || "");
  const [district, setDistrict] = useState(professional?.district || "");
  const [specs, setSpecs] = useState<string[]>(professional?.specializations || []);

  async function handleSave() {
    setSaving(true);
    try {
      const supabase = createSupabase();
      const { error } = await supabase
        .from("professionals")
        .update({
          first_name: firstName,
          last_name: lastName,
          phone: phone || null,
          city,
          district,
          specializations: specs,
        })
        .eq("id", professional!.id);

      if (error) {
        toast.error("Profil güncellenemedi");
        return;
      }

      toast.success("Profil güncellendi");
      router.refresh();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteAccount() {
    if (!confirm("Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) return;
    toast.info("Hesap silme işlemi için destek ile iletişime geçin: info@orbiralabs.com");
  }

  return (
    <ProShell professional={professional}>
      <TopBar title="Ayarlar" professional={professional} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-2xl">
        <Card padding="lg">
          <h2 className="text-base font-semibold text-pro-text mb-4">
            Profil Bilgileri
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Ad"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="Soyad"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <Input
              label="Telefon"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="İl"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                label="İlçe"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-pro-text">
                Uzmanlık Alanları
              </label>
              <div className="flex flex-wrap gap-2">
                {SPECIALIZATIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSpecs((prev) =>
                        prev.includes(s.id)
                          ? prev.filter((x) => x !== s.id)
                          : [...prev, s.id]
                      );
                    }}
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm transition-colors",
                      specs.includes(s.id)
                        ? "bg-pro-primary text-white"
                        : "bg-pro-surface-alt text-pro-text-secondary hover:bg-pro-border"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <Button onClick={handleSave} loading={saving}>
              Kaydet
            </Button>
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-base font-semibold text-pro-text mb-2">
            Hesap
          </h2>
          <p className="text-sm text-pro-text-secondary mb-4">
            {professional?.email}
          </p>
          <div className="pt-4 border-t border-pro-border">
            <Button variant="danger" size="sm" onClick={handleDeleteAccount}>
              Hesabı Sil
            </Button>
            <p className="text-xs text-pro-text-tertiary mt-2">
              KVKK kapsamında hesabınızı ve tüm verilerinizi kalıcı olarak silebilirsiniz.
            </p>
          </div>
        </Card>
      </main>
    </ProShell>
  );
}
