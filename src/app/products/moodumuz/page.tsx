"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const FEATURES = [
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
      "Verilerine dayalı haftalık öneriler, semptom rahatlatma ve döngü fazına uygun aktiviteler.",
  },
  {
    icon: "📊",
    title: "Trend Analizi",
    description:
      "Ruh hali ve enerji trendlerini izle. Döngü-duygu bağlantılarını keşfet, kalıplarını anla.",
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

const CYCLE_PHASES = [
  {
    name: "Menstrüasyon",
    days: "1-5 gün",
    icon: "🩸",
    color: "from-rose-500/20 to-rose-600/10",
    borderColor: "border-rose-500/30",
    archetype: "Bilge Kadın",
    description: "Dinlenme ve kendine zaman ayırma dönemi. İçe dönük enerji.",
  },
  {
    name: "Foliküler Faz",
    days: "6-14 gün",
    icon: "🌱",
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    archetype: "Keşifçi",
    description: "Enerji yükselir, yaratıcılık artar. Yeni başlangıçlar için ideal.",
  },
  {
    name: "Ovülasyon",
    days: "15-17 gün",
    icon: "☀️",
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    archetype: "Kraliçe",
    description: "En yüksek enerji ve özgüven. Sosyalleşme ve liderlik zamanı.",
  },
  {
    name: "Luteal Faz",
    days: "18-28 gün",
    icon: "🍂",
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/30",
    archetype: "Büyücü",
    description: "İç değerlendirme ve yavaşlama. Detaylara odaklanma zamanı.",
  },
];

const ENGINE_FEATURES = [
  {
    title: "Modüler Mimari",
    description: "Her katman bağımsız çalışır, birlikte güçlenir. Farklı alanlara taşınabilir altyapı.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Cross-domain Fusion",
    description: "Farklı veri kaynaklarını tek bir anlam haritasında birleştirir. Kopukluk yok.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 12h6" /><path d="M12 3v4M12 17v4" /><circle cx="12" cy="5" r="2" /><circle cx="12" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: "Adaptive Learning",
    description: "Her etkileşim modeli güçlendirir. Zaman geçtikçe doğruluk artar, tahmin keskinleşir.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "High-precision Output",
    description: "~%95 profil doğruluğu. Genel çıkarımlar değil, birey bazlı analiz sonuçları.",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
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
                    <Image src="/images/moodumuz-icon.png" alt="Moodumuz" width={48} height={48} className="w-full h-full object-cover" />
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
                  Seni yargılamayan, döngünü takip eden, burcuna göre kozmik rehberlik sunan dijital arkadaşın.
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
                          <Image src={ss.src} alt={ss.alt} fill className="object-cover object-top" />
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
                    <Image src="/images/moodumuz-icon.png" alt="Moodumuz" width={72} height={72} className="w-full h-full object-cover" />
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
                  Seni yargılamayan, döngünü takip eden, burcuna göre kozmik
                  rehberlik sunan ve her gün sana özel içerik üreten dijital
                  arkadaşın.
                </p>

                <div className="flex gap-4">
                  <Link href="#human-analysis-engine">
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

        {/* Human Analysis Engine Section */}
        <section
          className="section-padding relative overflow-hidden"
          id="human-analysis-engine"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/[0.03] to-transparent pointer-events-none" />

          {/* Subtle scan lines - desktop only */}
          {!isMobile && (
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(122,132,113,0.5) 2px, rgba(122,132,113,0.5) 3px)`,
            }} />
          )}

          <Container>
            {/* Header */}
            <motion.div className="text-center mb-10 sm:mb-20" {...fadeInUp()}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#7A8471]/10 border border-[#7A8471]/20 mb-5 sm:mb-8">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#9BA392]" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#9BA392]">
                  Orbira Labs Technology
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                Human Analysis
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] via-[#9BA392] to-[#7A8471]">
                  Engine™
                </span>
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                Her katmanı AI ile desteklenen, modüler bir analiz mimarisi.
                <br className="hidden sm:block" />
                <span className="text-[#9BA392]">%95 oranında</span> kişiye özel profil çıkarımı.
              </p>
            </motion.div>

            {/* Architecture Diagram */}
            <motion.div className="relative mb-10 sm:mb-20" {...fadeInUp(0.1)}>
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0c0c0e] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[10px] sm:text-xs font-mono text-foreground-subtle tracking-wide">hae.core.engine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono text-green-400/70">live</span>
                  </div>
                </div>

                <div className="p-5 sm:p-10 lg:p-14">
                  {/* Data Layer */}
                  <div className="mb-6 sm:mb-10">
                    <div className="flex items-center gap-2 mb-3 sm:mb-5">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-foreground-subtle px-2 sm:px-3">Data Streams</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {[
                        { label: "Biyolojik Sinyaller", sub: "bio_signals", color: "from-rose-500/15 to-rose-500/5", borderColor: "border-rose-500/20", iconColor: "text-rose-400",
                          icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        },
                        { label: "Davranış Kalıpları", sub: "behavior_map", color: "from-blue-500/15 to-blue-500/5", borderColor: "border-blue-500/20", iconColor: "text-blue-400",
                          icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        },
                        { label: "Kozmik Harita", sub: "astro_matrix", color: "from-violet-500/15 to-violet-500/5", borderColor: "border-violet-500/20", iconColor: "text-violet-400",
                          icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                        },
                      ].map((input) => (
                        <motion.div
                          key={input.sub}
                          className={`relative p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b ${input.color} border ${input.borderColor} text-center group`}
                          whileHover={isMobile ? {} : { y: -3, transition: { duration: 0.2 } }}
                        >
                          <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-black/30 border border-white/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 ${input.iconColor}`}>
                            {input.icon}
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-foreground mb-0.5 sm:mb-1 leading-tight">{input.label}</p>
                          <p className="text-[9px] sm:text-xs font-mono text-foreground-subtle hidden sm:block">{input.sub}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Connection */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 sm:h-6 bg-gradient-to-b from-white/20 to-white/5" />
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#9BA392]/60" />
                        <div className="w-1 h-1 rounded-full bg-[#9BA392]/40" />
                        <div className="w-1 h-1 rounded-full bg-[#9BA392]/20" />
                      </div>
                    </div>
                  </div>

                  {/* Multi-layer Processing */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 mb-3 sm:mb-5">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-foreground-subtle px-2 sm:px-3">Multi-layer Processing</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="space-y-2 sm:space-y-3 max-w-lg mx-auto">
                      {[
                        { layer: "L1", name: "Pattern Layer", desc: "Kalıplarını keşfeder", color: "border-rose-500/20" },
                        { layer: "L2", name: "Emotion Layer", desc: "Duygusal döngünü çözer", color: "border-blue-500/20" },
                        { layer: "L3", name: "Context Layer", desc: "Bağlamını birleştirir", color: "border-violet-500/20" },
                      ].map((l) => (
                        <div key={l.layer} className={`flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl bg-white/[0.02] border ${l.color}`}>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                            <span className="text-[9px] sm:text-[11px] font-mono font-bold text-[#9BA392]">{l.layer}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs sm:text-sm font-semibold text-foreground">{l.name}</span>
                            <span className="text-foreground-subtle mx-1.5 hidden sm:inline">—</span>
                            <br className="sm:hidden" />
                            <span className="text-[10px] sm:text-xs text-foreground-muted">{l.desc}</span>
                          </div>
                          <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-[#7A8471]/10 border border-[#7A8471]/20 flex-shrink-0">
                            <span className="text-[8px] sm:text-[10px] font-mono text-[#9BA392]">AI-assisted</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connection */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#9BA392]/20" />
                        <div className="w-1 h-1 rounded-full bg-[#9BA392]/40" />
                        <div className="w-1 h-1 rounded-full bg-[#9BA392]/60" />
                      </div>
                      <div className="w-px h-4 sm:h-6 bg-gradient-to-b from-white/5 to-white/20" />
                    </div>
                  </div>

                  {/* Fusion Core */}
                  <div className="mb-4 sm:mb-6">
                    <motion.div
                      className="relative mx-auto max-w-md p-4 sm:p-6 rounded-2xl border border-[#7A8471]/30 bg-gradient-to-b from-[#7A8471]/10 to-transparent overflow-hidden"
                      animate={isMobile ? {} : {
                        borderColor: ["rgba(122,132,113,0.3)", "rgba(122,132,113,0.5)", "rgba(122,132,113,0.3)"],
                      }}
                      transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {!isMobile && (
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(155,163,146,0.8) 1px, transparent 0)`,
                          backgroundSize: '20px 20px'
                        }} />
                      )}
                      <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center shadow-lg shadow-[#7A8471]/20 flex-shrink-0">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                            <h3 className="text-sm sm:text-lg font-bold text-foreground tracking-tight">Fusion Layer</h3>
                            <span className="text-[8px] sm:text-[10px] font-mono text-[#9BA392] bg-[#7A8471]/10 px-1.5 py-0.5 rounded">HAE™</span>
                          </div>
                          <p className="text-[10px] sm:text-sm text-foreground-muted">
                            Tüm katmanları birleştirip kopukluğu sıfıra indiren bağlam motoru.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connection */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 sm:h-6 bg-gradient-to-b from-white/5 to-white/20" />
                    </div>
                  </div>

                  {/* Output */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-5">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-foreground-subtle px-2 sm:px-3">Output</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#7A8471]/10 via-[#7A8471]/5 to-[#7A8471]/10 border border-[#7A8471]/20 text-center">
                      <p className="text-sm sm:text-lg font-semibold text-foreground mb-1">
                        %95 doğrulukla senin analiz profilin
                      </p>
                      <p className="text-[10px] sm:text-sm text-foreground-muted">
                        Başka kimseninki gibi olmayan, sadece sana ait sonuçlar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Engine Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              {ENGINE_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#7A8471]/30 transition-all duration-300"
                  {...fadeInUp(index * 0.08)}
                  whileHover={isMobile ? {} : { y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#7A8471]/10 border border-[#7A8471]/20 flex items-center justify-center text-[#9BA392] flex-shrink-0 group-hover:bg-[#7A8471]/15 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specs bar */}
            <motion.div 
              className="mt-8 sm:mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-3"
              {...fadeInUp(0.3)}
            >
              {[
                { label: "Katman", value: "3-layer" },
                { label: "Doğruluk", value: "~95%" },
                { label: "Mimari", value: "Modular" },
                { label: "Her katman", value: "AI-assisted" },
              ].map((spec) => (
                <div key={spec.label} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-xs font-mono text-foreground-subtle uppercase tracking-wide">{spec.label}</span>
                  <span className="text-[10px] sm:text-xs font-mono text-[#9BA392] font-medium">{spec.value}</span>
                </div>
              ))}
            </motion.div>
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
                Döngü takibinden AI destekli kozmik rehberliğe, kendini daha iyi
                anlamak için ihtiyacın olan her şey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#7A8471]/30 transition-all duration-300"
                  {...fadeInUp(index * 0.05)}
                  whileHover={isMobile ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-base text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* App Gallery Section — desktop only (mobile has carousel in hero) */}
        <section className="section-padding relative overflow-hidden hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/[0.03] to-transparent pointer-events-none" />
          <Container>
            <motion.div className="text-center mb-16" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-6">
                Uygulama
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                İçeriden{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                  bir bakış
                </span>
              </h2>
              <p className="text-lg text-foreground-muted max-w-xl mx-auto">
                Sade tasarım, kolay kullanım. Her detay senin için düşünüldü.
              </p>
            </motion.div>

            <div className="grid grid-cols-4 gap-6">
              {SCREENSHOTS.map((ss, index) => (
                <motion.div
                  key={ss.label}
                  {...fadeInUp(index * 0.1)}
                >
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="relative w-full aspect-[9/19] rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-xl shadow-black/30 group-hover:shadow-2xl group-hover:shadow-[#7A8471]/20 transition-shadow duration-300 mb-4">
                      <div className="w-full h-full rounded-[1.85rem] overflow-hidden relative bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-10" />
                        <Image src={ss.src} alt={ss.alt} fill className="object-cover object-top" />
                      </div>
                    </div>
                    <p className="text-base text-foreground-muted font-medium text-center group-hover:text-foreground transition-colors duration-300">
                      {ss.label}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Cycle Phases Section */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-[#7A8471]/[0.02] to-transparent">
          <Container>
            <motion.div className="text-center mb-6 sm:mb-12" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-4 sm:mb-6">
                Döngü Fazları
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Her fazı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                  anla ve yaşa
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Döngünün her fazında farklı ihtiyaçların var. Moodumuz sana her
                fazda özel öneriler sunar.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {CYCLE_PHASES.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  className={`group relative p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.color} border ${phase.borderColor} transition-all duration-300 overflow-hidden`}
                  {...fadeInUp(index * 0.1)}
                  whileHover={isMobile ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center text-xl sm:text-3xl flex-shrink-0">
                        {phase.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-base lg:text-lg font-semibold text-foreground leading-tight">
                          {phase.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-foreground-muted">
                          {phase.days}
                        </p>
                      </div>
                    </div>
                    
                    <p className="hidden sm:block text-foreground-muted text-sm mb-3 leading-relaxed line-clamp-2">
                      {phase.description}
                    </p>
                    
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <p className="text-[10px] sm:text-xs text-foreground-subtle">
                        <span className="text-foreground-muted font-medium">{phase.archetype}</span>
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
