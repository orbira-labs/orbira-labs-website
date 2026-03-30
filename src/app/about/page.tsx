"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Card, Button } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { TEAM_MEMBERS, TEAM_TAGLINE } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function AboutPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <Container>
          {/* Hero */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-4 sm:mb-6">
              Hakkımızda
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Marka arkasındaki{" "}
              <span className="gradient-text">insanlar.</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto">
              {TEAM_TAGLINE}
            </p>
          </motion.div>

          {/* Hikayeler Bölümü */}
          <div className="space-y-12 sm:space-y-16">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start gap-4 sm:gap-6 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative flex-shrink-0 ring-2 ring-white/10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                        {member.name}
                      </h2>
                      <p className="text-brand-primary font-medium text-sm sm:text-base">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {member.fullBio?.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground-muted mb-6">
              Projelerimizi keşfedin ve vizyonumuzu deneyimleyin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#products">
                <Button variant="primary" size="lg">
                  Ürünleri Keşfet
                </Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" size="lg">
                  Ana Sayfaya Dön
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
