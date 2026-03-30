export const SITE_CONFIG = {
  name: "Orbira Labs",
  description: "Orbira Labs, günlük yaşamı ve iş süreçlerini kolaylaştıran dijital ürünler geliştiren bağımsız bir product lab'dir.",
  url: "https://orbiralabs.com",
  email: "info@orbiralabs.com",
  tagline: "Sade ürünler. Akıcı deneyimler.",
};

export const NAV_LINKS = [
  { href: "#products", label: "Ürünler" },
  { href: "#approach", label: "Yaklaşım" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#contact", label: "İletişim" },
];

export type ProductStatus = "live" | "in-progress" | "concept" | "testing";

export interface Product {
  id: string;
  name: string;
  description: string;
  status: ProductStatus;
  category: string;
  icon: string;
  gradient: string;
  features?: string[];
  href?: string;
  logo?: string;
  screenshots?: string[];
}

export const PRODUCT_CATEGORIES = [
  { id: "business", name: "İş & Operasyon" },
  { id: "health", name: "Sağlık & Yaşam" },
  { id: "education", name: "Eğitim" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "entertainment", name: "Oyun & Eğlence" },
];

export const PRODUCTS: Product[] = [
  {
    id: "kasabende",
    name: "KasaBende",
    description: "Kasanız artık güvende. Personel takibinden döviz işlemlerine, tüm ihtiyaçlarınız tek uygulamada.",
    status: "live",
    category: "business",
    icon: "₺",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Kasa Takibi", "Alacak & Verecek", "Döviz İşlemleri", "Gün Sonu Sayımı"],
    href: "/products/kasabende",
    logo: "/images/kasabende-icon.png",
    screenshots: [
      "/images/kasabende-firms.png",
      "/images/kasabende-overview.png",
      "/images/kasabende-cash.png",
    ],
  },
  {
    id: "moodumuz",
    name: "Moodumuz",
    description: "Döngünü anlayan, seni tanıyan arkadaşın. AI destekli kozmik rehberlik ve Human Analysis Engine™ ile kişiselleştirilmiş deneyim.",
    status: "testing",
    category: "health",
    icon: "🌿",
    gradient: "from-[#7A8471] to-[#5C6455]",
    features: ["Akıllı Döngü Takibi", "Ruh Hali Günlüğü", "AI Kozmik Rehber", "Trend Analizi"],
    href: "/products/moodumuz",
    logo: "/images/moodumuz-icon.png",
    screenshots: [
      "/images/moodumuz-home-new.png",
      "/images/moodumuz-horoscope-new.png",
      "/images/moodumuz-pro.png",
    ],
  },
  {
    id: "cep-hocam",
    name: "Sınav Koçu",
    description: "AI destekli soru çözüm asistanı.",
    status: "in-progress",
    category: "education",
    icon: "📚",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "fal-burclar",
    name: "Fal & Burçlar",
    description: "Günlük burç yorumları ve astroloji.",
    status: "concept",
    category: "lifestyle",
    icon: "✨",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "ebeveyn-halim",
    name: "EbeveynHalim",
    description: "Çocuk gelişimi takibi ve rehberlik.",
    status: "concept",
    category: "health",
    icon: "👶",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "diyetkolik",
    name: "Diyetkolik",
    description: "Kilo takibi ve kalori sayacı.",
    status: "concept",
    category: "health",
    icon: "🥗",
    gradient: "from-lime-500 to-green-600",
  },
];

export const PRINCIPLES = [
  {
    title: "Sadelik",
    description: "Karmaşıklığı yok eder, özü koruruz. Gereksiz her şeyi çıkarır, değerli olanı öne çıkarırız.",
    icon: "◯",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Akışkanlık",
    description: "Kesintisiz deneyimler tasarlarız. Her adım bir sonrakine doğal ve sezgisel geçiş sağlar.",
    icon: "∿",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Güven",
    description: "Verileriniz güvende, sözlerimiz tutarlı. Şeffaflık ve güvenilirlik temel değerlerimiz.",
    icon: "◆",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Performans",
    description: "Hız ve verimlilik her şeyin merkezinde. Anlık tepki, akıcı animasyonlar, sıfır gecikme.",
    icon: "⚡",
    gradient: "from-orange-500 to-amber-500",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Gerçek ihtiyaç",
    description: "Her ürün somut bir problemi çözmek için doğar. Varsayımlar yerine gözlemlere dayanırız.",
  },
  {
    step: "02",
    title: "Sade deneyim",
    description: "Karmaşıklığı filtreler, özü ortaya çıkarırız. Kullanıcı yolculuğu her zaman öncelikli.",
  },
  {
    step: "03",
    title: "Hızlı iterasyon",
    description: "Küçük adımlarla ilerler, hızlı öğreniriz. Geri bildirim döngüsü kısa tutulur.",
  },
  {
    step: "04",
    title: "Sürekli iyileştirme",
    description: "Ürünler yayınlandıktan sonra da gelişir. Kullanıcı verileri yol haritamızı şekillendirir.",
  },
];

export const FOUNDER = {
  name: "Seyyit Ali Perse",
  role: "Kurucu & Geliştirici",
  bio: "Global ölçekte farklı sektörlerde mobil ve web uygulama geliştirme deneyimine sahip yazılım mühendisi.",
  image: "/images/founder.png",
  experience: [
    { company: "Nesine", domain: "İddaa Platformu", country: "Türkiye", flag: "🇹🇷" },
    { company: "SwissSign", domain: "Dijital Sertifika & PKI", country: "İsviçre", flag: "🇨🇭" },
    { company: "Mercury", domain: "Sağlık & Lojistik", country: "ABD", flag: "🇺🇸" },
    { company: "Ejada", domain: "IT Çözümleri", country: "KSA", flag: "🇸🇦" },
    { company: "Eachlabs", domain: "AI Model Marketplace", country: "Türkiye", flag: "🇹🇷" },
  ],
};
