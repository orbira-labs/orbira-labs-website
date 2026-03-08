import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Orbira Labs gizlilik politikası ve veri koruma ilkeleri.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <Container size="narrow">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-foreground mb-8">
              Gizlilik Politikası
            </h1>
            
            <p className="text-foreground-muted leading-relaxed mb-8">
              Son güncelleme: Mart 2026
            </p>

            <div className="space-y-8 text-foreground-muted">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Giriş
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu gizlilik politikası, uygulamalarımızı ve hizmetlerimizi kullanırken topladığımız, kullandığımız ve koruduğumuz bilgileri açıklar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Topladığımız Bilgiler
                </h2>
                <p className="leading-relaxed mb-4">
                  Hizmetlerimizi kullanırken aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Hesap bilgileri (e-posta, ad)</li>
                  <li>Kullanım verileri ve analitikler</li>
                  <li>Cihaz bilgileri</li>
                  <li>Uygulama içi işlem verileri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Bilgilerin Kullanımı
                </h2>
                <p className="leading-relaxed">
                  Topladığımız bilgileri hizmetlerimizi iyileştirmek, kişiselleştirilmiş deneyimler sunmak ve güvenliği sağlamak için kullanırız. Verilerinizi üçüncü taraflarla pazarlama amacıyla paylaşmayız.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  İletişim
                </h2>
                <p className="leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için{" "}
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
