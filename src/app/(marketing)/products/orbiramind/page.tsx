"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Button, AtomAnimation, QuestionPulseAnimation, HAELogo, AQELogo } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

type FeatureIconKey =
  | "clients"
  | "calendar"
  | "analysis"
  | "engines"
  | "notes"
  | "reports";

type FeatureCard = {
  eyebrow: string;
  title: string;
  hook: string;
  description: string;
  comingSoon?: boolean;
  icon: FeatureIconKey;
  iconTone: string;
  borderTone: string;
  backgroundTone: string;
};

const FEATURES: FeatureCard[] = [
  {
    eyebrow: "Merkezi Yönetim",
    title: "Danışan Yönetimi",
    hook: "Tüm danışanlarınız tek bir yerden, düzenli ve erişilebilir.",
    description:
      "Danışan bilgilerini, iletişim geçmişini ve analiz kayıtlarını kolayca yönetin. Aktif ve pasif danışan ayrımı, hızlı arama ve filtreleme özellikleriyle her şey parmaklarınızın ucunda.",
    icon: "clients",
    iconTone: "text-[#5B7B6A]",
    borderTone: "border-[#5B7B6A]/25 hover:border-[#5B7B6A]/45",
    backgroundTone: "from-[#5B7B6A]/14 via-[#3D5A4C]/8 to-transparent",
  },
  {
    eyebrow: "Akıllı Planlama",
    title: "Randevu Takvimi",
    hook: "Takvim ve liste görünümüyle randevularınızı kolayca planlayın.",
    description:
      "Aylık takvim görünümü veya liste modunda tüm randevularınızı görün. Yeni randevu ekleyin, mevcut randevuları düzenleyin veya iptal edin. Planlandı, Tamamlandı ve İptal durumlarıyla her şeyi takip edin.",
    icon: "calendar",
    iconTone: "text-[#7B68EE]",
    borderTone: "border-[#7B68EE]/20 hover:border-[#7B68EE]/40",
    backgroundTone: "from-[#7B68EE]/12 via-[#7B68EE]/6 to-transparent",
  },
  {
    eyebrow: "Derinlemesine İçgörü",
    title: "MindTest Analizleri",
    hook: "AI destekli karakter ve kişilik analizleri gönderin ve sonuçları inceleyin.",
    description:
      "Danışanlarınıza özel test linkleri gönderin. AQE ve HAE motorları ile desteklenen derinlemesine analizler, kişilik örüntülerini, davranış kalıplarını ve gizli dinamikleri ortaya çıkarır. Sonuçları profesyonel raporlar halinde görüntüleyin.",
    icon: "analysis",
    iconTone: "text-[#5B7B6A]",
    borderTone: "border-[#5B7B6A]/20 hover:border-[#5B7B6A]/40",
    backgroundTone: "from-[#5B7B6A]/12 via-[#5B7B6A]/6 to-transparent",
  },
  {
    eyebrow: "Yakında",
    title: "Seans Notları",
    hook: "Her görüşmenin detaylarını kaydedin ve geçmişe dönük inceleyin.",
    description:
      "Seans sırasında veya sonrasında notlarınızı ekleyin. Danışan bazlı not geçmişi ile ilerlemeyi takip edin. Notları kategorize edin ve önemli noktaları işaretleyin.",
    comingSoon: true,
    icon: "notes",
    iconTone: "text-[#5B7B6A]",
    borderTone: "border-white/10 hover:border-white/20",
    backgroundTone: "from-white/[0.06] via-white/[0.025] to-transparent",
  },
  {
    eyebrow: "Yakında",
    title: "Gelişmiş Raporlama",
    hook: "Danışan gelişimini görselleştirin ve profesyonel raporlar oluşturun.",
    description:
      "Zaman içindeki değişimleri grafiklerle görün. PDF formatında profesyonel raporlar oluşturun ve danışanlarınızla paylaşın. Karşılaştırmalı analizlerle ilerlemeyi somutlaştırın.",
    comingSoon: true,
    icon: "reports",
    iconTone: "text-[#7B68EE]",
    borderTone: "border-white/10 hover:border-[#7B68EE]/25",
    backgroundTone: "from-[#7B68EE]/[0.06] via-white/[0.02] to-transparent",
  },
  {
    eyebrow: "Yakında",
    title: "Çoklu Motor Desteği",
    hook: "Farklı analiz motorlarını aynı platformdan kullanın.",
    description:
      "HAE ve AQE dışında yeni analiz motorları eklenecek. Her motor farklı bir perspektif sunarak danışanlarınızı daha kapsamlı anlayabileceksiniz.",
    comingSoon: true,
    icon: "engines",
    iconTone: "text-cyan-400",
    borderTone: "border-white/10 hover:border-cyan-400/25",
    backgroundTone: "from-cyan-500/[0.06] via-white/[0.02] to-transparent",
  },
];

