"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useProContext } from "@/lib/pro/context";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import { Button } from "@/components/pro/ui/Button";
import { Input } from "@/components/pro/ui/Input";
import { Skeleton } from "@/components/pro/ui/Skeleton";
import { createClient as createSupabase } from "@/lib/pro/supabase/client";
import { SPECIALIZATIONS } from "@/lib/pro/constants";
import { clsx } from "clsx";

export default function SettingsPage() {
  const { professional, loading, refreshProfile } = useProContext();

  const [saving, setSaving] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [specs, setSpecs] = useState<string[]>([]);

  useEffect(() => {
    if (professional) {
      setFirstName(professional.first_name || "");
      setLastName(professional.last_name || "");
      setPhone(professional.phone || "");
      setCity(professional.city || "");
      setDistrict(professional.district || "");
      setSpecs(professional.specializations || []);
    }
  }, [professional]);

  async function handleSave() {
    if (!professional) return;
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
        .eq("id", professional.id);

      if (error) {
        toast.error("Profil güncellenemedi");
        return;
      }

      toast.success("Profil güncellendi");
      refreshProfile();
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
    <>
      <TopBar title="Ayarlar" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-2xl space-y-6">
          {loading ? (
            <>
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-40 w-full" />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </main>
    </>
  );
}
