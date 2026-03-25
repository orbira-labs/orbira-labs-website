"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Badge, Button, OrbitalBackground } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

const APP_STORE_URL =
  "https://apps.apple.com/tr/app/kasabende/id6760184473?l=tr";

const FEATURES = [
  {
    icon: "💰",
    title: "Kasa Takibi",
    description:
      "TRY, USD, EUR, GBP ve RUB para birimleriyle anlık kasa durumunuzu görüntüleyin.",
    color: "emerald",
  },
  {
    icon: "📊",
    title: "Alacak & Verecek",
    description:
      "Firma bazlı borç ve alacak kayıtlarınızı detaylı şekilde takip edin.",
    color: "blue",
  },
  {
    icon: "💳",
    title: "Tahsilat & Ödeme",
    description:
      "Nakit, havale veya kredi kartı ile tüm işlemlerinizi kayıt altına alın.",
    color: "violet",
  },
  {
    icon: "🔄",
    title: "Döviz İşlemleri",
    description:
      "Para birimleri arası dönüşüm yapın, her işlem izlenebilir şekilde kayıt altında.",
    color: "amber",
  },
  {
    icon: "📅",
    title: "Gün Sonu Sayımı",
    description:
      "Her gün sonunda kasanızı sayın, sistem ile karşılaştırın ve farklılıkları görün.",
    color: "cyan",
  },
  {
    icon: "📱",
    title: "Offline Çalışma",
    description:
      "İnternet olmadan da çalışın, bağlantı geldiğinde otomatik senkronize edin.",
    color: "rose",
  },
];

const PRO_FEATURES = [
  {
    icon: "🏢",
    title: "Sınırsız İşletme",
    description: "Birden fazla işletme ekleyin ve hepsini tek hesaptan yönetin.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: "👥",
    title: "Kullanıcı Daveti",
    description:
      "Ekibinizi davet edin, yetkileri belirleyin, birlikte çalışın.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "📋",
    title: "İşlem Geçmişi",
    description:
      "Tüm düzenleme, iptal ve alarm kayıtlarına detaylı erişim sağlayın.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "🪪",
    title: "Personel Yönetimi",
    description:
      "Personel bilgilerini kaydedin, maaş geçmişini takip edin, profesyonel yönetin.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: "🤖",
    title: "AI Analiz",
    description:
      "Yapay zeka ile işletme analizi, gelir tahminleri ve akıllı öneriler.",
    comingSoon: true,
    color: "from-violet-500 to-purple-500",
  },
];

const FREE_VS_PRO = [
  { feature: "Günlük işlem girişi", free: "Sınırsız", pro: "Sınırsız" },
  { feature: "Kasa takibi & dashboard", free: "Tam", pro: "Tam" },
  { feature: "Firma yönetimi", free: "Tam", pro: "Tam" },
  { feature: "Offline çalışma", free: "Tam", pro: "Tam" },
  { feature: "İşletme sayısı", free: "1", pro: "Sınırsız" },
  { feature: "Kullanıcı daveti", free: "—", pro: "Sınırsız" },
  { feature: "İşlem geçmişi", free: "—", pro: "Tam erişim" },
  { feature: "Personel yönetimi", free: "Temel", pro: "Detaylı" },
  { feature: "AI analiz", free: "—", pro: "Yakında" },
];

const BUSINESS_TYPES = [
  "Market",
  "Süpermarket",
  "Bakkal",
  "Kasap",
  "Manav",
  "Eczane",
  "Kırtasiye",
  "Restoran",
  "Kafe",
  "Kuaför",
  "Berber",
  "Otopark",
  "Benzinlik",
];

const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Hesap Oluştur",
    description: "Google veya Apple ile hızlıca giriş yapın.",
  },
  {
    step: "02",
    title: "İşletme Bilgileri",
    description: "İşletme adı, türü ve konumunu belirleyin.",
  },
  {
    step: "03",
    title: "Ekibinizi Davet Edin",
    description: "6 haneli kod veya QR ile ekibinizi ekleyin.",
  },
  {
    step: "04",
    title: "Kullanmaya Başlayın",
    description: "İlk işleminizi girin ve kasanızı yönetin.",
  },
];

