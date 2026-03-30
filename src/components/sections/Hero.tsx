"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 pb-20">
      <Container className="relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Tagline */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-foreground-muted bg-white/5 rounded-full border border-border"
              whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Independent Product Lab
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.15] mb-4 sm:mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sade ürünler.
            </motion.span>
            <br />
            <motion.span 
              className="gradient-text inline-block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Akıcı deneyimler.
            </motion.span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-row items-center justify-center gap-3 sm:gap-4"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="#featured" className="flex-1 sm:flex-none">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Ürünleri keşfet
                </Button>
              </motion.div>
            </Link>
            <Link href="#about" className="flex-1 sm:flex-none">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Bizi tanıyın
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="flex justify-center mt-10 sm:mt-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border border-border/50 flex items-start justify-center p-2 backdrop-blur-sm"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-1 h-2 bg-brand-primary/60 rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
