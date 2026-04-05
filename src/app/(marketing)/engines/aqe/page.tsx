"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, QuestionPulseAnimation, AQELogo } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";




const QUESTION_TIERS = [
  { 
    name: "Core Layer", 
    count: "L1",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    dotColor: "bg-emerald-400"
  },
  { 
    name: "Routing Layer", 
    count: "L2",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/30",
    dotColor: "bg-violet-400"
  },
  { 
    name: "Deep Dive Layer", 
    count: "L3",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    dotColor: "bg-amber-400"
  },
];

const FLOW_STEPS = [
  { label: "Profil", sublabel: "Universal baseline" },
  { label: "Core", sublabel: "Temel sinyal toplama" },
  { label: "AI Gate", sublabel: "Coherence + Anomaly" },
  { label: "Route", sublabel: "Havuz aktivasyonu" },
  { label: "Deep Dive", sublabel: "Odaklı keşif" },
  { label: "Pipeline", sublabel: "HAE + AI Rapor" },
];

const STATS = [
  { value: "∞", label: "Soru Akışı", desc: "Sonsuz kombinasyon" },
  { value: "3.500+", label: "Soru Kütüphanesi", desc: "Klinik tasarımlı" },
  { value: "<0.5sn", label: "Yanıt Süresi", desc: "Gerçek zamanlı" },
  { value: "1B+", label: "Benzersiz Yol", desc: "Aynı test yok" },
];




