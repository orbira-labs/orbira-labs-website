import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orbira Mind - Danışan Yönetim Platformu | Orbira Labs",
  description: "Danışan yönetiminde profesyonel asistanınız. Randevu takibi, seans notları ve AI destekli derinlemesine karakter analizleri — hepsi tek platformda, KVKK uyumlu altyapıyla.",
  keywords: [
    "danışan yönetimi",
    "psikolog yazılımı",
    "koçluk platformu",
    "randevu takibi",
    "seans notları",
    "karakter analizi",
    "kişilik testi",
    "psikolojik değerlendirme",
    "terapist araçları",
    "KVKK uyumlu",
  ],
  openGraph: {
    title: "Orbira Mind - Danışan Yönetim Platformu",
    description: "Randevu takibi, seans notları ve AI destekli derinlemesine karakter analizleri — hepsi tek platformda.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.orbiramind.com",
  },
};

export default function OrbiraMindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
