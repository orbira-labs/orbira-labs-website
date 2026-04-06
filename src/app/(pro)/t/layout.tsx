import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karakter Analizi | Orbira",
  description: "Kişilik analizi testinizi tamamlayın",
  robots: { index: false, follow: false },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="pro"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-nunito)]"
    >
      {children}
    </div>
  );
}
