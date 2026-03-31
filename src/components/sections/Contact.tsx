"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Contact() {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative" id="contact">
      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center px-2"
          initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: isMobile ? 0.25 : 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4 sm:mb-6">
            Bir fikir, iş birliği veya merak ettiğiniz bir şey varsa{" "}
            <span className="gradient-text">konuşalım.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted mb-8 sm:mb-10 leading-relaxed">
            Yeni projeler, ortaklıklar veya genel sorular için iletişime geçin.
          </p>

          {/* Contact pathways */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            <motion.div
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-border text-left transition-all duration-300 hover:border-border-hover hover:-translate-y-1"
              whileHover={isMobile ? {} : { scale: 1.02 }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">İş birliği</h3>
              <p className="text-xs sm:text-sm text-foreground-muted">
                Yeni projeler ve ortaklık fırsatları için.
              </p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-border text-left transition-all duration-300 hover:border-border-hover hover:-translate-y-1"
              whileHover={isMobile ? {} : { scale: 1.02 }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-secondary/20 flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Genel iletişim</h3>
              <p className="text-xs sm:text-sm text-foreground-muted">
                Sorular, geri bildirimler ve öneriler için.
              </p>
            </motion.div>
          </div>

          {/* Email */}
          <div className="mb-6 sm:mb-8">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-foreground hover:text-brand-primary transition-colors break-all"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">{SITE_CONFIG.email}</span>
            </a>
          </div>

          {/* CTA */}
          <a href={`mailto:${SITE_CONFIG.email}`} className="inline-block w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              İletişime geç
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
