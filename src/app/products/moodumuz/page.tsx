"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Button, AtomAnimation, QuestionPulseAnimation, HAELogo, AQELogo } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const FEATURES = [
  {
    icon: "🫶",
    title: "Döngü Koçluğu",
    description:
      "Sadece veri göstermez; o günkü fazına, ruh haline ve ihtiyaçlarına göre sana neyin iyi gelebileceğini söyleyen kişisel koçluk deneyimi sunar.",
  },
  {
    icon: "🌸",
    title: "Akıllı Döngü Takibi",
    description:
      "Regl döngünü takip et, sonraki dönemin tahmini tarihlerini gör. Döngün öğrendikçe tahminler kişiselleşir.",
  },
  {
    icon: "💭",
    title: "Ruh Hali Günlüğü",
    description:
      "Günlük ruh halini ve enerji seviyeni kaydet. Haftalık trendlerini takip et, kalıplarını keşfet.",
  },
  {
    icon: "🤖",
    title: "AI Kozmik Rehber",
    description:
      "Burcuna ve döngü fazına özel, AI tarafından her gün üretilen kişiselleştirilmiş kozmik rehberlik.",
  },
  {
    icon: "✨",
    title: "Sana Özel Öneriler",
    description:
      "Verilerine dayalı haftalık öneriler, semptom rahatlatma önerileri ve döngü fazına uygun günlük yönlendirmeler.",
  },
  {
    icon: "📊",
    title: "Trend Analizi",
    description:
      "Ruh hali ve enerji trendlerini izle. Döngü-duygu bağlantılarını keşfet, kalıplarını anla.",
  },
];

const WHAT_IT_DOES = [
  {
    icon: "🌸",
    title: "Döngü Takibi",
    description: "Regl döngünü takip et, bir sonraki dönemin tarihlerini gör.",
  },
  {
    icon: "💭",
    title: "Ruh Hali Günlüğü",
    description: "Her gün nasıl hissettiğini kaydet, kalıplarını keşfet.",
  },
  {
    icon: "✨",
    title: "Kişisel Koçluk",
    description: "Verilerine dayalı öneriler ve yönlendirmeler al.",
  },
];

const ENGINE_LINKS = [
  {
    name: "AQE",
    fullName: "Adaptive Question Engine",
    href: "/engines/aqe",
    accent: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-400/40",
    bg: "from-violet-500/10 via-violet-500/5 to-transparent",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    slogan: "Soruları sana göre şekillendirir.",
    description:
      "Mood check-in akışını herkese aynı şekilde göstermez. AQE, verdiğin yanıtlara göre soruları ve yönlendirmeleri adapte ederek koçluk deneyimini kişiselleştirir.",
  },
  {
    name: "HAE",
    fullName: "Human Analysis Engine",
    href: "/engines/hae",
    accent: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    bg: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    slogan: "Bağlamını anlayıp seni yönlendirir.",
    description:
      "Döngü verilerini, davranış kalıplarını ve ruh hali sinyallerini bir araya getirir. Böylece Moodumuz sana sadece içerik değil, bağlamını anlayan öneriler sunar.",
  },
];

const SCREENSHOTS = [
  {
    src: "/images/moodumuz-home-new.png",
    alt: "Ana Ekran - Döngü takibi ve check-in",
    label: "Ana Ekran",
  },
  {
    src: "/images/moodumuz-horoscope-new.png",
    alt: "Kozmik Rehber - Günlük burç yorumu",
    label: "Kozmik Rehber",
  },
  {
    src: "/images/moodumuz-pro.png",
    alt: "Pro - Kişisel yolculuk",
    label: "Mood Yolculuğu",
  },
  {
    src: "/images/moodumuz-paywall.png",
    alt: "Pro Özellikler",
    label: "Pro Özellikler",
  },
];


