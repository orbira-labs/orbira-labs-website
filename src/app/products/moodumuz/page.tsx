"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Badge, Button, PageBackground } from "@/components/ui";
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
    icon: "🧬",
    title: "Çok Katmanlı Profil Analizi",
    description: "Döngü verilerin, duygusal kalıpların ve astrolojik profilin tek bir akıllı sistemde birleşir.",
  },
  {
    icon: "🔮",
    title: "Bağlamsal Zeka",
    description: "Motor sadece verini değil, o anki bağlamını da anlıyor. Döngü fazın, mevsim, hava durumu — hepsi hesapta.",
  },
  {
    icon: "⚡",
    title: "Gerçek Zamanlı Adaptasyon",
    description: "Her check-in'de motor seni daha iyi tanıyor. Öneriler zamanla sana özel hale geliyor.",
  },
  {
    icon: "🎯",
    title: "Kişiselleştirilmiş İçgörüler",
    description: "Genel tavsiyeler yerine, tam olarak senin için üretilmiş içgörüler ve öneriler.",
  },
];

export default function MoodumuzPage() {
  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section - Mobile First */}
        <section className="relative min-h-[90vh] flex items-center py-12 sm:py-8">
          <PageBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A8471]/10 via-transparent to-[#5C6455]/5 pointer-events-none" />

          <Container className="relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Phone mockup - Hero görsel */}
              <motion.div
                className="relative flex items-center justify-center order-1 lg:order-2 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Phone - Home Screen */}
                  <motion.div
                    className="relative z-20"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-[200px] h-[420px] sm:w-[260px] sm:h-[540px] lg:w-[300px] lg:h-[620px] rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[3px] sm:p-[4px] shadow-2xl shadow-black/50">
                      <div className="w-full h-full rounded-[2.3rem] sm:rounded-[2.8rem] overflow-hidden relative bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-7 bg-black rounded-b-2xl z-10" />
                        <Image
                          src="/images/moodumuz-home-new.png"
                          alt="Moodumuz Ana Ekran"
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Secondary Phone - Horoscope */}
                  <motion.div
                    className="absolute -left-8 sm:-left-16 lg:-left-20 top-12 sm:top-16 z-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <div className="w-[110px] h-[230px] sm:w-[170px] sm:h-[360px] lg:w-[190px] lg:h-[400px] rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[2px] sm:p-[3px] shadow-xl shadow-black/40 opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-full rounded-[1.4rem] sm:rounded-[1.9rem] overflow-hidden relative bg-black">
                        <Image
                          src="/images/moodumuz-horoscope-new.png"
                          alt="Kozmik Rehber"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Third Phone - Pro */}
                  <motion.div
                    className="absolute -right-6 sm:-right-12 lg:-right-16 top-14 sm:top-20 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="w-[100px] h-[210px] sm:w-[160px] sm:h-[340px] lg:w-[180px] lg:h-[380px] rounded-[1.3rem] sm:rounded-[1.8rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[2px] sm:p-[3px] shadow-xl shadow-black/40 opacity-70 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.7rem] overflow-hidden relative bg-black">
                        <Image
                          src="/images/moodumuz-pro.png"
                          alt="Pro Yolculuk"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 right-2 sm:-top-6 sm:right-0 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#7A8471]/30 to-[#5C6455]/20 border border-[#7A8471]/30 backdrop-blur-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🌸
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 left-2 sm:-bottom-6 sm:left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-violet-500/20 border border-purple-500/30 backdrop-blur-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
                  animate={{ 
                    rotate: [0, -5, 0, 5, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  🔮
                </motion.div>
              </motion.div>

              {/* Text content */}
              <motion.div
                className="order-2 lg:order-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 justify-center lg:justify-start">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-lg shadow-[#7A8471]/20">
                    <Image
                      src="/images/moodumuz-icon.png"
                      alt="Moodumuz"
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      Moodumuz
                    </h1>
                    <Badge status="testing" className="mt-1.5 sm:mt-2" />
                  </div>
                </div>

                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-5 leading-tight">
                  Döngünü Anlayan,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                    Seni Tanıyan
                  </span>{" "}
                  Arkadaşın
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-foreground-muted mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Seni yargılamayan, döngünü takip eden, burcuna göre kozmik
                  rehberlik sunan ve her gün sana özel içerik üreten dijital
                  arkadaşın.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="#human-analysis-engine">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-[#7A8471] hover:bg-[#6a7462] w-full sm:w-auto text-base"
                    >
                      Teknolojiyi Keşfet
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base">
                      Özellikleri Gör
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 sm:mt-10 flex items-center gap-4 justify-center lg:justify-start flex-wrap">
                  <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground-muted">
                    📱 iOS & Android
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-[#7A8471]/10 border border-[#7A8471]/20 text-sm text-[#9BA392]">
                    ✓ Temel Özellikler Ücretsiz
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Human Analysis Engine Section - The Star of the Show */}
        <section
          className="section-padding relative overflow-hidden"
          id="human-analysis-engine"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/[0.05] to-transparent pointer-events-none" />
          
          {/* Animated background orbs */}
          <motion.div 
            className="absolute top-20 -left-32 w-64 h-64 bg-[#7A8471]/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#7A8471]/20 to-purple-500/20 text-[#9BA392] border border-[#7A8471]/30 mb-6"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(122, 132, 113, 0)", "0 0 30px rgba(122, 132, 113, 0.3)", "0 0 20px rgba(122, 132, 113, 0)"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Yeni Nesil Teknoloji
              </motion.span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 sm:mb-6 leading-tight">
                Human Analysis Engine™
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed px-4">
                Global standartlarda geliştirilen, çok katmanlı yapay zeka destekli
                <span className="text-[#9BA392] font-medium"> kişiselleştirme motoru.</span>
              </p>
            </motion.div>

            {/* Engine Visualization - Mobile Optimized */}
            <motion.div
              className="relative mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative p-6 sm:p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-[#7A8471]/10 via-purple-500/5 to-[#5C6455]/10 border border-[#7A8471]/20 backdrop-blur-sm overflow-hidden">
                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122, 132, 113, 0.5) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                </div>

                <div className="relative z-10">
                  {/* Main headline */}
                  <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                      className="inline-flex items-center gap-3 sm:gap-4 px-6 py-4 rounded-2xl bg-black/30 border border-white/10 mb-6"
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm sm:text-base text-foreground-muted font-medium">
                        Sürekli Öğrenen Sistem
                      </span>
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Seni Gerçekten Anlayan Tek Uygulama
                    </h3>
                    <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                      Geleneksel döngü uygulamaları sadece tarih sayar. Moodumuz&apos;un Human Analysis Engine&apos;i 
                      senin benzersiz kalıplarını, duygusal döngülerini ve astrolojik profilini 
                      <span className="text-[#9BA392]"> tek bir akıllı sistemde birleştiriyor.</span>
                    </p>
                  </div>

                  {/* Flow visualization - Vertical on mobile */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
                    {[
                      { label: "Döngü Verilerin", icon: "🌸", color: "from-rose-500/30 to-rose-600/20" },
                      { label: "Duygusal Kalıpların", icon: "💭", color: "from-blue-500/30 to-blue-600/20" },
                      { label: "Astrolojik Profilin", icon: "✨", color: "from-purple-500/30 to-purple-600/20" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <motion.div 
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center text-2xl sm:text-3xl`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <span className="text-sm sm:text-base text-foreground font-medium">{item.label}</span>
                        {index < 2 && (
                          <motion.div 
                            className="hidden lg:flex items-center text-[#7A8471]/50 mx-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.div>
                        )}
                        {index < 2 && (
                          <motion.div 
                            className="lg:hidden flex items-center justify-center text-[#7A8471]/50 my-1"
                            animate={{ y: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Central engine visualization */}
                  <motion.div 
                    className="flex justify-center mb-10 sm:mb-14"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center shadow-2xl shadow-[#7A8471]/30"
                        animate={{ 
                          boxShadow: [
                            "0 0 40px rgba(122, 132, 113, 0.3)",
                            "0 0 60px rgba(122, 132, 113, 0.5)",
                            "0 0 40px rgba(122, 132, 113, 0.3)"
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="text-center">
                          <div className="text-4xl sm:text-5xl mb-1">🧠</div>
                          <span className="text-xs sm:text-sm text-white/80 font-medium">HAE™</span>
                        </div>
                      </motion.div>
                      
                      {/* Orbiting elements */}
                      <motion.div 
                        className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-lg sm:text-xl"
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "50px 50px" }}
                      >
                        ✨
                      </motion.div>
                      <motion.div 
                        className="absolute -bottom-2 -left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-base sm:text-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💫
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Output arrow */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className="flex flex-col items-center text-[#7A8471]"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Output */}
                  <motion.div 
                    className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#7A8471]/20 via-purple-500/10 to-[#7A8471]/20 border border-[#7A8471]/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      🎯 Sadece Sana Özel İçgörüler
                    </h4>
                    <p className="text-sm sm:text-base text-foreground-muted">
                      Kopyala-yapıştır tavsiyeler değil, senin verilerinden üretilen gerçek kişiselleştirme.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Engine Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {ENGINE_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#7A8471]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <motion.div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
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

            {/* Tech badges */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {["Modern AI Altyapısı", "Güvenli & Gizli", "Sürekli Gelişen", "Bağlam Farkındalığı"].map((badge, index) => (
                <motion.span 
                  key={badge}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-foreground-muted"
                  whileHover={{ scale: 1.05, borderColor: "rgba(122, 132, 113, 0.5)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="section-padding relative" id="features">
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-6">
                Özellikler
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Sana özel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#5C6455]">
                  deneyim
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-4">
                Döngü takibinden AI destekli kozmik rehberliğe, kendini daha iyi
                anlamak için ihtiyacın olan her şey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#7A8471]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
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

        {/* App Gallery Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/[0.03] to-transparent pointer-events-none" />
          <Container>
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-6">
                Uygulama
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                İçeriden{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#9BA392]">
                  bir bakış
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-xl mx-auto px-4">
                Sade tasarım, kolay kullanım. Her detay senin için düşünüldü.
              </p>
            </motion.div>

            {/* Mobile optimized gallery */}
            <div className="flex sm:grid sm:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none hide-scrollbar">
              {SCREENSHOTS.map((ss, index) => (
                <motion.div
                  key={ss.label}
                  className="flex-shrink-0 w-[220px] sm:w-auto snap-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="relative w-full aspect-[9/19] rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-xl shadow-black/30 group-hover:shadow-2xl group-hover:shadow-[#7A8471]/20 transition-shadow duration-300 mb-4">
                      <div className="w-full h-full rounded-[1.85rem] overflow-hidden relative bg-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-10" />
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
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
                Döngü Fazları
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Her fazı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                  anla ve yaşa
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-4">
                Döngünün her fazında farklı ihtiyaçların var. Moodumuz sana her
                fazda özel öneriler sunar.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {CYCLE_PHASES.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  className={`group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${phase.color} border ${phase.borderColor} hover:border-opacity-60 transition-all duration-300 overflow-hidden`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 group-hover:bg-white/15 transition-colors duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {phase.icon}
                      </motion.div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300 leading-tight">
                          {phase.name}
                        </h3>
                        <p className="text-xs text-foreground-muted">
                          {phase.days}
                        </p>
                      </div>
                    </div>
                    
                    <p className="hidden sm:block text-foreground-muted text-sm mb-3 leading-relaxed line-clamp-2">
                      {phase.description}
                    </p>
                    
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <p className="text-xs text-foreground-subtle">
                        <span className="text-foreground-muted font-medium">{phase.archetype}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Privacy Section */}
        <section className="section-padding relative">
          <Container>
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
                Gizlilik
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Verinin{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  tamamen sana ait
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto px-4">
                Gizliliğin bizim için en önemli öncelik. Kişisel verilerin güvende ve sadece senin kontrolünde.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  icon: "👁️",
                  title: "Sadece Sen Görebilirsin",
                  description: "Verilerine yalnızca sen erişebilirsin.",
                },
                {
                  icon: "🔐",
                  title: "Şifreli Veri Saklama",
                  description:
                    "Tüm veriler endüstri standardı şifreleme ile korunuyor.",
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
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 flex items-center justify-center text-2xl flex-shrink-0 sm:mb-3">
                      {point.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
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

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <Container size="narrow">
            <motion.div
              className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#7A8471]/15 via-[#5C6455]/10 to-[#7A8471]/5 border border-[#7A8471]/30 text-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-[#7A8471]/10 rounded-full blur-3xl"
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ 
                  x: [0, -20, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden mx-auto mb-6 shadow-2xl shadow-[#7A8471]/30"
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Kendini Daha İyi Anla
                </motion.h2>

                <motion.p 
                  className="text-base sm:text-lg text-foreground-muted mb-8 max-w-lg mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Şimdi indir, döngünü takip etmeye başla. Human Analysis Engine™ ile kişiselleştirilmiş deneyim.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-foreground-muted uppercase tracking-wide">
                        App Store&apos;dan
                      </div>
                      <div className="text-base font-semibold">İndirin</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-foreground-muted uppercase tracking-wide">
                        Google Play&apos;den
                      </div>
                      <div className="text-base font-semibold">İndirin</div>
                    </div>
                  </motion.a>
                </motion.div>

                <motion.p 
                  className="mt-8 text-sm text-foreground-subtle"
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
        <section className="pb-16 sm:pb-20">
          <Container>
            <div className="flex justify-center">
              <Link
                href="/"
                className="text-brand-primary hover:underline inline-flex items-center gap-2 text-base py-2"
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
