import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moodumuz - Döngü Takibi ve Ruh Hali Günlüğü | Orbira Labs",
  description: "Döngünü anlayan, seni yargılamayan arkadaşın. Regl döngüsü takibi, ruh hali günlüğü ve kişiselleştirilmiş öneriler. Gizlilik odaklı, sadece sen görebilirsin.",
  keywords: [
    "döngü takibi",
    "regl takibi",
    "ruh hali",
    "kadın sağlığı",
    "mood tracker",
    "günlük",
    "wellness",
    "sağlık",
    "dönem takibi",
    "adet takvimi",
  ],
  openGraph: {
    title: "Moodumuz - Döngünü Anlayan Arkadaşın",
    description: "Regl döngüsü takibi, ruh hali günlüğü ve kişiselleştirilmiş öneriler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function MoodumuzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
