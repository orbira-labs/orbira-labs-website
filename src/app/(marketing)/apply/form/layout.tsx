import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başvuru Formu | Orbira Labs",
  description: "Web sitesi veya mobil uygulama projeniz için başvuru formu",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