function FeatureIcon({ icon, className = "" }: { icon: FeatureIconKey; className?: string }) {
  switch (icon) {
    case "clients":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="8" />
          <path d="M12 40v-4a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v4" />
          <circle cx="36" cy="14" r="5" />
          <path d="M42 38v-2a5 5 0 0 0-5-5" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="12" width="32" height="28" rx="4" />
          <path d="M16 8v8" />
          <path d="M32 8v8" />
          <path d="M8 20h32" />
          <rect x="14" y="26" width="6" height="6" rx="1" fill="currentColor" stroke="none" opacity="0.5" />
          <rect x="28" y="26" width="6" height="6" rx="1" />
        </svg>
      );
    case "analysis":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="8" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
          <path d="M24 8v4" />
          <path d="M24 36v4" />
          <path d="M8 24h4" />
          <path d="M36 24h4" />
        </svg>
      );
    case "engines":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="6" />
          <path d="M24 4v8" />
          <path d="M24 36v8" />
          <path d="M4 24h8" />
          <path d="M36 24h8" />
          <path d="M9.86 9.86l5.66 5.66" />
          <path d="M32.48 32.48l5.66 5.66" />
          <path d="M9.86 38.14l5.66-5.66" />
          <path d="M32.48 15.52l5.66-5.66" />
        </svg>
      );
    case "notes":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" />
          <path d="M16 16h16" />
          <path d="M16 24h16" />
          <path d="M16 32h10" />
        </svg>
      );
    case "reports":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4h18l10 10v30a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
          <path d="M30 4v10h10" />
          <path d="M16 24h16" />
          <path d="M16 32h8" />
          <rect x="14" y="36" width="4" height="6" rx="1" />
          <rect x="22" y="32" width="4" height="10" rx="1" />
          <rect x="30" y="28" width="4" height="14" rx="1" />
        </svg>
      );
  }
}

const ENGINE_LINKS = [
  {
    name: "AQE",
    fullName: "Adaptive Question Engine",
    href: "/engines/aqe",
    accent: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-400/40",
    bg: "from-violet-500/10 via-violet-500/5 to-transparent",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    slogan: "Soruları kişiye özel şekillendirir.",
    description:
      "MindTest akışını herkese aynı şekilde göstermez. AQE, danışanın verdiği yanıtlara göre soruları adapte ederek daha derinlemesine ve doğru bir analiz süreci oluşturur.",
  },
  {
    name: "HAE",
    fullName: "Human Analysis Engine",
    href: "/engines/hae",
    accent: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    bg: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    slogan: "Derinlemesine karakter analizi yapar.",
    description:
      "Kişilik örüntülerini, davranış kalıplarını ve gizli dinamikleri analiz eder. 4 katmanlı AI doğrulamasından geçirerek güvenilir ve kapsamlı profiller oluşturur.",
  },
];

