"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, AtomAnimation, HAELogo } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const CAPABILITIES = [
  {
    title: "Örüntü Tanıma",
    description: "Yüzeyde görünmeyen bağlantıları keşfeder. Binlerce sinyal, tek bir profilde birleşir.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Zaman Tutarlılığı",
    description: "Anlık değil, bütünsel değerlendirme. Geçmiş, şimdi ve gelecek tek bir perspektifte.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Kendini Geliştirme",
    description: "Her etkileşimde daha keskin. Kullanıldıkça öğrenen, zamanla daha doğru sonuçlar veren sistem.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Gizlilik Odaklı",
    description: "Hassas veriler cihazında kalır. Sunuculara sadece işlenmiş özetler gider.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

const ANALYSIS_DOMAINS = [
  { name: "Fiziksel Katman", desc: "Biyolojik sinyal işleme", color: "from-emerald-500/20 to-emerald-500/5", borderColor: "border-emerald-500/30" },
  { name: "Bilişsel Katman", desc: "Durum ve bağlam çıkarımı", color: "from-violet-500/20 to-violet-500/5", borderColor: "border-violet-500/30" },
  { name: "Davranışsal Katman", desc: "Kalıp ve tercih analizi", color: "from-amber-500/20 to-amber-500/5", borderColor: "border-amber-500/30" },
];

const SIGNALS = [
  { label: "Biyolojik Sinyaller", delay: 0 },
  { label: "Davranış Kalıpları", delay: 0.1 },
  { label: "Bağlam Verileri", delay: 0.2 },
];

const PROCESSING_LAYERS = [
  { name: "Veri Toplama" },
  { name: "Örüntü Keşfi" },
  { name: "Bağlam Analizi" },
  { name: "Profil Sentezi" },
];

const STATS = [
  { value: "3.000+", label: "Parametre", desc: "Her profil için değerlendirilen faktör" },
  { value: "%88", label: "Kapsam", desc: "Hedef kitleye ulaşım oranı" },
  { value: "<1sn", label: "Yanıt Süresi", desc: "Gerçek zamanlı işleme" },
  { value: "~%94", label: "Doğruluk", desc: "Profil tahmin hassasiyeti" },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function HAEPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-700/10 pointer-events-none" />
          
          {!isMobile && (
            <>
              <motion.div
                className="absolute -top-10 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}

          <Container className="relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AtomAnimation size="lg" className="mx-auto mb-4" animate={!isMobile} />

              <HAELogo size="lg" className="mb-4" />

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">Human Analysis Engine</p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                İnsanı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400">
                  gerçekten anlayan
                </span>{" "}
                teknoloji.
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Çoklu veri kaynaklarından anlam çıkaran, her kullanıcıyı benzersiz bir profil olarak modelleyen analiz motoru. 
                Binlerce parametreyi işler, gizli bağlantıları keşfeder.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-mono text-emerald-400">Production Ready</span>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-8 sm:py-12 relative">
          <Container>
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground-muted">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Architecture Visualization */}
        <section className="section-padding relative">
          <Container>
            <motion.div {...fadeInUp()}>
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3 sm:px-6 sm:py-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="order-3 flex w-full justify-start sm:order-none sm:w-auto sm:flex-1 sm:justify-center">
                    <span className="text-xs font-mono text-foreground-subtle tracking-wider">hae.engine.core</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400/80">active</span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-14">
                  {/* Input Signals */}
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Veri Kaynakları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-4">
                      {SIGNALS.map((signal) => (
                        <motion.div
                          key={signal.label}
                          className="group relative min-w-[220px] snap-start rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:min-w-0 sm:p-5"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: signal.delay }}
                          whileHover={isMobile ? {} : { y: -3, borderColor: "rgba(122,132,113,0.3)" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-pulse" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{signal.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Processing Layers */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">İşleme Katmanları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {PROCESSING_LAYERS.map((layer, index) => (
                        <motion.div
                          key={layer.name}
                          className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                            <span className="text-xs font-mono text-cyan-400">{index + 1}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{layer.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Core Engine */}
                  <motion.div
                    className="relative max-w-2xl mx-auto mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="relative p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent overflow-hidden">
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(122,132,113,0.3), transparent)", backgroundSize: "200% 100%" }}
                          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      <div className="relative z-10 text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Analiz Çekirdeği</h3>
                        <p className="text-sm text-foreground-muted">Tüm katmanların birleştiği nokta. Profil sentezi burada gerçekleşir.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Flow */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Output */}
                  <motion.div
                    className="max-w-xl mx-auto p-5 sm:p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-cyan-500/10 border border-cyan-500/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Output Ready</span>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-foreground mb-1">Kişiselleştirilmiş Profil</p>
                    <p className="text-sm text-foreground-muted">Sana özel içgörüler ve öneriler. Genel değil, bireysel.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Analysis Domains */}
        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-10 sm:mb-14" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Analiz Alanları</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Üç temel alan, sonsuz kombinasyon. Her alan kendi içinde derinleşir, birlikte bütünleşir.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {ANALYSIS_DOMAINS.map((domain, index) => (
                <motion.div
                  key={domain.name}
                  className={`rounded-xl border bg-gradient-to-b p-3 sm:rounded-2xl sm:p-8 ${domain.color} ${domain.borderColor}`}
                  {...fadeInUp(index * 0.1)}
                  whileHover={isMobile ? {} : { y: -5 }}
                >
                  <h3 className="text-sm sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{domain.name}</h3>
                  <p className="text-[10px] sm:text-base text-foreground-muted leading-snug">{domain.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Capabilities */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />
          
          <Container>
            <motion.div className="text-center mb-10 sm:mb-14" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Temel Yetenekler</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">Yılların Ar-Ge&apos;si, tek bir sistemde.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {CAPABILITIES.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 hover:border-cyan-500/30 sm:rounded-2xl sm:p-8"
                  {...fadeInUp(index * 0.1)}
                  whileHover={isMobile ? {} : { y: -3 }}
                >
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 sm:mb-4 group-hover:bg-cyan-500/15 transition-colors [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{cap.title}</h3>
                  <p className="text-[10px] sm:text-base text-foreground-muted leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center mb-10" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Nasıl Çalışır?</h2>
            </motion.div>

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-1 sm:gap-0 sm:space-y-6">
              {[
                { step: "01", title: "Veri Toplama", desc: "Günlük check-in'lerinden, döngü verilerinden ve davranış kalıplarından anlamlı sinyaller çıkarılır." },
                { step: "02", title: "Örüntü Keşfi", desc: "Yapay zeka, binlerce parametre arasındaki gizli bağlantıları tespit eder. Sen fark etmeden önce." },
                { step: "03", title: "Profil Sentezi", desc: "Tüm veriler birleşerek sana özel, dinamik bir profil oluşturur. Her gün biraz daha doğru." },
                { step: "04", title: "İçgörüler", desc: "Profilin, sana özel öneriler ve tahminler üretir. Genel değil, sadece sana ait." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-1.5 sm:gap-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 sm:border-0 sm:bg-transparent sm:p-0 sm:rounded-none"
                  {...fadeInUp(index * 0.1)}
                >
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] sm:text-base font-mono font-bold text-cyan-400">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-[11px] sm:text-lg font-semibold text-foreground sm:mb-1">{item.title}</h3>
                    <p className="hidden sm:block text-base text-foreground-muted leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Quote */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center py-8 sm:py-12" {...fadeInUp()}>
              <div className="text-4xl sm:text-5xl mb-6 opacity-20">&ldquo;</div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
                Teknoloji insanı anlamalı,<br />
                <span className="text-cyan-400">insan teknolojiyi değil.</span>
              </p>
              <p className="text-sm text-foreground-subtle">— HAE Felsefesi</p>
            </motion.div>
          </Container>
        </section>

        {/* Used In */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center" {...fadeInUp()}>
              <p className="text-sm text-foreground-subtle mb-4">Şu anda kullanılıyor</p>
              <Link href="/products/moodumuz" className="group inline-block px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <span className="text-xl font-semibold text-foreground group-hover:text-cyan-400 transition-colors">Moodumuz</span>
                <p className="text-sm text-foreground-muted mt-1">Döngü & Ruh Hali Takibi</p>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Back */}
        <section className="pb-12 sm:pb-20">
          <Container>
            <div className="flex justify-center">
              <Link href="/engines" className="text-brand-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base py-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Tüm motorlar
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
