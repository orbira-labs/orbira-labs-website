import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KasaBende - Modern Kasa ve Operasyon Yönetimi | Orbira Labs",
  description:
    "Küçük ve orta ölçekli işletmeler için modern kasa takibi, alacak-verecek yönetimi, personel takibi, tahsilat ve gün sonu sayımı. Pro ile sınırsız işletme, kullanıcı daveti ve AI analiz. iOS ve Android'de ücretsiz.",
  keywords: [
    "kasa takip",
    "kasa takip uygulaması",
    "tahsilat",
    "borç alacak",
    "gün sonu",
    "esnaf",
    "nakit",
    "firma",
    "döviz",
    "işletme",
    "muhasebe",
    "perakende",
    "toptancı",
    "personel yönetimi",
    "çalışan takibi",
    "maaş takibi",
    "işletme yönetimi",
    "kasa sayımı",
    "esnaf uygulaması",
  ],
  openGraph: {
    title: "KasaBende - Kasanız Artık Güvende",
    description:
      "Küçük ve orta ölçekli işletmeler için modern kasa ve operasyon yönetimi. Personel takibinden döviz işlemlerine, tüm ihtiyaçlarınız tek uygulamada.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function KasaBendeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
