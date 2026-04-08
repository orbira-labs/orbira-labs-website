import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrbiWeb - İşletmenize Özel Web Sitesi & Mobil Uygulama | Orbira Labs",
  description: "Otel, restoran, cafe, beach club, spa ve daha fazlası için profesyonel web sitesi ve mobil uygulama. Sıfırdan, markanıza özel tasarımlar. Anahtar teslim çözümler.",
  keywords: [
    "web sitesi yapımı",
    "mobil uygulama",
    "otel web sitesi",
    "restoran web sitesi",
    "cafe web sitesi",
    "beach club web sitesi",
    "spa web sitesi",
    "tatil beldesi web sitesi",
    "özel tasarım",
    "anahtar teslim",
  ],
  openGraph: {
    title: "OrbiWeb - İşletmenize Özel Web Sitesi & Mobil Uygulama",
    description: "Otel, restoran, cafe, beach club ve daha fazlası için profesyonel web sitesi ve mobil uygulama.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.orbiweb.com.tr",
  },
};

export default function OrbiWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
