"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Badge, Button, OrbitalBackground } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

const FEATURES = [
  {
    icon: "💰",
    title: "Kasa Takibi",
    description: "TRY, USD, EUR, GBP ve RUB para birimleriyle anlık kasa durumunuzu görüntüleyin.",
  },
  {
    icon: "📊",
    title: "Alacak & Verecek",
    description: "Firma bazlı borç ve alacak kayıtlarınızı detaylı şekilde takip edin.",
  },
  {
    icon: "💳",
    title: "Tahsilat & Ödeme",
    description: "Nakit, havale veya kredi kartı ile tüm işlemlerinizi kayıt altına alın.",
  },
  {
    icon: "🔄",
    title: "Döviz İşlemleri",
    description: "Para birimleri arası dönüşüm yapın, her işlem izlenebilir şekilde kayıt altında.",
  },
  {
    icon: "📅",
    title: "Gün Sonu Sayımı",
    description: "Her gün sonunda kasanızı sayın, sistem ile karşılaştırın ve farklılıkları görün.",
  },
  {
    icon: "📱",
    title: "Offline Çalışma",
    description: "İnternet olmadan da çalışın, bağlantı geldiğinde otomatik senkronize edin.",
  },
];

const BUSINESS_TYPES = [
  "Market", "Süpermarket", "Bakkal", "Kasap", "Manav", "Eczane",
  "Kırtasiye", "Restoran", "Kafe", "Kuaför", "Berber", "Otopark", "Benzinlik"
];

const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Hesap Oluştur",
    description: "Google veya Apple ile hızlıca giriş yapın, ad soyadınızı girin.",
  },
  {
    step: "02",
    title: "İşletme Bilgileri",
    description: "İşletme adı, türü ve konumunu belirleyin. Perakende veya toptancı modunu seçin.",
  },
  {
    step: "03",
    title: "Ekibinizi Davet Edin",
    description: "6 haneli kod veya QR ile çalışanlarınızı işletmenize ekleyin.",
  },
  {
    step: "04",
    title: "Kullanmaya Başlayın",
    description: "İlk işleminizi girin ve kasanızı güvenle yönetmeye başlayın.",
  },
];

const TIPS = [
  {
    title: "Gün Sonu Alışkanlığı",
    description: "Her akşam kasanızı sayın ve sisteme girin. Düzenli takip, hataları önler.",
    mode: "Perakende",
  },
  {
    title: "Gelir-Gider Takibi",
    description: "Her hareketi anında kaydedin. Küçük tutarlar bile zaman içinde fark yaratır.",
    mode: "Tüm Modlar",
  },
  {
    title: "Ertesi Gün Yansıma",
    description: "Hareketler ertesi gün kasaya yansır. Günlük analizi takip edin.",
    mode: "Perakende",
  },
  {
    title: "Ekip Koordinasyonu",
    description: "Birden fazla kişi işlem girebilir. Her kayıt kimin girdiğini gösterir.",
    mode: "Tüm Modlar",
  },
];

