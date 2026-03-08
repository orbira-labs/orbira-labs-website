import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Orbira Labs kullanım koşulları ve şartları.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <Container size="narrow">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-foreground mb-8">
              Kullanım Koşulları
            </h1>
            
            <p className="text-foreground-muted leading-relaxed mb-8">
              Son güncelleme: Mart 2026
            </p>

            <div className="space-y-8 text-foreground-muted">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Kabul
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs uygulamalarını ve hizmetlerini kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayınız.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Hizmet Kullanımı
                </h2>
                <p className="leading-relaxed mb-4">
                  Hizmetlerimizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Yasalara ve düzenlemelere uygun davranmak</li>
                  <li>Diğer kullanıcıların haklarına saygı göstermek</li>
                  <li>Hizmetleri kötüye kullanmamak</li>
                  <li>Güvenlik önlemlerini atlamamak</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Fikri Mülkiyet
                </h2>
                <p className="leading-relaxed">
                  Tüm içerik, tasarım ve yazılım Orbira Labs&apos;in mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. İzinsiz kullanım, kopyalama veya dağıtım yasaktır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Sorumluluk Sınırı
                </h2>
                <p className="leading-relaxed">
                  Hizmetlerimiz &quot;olduğu gibi&quot; sunulmaktadır. Orbira Labs, hizmetlerin kesintisiz veya hatasız olacağını garanti etmez.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  İletişim
                </h2>
                <p className="leading-relaxed">
                  Kullanım koşulları hakkında sorularınız için{" "}
                  <a href="mailto:seyyitaliperseorganization@gmail.com" className="text-brand-primary hover:underline">
                    seyyitaliperseorganization@gmail.com
                  </a>{" "}
                  adresinden bize ulaşabilirsiniz.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/"
                className="text-brand-primary hover:underline inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana sayfaya dön
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