const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function MoodumuzPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section — Mobile: compact header + screenshot carousel / Desktop: full layout */}
        <section className="relative py-8 lg:min-h-[90vh] lg:flex lg:items-center lg:py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A8471]/10 via-transparent to-[#5C6455]/5 pointer-events-none" />

          <Container className="relative z-10">
            {/* ── Mobile Hero ── */}
            <div className="lg:hidden">
              {/* App identity */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-[#7A8471]/20">
                    <Image src="/images/moodumuz-icon.png" alt="Moodumuz" width={48} height={48} sizes="48px" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-xl font-bold text-foreground">Moodumuz</h1>

                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground leading-tight">
                  Döngünü Anlayan,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                    Seni Tanıyan
                  </span>{" "}
                  Arkadaşın
                </p>
                <p className="text-xs text-foreground-muted mt-2 leading-relaxed max-w-xs mx-auto">
                  Seni yargılamayan; döngünü, ruh halini ve ihtiyaçlarını anlayıp her gün koçluk eden dijital arkadaşın.
                </p>
              </motion.div>

              {/* Screenshot carousel — small phones */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
                  {SCREENSHOTS.map((ss) => (
                    <div key={ss.label} className="flex-shrink-0 w-[130px] snap-center">
                      <div className="relative w-full aspect-[9/19] rounded-2xl bg-gradient-to-b from-zinc-700 to-zinc-900 p-[2px] shadow-lg shadow-black/30 mb-2">
                        <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-black">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-b-lg z-10" />
                          <Image src={ss.src} alt={ss.alt} fill sizes="130px" className="object-cover object-top" />
                        </div>
                      </div>
                      <p className="text-[10px] text-foreground-muted font-medium text-center">{ss.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* ── Desktop Hero ── */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Phone mockups */}
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
                    <div className="w-[300px] h-[620px] rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[4px] shadow-2xl shadow-black/50">
                      <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-10" />
                        <Image src="/images/moodumuz-home-new.png" alt="Moodumuz Ana Ekran" fill className="object-cover object-top" priority />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-20 top-16 z-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-[190px] h-[400px] rounded-[2rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[3px] shadow-xl shadow-black/40 opacity-80">
                      <div className="w-full h-full rounded-[1.9rem] overflow-hidden relative bg-black">
                        <Image src="/images/moodumuz-horoscope-new.png" alt="Kozmik Rehber" fill className="object-cover object-top" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -right-16 top-20 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="w-[180px] h-[380px] rounded-[1.8rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[3px] shadow-xl shadow-black/40 opacity-70">
                      <div className="w-full h-full rounded-[1.7rem] overflow-hidden relative bg-black">
                        <Image src="/images/moodumuz-pro.png" alt="Pro Yolculuk" fill className="object-cover object-top" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -top-6 right-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7A8471]/30 to-[#5C6455]/20 border border-[#7A8471]/30 backdrop-blur-xl flex items-center justify-center text-3xl shadow-lg"
                  animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🌸
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 left-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-violet-500/20 border border-purple-500/30 backdrop-blur-xl flex items-center justify-center text-2xl shadow-lg"
                  animate={{ rotate: [0, -5, 0, 5, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  🔮
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
                  <div className="w-18 h-18 rounded-2xl overflow-hidden shadow-lg shadow-[#7A8471]/20">
                    <Image src="/images/moodumuz-icon.png" alt="Moodumuz" width={72} height={72} sizes="72px" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-foreground">Moodumuz</h1>

                  </div>
                </div>

                <p className="text-4xl font-semibold text-foreground mb-5 leading-tight">
                  Döngünü Anlayan,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                    Seni Tanıyan
                  </span>{" "}
                  Arkadaşın
                </p>

                <p className="text-xl text-foreground-muted mb-10 leading-relaxed max-w-xl">
                  Seni yargılamayan; döngünü takip eden, ruh halini anlayan,
                  kozmik rehberlik sunan ve her gün sana özel koçluk önerileri
                  üreten dijital arkadaşın.
                </p>

                <div className="flex gap-4">
                  <Link href="/engines">
                    <Button variant="primary" size="lg" className="bg-[#7A8471] hover:bg-[#6a7462] text-base">
                      Teknolojiyi Keşfet
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="secondary" size="lg" className="text-base">
                      Özellikleri Gör
                    </Button>
                  </Link>
                </div>

              </motion.div>
            </div>
          </Container>
        </section>

        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-4 sm:mb-6">
                Ne Yapar?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Döngünü takip et,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                  kendini tanı
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                Döngü takibi, ruh hali günlüğü ve kişisel koçluk — hepsi tek uygulamada.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {WHAT_IT_DOES.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-3.5 sm:p-6 text-center"
                  {...fadeInUp(index * 0.08)}
                  whileHover={isMobile ? {} : { y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-foreground-muted leading-snug sm:leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Free vs Pro */}
        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-4 sm:mb-6">
                Planlar
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Ücretsiz başla,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                  Pro ile derinleş
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                Temel özellikler herkese açık. Kişisel koçluk deneyimi için Pro&apos;ya geç.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
              {/* Free */}
              <motion.div
                className="rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 sm:p-7"
                {...fadeInUp(0)}
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-2xl font-bold text-foreground mb-1">Free</h3>
                  <p className="text-[10px] sm:text-sm text-foreground-muted">Sonsuza kadar ücretsiz</p>
                </div>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    "Ruh Hali ve Enerji Takibi",
                    "Döngü Tahmini",
                    "Burç Yorumları",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#9BA392] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[11px] sm:text-sm text-foreground-muted leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pro */}
              <motion.div
                className="rounded-xl sm:rounded-2xl border border-[#7A8471]/40 bg-gradient-to-br from-[#7A8471]/15 via-[#5C6455]/10 to-[#7A8471]/5 p-4 sm:p-7 relative overflow-hidden"
                {...fadeInUp(0.08)}
              >
                <div className="absolute top-0 right-0 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-xs font-semibold bg-[#7A8471] text-white rounded-bl-lg sm:rounded-bl-xl">
                  PRO
                </div>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-2xl font-bold text-foreground mb-1">Mood Pro</h3>
                  <p className="text-[10px] sm:text-sm text-foreground-muted">Kişisel koçluk deneyimi</p>
                </div>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    "Free planın tüm özellikleri",
                    "Sana Özel AI Analiz",
                    "Anlık AI Rehberliği",
                    "12 Aylık Kişisel Program",
                    "Seri Takibi ve Rozetler",
                    "Döngüne Uyumlu Görevler",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#9BA392] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[11px] sm:text-sm text-foreground leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="section-padding relative overflow-hidden">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 text-foreground-muted border border-white/10 mb-4 sm:mb-6">
                Teknoloji Altyapısı
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Koçluğu mümkün kılan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-cyan-500">
                  iki motor
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                Moodumuz&apos;da kullandığımız teknoloji sadece içerik üretmek için
                değil, seni daha doğru anlamak ve daha iyi yönlendirmek için
                çalışır. Soru akışını <span className="text-violet-300">AQE</span>,
                kişisel analiz katmanını ise <span className="text-cyan-400">HAE</span> yönetir.
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

        {/* Features Section */}
        <section className="section-padding relative" id="features">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-16" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-4 sm:mb-6">
                Özellikler
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Sana özel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#5C6455]">
                  deneyim
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Koçluk, döngü takibi ve AI destekli rehberliği bir araya getiren,
                kendini daha iyi anlaman için tasarlanmış özellikler.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#7A8471]/30 transition-all duration-300"
                  {...fadeInUp(index * 0.05)}
                  whileHover={isMobile ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-xl font-semibold text-foreground mb-0.5 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[10px] leading-snug sm:text-base text-foreground-muted sm:leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <Container size="narrow">
            <motion.div
              className="relative p-6 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7A8471]/15 via-[#5C6455]/10 to-[#7A8471]/5 border border-[#7A8471]/30 text-center overflow-hidden"
              {...fadeInUp()}
            >
              {/* Background blurs - desktop only */}
              {!isMobile && (
                <>
                  <motion.div 
                    className="absolute top-0 left-0 w-64 h-64 bg-[#7A8471]/10 rounded-full blur-3xl"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden mx-auto mb-4 sm:mb-6 shadow-2xl shadow-[#7A8471]/30">
                  <Image
                    src="/images/moodumuz-icon.png"
                    alt="Moodumuz"
                    width={96}
                    height={96}
                    sizes="(max-width: 640px) 64px, 96px"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Kendini Daha İyi Anla
                </h2>

                <p className="text-sm sm:text-lg text-foreground-muted mb-6 sm:mb-8 max-w-lg mx-auto">
                  Şimdi indir, döngünü takip etmeye başla. Human Analysis Engine™ ile kişiselleştirilmiş deneyim.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wide">
                        App Store&apos;dan
                      </div>
                      <div className="text-sm sm:text-base font-semibold">İndirin</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wide">
                        Google Play&apos;den
                      </div>
                      <div className="text-sm sm:text-base font-semibold">İndirin</div>
                    </div>
                  </a>
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