const REVIEWS = [
  {
    name: "Nurjin",
    text: "Hem tasarım hem kullanım açısından gerçekten başarılı, kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "RüzgarStore",
    text: "İşletmemde kullanmak için tam hayalini kurduğum uygulamayı yapmışlar! İnanılmaz işime yaradı.",
    rating: 5,
  },
  {
    name: "Restoran Sahibi",
    text: "Küçük ve orta ölçekli esnaf için çok güzel bir uygulama. Gelir gider gün sonu rahatça kayıt altına alınabiliyor.",
    rating: 5,
  },
];

const STATS = [
  { value: "5.0", label: "App Store Puan" },
  { value: "5+", label: "Para Birimi" },
  { value: "7/24", label: "Offline Erişim" },
  { value: "0₺", label: "1 Yıl Ücretsiz" },
];

function StoreBadge({
  store,
  href,
  className,
}: {
  store: "apple" | "google";
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.1] transition-all duration-300 ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {store === "apple" ? (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] sm:text-xs text-foreground-muted leading-tight">
          {store === "apple" ? "App Store'dan" : "Google Play'den"}
        </div>
        <div className="text-sm sm:text-base font-semibold text-foreground">İndirin</div>
      </div>
    </motion.a>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function KasaBendePage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 overflow-hidden">
        {/* ────────────── HERO ────────────── */}
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center py-8 sm:py-0">
          <OrbitalBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/20">
                    <Image
                      src="/images/kasabende-icon.png"
                      alt="KasaBende"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      KasaBende
                    </h1>
                    <Badge status="live" className="mt-1.5 sm:mt-2" />
                  </div>
                </div>

                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
                  Kasanız Artık Güvende
                </p>

                <p className="text-base sm:text-lg text-foreground-muted mb-6 sm:mb-8 leading-relaxed max-w-xl">
                  Küçük ve orta ölçekli işletmeler için modern kasa ve operasyon
                  yönetimi. Personel takibinden döviz işlemlerine, tüm
                  ihtiyaçlarınız tek uygulamada.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <StoreBadge store="apple" href={APP_STORE_URL} />
                  <StoreBadge store="google" href="#" />
                </div>

                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-400 font-medium">
                    1 Yıl Ücretsiz
                  </div>
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-foreground-muted">
                    iOS & Android
                  </div>
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-400 flex items-center gap-1.5">
                    <span className="font-semibold">5.0</span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    App Store
                  </div>
                </div>
              </motion.div>

              {/* Phone Mockups */}
              <motion.div
                className="relative flex items-center justify-center mt-4 lg:mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="relative z-0 -mr-6 sm:-mr-8"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-[100px] h-[200px] sm:w-[140px] sm:h-[280px] lg:w-[180px] lg:h-[360px] rounded-[1.25rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1 sm:p-1.5 shadow-xl opacity-60">
                      <div className="w-full h-full rounded-[1rem] sm:rounded-[1.75rem] bg-zinc-950 overflow-hidden relative">
                        <Image src="/images/kasabende-firms.png" alt="KasaBende Firmalar" fill className="object-cover" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative z-20"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-[150px] h-[300px] sm:w-[220px] sm:h-[440px] lg:w-[280px] lg:h-[560px] rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-zinc-600 to-zinc-900 p-1.5 sm:p-2 shadow-2xl shadow-emerald-500/10">
                      <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.25rem] bg-zinc-950 overflow-hidden relative">
                        <Image src="/images/kasabende-overview.png" alt="KasaBende Özet" fill className="object-cover" priority />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative z-10 -ml-6 sm:-ml-8"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="w-[100px] h-[200px] sm:w-[140px] sm:h-[280px] lg:w-[180px] lg:h-[360px] rounded-[1.25rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1 sm:p-1.5 shadow-xl opacity-60">
                      <div className="w-full h-full rounded-[1rem] sm:rounded-[1.75rem] bg-zinc-950 overflow-hidden relative">
                        <Image src="/images/kasabende-cash.png" alt="KasaBende Kasa" fill className="object-cover" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl flex items-center justify-center text-xl sm:text-3xl"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  💰
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center text-lg sm:text-2xl"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  📊
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* ────────────── STATS BAR ────────────── */}
        <section className="relative py-6 sm:py-8 border-y border-white/5">
          <Container>
            <div className="grid grid-cols-4 gap-2 sm:gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="text-xl sm:text-3xl font-bold text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-sm text-foreground-muted mt-0.5 sm:mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ────────────── FEATURES ────────────── */}
        <section className="section-padding relative" id="features">
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 sm:mb-6">
                Özellikler
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                İşletmeniz için{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  her şey bir arada
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Kasa takibinden tahsilat yönetimine, tüm finansal
                operasyonlarınızı tek bir uygulamadan yönetin.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] sm:text-base text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ────────────── PRO SECTION ────────────── */}
        <section className="section-padding relative overflow-hidden" id="pro">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] via-transparent to-violet-500/[0.03] pointer-events-none" />
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 sm:mb-6">
                KasaBende Pro
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                İşletmenizi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  bir üst seviyeye
                </span>{" "}
                taşıyın
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Temel kasa işlemleri ücretsiz. İşiniz büyüdüğünde Pro ile
                sınırları kaldırın.
              </p>
            </motion.div>

            {/* Pro feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {PRO_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-sm sm:text-lg font-semibold text-foreground truncate">
                          {feature.title}
                        </h3>
                        {feature.comingSoon && (
                          <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-gradient-to-r from-violet-500 to-purple-500 text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider">
                            Yakında
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-sm text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Free vs Pro table */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-3 bg-white/[0.06] px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                  <div className="text-xs sm:text-sm font-semibold text-foreground-muted">
                    Özellik
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground-muted text-center">
                    Free
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-amber-400 text-center">
                    Pro
                  </div>
                </div>
                {FREE_VS_PRO.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 px-4 sm:px-6 py-2.5 sm:py-3 ${
                      i < FREE_VS_PRO.length - 1
                        ? "border-b border-white/5"
                        : ""
                    } ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <div className="text-[11px] sm:text-sm text-foreground-muted">
                      {row.feature}
                    </div>
                    <div className="text-[11px] sm:text-sm text-foreground-subtle text-center">
                      {row.free === "—" ? (
                        <span className="text-white/20">—</span>
                      ) : (
                        row.free
                      )}
                    </div>
                    <div className="text-[11px] sm:text-sm text-emerald-400 text-center font-medium">
                      {row.pro}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-foreground-muted text-xs sm:text-sm mb-3 sm:mb-4">
                  2027&apos;ye kadar tüm özellikler ücretsiz
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-foreground-subtle text-[10px] sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    Güvenli Ödeme
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    İstediğin Zaman İptal
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    App Store Güvencesi
                  </span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* ────────────── BUSINESS MODES ────────────── */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent">
          <Container>
            <motion.div
              className="text-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 sm:mb-6">
                İş Modelleri
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Perakende mi, Toptancı mı?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Size uygun mod
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                İşletme türünüze göre özelleştirilmiş deneyim.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
              <motion.div
                className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    🏪
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Perakende Modu
                  </h3>
                </div>
                <p className="text-foreground-muted text-xs sm:text-sm pl-[52px]">
                  Günlük satış, akşam kasa sayımı. Hareketler sabah
                  05:00&apos;te kasaya yansır.
                </p>
              </motion.div>

              <motion.div
                className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    🏭
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Toptancı Modu
                  </h3>
                </div>
                <p className="text-foreground-muted text-xs sm:text-sm pl-[52px]">
                  Firmalara satış, tahsilat takibi. Sistem günü otomatik
                  kapatır.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
                <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  Desteklenen İşletme Türleri
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                  {BUSINESS_TYPES.map((type) => (
                    <span
                      key={type}
                      className="px-2 sm:px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-sm text-foreground-muted hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default text-center"
                    >
                      {type}
                    </span>
                  ))}
                  <span className="px-2 sm:px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] sm:text-sm text-emerald-400 text-center">
                    + Daha fazlası
                  </span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* ────────────── SCREENSHOTS ────────────── */}
        <section className="section-padding relative overflow-hidden">
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4 sm:mb-6">
                Uygulama
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Modern ve{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  kullanımı kolay
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Sezgisel arayüz ile saniyeler içinde işlem girin, anında
                raporlara erişin.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { src: "/images/kasabende-overview.png", title: "Günlük Özet", desc: "Tüm bakiyeler tek bakışta" },
                { src: "/images/kasabende-firms.png", title: "Firma Rehberi", desc: "Alacak-verecek takibi" },
                { src: "/images/kasabende-cash.png", title: "Kasa Durumu", desc: "Çoklu para birimi desteği" },
                { src: "/images/kasabende-staff.png", title: "Ekip Yönetimi", desc: "Kullanıcı davet ve yetkilendirme" },
              ].map((screen, index) => (
                <motion.div
                  key={screen.title}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[9/19] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-700 to-zinc-900 p-0.5 sm:p-1 mb-3 sm:mb-4 group-hover:shadow-xl group-hover:shadow-emerald-500/10 transition-shadow duration-300">
                    <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-zinc-950 overflow-hidden relative">
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                    {screen.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-foreground-muted">
                    {screen.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ────────────── REVIEWS ────────────── */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-background-secondary to-transparent">
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 sm:mb-6">
                Kullanıcı Yorumları
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Kullanıcılarımız{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  ne diyor?
                </span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {REVIEWS.map((review, index) => (
                <motion.div
                  key={review.name}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StarRating rating={review.rating} />
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mt-3 sm:mt-4 mb-4 sm:mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-foreground">
                        {review.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-foreground-subtle">
                        App Store
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ────────────── ONBOARDING ────────────── */}
        <section className="section-padding relative" id="onboarding">
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 sm:mb-6">
                Başlangıç
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Dakikalar içinde{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  hazır olun
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {ONBOARDING_STEPS.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-5xl font-bold text-emerald-500/20 mb-2 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted text-[11px] sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {index < ONBOARDING_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* ────────────── CTA / DOWNLOAD ────────────── */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div
              className="relative p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 text-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mx-auto mb-4 sm:mb-6 shadow-lg shadow-emerald-500/20">
                  <Image
                    src="/images/kasabende-icon.png"
                    alt="KasaBende"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Kasanızı Güvene Alın
                </h2>

                <p className="text-sm sm:text-lg text-foreground-muted mb-6 sm:mb-8 max-w-lg mx-auto">
                  Şimdi indirin, ücretsiz kullanmaya başlayın.
                  İşletmenizi modern araçlarla yönetin.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <StoreBadge store="apple" href={APP_STORE_URL} />
                  <StoreBadge store="google" href="#" />
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                  <p className="text-xs sm:text-sm text-foreground-subtle mb-3">
                    veya QR kodu telefonunuzla okutun
                  </p>
                  <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(APP_STORE_URL)}&bgcolor=FFFFFF&color=000000&margin=0`}
                      alt="KasaBende App Store QR Kodu"
                      width={120}
                      height={120}
                      className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                    />
                  </div>
                </div>

                <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-foreground-subtle">
                  Powered by{" "}
                  <Link href="/" className="text-foreground-muted hover:text-foreground transition-colors">
                    Orbira Labs
                  </Link>
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back to home */}
        <section className="pb-12 sm:pb-20">
          <Container>
            <div className="flex justify-center">
              <Link
                href="/"
                className="text-brand-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana sayfaya dön
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
