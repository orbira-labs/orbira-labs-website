export const SITE_CONFIG = {
  name: "Orbira Labs",
  description: "Orbira Labs, günlük yaşamı ve iş süreçlerini kolaylaştıran dijital ürünler geliştiren bağımsız bir product lab'dir.",
  url: "https://orbiralabs.com",
  email: "info@orbiralabs.com",
  tagline: "Sade ürünler. Akıcı deneyimler.",
};

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/engines", label: "Hybrid Motorlar" },
  { href: "/products", label: "Ürünler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/support", label: "İletişim" },
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
    description: "Döngünü, ruh halini ve ihtiyaçlarını anlayan dijital koçun. AQE ve HAE destekli kişisel yönlendirmelerle her gün sana daha uygun öneriler sunar.",
    status: "testing",
    category: "health",
    icon: "🌿",
    gradient: "from-[#7A8471] to-[#5C6455]",
    features: ["Döngü Koçluğu", "Akıllı Döngü Takibi", "AQE Destekli Check-in", "HAE Destekli Analiz"],
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

export const TEAM_MEMBERS = [
  {
    name: "Seyyit Ali Perse",
    role: "Kurucu & Ürün Mühendisi",
    image: "/images/founder.png",
    shortBio: "Orbira Labs'ı kuran ve ürün vizyonunu şekillendiren isim.",
    fullBio: `Orbira Labs'ın kurucusu olarak ürün stratejisi, teknoloji ve kullanıcı deneyimini birlikte ele alıyor. 7+ yıllık global deneyimi boyunca farklı ekipler, pazarlar ve iş modelleri içinde çalışarak fikir aşamasından ölçeklenebilir ürüne uzanan süreçlerde aktif rol aldı.

Sadece geliştirme tarafında güçlü bir mühendis değil; aynı zamanda ürünün neden var olduğunu, kullanıcıya nasıl değer ürettiğini ve iş hedefleriyle nasıl hizalanması gerektiğini de merkeze koyuyor. AI destekli sistemler, veri odaklı çözümler ve modern web teknolojileri üzerine çalışıyor; karmaşık problemleri sade, hızlı ve etkili dijital ürünlere dönüştürmeye odaklanıyor.`,
    experience: FOUNDER.experience,
  },
  {
    name: "Ayçin Akyel",
    role: "Operasyon & Proje Yöneticisi",
    image: "/images/aycin.jpg",
    shortBio: "Ekibin akışını ve organizasyonunu yöneten isim.",
    fullBio: `Ekibin akışını ve organizasyonunu yöneten isim. Projelerin zamanında, doğru kapsamda ve koordineli ilerlemesini sağlıyor.

Kullanıcı geri bildirimlerini topluyor, önceliklendiriyor ve ekibe anlamlı şekilde aktarıyor. İletişim ve planlama konusundaki güçlü yönleri, ürün geliştirme sürecinin kesintisiz ilerlemesine katkı sağlıyor.`,
    experience: [],
  },
  {
    name: "Burak Gündüz",
    role: "Developer Partner",
    image: "/images/burak.png",
    shortBio: "Ekibin teknik omurgasını oluşturan isim.",
    fullBio: `Ekibin teknik omurgasını oluşturan isim. Frontend, backend ve sistem mimarisi konularında geniş bir deneyime sahip. Farklı sektörlerde, farklı ölçeklerde projeler geliştirdi.

Sadece kod yazmıyor; ürün kararlarına teknik perspektiften katkı sağlıyor, mimari tercihler yapıyor ve sistemlerin uzun vadede sürdürülebilir kalmasını sağlıyor. Analitik düşünce yapısı ve detaylara hakimiyetiyle projelerin teknik kalitesini belirliyor.`,
    experience: [],
  },
];

export const TEAM_TAGLINE = "Dijital ürünler inşa ediyoruz.";

export const ABOUT_CONTENT = {
  intro: "Orbira Labs, web, mobil ve AI odaklı dijital ürünler geliştiren bağımsız bir product lab. Amacımız yazılım yazmak değil; gerçekten kullanılan, değer üreten ve zaman içinde ayakta kalan ürünler inşa etmek.",
  introSub: "Tasarım ve mühendislik burada ayrı disiplinler olarak değil, aynı sürecin parçaları olarak çalışıyor. Her ürün kararı bu iki bakış açısının kesişiminde şekilleniyor.",
  approach: {
    title: "Yaklaşımımız",
    content: `İyi ürünler sadece fikirle çıkmaz. Doğru execution, tutarlı teknik kararlar ve kullanıcıyı merkeze alan bir tasarım süreci gerektirir.

Sadelik bizim için bir tercih. Gereksiz karmaşıklığı çıkarmak, özü korumak ve her özelliğin gerçekten bir işe yaramasını sağlamak temel prensiplerimiz arasında. Modern teknolojileri araç olarak kullanıyoruz, amaç olarak değil.

Küçük bir ekibiz ama bakış açımız bütünlüklü. Ürün düşüncesi, arayüz tasarımı, sistem mimarisi ve operasyon birlikte ilerliyor.`,
  },
  howWeWork: {
    title: "Nasıl Çalışıyoruz",
    content: `Her proje gerçek bir ihtiyaçtan doğuyor. Varsayımlarla değil, gözlemlerle başlıyoruz. Hızlı iterasyonlar yapıyor, geri bildirimleri erken alıyor ve ürünü kullanıcıyla birlikte şekillendiriyoruz.

Teknik tarafta sürdürülebilir ve ölçeklenebilir sistemler kuruyoruz. Bugün çalışan ama yarın çökecek çözümler yerine, uzun vadede büyüyebilecek yapılar tercih ediyoruz.

Kod kalitesi, test edilebilirlik ve dokümantasyon bizim için lüks değil, standart.`,
  },
  closing: "Orbira Labs olarak inandığımız şey basit: Doğru insanlar, doğru yaklaşım ve tutarlı çalışmayla küçük ekipler büyük işler çıkarabilir.",
};
