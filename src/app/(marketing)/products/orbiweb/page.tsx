"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

type ServiceIconKey =
  | "website"
  | "mobile"
  | "design"
  | "hosting"
  | "seo"
  | "support";

type ServiceCard = {
  eyebrow: string;
  title: string;
  hook: string;
  description: string;
  icon: ServiceIconKey;
  iconTone: string;
  borderTone: string;
  backgroundTone: string;
};

const SERVICES: ServiceCard[] = [
  {
    eyebrow: "Ana Hizmet",
    title: "Özel Web Sitesi",
    hook: "Markanıza özel, sıfırdan tasarlanmış profesyonel web siteleri.",
    description:
      "Hazır şablon yok — her proje markanıza özel tasarlanır. Modern, hızlı ve mobil uyumlu web siteleri ile işletmenizi dijitalde en iyi şekilde temsil edin.",
    icon: "website",
    iconTone: "text-[#7C3AED]",
    borderTone: "border-[#7C3AED]/25 hover:border-[#7C3AED]/45",
    backgroundTone: "from-[#7C3AED]/14 via-[#4F46E5]/8 to-transparent",
  },
  {
    eyebrow: "Dijital Varlık",
    title: "Mobil Uygulama",
    hook: "iOS ve Android için native mobil uygulamalar.",
    description:
      "Müşterilerinizin cebinde olun. Rezervasyon, sipariş, sadakat programı ve daha fazlası için özel mobil uygulamalar geliştiriyoruz.",
    icon: "mobile",
    iconTone: "text-[#4F46E5]",
    borderTone: "border-[#4F46E5]/20 hover:border-[#4F46E5]/40",
    backgroundTone: "from-[#4F46E5]/12 via-[#4F46E5]/6 to-transparent",
  },
  {
    eyebrow: "Görsel Kimlik",
    title: "Tasarım & İçerik",
    hook: "Logo, görsel içerik ve tanıtım materyalleri.",
    description:
      "Web sitenizle uyumlu logo tasarımı, sosyal medya görselleri ve tanıtım materyalleri. Markanızın dijital kimliğini bütünlüklü oluşturuyoruz.",
    icon: "design",
    iconTone: "text-[#EC4899]",
    borderTone: "border-[#EC4899]/20 hover:border-[#EC4899]/40",
    backgroundTone: "from-[#EC4899]/12 via-[#EC4899]/6 to-transparent",
  },
  {
    eyebrow: "Teknik Altyapı",
    title: "Domain & Hosting",
    hook: "Tüm teknik işleri biz halledelim.",
    description:
      "Domain kaydı, hosting kurulumu, SSL sertifikası ve e-posta yapılandırması. Siz işinize odaklanın, teknik detayları bize bırakın.",
    icon: "hosting",
    iconTone: "text-[#10B981]",
    borderTone: "border-[#10B981]/20 hover:border-[#10B981]/40",
    backgroundTone: "from-[#10B981]/12 via-[#10B981]/6 to-transparent",
  },
  {
    eyebrow: "Görünürlük",
    title: "SEO & Performans",
    hook: "Google'da üst sıralarda yer alın.",
    description:
      "Arama motoru optimizasyonu, sayfa hızı iyileştirmeleri ve analytics entegrasyonu. Sitenizin performansını sürekli takip ediyoruz.",
    icon: "seo",
    iconTone: "text-[#F59E0B]",
    borderTone: "border-[#F59E0B]/20 hover:border-[#F59E0B]/40",
    backgroundTone: "from-[#F59E0B]/12 via-[#F59E0B]/6 to-transparent",
  },
  {
    eyebrow: "Sürekli Destek",
    title: "Bakım & Güncelleme",
    hook: "Siteniz her zaman güncel ve güvende.",
    description:
      "Düzenli yedekleme, güvenlik güncellemeleri ve içerik değişiklikleri. İhtiyacınız olduğunda yanınızdayız.",
    icon: "support",
    iconTone: "text-[#7C3AED]",
    borderTone: "border-[#7C3AED]/20 hover:border-[#7C3AED]/40",
    backgroundTone: "from-[#7C3AED]/12 via-[#7C3AED]/6 to-transparent",
  },
];

