import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proje Başvurusu | Orbira Labs",
  description: "Web sitesi veya mobil uygulama projeniz için başvuru formu",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function BasvuruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
