"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import { TEAM_MEMBERS } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Founder() {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative" id="about">
      <Container>
        <SectionHeader
          tag="Ekip"
          title="Marka arkasındaki"
          titleHighlight="insanlar."
        />

        {/* Ekip Kartları - Yan Yana, Sadece Fotoğraf + İsim + Rol */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-2xl mx-auto mb-8 sm:mb-10"
          initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative mx-auto mb-3 sm:mb-4 ring-2 ring-white/10 hover:ring-brand-primary/30 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                {member.name}
              </h3>
              <p className="text-brand-primary font-medium text-[10px] sm:text-xs lg:text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hakkımızda Sayfasına Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors text-sm sm:text-base"
          >
            Hikayemizi keşfedin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
