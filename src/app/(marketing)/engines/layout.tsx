import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engines - Teknolojilerimiz | Orbira Labs",
  description: "Orbira Labs'in geliştirdiği yapay zeka motorları ve teknolojiler. Human Analysis Engine (HAE) ve daha fazlası.",
  keywords: [
    "yapay zeka",
    "AI engine",
    "machine learning",
    "human analysis",
    "Orbira Labs",
    "teknoloji",
    "motor",
    "HAE",
  ],
  openGraph: {
    title: "Engines - Orbira Labs Teknolojileri",
    description: "İnsan odaklı yapay zeka motorlarımızı keşfedin.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function EnginesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