export default function KasaBendePage() {
  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <OrbitalBackground />
          
          {/* Emerald gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 pointer-events-none" />
          
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/20">
                    <Image
                      src="/images/kasabende-icon.png"
                      alt="KasaBende"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                      KasaBende
                    </h1>
                    <Badge status="live" className="mt-2" />
                  </div>
                </div>

                <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  Kasanız Artık Güvende
                </p>

                <p className="text-lg text-foreground-muted mb-8 leading-relaxed max-w-xl">
                  Küçük ve orta ölçekli işletmeler için modern kasa ve operasyon yönetimi. 
                  Finansal işlemlerinizi kolayca takip edin, işletmenizi daha verimli yönetin.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#features">
                    <Button variant="primary" size="lg">
                      Özellikleri Keşfet
                    </Button>
                  </Link>
                  <Link href="#onboarding">
                    <Button variant="secondary" size="lg">
                      Nasıl Başlarım?
                    </Button>
                  </Link>
                </div>

                {/* Store badges placeholder */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground-muted">
                    📱 iOS & Android&apos;de
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400">
                    ✓ Ücretsiz Kullanım
                  </div>
                </div>
              </motion.div>

              {/* Phone Mockups */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Left phone */}
                  <motion.div
                    className="relative z-0 -mr-8"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-[120px] h-[240px] sm:w-[140px] sm:h-[280px] lg:w-[180px] lg:h-[360px] rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-xl opacity-60">
                      <div className="w-full h-full rounded-[1.25rem] sm:rounded-[1.75rem] bg-zinc-950 overflow-hidden relative">
                        <Image
                          src="/images/kasabende-firms.png"
                          alt="KasaBende Firmalar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Center phone - main */}
                  <motion.div
                    className="relative z-20"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] lg:w-[280px] lg:h-[560px] rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-zinc-600 to-zinc-900 p-2 shadow-2xl shadow-emerald-500/10">
                      <div className="w-full h-full rounded-[1.75rem] sm:rounded-[2.25rem] bg-zinc-950 overflow-hidden relative">
                        <Image
                          src="/images/kasabende-overview.png"
                          alt="KasaBende Özet"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right phone */}
                  <motion.div
                    className="relative z-10 -ml-8"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="w-[120px] h-[240px] sm:w-[140px] sm:h-[280px] lg:w-[180px] lg:h-[360px] rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-xl opacity-60">
                      <div className="w-full h-full rounded-[1.25rem] sm:rounded-[1.75rem] bg-zinc-950 overflow-hidden relative">
                        <Image
                          src="/images/kasabende-cash.png"
                          alt="KasaBende Kasa"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl flex items-center justify-center text-3xl"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  💰
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/20 backdrop-blur-xl flex items-center justify-center text-2xl"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  📊
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="section-padding relative" id="features">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                Özellikler
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                İşletmeniz için{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  her şey bir arada
                </span>
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Kasa takibinden tahsilat yönetimine, tüm finansal operasyonlarınızı tek bir uygulamadan yönetin.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Business Modes Section */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                  İş Modelleri
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Perakende mi, Toptancı mı?{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Size uygun mod
                  </span>
                </h2>
                <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                  İşletme türünüze göre özelleştirilmiş deneyim. Perakendeciler için günlük kasa sayımı, 
                  toptancılar için firma bazlı tahsilat takibi.
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-lg">
                        🏪
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Perakende Modu</h3>
                    </div>
                    <p className="text-foreground-muted text-sm ml-13">
                      Günlük satış, akşam kasa sayımı. Hareketler sabah 05:00&apos;te kasaya yansır.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-lg">
                        🏭
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Toptancı Modu</h3>
                    </div>
                    <p className="text-foreground-muted text-sm ml-13">
                      Firmalara satış, tahsilat takibi. Sistem günü otomatik kapatır.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Desteklenen İşletme Türleri</h3>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_TYPES.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground-muted hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default"
                      >
                        {type}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400">
                      + Daha fazlası
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* App Screenshots Gallery */}
        <section className="section-padding relative overflow-hidden">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
                Uygulama
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Modern ve{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  kullanımı kolay
                </span>
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Sezgisel arayüz ile saniyeler içinde işlem girin, anında raporlara erişin.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: "/images/kasabende-overview.png", title: "Günlük Özet", desc: "Tüm bakiyeler tek bakışta" },
                { src: "/images/kasabende-firms.png", title: "Firma Rehberi", desc: "Alacak-verecek takibi" },
                { src: "/images/kasabende-cash.png", title: "Kasa Durumu", desc: "Çoklu para birimi desteği" },
                { src: "/images/kasabende-staff.png", title: "Ekip Yönetimi", desc: "Çalışan davet ve yetkilendirme" },
              ].map((screen, index) => (
                <motion.div
                  key={screen.title}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-700 to-zinc-900 p-1 mb-4 group-hover:shadow-xl group-hover:shadow-emerald-500/10 transition-shadow duration-300">
                    <div className="w-full h-full rounded-[14px] bg-zinc-950 overflow-hidden relative">
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{screen.title}</h3>
                  <p className="text-sm text-foreground-muted">{screen.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Onboarding Section */}
        <section className="section-padding relative bg-gradient-to-b from-transparent via-background-secondary to-transparent" id="onboarding">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
                Başlangıç
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Dakikalar içinde{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  hazır olun
                </span>
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Hızlı kurulum süreci ile işletmenizi saniyeler içinde sisteme ekleyin.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ONBOARDING_STEPS.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-emerald-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                  
                  {index < ONBOARDING_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Tips Section */}
        <section className="section-padding relative">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
                İpuçları
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Verimli kullanım için{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  öneriler
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {TIPS.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{tip.title}</h3>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-xs">
                      {tip.mode}
                    </span>
                  </div>
                  <p className="text-foreground-muted leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div
              className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 text-center overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                  <Image
                    src="/images/kasabende-icon.png"
                    alt="KasaBende"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Kasanızı Güvene Alın
                </h2>
                
                <p className="text-lg text-foreground-muted mb-8 max-w-lg mx-auto">
                  Şimdi indirin, ücretsiz kullanmaya başlayın. İşletmenizi modern araçlarla yönetin.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-foreground-muted">App Store&apos;dan</div>
                      <div className="text-sm font-semibold">İndirin</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-foreground-muted">Google Play&apos;den</div>
                      <div className="text-sm font-semibold">İndirin</div>
                    </div>
                  </a>
                </div>

                <p className="mt-6 text-sm text-foreground-subtle">
                  Powered by <span className="text-foreground-muted">Orbira Labs</span>
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back to home */}
        <section className="pb-20">
          <Container>
            <div className="flex justify-center">
              <Link
                href="/"
                className="text-brand-primary hover:underline inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana sayfaya dön
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
