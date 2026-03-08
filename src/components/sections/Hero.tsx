"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Button, OrbitalBackground } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 pb-20 overflow-hidden">
      <OrbitalBackground variant="hero" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center px-2">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-foreground-muted bg-white/5 rounded-full border border-border">
              Independent Product Lab
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.15] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-foreground">Sade ürünler.</span>
            <br />
            <span className="gradient-text">Akıcı deneyimler.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#products" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Ürünleri keşfet
              </Button>
            </Link>
            <Link href="#about" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Orbira Labs&apos;i tanı
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator - hidden on very small screens */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-foreground-muted rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
