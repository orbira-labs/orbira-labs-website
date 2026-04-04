import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { SITE_CONFIG, PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Destek",
  description: "Orbira Labs ürünleri için yardım, sık sorulan sorular ve iletişim bilgileri.",
};

const faqs = [
  {
    question: "Uygulamayı nasıl kullanmaya başlarım?",
    answer: "Uygulamayı App Store veya Google Play'den indirin, hesap oluşturun ve adım adım kurulum rehberini takip edin. İlk kullanımda size yol gösterecek ipuçları sunulacaktır.",
  },
  {
    question: "Verilerim güvende mi?",
    answer: "Evet. Tüm verileriniz endüstri standardı şifreleme ile korunmaktadır. Verileriniz asla üçüncü taraflarla paylaşılmaz veya satılmaz. Detaylar için Gizlilik Politikamızı inceleyebilirsiniz.",
  },
  {
    question: "Hesabımı nasıl silebilirim?",
    answer: "Uygulama içinden Profil > Hesabı Sil seçeneğini kullanabilirsiniz. Hesap silme işlemi geri alınamaz ve tüm verileriniz kalıcı olarak silinir.",
  },
  {
    question: "İnternet bağlantısı olmadan kullanabilir miyim?",
    answer: "Evet. Uygulamalarımız çevrimdışı modda çalışabilir. İnternet bağlantınız olduğunda verileriniz otomatik olarak senkronize edilir.",
  },
  {
    question: "Birden fazla cihazda kullanabilir miyim?",
    answer: "Evet. Aynı hesapla birden fazla cihazda giriş yapabilirsiniz. Verileriniz tüm cihazlar arasında otomatik olarak senkronize edilir.",
  },
  {
    question: "Ücretli özellikler var mı?",
    answer: "Temel özellikler ücretsizdir. İleride premium özellikler eklenebilir; bu durumda mevcut kullanıcılar önceden bilgilendirilecektir.",
  },
];

const supportProducts = PRODUCTS.filter(p => p.status === "live" || p.status === "in-progress").slice(0, 3);

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <Container size="narrow">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-foreground mb-4">
              Destek
            </h1>
            
            <p className="text-foreground-muted leading-relaxed mb-12">
              Size yardımcı olmak için buradayız. Aşağıda sık sorulan soruları, ürün rehberlerini ve iletişim bilgilerini bulabilirsiniz.
            </p>

            {/* Hızlı Erişim */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Hızlı Erişim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="#faq"
                  className="p-6 bg-background-tertiary rounded-xl border border-border hover:border-border-hover transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Sık Sorulan Sorular</h3>
                  <p className="text-sm text-foreground-muted">En çok merak edilen konular</p>
                </a>
                
                <a
                  href="#contact"
                  className="p-6 bg-background-tertiary rounded-xl border border-border hover:border-border-hover transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Bize Ulaşın</h3>
                  <p className="text-sm text-foreground-muted">Doğrudan iletişime geçin</p>
                </a>
                
                <a
                  href="#guides"
                  className="p-6 bg-background-tertiary rounded-xl border border-border hover:border-border-hover transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Kullanım Rehberleri</h3>
                  <p className="text-sm text-foreground-muted">Adım adım yol gösterici</p>
                </a>
              </div>
            </section>

            {/* SSS */}
            <section id="faq" className="mb-16 scroll-mt-32">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group p-6 bg-background-tertiary rounded-xl border border-border"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-foreground font-medium pr-4">{faq.question}</span>
                      <svg
                        className="w-5 h-5 text-foreground-muted flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Ürün Rehberleri */}
            <section id="guides" className="mb-16 scroll-mt-32">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Ürün Rehberleri
              </h2>
              <div className="space-y-4">
                {supportProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-6 bg-background-tertiary rounded-xl border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-2xl">{product.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-foreground mb-2">{product.name}</h3>
                        <p className="text-sm text-foreground-muted mb-4">{product.description}</p>
                        
                        {product.id === "kasabende" && (
                          <div className="space-y-3 text-sm text-foreground-muted">
                            <div className="flex items-start gap-2">
                              <span className="text-brand-primary font-medium">1.</span>
                              <span>Uygulamayı açın ve hesap oluşturun</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-brand-primary font-medium">2.</span>
                              <span>İşletme bilgilerinizi girin (ad, tür, konum)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-brand-primary font-medium">3.</span>
                              <span>Çalışma modunuzu seçin (Perakende veya Toptancı)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-brand-primary font-medium">4.</span>
                              <span>Her gün işlemlerinizi girin ve gün sonunda kasanızı kapatın</span>
                            </div>
                            <div className="mt-4 p-4 bg-background rounded-lg border border-border">
                              <p className="text-foreground text-sm font-medium mb-2">💡 İpucu</p>
                              <p className="text-foreground-muted text-sm">
                                Perakende modda her gün kasanızı sayıp girersiniz. Toptancı modda her işlemi tek tek girersiniz, sistem günü otomatik kapatır.
                              </p>
                            </div>
                          </div>
                        )}
                        
                        {product.id !== "kasabende" && (
                          <div className="p-4 bg-background rounded-lg border border-border">
                            <p className="text-foreground-muted text-sm">
                              Bu ürün için detaylı rehber yakında eklenecektir.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* İletişim */}
            <section id="contact" className="mb-16 scroll-mt-32">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Bize Ulaşın
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-background-tertiary rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">E-posta</h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    Genel sorular, öneriler ve geri bildirimler için
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-brand-primary hover:underline text-sm font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                
                <div className="p-6 bg-background-tertiary rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Uygulama İçi Destek</h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    Hata bildirimi ve öneriler için
                  </p>
                  <p className="text-foreground-muted text-sm">
                    Profil → Destek bölümünden ulaşabilirsiniz
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-background-tertiary rounded-xl border border-border">
                <h3 className="text-lg font-medium text-foreground mb-4">Destek Talep Ederken</h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sorununuzu mümkün olduğunca detaylı açıklayın</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hangi cihaz ve işletim sistemi kullandığınızı belirtin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mümkünse ekran görüntüsü ekleyin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Yanıt süresi genellikle 24-48 saat içindedir</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Yanıt Süreleri */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Yanıt Süreleri
              </h2>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full">
                  <thead className="bg-background-tertiary">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Talep Türü</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Beklenen Süre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground-muted">Genel sorular</td>
                      <td className="px-6 py-4 text-sm text-foreground-muted">24-48 saat</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground-muted">Hata bildirimleri</td>
                      <td className="px-6 py-4 text-sm text-foreground-muted">24 saat</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground-muted">Hesap sorunları</td>
                      <td className="px-6 py-4 text-sm text-foreground-muted">12-24 saat</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground-muted">Güvenlik konuları</td>
                      <td className="px-6 py-4 text-sm text-foreground-muted">En kısa sürede</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* İlgili Bağlantılar */}
            <div className="p-6 bg-background-tertiary rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">İlgili Belgeler</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-brand-primary hover:underline text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 text-brand-primary hover:underline text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Kullanım Koşulları
                </Link>
              </div>
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