function ServiceIcon({ icon, className = "" }: { icon: ServiceIconKey; className?: string }) {
  switch (icon) {
    case "website":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="10" width="36" height="28" rx="4" />
          <path d="M6 18h36" />
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
          <circle cx="18" cy="14" r="1.5" fill="currentColor" />
          <circle cx="24" cy="14" r="1.5" fill="currentColor" />
          <path d="M14 26h20" />
          <path d="M14 32h12" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="24" height="36" rx="4" />
          <path d="M20 10h8" />
          <circle cx="24" cy="36" r="2" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" />
          <path d="M4 14l20 10" />
          <path d="M44 14l-20 10" />
          <path d="M24 24v20" />
        </svg>
      );
    case "hosting":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="12" rx="2" />
          <rect x="8" y="28" width="32" height="12" rx="2" />
          <circle cx="14" cy="14" r="2" fill="currentColor" />
          <circle cx="14" cy="34" r="2" fill="currentColor" />
          <path d="M24 20v8" />
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="20" r="12" />
          <path d="M28 28l12 12" />
          <path d="M14 20h12" />
          <path d="M20 14v12" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="6" />
          <path d="M24 8v4" />
          <path d="M24 36v4" />
          <path d="M8 24h4" />
          <path d="M36 24h4" />
        </svg>
      );
  }
}

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "📝",
    title: "Formu Doldurun",
    description: "İşletmenizi ve beklentilerinizi kısaca anlatın.",
  },
  {
    step: "02",
    icon: "📞",
    title: "Sizi Arayalım",
    description: "Detayları konuşur, size en uygun çözümü belirleriz.",
  },
  {
    step: "03",
    icon: "🎨",
    title: "Tasarım & Geliştirme",
    description: "Sitenizi tasarlar, içeriklerini hazırlar ve geliştiririz.",
  },
  {
    step: "04",
    icon: "✅",
    title: "Son Dokunuşlar",
    description: "Geri bildirimlerinizle son düzenlemeleri birlikte yaparız.",
  },
  {
    step: "05",
    icon: "🚀",
    title: "Teslim & Yayın",
    description: "Siteniz yayına alınır, anahtar teslim size teslim edilir.",
  },
];

const SECTORS = [
  { name: "Otel & Apart", icon: "🏨" },
  { name: "Restoran", icon: "🍽️" },
  { name: "Cafe", icon: "☕" },
  { name: "Beach Club", icon: "🏖️" },
  { name: "Spa & Wellness", icon: "💆" },
  { name: "Kuaför & Güzellik", icon: "💇" },
  { name: "Tekne Turları", icon: "🚤" },
  { name: "Düğün Organizasyon", icon: "💒" },
  { name: "Acenta", icon: "✈️" },
  { name: "Pub & Bar", icon: "🍸" },
  { name: "Gym & Fitness", icon: "💪" },
  { name: "Şarap Evi", icon: "🍷" },
];

