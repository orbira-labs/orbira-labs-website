"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Badge, Button, OrbitalBackground } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

const FEATURES = [
  {
    icon: "🌸",
    title: "Döngü Takibi",
    description: "Regl döngünü kolayca takip et. Sonraki dönemin tahmini tarihlerini gör.",
  },
  {
    icon: "💭",
    title: "Ruh Hali Günlüğü",
    description: "Günlük ruh halini ve enerji seviyeni kaydet. Zaman içindeki değişimleri izle.",
  },
  {
    icon: "✨",
    title: "Kişisel Öneriler",
    description: "Döngü fazına göre sana özel öneriler ve içgörüler al.",
  },
  {
    icon: "🔒",
    title: "Tam Gizlilik",
    description: "Veriler sadece sana ait. Kimseyle paylaşılmaz, istediğin zaman silebilirsin.",
  },
  {
    icon: "📊",
    title: "Haftalık Özet",
    description: "Haftanın nasıl geçtiğini gör. Ruh hali ve enerji trendlerini takip et.",
  },
  {
    icon: "🌿",
    title: "Yargısız Arkadaş",
    description: "Seni yargılamayan, döngünü anlayan dijital arkadaşın yanında.",
  },
];

const CYCLE_PHASES = [
  {
    name: "Menstrüasyon",
    days: "1-5 gün",
    icon: "🩸",
    color: "from-rose-500/20 to-rose-600/10",
    borderColor: "border-rose-500/30",
    description: "Dinlenme ve kendine zaman ayırma dönemi.",
  },
  {
    name: "Foliküler Faz",
    days: "6-14 gün",
    icon: "🌱",
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    description: "Enerji yükselir, yeni başlangıçlar için ideal.",
  },
  {
    name: "Ovülasyon",
    days: "15-17 gün",
    icon: "☀️",
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    description: "En yüksek enerji seviyesi, sosyal dönem.",
  },
  {
    name: "Luteal Faz",
    days: "18-28 gün",
    icon: "🍂",
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/30",
    description: "İç değerlendirme ve yavaşlama zamanı.",
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
    description: "Son regl tarihin ve ortalama döngü süren gibi basit bilgileri paylaş.",
  },
  {
    step: "03",
    title: "Tercihlerini Belirle",
    description: "İletişim tonu ve bildirim tercihlerini ayarla.",
  },
  {
    step: "04",
    title: "Takibe Başla",
    description: "Günlük check-in yap, ruh halini kaydet ve öneriler al.",
  },
];

const PRIVACY_POINTS = [
  {
    icon: "👁️",
    title: "Sadece Sen Görebilirsin",
    description: "Verilerine yalnızca sen erişebilirsin.",
  },
  {
    icon: "🤝",
    title: "Kimseyle Paylaşılmaz",
    description: "Hiçbir verin üçüncü taraflarla paylaşılmaz.",
  },
  {
    icon: "🗑️",
    title: "İstediğin Zaman Sil",
    description: "Tüm verilerini dilediğin an kalıcı olarak silebilirsin.",
  },
];

