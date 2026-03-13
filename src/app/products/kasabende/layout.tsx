import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KasaBende - Modern Kasa ve Operasyon Yönetimi | Orbira Labs",
  description: "Küçük ve orta ölçekli işletmeler için modern kasa takibi, alacak-verecek yönetimi, tahsilat ve gün sonu sayımı. iOS ve Android'de 1 sene ücretsiz.",
  keywords: [
    "kasa takip",
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
  ],
  openGraph: {
    title: "KasaBende - Kasanız Artık Güvende",
    description: "Küçük ve orta ölçekli işletmeler için modern kasa ve operasyon yönetimi.",
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