const STATS = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "%100", label: "Memnuniyet" },
  { value: "50+", label: "Proje" },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function OrbiWebPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-8 lg:min-h-[90vh] lg:flex lg:items-center lg:py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#4F46E5]/5 pointer-events-none" />

          <Container className="relative z-10">
            {/* Mobile Hero */}
            <div className="lg:hidden">
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-[#7C3AED]/20 bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
                    <span className="text-white text-xl font-bold">O</span>
                  </div>
                  <div className="text-left">
                    <h1 className="text-xl font-bold text-foreground">OrbiWeb</h1>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground leading-tight">
                  İşletmenize Özel{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
                    Web Sitesi & Mobil Uygulama
                  </span>
                </p>
                <p className="text-xs text-foreground-muted mt-2 leading-relaxed max-w-xs mx-auto">
                  Otel, restoran, cafe, beach club ve daha fazlası için profesyonel web sitesi ve mobil uygulama geliştiriyoruz.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex justify-center gap-6 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#7C3AED]">{stat.value}</div>
                    <div className="text-[10px] text-foreground-muted">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Screenshot */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-white/10"
              >
                <Image src="/images/orbiweb-hero.png" alt="OrbiWeb Hero" fill className="object-cover object-top" priority />
              </motion.div>
            </div>

            {/* Desktop Hero */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Screenshots mockup */}
              <motion.div
                className="relative flex items-center justify-center order-2 w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <Image src="/images/orbiweb-hero.png" alt="OrbiWeb Hero" fill className="object-cover object-top" priority />
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] text-white text-sm font-semibold shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Anahtar Teslim
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-foreground text-sm font-medium shadow-lg"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  Modern Teknoloji
                </motion.div>
              </motion.div>

              {/* Text content */}
              <motion.div
                className="order-1 text-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-18 h-18 rounded-2xl overflow-hidden shadow-lg shadow-[#7C3AED]/20 bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center" style={{ width: 72, height: 72 }}>
                    <span className="text-white text-3xl font-bold">O</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-foreground">OrbiWeb</h1>
                  </div>
                </div>

                <p className="text-4xl font-semibold text-foreground mb-5 leading-tight">
                  İşletmenize Özel{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
                    Web Sitesi & Mobil Uygulama
                  </span>
                </p>

                <p className="text-xl text-foreground-muted mb-6 leading-relaxed max-w-xl">
                  Otel, restoran, cafe, beach club, spa, kuaför, tekne turları, düğün
                  organizasyonu ve daha fazlası için profesyonel web sitesi ve mobil
                  uygulama geliştiriyoruz.
                </p>

                <p className="text-base text-foreground-muted mb-8 leading-relaxed max-w-xl">
                  Türkiye&apos;nin <span className="text-foreground font-medium">tatil beldelerindeki işletmelere</span> özel çözümler sunuyoruz.
                  Hazır şablon yok — her proje <span className="text-foreground font-medium">sıfırdan, markanıza özel</span> tasarlanır.
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-8">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-[#7C3AED]">{stat.value}</div>
                      <div className="text-sm text-foreground-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="https://www.orbiweb.com.tr" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-base">
                      Ücretsiz Teklif Alın
                    </Button>
                  </a>
                  <Link href="#templates">
                    <Button variant="secondary" size="lg" className="text-base">
                      Örnek Şablonlar
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Sectors */}
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <Container>
            <motion.div className="text-center mb-8" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 mb-4">
                Sektörler
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Hangi sektörlere hizmet veriyoruz?
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {SECTORS.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#7C3AED]/30 transition-all"
                  {...fadeInUp(index * 0.03)}
                >
                  <span className="text-lg">{sector.icon}</span>
                  <span className="text-sm text-foreground-muted">{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Templates Gallery */}
        <section id="templates" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/[0.02] to-transparent pointer-events-none" />
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 mb-4 sm:mb-6">
                Örnek Çalışmalar
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                Sektörünüze Özel{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
                  Hazır Şablonlar
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                Beğendiğiniz tasarımı seçin, <span className="text-foreground font-medium">biz işletmenize göre özelleştirelim.</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-white/10"
                {...fadeInUp(0)}
              >
                <Image src="/images/orbiweb-templates-1.png" alt="OrbiWeb Şablonlar 1" fill className="object-cover" />
              </motion.div>
              <motion.div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-white/10"
                {...fadeInUp(0.1)}
              >
                <Image src="/images/orbiweb-templates-2.png" alt="OrbiWeb Şablonlar 2" fill className="object-cover" />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="section-padding relative overflow-hidden">
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14 lg:mb-16" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 mb-4 sm:mb-6">
                Hizmetler
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                Neler sunuyoruz?
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                Siz işinize odaklanın, dijital varlığınızı biz oluşturalım.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border ${service.borderTone} bg-gradient-to-br ${service.backgroundTone} p-4 sm:p-6 transition-all duration-300`}
                  {...fadeInUp(index * 0.08)}
                  whileHover={isMobile ? {} : { y: -6, transition: { duration: 0.22 } }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)] opacity-60 pointer-events-none" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20 ${service.iconTone} flex-shrink-0`}>
                        <ServiceIcon icon={service.icon} className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-foreground/85 leading-snug mb-2">
                      {service.hook}
                    </p>

                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/[0.02] to-transparent pointer-events-none" />
          <Container>
            <motion.div className="text-center mb-8 sm:mb-14" {...fadeInUp()}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 mb-4 sm:mb-6">
                Nasıl Çalışıyoruz?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">5 Kolay Adımda</span>{" "}
                Web Siteniz Hazır
              </h2>
              <p className="text-sm sm:text-lg text-foreground-muted max-w-2xl mx-auto">
                Karmaşık süreçler yok. <span className="text-foreground font-medium">Siz bilgi verin, biz yapalım.</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-4 sm:p-5 text-center"
                  {...fadeInUp(index * 0.08)}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#7C3AED]/40 mb-2">{step.step}</div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-[10px] sm:text-xs text-foreground-muted leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <Container size="narrow">
            <motion.div
              className="relative p-6 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7C3AED]/15 via-[#4F46E5]/10 to-[#7C3AED]/5 border border-[#7C3AED]/30 text-center overflow-hidden"
              {...fadeInUp()}
            >
              {!isMobile && (
                <>
                  <motion.div 
                    className="absolute top-0 left-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-3xl"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-48 h-48 bg-[#4F46E5]/10 rounded-full blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </>
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl overflow-hidden mx-auto mb-4 sm:mb-6 shadow-2xl shadow-[#7C3AED]/30 bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
                  <span className="text-white text-3xl sm:text-5xl font-bold">O</span>
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  İşletmenizi Dijitale Taşıyın
                </h2>

                <p className="text-sm sm:text-lg text-foreground-muted mb-6 sm:mb-8 max-w-lg mx-auto">
                  Ücretsiz teklif alın, projenizi konuşalım. Tüm teknik işleri biz halledelim.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="https://www.orbiweb.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-[#7C3AED]/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Başvuru Yap
                  </a>
                  <Link
                    href="/support"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground font-medium transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    İletişime Geç
                  </Link>
                </div>

                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-foreground-subtle">
                  Powered by{" "}
                  <span className="text-foreground-muted font-medium">Orbira Labs</span>
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back to home */}
        <section className="pb-12 sm:pb-20">
          <Container>
            <div className="flex justify-center">
              <Link
                href="/"
                className="text-brand-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base py-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
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
