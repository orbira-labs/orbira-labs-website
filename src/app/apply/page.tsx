"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
};

export default function BasvuruLandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-xl font-semibold text-foreground transition-colors group-hover:text-brand-primary">
                Orbira
              </span>
              <span className="text-xl font-semibold text-foreground-muted">
                Labs
              </span>
            </Link>
            <Link href="/apply/form">
              <Button variant="primary" size="sm">
                Başvuru Yap
              </Button>
            </Link>
          </div>
        </Container>
      </header>

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative pt-28 pb-16 md:pt-44 md:pb-28 lg:pb-32">
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="w-full relative z-10"
        >
          <Container>
            <motion.div
              className="max-w-3xl lg:max-w-4xl mx-auto text-center"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.1] mb-4 md:mb-5"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
              >
                <span className="text-foreground">İşletmenizi </span>
                <span className="gradient-text">dijitale taşıyoruz.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl lg:text-3xl text-foreground font-medium"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                Fikirden uygulamaya, tek adımda.
              </motion.p>
            </motion.div>
          </Container>
        </motion.div>
      </section>

      {/* ═══ HİZMETLER ═══ */}
      <section id="hizmetler" className="relative pt-8 pb-14 md:pt-16 md:pb-20 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/[0.04] to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-8 md:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Neler Yapıyoruz?
            </h2>
            <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
              Otel, restoran, klinik, hamam, kuaför, spa ve daha fazlası... 
              İşletmenizin dijital varlığını sıfırdan profesyonelce inşa ediyoruz. 
              Tasarımdan geliştirmeye, fotoğraf çekiminden video prodüksiyonuna kadar 
              tüm süreci biz yönetiyoruz. Siz işinize odaklanın, dijital dünyadaki 
              yerinizi biz oluşturalım.
            </p>
          </motion.div>

          {/* Mobil: dikey liste / Desktop: yan yana 3 kart */}
          <div className="max-w-md mx-auto space-y-3 md:hidden px-4">
            <ServiceCard
              emoji="🌐"
              title="Web Sitesi"
              desc="İşletmenizi tanıtan, her cihazda kusursuz çalışan profesyonel bir site. Müşterileriniz sizi Google'da bulsun."
              gradient="from-brand-primary/20 to-brand-secondary/10"
              delay={0}
              layout="horizontal"
            />
            <ServiceCard
              emoji="📱"
              title="Mobil Uygulama"
              desc="İşletmenize özel, kullanıcı dostu iPhone ve Android uygulamaları. Müşteriniz her an cebinde taşısın."
              gradient="from-cyan-500/20 to-blue-600/10"
              delay={0.08}
              layout="horizontal"
            />
            <ServiceCard
              emoji="🎬"
              title="Görsel Prodüksiyon"
              desc="Profesyonel fotoğraf, tanıtım videosu ve havadan drone çekimi. İşletmenizi biz görüntülüyor, biz tanıtıyoruz."
              gradient="from-rose-500/20 to-pink-600/10"
              delay={0.16}
              layout="horizontal"
            />
          </div>

          {/* Desktop: 3 sütun */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ServiceCard
              emoji="🌐"
              title="Web Sitesi"
              desc="İşletmenizi tanıtan, her cihazda kusursuz çalışan profesyonel bir site. Müşterileriniz sizi Google'da bulsun."
              gradient="from-brand-primary/20 to-brand-secondary/10"
              delay={0}
              layout="vertical"
            />
            <ServiceCard
              emoji="📱"
              title="Mobil Uygulama"
              desc="İşletmenize özel, kullanıcı dostu iPhone ve Android uygulamaları. Müşteriniz her an cebinde taşısın."
              gradient="from-cyan-500/20 to-blue-600/10"
              delay={0.1}
              layout="vertical"
            />
            <ServiceCard
              emoji="🎬"
              title="Görsel Prodüksiyon"
              desc="Profesyonel fotoğraf, tanıtım videosu ve havadan drone çekimi. İşletmenizi biz görüntülüyor, biz tanıtıyoruz."
              gradient="from-rose-500/20 to-pink-600/10"
              delay={0.2}
              layout="vertical"
            />
          </div>

        </Container>
      </section>

      {/* ═══ SÜREÇ ═══ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.07) 0%, transparent 60%)",
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Stars / space dots — edges */}
        {[
          { top: "15%", left: "8%", size: 2, delay: 0, dur: 4 },
          { top: "70%", left: "5%", size: 1.5, delay: 1.5, dur: 5 },
          { top: "30%", right: "6%", size: 2, delay: 0.8, dur: 3.5 },
          { top: "80%", right: "10%", size: 1.5, delay: 2, dur: 4.5 },
          { top: "50%", left: "12%", size: 1, delay: 0.5, dur: 6 },
          { top: "25%", right: "14%", size: 1, delay: 3, dur: 5 },
        ].map((dot, i) => (
          <motion.div
            key={`s-${i}`}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
            }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          />
        ))}

        <Container className="relative z-10">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Nasıl çalışıyor?
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-[340px] sm:max-w-lg md:max-w-4xl mx-auto">
            {/* Bağlantı çizgisi — adımları birbirine bağlar */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px bg-gradient-to-r from-brand-primary/30 via-brand-secondary/20 to-brand-primary/30" />

            {[
              {
                n: "1",
                title: "Formu doldurun",
                desc: "2 dakikada tamamlayın",
                icon: (
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.251 2.251 0 011.15.564m-5.8 0c-.376.023-.75.05-1.124.08C7.095 3.007 6.25 3.97 6.25 5.108v15.142A2.25 2.25 0 008.5 22.5h7a2.25 2.25 0 002.25-2.25v-.878" />
                  </svg>
                ),
              },
              {
                n: "2",
                title: "Sizi arayalım",
                desc: "24 saat içinde dönüş",
                icon: (
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
              },
              {
                n: "3",
                title: "Projenize çalışalım",
                desc: "Tasarım & geliştirme",
                icon: (
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
              },
              {
                n: "4",
                title: "Teklifinizi alın",
                desc: "Size özel çözüm",
                icon: (
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className="relative text-center group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 mb-3 md:mb-5"
                  whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] md:text-sm text-foreground-subtle">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 30%, transparent 65%)",
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.08) 0%, transparent 60%)",
            }}
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Stars / space dots — edges */}
        {[
          { top: "20%", left: "6%", size: 2, delay: 0.5, dur: 5 },
          { top: "65%", left: "10%", size: 1.5, delay: 2, dur: 4 },
          { top: "35%", right: "7%", size: 1.5, delay: 1, dur: 4.5 },
          { top: "75%", right: "12%", size: 2, delay: 0, dur: 3.5 },
          { top: "45%", left: "4%", size: 1, delay: 3, dur: 6 },
          { top: "55%", right: "5%", size: 1, delay: 1.5, dur: 5 },
        ].map((dot, i) => (
          <motion.div
            key={`c-${i}`}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
            }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          />
        ))}

        <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-background to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            className="max-w-lg md:max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-5 md:mb-8">
              Bir telefon kadar yakınız.
            </h2>
            <p className="text-foreground-muted text-base md:text-xl lg:text-2xl mb-8 md:mb-12 leading-relaxed">
              Ne istediğinizden emin olmak zorunda değilsiniz.
              Birlikte konuşalım, en uygun çözümü bulalım.
            </p>

            <Link href="/apply/form">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Button variant="primary" size="lg" className="md:px-10 md:py-5 md:text-base">
                  Başvuru Yap
                </Button>
              </motion.div>
            </Link>

            <motion.p
              className="text-foreground-subtle text-sm md:text-base mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              24 saat içinde dönüş yapıyoruz.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between text-sm text-foreground-muted">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <span className="font-medium text-foreground">Orbira</span>
              <span>Labs</span>
            </Link>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}

function ServiceCard({
  emoji,
  title,
  desc,
  gradient,
  delay,
  layout,
}: {
  emoji: string;
  title: string;
  desc: string;
  gradient: string;
  delay: number;
  layout: "horizontal" | "vertical";
}) {
  if (layout === "vertical") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -8, transition: { duration: 0.25 } }}
        className="group h-full"
      >
        <div
          className={`relative h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${gradient} border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10`}
        >
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-primary/[0.04] to-transparent pointer-events-none" />

          <span className="text-4xl block mb-5 relative z-10">{emoji}</span>

          <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
            {title}
          </h3>
          <p className="text-sm lg:text-base text-foreground-muted leading-relaxed relative z-10">
            {desc}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="group"
    >
      <div
        className={`relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r ${gradient} border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300`}
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-brand-primary/[0.03] to-transparent pointer-events-none" />

        <span className="text-2xl flex-shrink-0 relative z-10">{emoji}</span>

        <div className="relative z-10">
          <h3 className="text-base font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
