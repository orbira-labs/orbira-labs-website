"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Badge, Button, OrbitalBackground } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

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
  {
    icon: "🔒",
    title: "Tam Gizlilik",
    description:
      "Veriler sadece sana ait. Kimseyle paylaşılmaz, istediğin zaman tamamen silebilirsin.",
  },
];

const AI_FEATURES = [
  {
    icon: "🔮",
    title: "Günlük Kozmik Rehberlik",
    description:
      "12 burç ve 4 döngü fazı kombinasyonuyla her gün 48 benzersiz içerik. Senin burcun ve fazına özel.",
  },
  {
    icon: "⚡",
    title: "Enerji Haritası",
    description:
      "Günün enerji seviyesi, odak alanı ve şans rengi. Her gün neye odaklanman gerektiğini bil.",
  },
  {
    icon: "🕯️",
    title: "Günlük Mini Ritüel",
    description:
      "1 dakikada yapabileceğin kişisel ritüeller. Nefes egzersizinden meditasyona, her gün farklı.",
  },
  {
    icon: "💫",
    title: "Uyumlu Burçlar",
    description:
      "Bugün hangi burçlarla enerjin uyumlu? Sosyal etkileşimlerini buna göre planla.",
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

const SCREENSHOTS = [
  {
    src: "/images/moodumuz-home.png",
    alt: "Ana Ekran - Döngü takibi ve check-in",
    label: "Ana Ekran",
  },
  {
    src: "/images/moodumuz-horoscope.png",
    alt: "Kozmik Rehber - Günlük burç yorumu",
    label: "Kozmik Rehber",
  },
  {
    src: "/images/moodumuz-sana-ozel.png",
    alt: "Sana Özel - Haftalık öneriler",
    label: "Sana Özel",
  },
  {
    src: "/images/moodumuz-splash.png",
    alt: "Splash Screen",
    label: "Splash",
  },
];

const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Kayıt Ol",
    description: "Google, Apple veya e-posta ile hızlıca giriş yap.",
  },
  {
    step: "02",
    title: "Döngü Bilgilerini Gir",
    description:
      "Son regl tarihin ve ortalama döngü süren gibi basit bilgileri paylaş.",
  },
  {
    step: "03",
    title: "Tercihlerini Belirle",
    description: "İletişim tonu ve bildirim tercihlerini ayarla.",
  },
  {
    step: "04",
    title: "Takibe Başla",
    description:
      "Günlük check-in yap, ruh halini kaydet ve kişisel öneriler al.",
  },
];