const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function AQEPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
          
          {!isMobile && (
            <>
              <motion.div
                className="absolute top-1/3 left-1/3 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
              <div className="mb-6 flex items-center justify-center gap-2 text-xs text-foreground-muted sm:mb-8 sm:text-sm">
                <Link href="/engines" className="hover:text-foreground transition-colors">Engines</Link>
                <span className="text-foreground-subtle">/</span>
                <span className="text-violet-400">AQE</span>
              </div>

              <QuestionPulseAnimation size="lg" className="mx-auto mb-4" animate={!isMobile} />

              <AQELogo size="lg" className="mb-4" />

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">Adaptive Question Engine</p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Her kullanıcıya{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  farklı bir yol
                </span>
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Deterministik algoritmalar ve yapay zeka birlikte çalışır.
                %95 daha düşük maliyetle, daha yüksek doğruluk.
                Hiç kimse aynı testi almaz.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-sm font-mono text-violet-400">Production Ready</span>
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
                  <div className="text-3xl sm:text-4xl font-bold text-violet-400 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground-muted">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Flow Visualization */}
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
                    <span className="text-xs font-mono text-foreground-subtle tracking-wider">aqe.flow.engine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-mono text-violet-400/80">running</span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-14">
                  {/* Flow Steps */}
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Akış Süreci</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="relative">
                      <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-violet-500/20 via-violet-500/40 to-violet-500/20 hidden sm:block" />
                      
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                        {FLOW_STEPS.map((step, index) => (
                          <motion.div
                            key={step.label}
                            className="relative text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="relative z-10 w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 flex items-center justify-center">
                              <span className="text-lg font-bold text-violet-400">{index + 1}</span>
                            </div>
                            <p className="text-sm font-semibold text-foreground mb-1">{step.label}</p>
                            <p className="text-xs text-foreground-muted">{step.sublabel}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Question Tiers */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Soru Katmanları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {QUESTION_TIERS.map((tier, index) => (
                        <motion.div
                          key={tier.name}
                          className={`rounded-xl border bg-gradient-to-b p-2.5 sm:p-5 ${tier.color} ${tier.borderColor}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${tier.dotColor} flex-shrink-0`} />
                            <span className="text-[10px] sm:text-sm font-semibold text-foreground truncate">{tier.name}</span>
                            <span className="text-[9px] sm:text-xs font-mono text-foreground-muted ml-auto flex-shrink-0">{tier.count}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow: Tiers → AI Gate */}
                  <div className="flex justify-center py-3">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
                      <div className="w-px h-8 bg-gradient-to-b from-violet-500/40 to-amber-500/40" />
                      <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* AI Gate Layer */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">AI Doğrulama Katmanı</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <motion.div
                        className="relative rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-4 sm:p-6 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {!isMobile && (
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)", backgroundSize: "200% 100%" }}
                            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-[9px] sm:text-xs font-mono text-amber-400 uppercase tracking-wider">AI Layer</span>
                          </div>
                          <h4 className="text-sm sm:text-lg font-bold text-foreground mb-1 sm:mb-2">Coherence Shield</h4>
                          <p className="text-[10px] sm:text-sm text-foreground-muted leading-relaxed">Tutarlılık kontrolü. Çelişen yanıtları tespit eder, eksik havuzları açar, yanlış yönlendirmeleri düzeltir.</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative rounded-xl border border-rose-500/30 bg-gradient-to-b from-rose-500/10 to-transparent p-4 sm:p-6 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {!isMobile && (
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.15), transparent)", backgroundSize: "200% 100%" }}
                            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                          />
                        )}
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                            <span className="text-[9px] sm:text-xs font-mono text-rose-400 uppercase tracking-wider">AI Layer</span>
                          </div>
                          <h4 className="text-sm sm:text-lg font-bold text-foreground mb-1 sm:mb-2">Anomaly Interceptor</h4>
                          <p className="text-[10px] sm:text-sm text-foreground-muted leading-relaxed">Tutarsızlık tespiti. Sinyal çelişkilerini yakalar, doğrulama soruları enjekte eder, hata payını minimize eder.</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Arrow: AI Gate → Routing Kernel */}
                  <div className="flex justify-center py-3">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                      <div className="w-px h-8 bg-gradient-to-b from-amber-500/40 to-violet-500/40" />
                      <svg className="w-4 h-4 text-violet-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Core */}
                  <motion.div
                    className="relative max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="relative p-6 sm:p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent overflow-hidden">
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)", backgroundSize: "200% 100%" }}
                          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      <div className="relative z-10 text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Routing Kernel</h3>
                        <p className="text-sm text-foreground-muted mb-4">AI doğrulamasından geçen verilerle optimal yol hesaplanır. Entropy minimization + probabilistic routing.</p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-foreground-muted">Minimum soru</span>
                          </div>
                          <span className="text-foreground-subtle">•</span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-violet-400" />
                            <span className="text-foreground-muted">Maksimum bilgi</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* What You Get */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />
          
          <Container>
            <motion.div className="text-center mb-10 sm:mb-14" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Ne Elde Edersiniz?</h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Danışanınıza link gönderirsiniz. O soruları yanıtlar.
                Gerisini AQE halleder — kime hangi soruyu soracağını bilir.
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Kişiye Özel Soru Akışı",
                  desc: "Her danışan farklı sorular alır. Yaşına, cinsiyetine, yaşam koşullarına ve ilk yanıtlarına göre akış şekillenir. Klasik anketlerdeki gereksiz sorular yok.",
                  color: "border-violet-500/20",
                  iconBg: "bg-violet-500/10",
                  iconColor: "text-violet-400",
                  icon: <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
                },
                {
                  title: "Akıllı Derinleşme",
                  desc: "Stres skoru düşükse uyku ve stres alanlarında derinleşir. İlişki sorunu varsa ilişki havuzunu açar. Sorun olmayan alanları atlar, zamanı boşa harcamaz.",
                  color: "border-emerald-500/20",
                  iconBg: "bg-emerald-500/10",
                  iconColor: "text-emerald-400",
                  icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
                },
                {
                  title: "AI Doğrulama",
                  desc: "Yanıtlar arasındaki tutarsızlıkları yakalar. Çelişen cevaplar varsa doğrulama soruları enjekte eder. Hata payını minimize eder, güvenilir veri toplar.",
                  color: "border-amber-500/20",
                  iconBg: "bg-amber-500/10",
                  iconColor: "text-amber-400",
                  icon: <><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></>,
                },
                {
                  title: "Otomatik Analiz Tetikleme",
                  desc: "Sorular tamamlandığında çok katmanlı analiz pipeline otomatik çalışır. Siz hiçbir şey yapmadan sonuçlar hazır olur. Tek tıklama, tam analiz.",
                  color: "border-cyan-500/20",
                  iconBg: "bg-cyan-500/10",
                  iconColor: "text-cyan-400",
                  icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
                },
                {
                  title: "Danışan Deneyimi",
                  desc: "Danışanınız sıkılmaz. Ortalama tamamlanma süresi kısadır, sorular ilgi çekicidir ve kişiye özeldir. Her yanıt bir sonraki soruyu şekillendirir.",
                  color: "border-rose-500/20",
                  iconBg: "bg-rose-500/10",
                  iconColor: "text-rose-400",
                  icon: <><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></>,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-xl border ${item.color} bg-white/[0.02] p-4 sm:p-6 transition-all duration-300 hover:bg-white/[0.04]`}
                  {...fadeInUp(index * 0.08)}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.iconBg} border ${item.color} flex items-center justify-center ${item.iconColor} flex-shrink-0`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-base text-foreground-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Used In */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center" {...fadeInUp()}>
              <p className="text-sm text-foreground-subtle mb-4">Şu anda kullanılıyor</p>
              <Link href="/products/moodumuz" className="group inline-block px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                <span className="text-xl font-semibold text-foreground group-hover:text-violet-400 transition-colors">Moodumuz</span>
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
