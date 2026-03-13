"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeader, Badge, Button, OrbitalBackground } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

export function FeaturedProduct() {
  const kasabende = PRODUCTS.find((p) => p.id === "kasabende")!;

  return (
    <section className="section-padding relative overflow-hidden" id="featured">
      <OrbitalBackground variant="subtle" />
      
      <Container className="relative z-10">
        <SectionHeader
          tag="Flagship Product"
          title="Canlı ürünümüz"
          titleHighlight="KasaBende"
        />

        <motion.div
          className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-[2rem] border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-5 sm:p-8 md:p-12">
            {/* Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  ₺
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {kasabende.name}
                  </h3>
                  <Badge status="live" className="mt-1" />
                </div>
              </div>

              <p className="text-base sm:text-lg text-foreground-muted mb-6 sm:mb-8 leading-relaxed">
                {kasabende.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {kasabende.features?.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/products/kasabende" className="w-full sm:w-fit">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Ürün sayfasını incele
                </Button>
              </Link>
            </div>

            {/* Mockup / Visual */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 py-4 sm:py-0">
              <div className="relative flex items-center justify-center">
                {/* Left phone - secondary */}
                <motion.div
                  className="relative z-0 -mr-4 sm:-mr-6 lg:-mr-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 0.6, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-[80px] h-[160px] sm:w-[100px] sm:h-[200px] lg:w-[140px] lg:h-[280px] rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1 sm:p-1.5 shadow-xl">
                    <div className="w-full h-full rounded-[0.75rem] sm:rounded-[1.25rem] lg:rounded-[1.75rem] bg-zinc-950 overflow-hidden relative">
                      <Image
                        src="/images/kasabende-firms.png"
                        alt="KasaBende Firms"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Center phone - main */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-[140px] h-[280px] sm:w-[180px] sm:h-[360px] lg:w-[240px] lg:h-[480px] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 sm:p-2 shadow-2xl">
                    <div className="w-full h-full rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2.25rem] bg-zinc-950 overflow-hidden relative">
                      <Image
                        src="/images/kasabende-overview.png"
                        alt="KasaBende App"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right phone - secondary */}
                <motion.div
                  className="relative z-0 -ml-4 sm:-ml-6 lg:-ml-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 0.6, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-[80px] h-[160px] sm:w-[100px] sm:h-[200px] lg:w-[140px] lg:h-[280px] rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1 sm:p-1.5 shadow-xl">
                    <div className="w-full h-full rounded-[0.75rem] sm:rounded-[1.25rem] lg:rounded-[1.75rem] bg-zinc-950 overflow-hidden relative">
                      <Image
                        src="/images/kasabende-cash.png"
                        alt="KasaBende Cash"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