export default function MoodumuzPage() {
  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <OrbitalBackground />
          
          {/* Sage green gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A8471]/10 via-transparent to-[#5C6455]/5 pointer-events-none" />
          
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-[#7A8471]/20">
                    <Image
                      src="/images/moodumuz-icon.png"
                      alt="Moodumuz"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                      Moodumuz
                    </h1>
                    <Badge status="testing" className="mt-2" />
                  </div>
                </div>

                <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  Döngünü Anlayan Arkadaşın
                </p>

                <p className="text-lg text-foreground-muted mb-8 leading-relaxed max-w-xl">
                  Seni yargılamayan, döngünü takip eden ve sana özel öneriler sunan dijital arkadaşın. 
                  Ruh halini kaydet, döngünü anla, kendini daha iyi hisset.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#features">
                    <Button variant="primary" size="lg" className="bg-[#7A8471] hover:bg-[#6a7462]">
                      Özellikleri Keşfet
                    </Button>
                  </Link>
                  <Link href="#onboarding">
                    <Button variant="secondary" size="lg">
                      Nasıl Başlarım?
                    </Button>
                  </Link>
                </div>

                {/* Store badges placeholder */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground-muted">
                    📱 iOS & Android&apos;de
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-[#7A8471]/10 border border-[#7A8471]/20 text-sm text-[#9BA392]">
                    ✓ Tamamen Ücretsiz
                  </div>
                </div>
              </motion.div>

              {/* Phone Mockup with Logo */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Center phone - main */}
                  <motion.div
                    className="relative z-20"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-[220px] h-[440px] sm:w-[260px] sm:h-[520px] lg:w-[300px] lg:h-[600px] rounded-[2.5rem] bg-gradient-to-b from-[#8a9480] to-[#6a7462] p-2 shadow-2xl shadow-[#7A8471]/20">
                      <div className="w-full h-full rounded-[2.25rem] bg-[#8a9480] overflow-hidden relative flex flex-col items-center justify-center">
                        {/* Splash screen simulation */}
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-lg mb-6">
                          <Image
                            src="/images/moodumuz-icon.png"
                            alt="Moodumuz"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Moodumuz</h2>
                        <p className="text-sm text-white/70">Powered by Orbira Labs</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 border border-[#7A8471]/20 backdrop-blur-xl flex items-center justify-center text-3xl"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🌸
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 border border-rose-500/20 backdrop-blur-xl flex items-center justify-center text-2xl"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  💭
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="section-padding relative" id="features">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7A8471]/10 text-[#9BA392] border border-[#7A8471]/20 mb-6">
                Özellikler
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Sana özel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] to-[#5C6455]">
                  deneyim
                </span>
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Döngü takibinden ruh hali günlüğüne, kendini daha iyi anlamak için ihtiyacın olan her şey.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#7A8471]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#7A8471]/20 to-[#5C6455]/10 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-base text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Cycle Phases Section */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-[#7A8471]/[0.02] to-transparent">
          <Container>
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
                Döngü Fazları
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Her fazı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                  anla ve yaşa
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Döngünün her fazında farklı ihtiyaçların var. Moodumuz sana her fazda özel öneriler sunar.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CYCLE_PHASES.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  className={`p-4 sm:p-5 rounded-xl bg-gradient-to-br ${phase.color} border ${phase.borderColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">{phase.name}</h3>
                      <p className="text-xs text-foreground-muted">{phase.days}</p>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Privacy Section */}
        <section className="section-padding relative">
          <Container>
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
                Gizlilik
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Verinin{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  tamamen sana ait
                </span>
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Gizliliğin bizim için en önemli öncelik. Verilerine sadece sen erişebilirsin.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {PRIVACY_POINTS.map((point, index) => (
                <motion.div
                  key={point.title}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 flex items-center justify-center text-2xl mx-auto mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-foreground-muted text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Onboarding Section */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-background-secondary to-transparent" id="onboarding">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
                Başlangıç
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Dakikalar içinde{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  başla
                </span>
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Hızlı ve kolay kurulum ile hemen takibe başla.
              </p>
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
                  <div className="text-3xl sm:text-5xl font-bold text-[#7A8471]/20 mb-2 sm:mb-4">{item.step}</div>
                  <h3 className="text-sm sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  
                  {index < ONBOARDING_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#7A8471]/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div
              className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#7A8471]/10 via-[#5C6455]/5 to-transparent border border-[#7A8471]/20 text-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A8471]/5 via-transparent to-[#5C6455]/5 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-6 shadow-lg shadow-[#7A8471]/20">
                  <Image
                    src="/images/moodumuz-icon.png"
                    alt="Moodumuz"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Kendini Daha İyi Anla
                </h2>
                
                <p className="text-lg text-foreground-muted mb-8 max-w-lg mx-auto">
                  Şimdi indir, döngünü takip etmeye başla. Tamamen ücretsiz ve gizliliğine saygılı.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-foreground-muted">App Store&apos;dan</div>
                      <div className="text-sm font-semibold">İndirin</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-foreground-muted">Google Play&apos;den</div>
                      <div className="text-sm font-semibold">İndirin</div>
                    </div>
                  </a>
                </div>

                <p className="mt-6 text-sm text-foreground-subtle">
                  Powered by <span className="text-foreground-muted">Orbira Labs</span>
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back to home */}
        <section className="pb-20">
          <Container>
            <div className="flex justify-center">
              <Link
                href="/"
                className="text-brand-primary hover:underline inline-flex items-center gap-2"
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
