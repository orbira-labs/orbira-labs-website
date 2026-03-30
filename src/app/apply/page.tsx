"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Container, Button, PageBackground } from "@/components/ui";

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
    <main className="min-h-screen bg-background">
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
      <section ref={heroRef} className="relative pt-28 pb-32 md:pt-44 md:pb-52 lg:pb-64">
        <PageBackground />

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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.1] mb-5 md:mb-8"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
              >
                <span className="text-foreground">İşletmenizi </span>
                <span className="gradient-text">dijitale taşıyoruz.</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-xl lg:text-2xl text-foreground-muted max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                Restoranlar, oteller, kuaförler, klinikler ve daha fazlası.
                Web sitenizden uygulamanıza, çekimlerinize kadar
                her şeyi biz hallediyoruz.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <Link href="#hizmetler">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block"
                  >
                    <Button variant="secondary" size="lg">
                      Neler Yapıyoruz?
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </motion.div>
      </section>

      {/* ═══ HİZMETLER ═══ */}
      <section id="hizmetler" className="relative pt-4 pb-14 md:pt-8 md:pb-20 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/[0.04] to-transparent pointer-events-none" />

        <Container className="relative z-10">
          {/* Mobil: dikey liste / Desktop: yan yana 3 kart */}
          <div className="max-w-2xl mx-auto space-y-3 md:hidden">
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

          <div className="grid grid-cols-3 gap-4 md:gap-10 max-w-xs md:max-w-3xl mx-auto">
            {[
              { n: "1", title: "Formu doldurun" },
              { n: "2", title: "Sizi arayalım" },
              { n: "3", title: "Teklifinizi alın" },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className="text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-base md:text-lg font-bold mb-3 md:mb-4 shadow-lg shadow-brand-primary/20"
                  whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.n}
                </motion.div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
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
