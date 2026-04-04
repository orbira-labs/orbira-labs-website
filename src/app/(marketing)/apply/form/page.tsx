"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

type ProjectType = "website" | "mobile" | "both" | null;

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: ProjectType;
  business: string;
  details: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function BasvuruFormPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "0",
    email: "",
    projectType: null,
    business: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Bu alan zorunludur";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length <= 1) {
      newErrors.phone = "Bu alan zorunludur";
    } else if (phoneDigits.length < 11) {
      newErrors.phone = "Telefon numarası 11 haneli olmalıdır";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Lütfen bir seçim yapın";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitErrorMessage(null);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          projectType: formData.projectType,
          business: formData.business,
          details: formData.details,
        }),
      });

      const data: { error?: string } = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(true);
        setSubmitErrorMessage(
          typeof data.error === "string" && data.error
            ? data.error
            : "Gönderilemedi, lütfen tekrar deneyin."
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(true);
      setSubmitErrorMessage(
        "Bağlantı hatası. İnternetinizi kontrol edip tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      const withPrefix = digits.startsWith("0") ? digits : "0" + digits;
      const limited = withPrefix.slice(0, 11);
      let formatted = limited;
      if (limited.length > 4) {
        formatted = limited.slice(0, 4) + " " + limited.slice(4);
      }
      if (limited.length > 7) {
        formatted = limited.slice(0, 4) + " " + limited.slice(4, 7) + " " + limited.slice(7);
      }
      if (limited.length > 9) {
        formatted =
          limited.slice(0, 4) + " " + limited.slice(4, 7) + " " + limited.slice(7, 9) + " " + limited.slice(9);
      }
      setFormData((prev) => ({ ...prev, phone: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleProjectTypeSelect = (type: ProjectType) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
    if (errors.projectType) {
      setErrors((prev) => ({ ...prev, projectType: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/10 flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h1 className="text-3xl font-semibold text-foreground mb-4">
            Teşekkürler
          </h1>

          <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
            Başvurunuz başarıyla iletildi.
            <br />
            <span className="text-foreground-subtle text-base">
              En kısa sürede sizinle iletişime geçeceğiz.
            </span>
          </p>

          <Link href="/">
            <Button variant="secondary">
              Ana Sayfaya Dön
            </Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl font-semibold text-foreground">Orbira</span>
              <span className="text-xl font-semibold text-foreground-muted">Labs</span>
            </Link>
            <Link
              href="/apply"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              Geri
            </Link>
          </div>
        </Container>
      </header>

      {/* Form */}
      <section className="relative z-10 pt-28 md:pt-36 pb-16">
        <Container>
          <div className="max-w-md md:max-w-3xl mx-auto">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 md:mb-14"
            >
              <h1 className="text-2xl md:text-4xl font-semibold text-foreground mb-3">
                Başvuru Formu
              </h1>
              <p className="text-foreground-muted md:text-lg">
                Bilgilerinizi doldurun, size ulaşalım.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-12"
              initial="initial"
              animate="animate"
            >
              {/* İletişim */}
              <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
                <div className="pb-2 mb-5">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    İletişim Bilgileri
                  </h2>
                  <div className="mt-2 h-px bg-gradient-to-r from-brand-primary/40 to-transparent" />
                </div>

                <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      Ad Soyad <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Adınız ve soyadınız"
                      className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all ${
                        errors.fullName ? "border-red-400/50" : "border-border"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0___ ___ __ __"
                      className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all ${
                        errors.phone ? "border-red-400/50" : "border-border"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <div className="md:col-span-2 md:max-w-[calc(50%-10px)]">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta <span className="text-foreground-subtle font-normal">(isteğe bağlı)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-posta adresiniz"
                      className="w-full px-4 py-3.5 bg-white/5 border border-border rounded-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Proje */}
              <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                <div className="pb-2 mb-5">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    Proje Detayları
                  </h2>
                  <div className="mt-2 h-px bg-gradient-to-r from-brand-primary/40 to-transparent" />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="flex-1 mb-5 lg:mb-0">
                      <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                        İşletmeniz
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        placeholder="İşletme türünüz veya sektörünüz"
                        className="w-full px-4 py-3.5 bg-white/5 border border-border rounded-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Proje Türü <span className="text-red-400">*</span>
                      </label>
                      <div className="flex flex-row flex-wrap gap-2">
                        {[
                          { id: "website", label: "Web Sitesi" },
                          { id: "mobile", label: "Mobil Uygulama" },
                          { id: "both", label: "Her İkisi" },
                        ].map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleProjectTypeSelect(option.id as ProjectType)}
                            className="flex items-center gap-2 px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl border border-border bg-white/5 text-left transition-all hover:border-border-hover"
                          >
                            <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                              formData.projectType === option.id
                                ? "border-brand-primary bg-brand-primary"
                                : "border-foreground-subtle"
                            }`}>
                              {formData.projectType === option.id && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-sm font-medium ${
                              formData.projectType === option.id ? "text-foreground" : "text-foreground-muted"
                            }`}>
                              {option.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      {errors.projectType && (
                        <p className="text-red-400 text-xs mt-2">{errors.projectType}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-foreground mb-2">
                      Detaylar
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Projeniz hakkında detay verin"
                      className="w-full px-4 py-3.5 bg-white/5 border border-border rounded-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }} className="pt-4 max-w-md mx-auto">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 px-8 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium rounded-xl hover:shadow-lg hover:shadow-brand-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                </motion.button>

                {submitError && (
                  <p className="text-center text-red-400 text-sm mt-4 max-w-md mx-auto">
                    {submitErrorMessage ??
                      "Bir hata oluştu, lütfen tekrar deneyin."}
                  </p>
                )}

                <p className="text-center text-foreground-subtle text-sm mt-4">
                  Başvurunuz bize otomatik olarak iletilecektir.
                </p>
              </motion.div>
            </motion.form>
          </div>
        </Container>
      </section>
    </main>
  );
}
