import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Orbira Karakter Analiz",
    template: "%s | Orbira Karakter Analiz",
  },
  description: "Danışanlarınızın iç dünyasını anlamanın en bilimsel yolu",
  robots: { index: false, follow: false },
};

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="pro"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-inter)]"
    >
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--pro-surface)",
            border: "1px solid var(--pro-border)",
            color: "var(--pro-text)",
          },
        }}
      />
    </div>
  );
}
