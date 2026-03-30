"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const ENGINES = [
  {
    id: "hae",
    name: "Human Analysis Engine",
    shortName: "HAE",
    tagline: "İnsanı anlamak için tasarlandı",
    description:
      "Biyolojik sinyaller, davranış kalıpları ve psikolojik profilleri birleştiren çok katmanlı analiz mimarisi. Hibrit AI-Algoritma yapısı.",
    status: "active",
    version: "3.0",
    color: "from-[#7A8471] to-[#5C6455]",
    borderColor: "border-[#7A8471]/30",
    bgColor: "from-[#7A8471]/10 to-[#5C6455]/5",
    iconBg: "bg-gradient-to-br from-[#7A8471] to-[#5C6455]",
    specs: [
      { label: "Katman", value: "8-layer" },
      { label: "Trait", value: "250+" },
      { label: "Mimari", value: "Hybrid AI" },
    ],
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    usedIn: ["Moodumuz"],
  },
  {
    id: "aqe",
    name: "Adaptive Question Engine",
    shortName: "AQE",
    tagline: "Her kullanıcıya özel, akıllı soru akışı",
    description:
      "200+ soru havuzundan kullanıcıya en uygun 80-120 soruyu dinamik olarak seçen akıllı soru motoru. HAE ile tam entegre.",
    status: "active",
    version: "1.0",
    color: "from-violet-500 to-indigo-600",
    borderColor: "border-violet-500/30",
    bgColor: "from-violet-500/10 to-indigo-500/5",
    iconBg: "bg-gradient-to-br from-violet-500 to-indigo-600",
    specs: [
      { label: "Havuz", value: "200+" },
      { label: "Hedef", value: "80-120" },
      { label: "Tier", value: "3-tier" },
    ],
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    usedIn: ["Moodumuz"],
  },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function EnginesPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
          
          {/* Animated grid background - desktop only */}
          {!isMobile && (
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          )}

          <Container>
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-muted">
                  Orbira Labs Core
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-foreground to-emerald-400">
                  Engines
                </span>
              </h1>
              
              <p className="text-base sm:text-xl lg:text-2xl text-foreground-muted leading-relaxed mb-2">
                İnsan odaklı yapay zeka motorlarımız
              </p>
              <p className="text-sm sm:text-base text-foreground-subtle max-w-xl mx-auto">
                Her motor, belirli bir problemi çözmek için sıfırdan tasarlandı.
                Modüler, ölçeklenebilir ve sürekli gelişen teknolojiler.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Engines Grid */}
        <section className="section-padding relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {ENGINES.map((engine, index) => (
                <motion.div
                  key={engine.id}
                  {...fadeInUp(index * 0.1)}
                >
                  <Link href={`/engines/${engine.id}`}>
                    <motion.div
                      className={`group relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${engine.bgColor} border ${engine.borderColor} overflow-hidden transition-all duration-300 hover:border-opacity-60`}
                      whileHover={isMobile ? {} : { y: -5, transition: { duration: 0.2 } }}
                    >
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${engine.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Scan lines - desktop only */}
                      {!isMobile && (
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" style={{
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)`,
                        }} />
                      )}

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 sm:mb-6">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${engine.iconBg} flex items-center justify-center shadow-lg`}>
                              {engine.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h2 className="text-lg sm:text-2xl font-bold text-foreground">
                                  {engine.shortName}
                                </h2>
                                <span className="text-[10px] sm:text-xs font-mono text-foreground-subtle bg-white/5 px-1.5 py-0.5 rounded">
                                  v{engine.version}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-foreground-muted">
                                {engine.name}
                              </p>
                            </div>
                          </div>
                          
                          {/* Status indicator */}
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-mono text-emerald-400">
                              {engine.status}
                            </span>
                          </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm sm:text-lg font-medium text-foreground mb-2">
                          {engine.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-4 sm:mb-6">
                          {engine.description}
                        </p>

                        {/* Specs */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                          {engine.specs.map((spec) => (
                            <div key={spec.label} className="flex items-center gap-1.5">
                              <span className="text-[10px] sm:text-xs font-mono text-foreground-subtle uppercase tracking-wide">
                                {spec.label}
                              </span>
                              <span className="text-[10px] sm:text-xs font-mono text-foreground font-medium">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Used in */}
                        <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] sm:text-xs text-foreground-subtle">Kullanıldığı ürünler:</span>
                            <div className="flex gap-1.5">
                              {engine.usedIn.map((product) => (
                                <span
                                  key={product}
                                  className="text-[10px] sm:text-xs font-medium text-foreground-muted bg-white/5 px-2 py-0.5 rounded-full"
                                >
                                  {product}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Arrow */}
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                            <svg 
                              className="w-4 h-4 sm:w-5 sm:h-5 text-foreground-muted group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}

              {/* Coming Soon Card */}
              <motion.div
                className="relative h-full min-h-[280px] sm:min-h-[320px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] border-dashed overflow-hidden flex items-center justify-center"
                {...fadeInUp(0.2)}
              >
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-10 sm:h-10 text-foreground-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                      <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-lg font-medium text-foreground-muted mb-1 sm:mb-2">
                    Yeni motorlar geliyor
                  </p>
                  <p className="text-xs sm:text-sm text-foreground-subtle">
                    Üzerinde çalışıyoruz...
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
          
          <Container size="narrow">
            <motion.div
              className="text-center"
              {...fadeInUp()}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-foreground-subtle">
                  Felsefemiz
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Teknoloji,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">
                  insana hizmet etmeli
                </span>
              </h2>

              <p className="text-sm sm:text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
                Her motor, gerçek bir ihtiyaçtan doğar. Karmaşıklığı içeride saklayıp,
                dışarıya sadelik sunarız. Kullanıcı teknolojiyi hissetmemeli, 
                sadece faydasını görmelidir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "Odaklı",
                    description: "Her motor tek bir şeyi çok iyi yapar",
                  },
                  {
                    icon: "🔧",
                    title: "Modüler",
                    description: "Parçalar bağımsız, birlikte güçlü",
                  },
                  {
                    icon: "🌱",
                    title: "Evrimsel",
                    description: "Kullanıldıkça öğrenir, gelişir",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                    {...fadeInUp(index * 0.1)}
                  >
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
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
