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

export type ProductStatus = "live" | "in-progress" | "concept";

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
}

export const PRODUCT_CATEGORIES = [
  { id: "business", name: "İş & Operasyon" },
  { id: "health", name: "Sağlık & Yaşam" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "entertainment", name: "Oyun & Eğlence" },
];

export const PRODUCTS: Product[] = [
  {
    id: "kasabende",
    name: "KasaBende",
    description: "Küçük ve orta ölçekli işletmeler için modern kasa ve operasyon yönetimi.",
    status: "live",
    category: "business",
    icon: "₺",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Gelir Takibi", "Firma Rehberi", "Çoklu Kanal Kasa", "Operasyon Akışı"],
    href: "/products/kasabende",
  },
  {
    id: "moodumuz",
    name: "Moodumuz",
    description: "Döngü takibi ve kadın sağlığına özel içeriklerle bilinçli yaşam.",
    status: "in-progress",
    category: "health",
    icon: "🌿",
    gradient: "from-[#7A8471] to-[#5d6357]",
    logo: "/images/moodumuz-logo.png",
  },
  {
    id: "kisilik-uyumluluk",
    name: "Kişilik & Uyumluluk",
    description: "Kişilik testleri ve uyumluluk analizleri ile kendinizi ve ilişkilerinizi keşfedin.",
    status: "concept",
    category: "lifestyle",
    icon: "🧠",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "fal-burclar",
    name: "Fal & Burçlar",
    description: "Günlük burç yorumları ve astroloji ile kişisel içgörüler.",
    status: "concept",
    category: "lifestyle",
    icon: "✨",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "okey",
    name: "101 Okey",
    description: "Arkadaşlarla online okey deneyimi ve sosyal oyun keyfi.",
    status: "concept",
    category: "entertainment",
    icon: "🎴",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "beslenme",
    name: "Beslenme & Sağlık",
    description: "Sağlıklı beslenme alışkanlıkları için kişiselleştirilmiş takip ve öneriler.",
    status: "concept",
    category: "health",
    icon: "🥗",
    gradient: "from-green-500 to-emerald-600",
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
    { company: "Nesine", domain: "İddaa Platformu" },
    { company: "SwissSign", domain: "Dijital Sertifika & PKI" },
    { company: "Mercury", domain: "Sağlık & Lojistik" },
    { company: "Ejada", domain: "IT Çözümleri" },
    { company: "Eachlabs", domain: "AI Model Marketplace" },
  ],
};
