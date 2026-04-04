"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/sections";
import { Badge, Button, Card, Container, PageBackground } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

const featuredProducts = PRODUCTS.filter((product) => product.href);
const upcomingProducts = PRODUCTS.filter((product) => !product.href);

export default function ProductsPage() {
  return (
    <>
      <Header />
      <PageBackground />
      <main className="relative z-10 overflow-x-hidden pt-24 pb-20 sm:pt-28">
        <Container>
          <section className="relative mb-12 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent px-5 py-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mb-16 sm:px-10 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_right,rgba(99,102,241,0.14),transparent_35%)]" />
            <motion.div
              className="relative max-w-4xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground-muted">
                Products
              </span>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Ürün portföyümüz.
                <span className="gradient-text block">Canlıda olanlar ve sıradakiler.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                Orbira Labs ekosistemindeki canlı, testte ve geliştirme aşamasındaki ürünleri tek bir vitrinde topladık.
              </p>

              <div className="mt-7 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
                  <div className="text-xl font-semibold text-foreground sm:text-2xl">
                    {PRODUCTS.filter((product) => product.status === "live").length}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-foreground-subtle sm:text-xs sm:tracking-[0.18em]">
                    canlı
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
                  <div className="text-xl font-semibold text-foreground sm:text-2xl">
                    {PRODUCTS.filter((product) => product.status === "testing").length}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-foreground-subtle sm:text-xs sm:tracking-[0.18em]">
                    testte
                  </div>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/10 bg-black/20 p-3 sm:col-span-1 sm:p-4">
                  <div className="text-xl font-semibold text-foreground sm:text-2xl">
                    {PRODUCTS.filter((product) => !product.href).length}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-foreground-subtle sm:text-xs sm:tracking-[0.18em]">
                    sırada
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mb-14 sm:mb-20">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-brand-primary">Canlı Portföy</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  Erişilebilir ürünler
                </h2>
              </div>
              <p className="max-w-md text-sm text-foreground-muted md:text-right">
                Kullanıma açık ya da aktif test sürecinde olan ürünler.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card
                    variant="featured"
                    className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10 blur-3xl`} />
                    <div className="relative flex h-full flex-col">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="mb-4">
                            {product.logo ? (
                              <div className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-black/20">
                                <Image
                                  src={product.logo}
                                  alt={product.name}
                                  width={56}
                                  height={56}
                                  sizes="56px"
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-2xl shadow-lg shadow-black/20`}>
                                {product.icon}
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                            {product.name}
                          </h3>
                        </div>
                        <Badge status={product.status} className="self-start" />
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
                        {product.description}
                      </p>

                      {product.features && product.features.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {product.features.map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground-muted"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-8">
                        <Link href={product.href!}>
                          <Button variant="primary" size="md" className="w-full sm:w-auto">
                            Ürünü aç
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-14 sm:mb-20">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-secondary">Roadmap</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Sıradaki ürünler
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                Geliştirme, konsept ve hazırlık aşamasındaki ürünler. Kısa, net ve odaklı.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {upcomingProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Card variant="glass" className="h-full">
                    <div className="mb-4">
                      {product.logo ? (
                        <div className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-black/20">
                          <Image
                            src={product.logo}
                            alt={product.name}
                            width={48}
                            height={48}
                            sizes="48px"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-xl shadow-lg shadow-black/20`}>
                          {product.icon}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        {product.name}
                      </h3>
                      <Badge status={product.status} className="self-start" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                      {product.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl sm:px-8">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-foreground-muted">
                  Bir ürün hakkında daha fazla bilgi ya da erken erişim talebi için bize yazın.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/support">
                  <Button variant="primary" size="md">İletişime geç</Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary" size="md">Orbira Labs</Button>
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