const SCREENSHOTS = [
  {
    src: "/images/orbiramind-dashboard.png",
    alt: "Ofisim - Dashboard ve özet görünümü",
    label: "Ofisim",
  },
  {
    src: "/images/orbiramind-calendar.png",
    alt: "Randevu Takvimi",
    label: "Randevular",
  },
  {
    src: "/images/orbiramind-engines.png",
    alt: "AQE ve HAE Motor Görünümü",
    label: "Analiz Motorları",
  },
  {
    src: "/images/orbiramind-login.png",
    alt: "Giriş Ekranı",
    label: "Giriş",
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function OrbiraMindPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-8 lg:min-h-[90vh] lg:flex lg:items-center lg:py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5B7B6A]/10 via-transparent to-[#3D5A4C]/5 pointer-events-none" />

          <Container className="relative z-10">
            {/* Mobile Hero */}
            <div className="lg:hidden">
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-[#5B7B6A]/20 bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4C] flex items-center justify-center">
                    <span className="text-white text-xl font-bold">O</span>
                  </div>
                  <div className="text-left">
                    <h1 className="text-xl font-bold text-foreground">Orbira Mind</h1>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground leading-tight">
                  Danışan Yönetiminde{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7B6A] to-[#3D5A4C]">
                    Profesyonel Asistanınız
                  </span>
                </p>
                <p className="text-xs text-foreground-muted mt-2 leading-relaxed max-w-xs mx-auto">
                  Randevu takibi, seans notları ve AI destekli derinlemesine karakter analizleri — hepsi tek platformda.
                </p>
              </motion.div>

              {/* Screenshot carousel */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
                  {SCREENSHOTS.map((ss) => (
                    <div key={ss.label} className="flex-shrink-0 w-[200px] snap-center">
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg shadow-black/30 mb-2 border border-white/10">
                        <Image src={ss.src} alt={ss.alt} fill sizes="200px" className="object-cover object-top" />
                      </div>
                      <p className="text-[10px] text-foreground-muted font-medium text-center">{ss.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop Hero */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Screenshots mockup */}
              <motion.div
                className="relative flex items-center justify-center order-2 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="relative z-20"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-[500px] aspect-[16/10] rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-[4px] shadow-2xl shadow-black/50 overflow-hidden">
                      <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-black">
                        <Image src="/images/orbiramind-dashboard.png" alt="Orbira Mind Dashboard" fill className="object-cover object-top" priority />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-16 top-8 z-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-[280px] aspect-[16/10] rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-[3px] shadow-xl shadow-black/40 opacity-80 overflow-hidden">
                      <div className="w-full h-full rounded-[10px] overflow-hidden relative bg-black">
                        <Image src="/images/orbiramind-calendar.png" alt="Randevu Takvimi" fill className="object-cover object-top" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -right-12 top-12 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="w-[260px] aspect-[16/10] rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-[3px] shadow-xl shadow-black/40 opacity-70 overflow-hidden">
                      <div className="w-full h-full rounded-[10px] overflow-hidden relative bg-black">
                        <Image src="/images/orbiramind-engines.png" alt="Analiz Motorları" fill className="object-cover object-top" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -top-6 right-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5B7B6A]/30 to-[#3D5A4C]/20 border border-[#5B7B6A]/30 backdrop-blur-xl flex items-center justify-center text-3xl shadow-lg"
                  animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🧠
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 left-0 w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/20 border border-violet-500/30 backdrop-blur-xl flex items-center justify-center text-2xl shadow-lg"
                  animate={{ rotate: [0, -5, 0, 5, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  📊
                </motion.div>
              </motion.div>

              {/* Text content */}
              <motion.div
                className="order-1 text-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-18 h-18 rounded-2xl overflow-hidden shadow-lg shadow-[#5B7B6A]/20 bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4C] flex items-center justify-center" style={{ width: 72, height: 72 }}>
                    <span className="text-white text-3xl font-bold">O</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-foreground">Orbira Mind</h1>
                  </div>
                </div>

                <p className="text-4xl font-semibold text-foreground mb-5 leading-tight">
                  Danışan Yönetiminde{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7B6A] to-[#3D5A4C]">
                    Profesyonel Asistanınız
                  </span>
                </p>

                <p className="text-xl text-foreground-muted mb-10 leading-relaxed max-w-xl">
                  Danışan takibi, randevu yönetimi, seans notları ve AI destekli
                  derinlemesine karakter analizleri — hepsi tek platformda,
                  KVKK uyumlu altyapıyla.
                </p>

                <div className="flex gap-4">
                  <a href="https://www.orbiramind.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="bg-[#5B7B6A] hover:bg-[#4A6A59] text-base">
                      Platforma Git
                    </Button>
                  </a>
                  <Link href="#features">
                    <Button variant="secondary" size="lg" className="text-base">
                      Özellikleri Keşfet
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Feature Showcase */}
        <section id="features" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5B7B6A]/[0.025] to-transparent pointer-events-none" />
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14 lg:mb-16" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#5B7B6A]/10 text-[#5B7B6A] border border-[#5B7B6A]/20 mb-4 sm:mb-6">
                Özellikler
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                Profesyonel danışmanlık için{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7B6A] via-[#3D5A4C] to-violet-400">
                  güçlü araçlar
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                Orbira Mind; danışan yönetimi, randevu takibi ve AI destekli analizleri tek bir platformda birleştirir.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-0">
              <div className="mb-6 sm:mb-8 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-foreground-muted/60 mb-1">
                    Aktif Özellikler
                  </p>
                  <h3 className="text-lg sm:text-2xl font-semibold text-foreground">
                    Şu an kullanabileceğiniz araçlar
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {FEATURES.filter((feature) => !feature.comingSoon).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border ${feature.borderTone} bg-gradient-to-br ${feature.backgroundTone} p-4 sm:p-6 transition-all duration-300`}
                    {...fadeInUp(index * 0.08)}
                    whileHover={isMobile ? {} : { y: -6, transition: { duration: 0.22 } }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)] opacity-60 pointer-events-none" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20 ${feature.iconTone} flex-shrink-0`}>
                          <FeatureIcon icon={feature.icon} className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base font-medium text-foreground/85 leading-snug mb-2">
                        {feature.hook}
                      </p>

                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 sm:mt-14 mb-5 sm:mb-7 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-foreground-muted/60 mb-1">
                    Yolda Olanlar
                  </p>
                  <h3 className="text-lg sm:text-2xl font-semibold text-foreground">
                    Yakında eklenecek özellikler
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-5">
                {FEATURES.filter((feature) => feature.comingSoon).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className={`group relative overflow-hidden rounded-2xl border ${feature.borderTone} bg-gradient-to-br ${feature.backgroundTone} p-4 sm:p-5 backdrop-blur-xl transition-all duration-300`}
                    {...fadeInUp(index * 0.08)}
                    whileHover={isMobile ? {} : { y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_40%)] opacity-70 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20 ${feature.iconTone} flex-shrink-0`}>
                            <FeatureIcon icon={feature.icon} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                          </div>
                          <h4 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                            {feature.title}
                          </h4>
                        </div>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-foreground-muted/70 whitespace-nowrap">
                          Yakında
                        </span>
                      </div>

                      <p className="text-sm text-foreground/85 leading-snug mb-1.5">
                        {feature.hook}
                      </p>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Technology Section */}
        <section className="section-padding relative overflow-hidden">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 text-foreground-muted border border-white/10 mb-4 sm:mb-6">
                Teknoloji Altyapısı
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Analizleri güçlendiren{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-cyan-500">
                  iki motor
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                MindTest analizleri, Orbira Labs&apos;ın geliştirdiği iki hibrit motor tarafından güçlendirilir.
                Soru akışını <span className="text-violet-300">AQE</span>,
                derinlemesine analiz katmanını ise <span className="text-cyan-400">HAE</span> yönetir.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6">
              {ENGINE_LINKS.map((engine, index) => (
                <motion.div
                  key={engine.name}
                  {...fadeInUp(index * 0.08)}
                  whileHover={isMobile ? {} : { y: -4, transition: { duration: 0.2 } }}
                >
                  <Link
                    href={engine.href}
                    className={`group block rounded-xl sm:rounded-2xl border bg-gradient-to-br ${engine.bg} ${engine.border} p-3.5 sm:p-7 transition-all duration-300 h-full`}
                  >
                    <div className="flex items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div>
                        <div className="mb-3 sm:mb-4">
                          {engine.name === "AQE" ? (
                            <QuestionPulseAnimation size="xs" animate={!isMobile} />
                          ) : (
                            <AtomAnimation size="xs" animate={!isMobile} />
                          )}
                        </div>
                        {engine.name === "HAE" ? (
                          <HAELogo size={isMobile ? "sm" : "md"} as="h3" className="mb-1" />
                        ) : (
                          <AQELogo size={isMobile ? "sm" : "md"} as="h3" className="mb-1" />
                        )}
                        <p className="mt-1 text-xs sm:text-sm text-foreground-muted hidden sm:block">
                          {engine.fullName}
                        </p>
                      </div>
                      <div className="rounded-lg sm:rounded-xl border border-white/10 bg-black/20 p-1.5 sm:p-2.5 text-foreground-muted group-hover:text-foreground transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-xs text-foreground-muted leading-relaxed sm:hidden">
                      {engine.slogan}
                    </p>
                    <p className="hidden sm:block text-sm sm:text-base text-foreground-muted leading-relaxed">
                      {engine.description}
                    </p>

                    <div className="mt-3 sm:mt-5 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-foreground">
                      Motor sayfasını aç
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Target Audience */}
        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#5B7B6A]/10 text-[#5B7B6A] border border-[#5B7B6A]/20 mb-4 sm:mb-6">
                Kimler İçin
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Profesyoneller için{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7B6A] to-[#3D5A4C]">
                  tasarlandı
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🧠", title: "Psikologlar", desc: "Danışan takibi ve analiz" },
                { icon: "💼", title: "Koçlar", desc: "Kişisel gelişim danışmanlığı" },
                { icon: "👥", title: "Terapistler", desc: "Seans ve ilerleme takibi" },
                { icon: "📊", title: "Danışmanlar", desc: "Kurumsal değerlendirmeler" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 sm:p-6 text-center"
                  {...fadeInUp(index * 0.08)}
                >
                  <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-foreground-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <Container size="narrow">
            <motion.div
              className="relative p-6 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#5B7B6A]/15 via-[#3D5A4C]/10 to-[#5B7B6A]/5 border border-[#5B7B6A]/30 text-center overflow-hidden"
              {...fadeInUp()}
            >
              {!isMobile && (
                <>
                  <motion.div 
                    className="absolute top-0 left-0 w-64 h-64 bg-[#5B7B6A]/10 rounded-full blur-3xl"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden mx-auto mb-4 sm:mb-6 shadow-2xl shadow-[#5B7B6A]/30 bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4C] flex items-center justify-center">
                  <span className="text-white text-3xl sm:text-5xl font-bold">O</span>
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Danışmanlık Süreçlerinizi Dönüştürün
                </h2>

                <p className="text-sm sm:text-lg text-foreground-muted mb-6 sm:mb-8 max-w-lg mx-auto">
                  Orbira Mind ile danışanlarınızı daha iyi anlayın, süreçlerinizi kolaylaştırın.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="https://www.orbiramind.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#5B7B6A] hover:bg-[#4A6A59] text-white font-semibold transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-[#5B7B6A]/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Platforma Git
                  </a>
                  <Link
                    href="/support"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground font-medium transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    Demo Talep Et
                  </Link>
                </div>

                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-foreground-subtle">
                  Powered by{" "}
                  <span className="text-foreground-muted font-medium">Orbira Labs</span>
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
                className="text-brand-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base py-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
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
