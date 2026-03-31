"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Card, Button } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { TEAM_MEMBERS, ABOUT_CONTENT } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <Container>
          {/* Hero */}
          <motion.div
            className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-4 sm:mb-6">
              Hakkımızda
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Dijital ürünler{" "}
              <span className="gradient-text">inşa ediyoruz.</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-4">
              {ABOUT_CONTENT.intro}
            </p>
            <p className="text-sm sm:text-base text-foreground-subtle leading-relaxed">
              {ABOUT_CONTENT.introSub}
            </p>
          </motion.div>

          {/* Yaklaşım */}
          <motion.div
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glass" className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                {ABOUT_CONTENT.approach.title}
              </h2>
              <div className="space-y-4">
                {ABOUT_CONTENT.approach.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Nasıl Çalışıyoruz */}
          <motion.div
            className="max-w-3xl mx-auto mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glass" className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                {ABOUT_CONTENT.howWeWork.title}
              </h2>
              <div className="space-y-4">
                {ABOUT_CONTENT.howWeWork.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Ekip Başlığı */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Ekip
            </h2>
          </motion.div>

          {/* Ekip Kartları */}
          <div className="space-y-8 sm:space-y-10 max-w-3xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-5 mb-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative flex-shrink-0 ring-2 ring-white/10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className={member.imageClassName || "object-cover"}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-brand-primary font-medium text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
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

          {/* Kapanış */}
          <motion.div
            className="text-center mt-16 sm:mt-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-8">
              {ABOUT_CONTENT.closing}
            </p>
            <p className="text-foreground-subtle text-sm sm:text-base mb-6">
              Ürünlerimizi keşfetmek veya bizimle çalışmak isterseniz, iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/products">
                <Button variant="primary" size="lg">
                  Ürünleri Keşfet
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="secondary" size="lg">
                  İletişime Geç
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