export default function MoodumuzPage() {
  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center py-8 sm:py-0">
          <OrbitalBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A8471]/10 via-transparent to-[#5C6455]/5 pointer-events-none" />

          <Container className="relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Mobile: Phone mockup first for visual impact */}
              <motion.div
                className="relative flex items-center justify-center order-1 lg:order-2 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Phone - Home Screen - Larger on mobile */}
                  <motion.div
                    className="relative z-20"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-[240px] h-[500px] sm:w-[260px] sm:h-[540px] lg:w-[280px] lg:h-[580px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[3px] shadow-2xl shadow-black/40">
                      <div className="w-full h-full rounded-[2.35rem] overflow-hidden relative bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
                        <Image
                          src="/images/moodumuz-home.png"
                          alt="Moodumuz Ana Ekran"
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Secondary Phone - Horoscope (behind, left) */}
                  <motion.div
                    className="absolute -left-16 sm:-left-20 lg:-left-24 top-12 z-10 hidden sm:block"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <div className="w-[160px] h-[340px] lg:w-[180px] lg:h-[380px] rounded-[1.8rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[2px] shadow-xl shadow-black/30 opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-full rounded-[1.7rem] overflow-hidden relative bg-black">
                        <Image
                          src="/images/moodumuz-horoscope.png"
                          alt="Kozmik Rehber"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Third Phone - Sana Özel (behind, right) */}
                  <motion.div
                    className="absolute -right-12 sm:-right-16 lg:-right-20 top-16 z-10 hidden sm:block"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="w-[150px] h-[320px] lg:w-[170px] lg:h-[360px] rounded-[1.6rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[2px] shadow-xl shadow-black/30 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-black">
                        <Image
                          src="/images/moodumuz-sana-ozel.png"
                          alt="Sana Özel"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating decorative elements - repositioned for mobile */}
                <motion.div
                  className="absolute -top-4 -right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#7A8471]/30 to-[#5C6455]/20 border border-[#7A8471]/30 backdrop-blur-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🌸
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-violet-500/20 border border-purple-500/30 backdrop-blur-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
                  animate={{ 
                    rotate: [0, -5, 0, 5, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  🔮
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-4 sm:-right-12 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 backdrop-blur-xl flex items-center justify-center text-lg sm:text-xl hidden sm:flex"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  ✨
                </motion.div>
              </motion.div>

              {/* Text content - below phone on mobile */}
              <motion.div
                className="order-2 lg:order-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg shadow-[#7A8471]/20">
                    <Image
                      src="/images/moodumuz-icon.png"
                      alt="Moodumuz"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      Moodumuz
                    </h1>
                    <Badge status="testing" className="mt-1 sm:mt-2" />
                  </div>
                </div>

                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
                  Döngünü Anlayan,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                    AI Destekli
                  </span>{" "}
                  Arkadaşın
                </p>

                <p className="text-base sm:text-lg text-foreground-muted mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Seni yargılamayan, döngünü takip eden, burcuna göre kozmik
                  rehberlik sunan ve her gün sana özel içerik üreten dijital
                  arkadaşın.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link href="#features">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-[#7A8471] hover:bg-[#6a7462] w-full sm:w-auto"
                    >
                      Özellikleri Keşfet
                    </Button>
                  </Link>
                  <Link href="#ai-powered">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      AI Özelliklerini Gör
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
                  <div className="px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-foreground-muted">
                    📱 iOS & Android&apos;de
                  </div>
                  <div className="px-3 sm:px-4 py-2 rounded-xl bg-[#7A8471]/10 border border-[#7A8471]/20 text-xs sm:text-sm text-[#9BA392]">
                    ✓ Tamamen Ücretsiz
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="section-padding relative" id="features">
          <Container>
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-4 sm:mb-6">
                Özellikler
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Sana özel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#5C6455]">
                  deneyim
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-2">
                Döngü takibinden AI destekli kozmik rehberliğe, kendini daha iyi
                anlamak için ihtiyacın olan her şey.
              </p>
            </motion.div>

            {/* Mobile: Single column, SM+: 2 columns, LG: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#7A8471]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* AI-Powered Section */}
        <section
          className="section-padding relative"
          id="ai-powered"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent pointer-events-none" />
          <Container>
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4 sm:mb-6">
                AI Destekli
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
                Kozmik Rehber:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  AI ile Kişiselleştirilmiş
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-2">
                Her gece yapay zeka, burcuna ve döngü fazına özel içerik üretir.
                Sabah uyandığında kozmik rehberlerin hazır.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12">
              {AI_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-500/[0.08] to-violet-500/[0.04] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Process Visualization - Vertical on mobile, horizontal on larger screens */}
            <motion.div
              className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/[0.08] via-violet-500/[0.04] to-transparent border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 sm:mb-8 lg:mb-10 text-center">
                Nasıl Çalışır?
              </h3>
              
              {/* Mobile: Vertical layout with connecting line */}
              <div className="flex flex-col sm:hidden gap-0 relative">
                {/* Vertical connecting line */}
                <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-purple-500/30 via-purple-500/20 to-purple-500/30" />
                
                {[
                  {
                    step: "1",
                    icon: "🌙",
                    title: "Gece",
                    desc: "AI 48 benzersiz içerik üretir",
                    delay: 0,
                  },
                  {
                    step: "2",
                    icon: "🔍",
                    title: "Eşleştirme",
                    desc: "Burcun + fazın = senin içeriğin",
                    delay: 0.15,
                  },
                  {
                    step: "3",
                    icon: "☀️",
                    title: "Sabah",
                    desc: "Kozmik rehberin hazır",
                    delay: 0.3,
                  },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.step} 
                    className="flex items-center gap-4 relative py-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center text-xl relative z-10 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: item.delay * 2 }}
                      >
                        {item.icon}
                      </motion.span>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {idx < 2 && (
                      <div className="absolute left-6 -bottom-2 transform -translate-x-1/2">
                        <svg className="w-3 h-3 text-purple-500/40" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M6 9L2 5h8L6 9z"/>
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Desktop: Horizontal layout */}
              <div className="relative hidden sm:grid grid-cols-3 gap-6 lg:gap-8">
                {/* Connecting line */}
                <div className="absolute top-7 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                
                {[
                  {
                    step: "1",
                    icon: "🌙",
                    title: "Gece",
                    desc: "AI 48 benzersiz içerik üretir",
                    delay: 0,
                  },
                  {
                    step: "2",
                    icon: "🔍",
                    title: "Eşleştirme",
                    desc: "Burcun + fazın = senin içeriğin",
                    delay: 0.15,
                  },
                  {
                    step: "3",
                    icon: "☀️",
                    title: "Sabah",
                    desc: "Kozmik rehberin hazır",
                    delay: 0.3,
                  },
                ].map((item) => (
                  <motion.div 
                    key={item.step} 
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center text-2xl mx-auto mb-4 relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: item.delay * 2 }}
                      >
                        {item.icon}
                      </motion.span>
                    </motion.div>
                    <h4 className="text-base font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* App Gallery Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/[0.03] to-transparent pointer-events-none" />
          <Container>
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-4 sm:mb-6">
                Uygulama
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                İçeriden{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                  bir bakış
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-xl mx-auto px-2">
                Sade tasarım, kolay kullanım. Her detay senin için düşünüldü.
              </p>
            </motion.div>

            {/* Mobile: Large horizontal scroll with better touch targets, Desktop: Grid */}
            <div className="flex sm:grid sm:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none hide-scrollbar">
              {SCREENSHOTS.map((ss, index) => (
                <motion.div
                  key={ss.label}
                  className="flex-shrink-0 w-[200px] sm:w-auto snap-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    {/* Phone Frame - Larger on mobile */}
                    <div className="relative w-full aspect-[9/19] rounded-[2rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-xl shadow-black/30 group-hover:shadow-2xl group-hover:shadow-[#7A8471]/20 transition-shadow duration-300 mb-3">
                      <div className="w-full h-full rounded-[1.85rem] overflow-hidden relative bg-black">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 bg-black rounded-b-xl z-10" />
                        {/* Screen reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src={ss.src}
                          alt={ss.alt}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-foreground-muted font-medium text-center group-hover:text-foreground transition-colors duration-300">
                      {ss.label}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Mobile scroll hint */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:hidden text-foreground-subtle">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xs">Kaydır</span>
            </div>
          </Container>
        </section>

        {/* Cycle Phases Section */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-[#7A8471]/[0.02] to-transparent">
          <Container>
            <motion.div
              className="text-center mb-6 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-4 sm:mb-6">
                Döngü Fazları
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Her fazı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                  anla ve yaşa
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-2">
                Döngünün her fazında farklı ihtiyaçların var. Moodumuz sana her
                fazda özel öneriler sunar.
              </p>
            </motion.div>

            {/* Mobile: Horizontal scroll, SM+: 2 columns, LG: 4 columns */}
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none hide-scrollbar">
              {CYCLE_PHASES.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  className={`group flex-shrink-0 w-[280px] sm:w-auto snap-center p-5 sm:p-5 rounded-2xl bg-gradient-to-br ${phase.color} border ${phase.borderColor} hover:border-opacity-60 transition-all duration-300`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-white/15 transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {phase.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                        {phase.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-muted">
                        {phase.days}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm sm:text-base mb-3 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <p className="text-xs sm:text-sm text-foreground-subtle italic">
                      Arketip: <span className="text-foreground-muted">{phase.archetype}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile scroll hint */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:hidden text-foreground-subtle">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-xs">Kaydır</span>
            </div>
          </Container>
        </section>

        {/* Privacy Section */}
        <section className="section-padding relative">
          <Container>
            <motion.div
              className="text-center mb-6 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4 sm:mb-6">
                Gizlilik
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Verinin{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  tamamen sana ait
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-2">
                Gizliliğin bizim için en önemli öncelik. AI içerik üretiminde
                kişisel verin kullanılmaz — sadece burcun ve döngü fazın
                eşleştirilir.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {[
                {
                  icon: "👁️",
                  title: "Sadece Sen Görebilirsin",
                  description: "Verilerine yalnızca sen erişebilirsin.",
                },
                {
                  icon: "🤖",
                  title: "AI'a Veri Gitmez",
                  description:
                    "AI genel içerik üretir, kişisel verin asla gönderilmez.",
                },
                {
                  icon: "🗑️",
                  title: "İstediğin Zaman Sil",
                  description:
                    "Tüm verilerini dilediğin an kalıcı olarak silebilirsin.",
                },
              ].map((point, index) => (
                <motion.div
                  key={point.title}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 flex items-center justify-center text-2xl flex-shrink-0 sm:mb-3">
                      {point.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Onboarding Section */}
        <section
          className="section-padding relative bg-gradient-to-b from-transparent via-background-secondary to-transparent"
          id="onboarding"
        >
          <Container>
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 sm:mb-6">
                Başlangıç
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Dakikalar içinde{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  başla
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-2">
                Hızlı ve kolay kurulum ile hemen takibe başla.
              </p>
            </motion.div>

            {/* Mobile: Vertical timeline, SM+: 2 columns, LG: 4 columns */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {ONBOARDING_STEPS.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-[#7A8471]/20 mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                  {index < ONBOARDING_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#7A8471]/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Mobile: Vertical timeline layout */}
            <div className="flex flex-col sm:hidden gap-0 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[22px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-amber-500/30 via-amber-500/20 to-amber-500/30" />
              
              {ONBOARDING_STEPS.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative flex items-start gap-4 py-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-lg font-bold text-amber-400 flex-shrink-0 relative z-10">
                    {item.step.replace("0", "")}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
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
              className="relative p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7A8471]/15 via-[#5C6455]/10 to-[#7A8471]/5 border border-[#7A8471]/30 text-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#7A8471]/10 rounded-full blur-3xl"
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ 
                  x: [0, -20, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl overflow-hidden mx-auto mb-4 sm:mb-6 shadow-2xl shadow-[#7A8471]/30"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/moodumuz-icon.png"
                    alt="Moodumuz"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Kendini Daha İyi Anla
                </motion.h2>

                <motion.p 
                  className="text-sm sm:text-base lg:text-lg text-foreground-muted mb-6 sm:mb-8 max-w-lg mx-auto px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Şimdi indir, döngünü takip etmeye başla. AI destekli kozmik
                  rehberlik tamamen ücretsiz.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wide">
                        App Store&apos;dan
                      </div>
                      <div className="text-sm sm:text-base font-semibold">İndirin</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-foreground-muted uppercase tracking-wide">
                        Google Play&apos;den
                      </div>
                      <div className="text-sm sm:text-base font-semibold">İndirin</div>
                    </div>
                  </motion.a>
                </motion.div>

                <motion.p 
                  className="mt-6 sm:mt-8 text-xs sm:text-sm text-foreground-subtle"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Powered by{" "}
                  <span className="text-foreground-muted font-medium">Orbira Labs</span>
                </motion.p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back to home */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
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
