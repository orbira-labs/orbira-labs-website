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
              Son Güncelleme: 8 Mart 2026
            </p>

            <p className="text-foreground-muted leading-relaxed mb-8">
              Bu Kullanım Koşulları, Orbira Labs tarafından sunulan internet sitesi, mobil uygulamalar ve bağlantılı hizmetlerin kullanımına ilişkin şartları düzenler. Bu siteyi veya uygulamalarımızı kullanarak aşağıdaki koşulları kabul etmiş olursunuz. <strong className="text-foreground">Koşulları kabul etmiyorsanız, hizmetlerimizi kullanmamanız gerekmektedir.</strong>
            </p>

            <div className="space-y-10 text-foreground-muted">
              {/* 1. Taraflar */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Taraflar
                </h2>
                <p className="leading-relaxed">
                  Bu hizmet, <strong className="text-foreground">Orbira Labs</strong> tarafından sunulmaktadır.
                </p>
                <p className="leading-relaxed mt-2">
                  İletişim:{" "}
                  <a href="mailto:info@orbiralabs.com" className="text-brand-primary hover:underline">
                    info@orbiralabs.com
                  </a>
                </p>
              </section>

              {/* 2. Hizmet Kapsamı */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Hizmet Kapsamı
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs, kullanıcılarına mobil uygulamalar, web tabanlı araçlar ve dijital hizmetler sunar. Sunulan hizmetlerin kapsamı zaman zaman güncellenebilir, genişletilebilir veya değiştirilebilir. Orbira Labs, herhangi bir hizmeti önceden bildirim yapmaksızın sonlandırma veya değiştirme hakkını saklı tutar.
                </p>
              </section>

              {/* 3. Kullanım Şartları */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Kullanım Şartları
                </h2>
                <p className="leading-relaxed mb-4">
                  Kullanıcı, hizmetleri kullanarak aşağıdaki yükümlülükleri kabul eder:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hizmetleri yalnızca hukuka uygun amaçlarla kullanacağını</li>
                  <li>Yanıltıcı, kötüye kullanıma açık veya başkalarının haklarını ihlal eden işlem yapmayacağını</li>
                  <li>Sistemin güvenliğini zedeleyecek, tersine mühendislik yapacak, zarar verecek veya hizmeti aksatacak girişimlerde bulunmayacağını</li>
                  <li>Hesap bilgilerini doğru ve güncel tutacağını</li>
                  <li>Hizmetleri başka kişilerin kullanımını engelleyecek şekilde kullanmayacağını</li>
                  <li>Spam, istenmeyen mesaj veya toplu e-posta göndermeyeceğini</li>
                </ul>
              </section>

              {/* 4. Hesap Güvenliği */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Hesap Güvenliği
                </h2>
                <p className="leading-relaxed">
                  Bir hesap oluşturmanız halinde, hesap bilgilerinizin gizliliğinden ve hesabınız üzerinden gerçekleşen tüm işlemlerden <strong className="text-foreground">yalnızca siz sorumlusunuz</strong>. Şifrenizi üçüncü kişilerle paylaşmamalı, güçlü ve benzersiz bir şifre kullanmalısınız. Yetkisiz kullanım şüpheniz varsa bizimle derhal iletişime geçmelisiniz. Orbira Labs, yetkisiz erişimden kaynaklanan kayıp veya zararlardan sorumlu tutulamaz.
                </p>
              </section>

              {/* 5. Yaş Sınırı ve Ehliyet */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Yaş Sınırı ve Ehliyet
                </h2>
                <p className="leading-relaxed">
                  Hizmetlerimizi kullanmak için en az <strong className="text-foreground">13 yaşında</strong> olmanız gerekmektedir. 18 yaşından küçük kullanıcıların, ebeveyn veya yasal vasilerinin onayı ile hizmetleri kullanması gerekmektedir. Hizmetlerimizi kullanarak, bu yaş şartını karşıladığınızı beyan ve kabul etmiş olursunuz.
                </p>
              </section>

              {/* 6. Ücretli Hizmetler ve Abonelikler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Ücretli Hizmetler ve Abonelikler
                </h2>
                <p className="leading-relaxed mb-4">
                  Bazı hizmetler ücretli olabilir. Ücretlendirme, abonelik koşulları, yenileme süreçleri ve varsa deneme süreleri ilgili ekranlarda ayrıca belirtilir. Aksi belirtilmedikçe:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ücretli planlar, belirtilen dönem sonunda <strong className="text-foreground">otomatik olarak yenilenebilir</strong></li>
                  <li>Kullanıcı, yenileme tarihinden önce aboneliğini iptal etmediği sürece ilgili ücretin tahsil edilebileceğini kabul eder</li>
                  <li>Ödeme yapıldıktan sonra iade talepleri, yalnızca ilgili mağaza politikaları veya yasal zorunluluklar çerçevesinde değerlendirilir</li>
                  <li>App Store ve Google Play üzerinden yapılan ödemelerde iade ve iptal süreçleri ilgili mağaza kurallarına tabidir</li>
                  <li>Fiyatlar önceden bildirim yapılmaksızın değiştirilebilir; ancak aktif abonelikler dönem sonuna kadar mevcut fiyattan devam eder</li>
                </ul>
              </section>

              {/* 7. Fikri Mülkiyet */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Fikri Mülkiyet
                </h2>
                <p className="leading-relaxed mb-4">
                  Orbira Labs&apos;e ait tüm içerikler; marka, logo, yazılım, kaynak kodu, tasarım, metin, grafik, arayüz, ses, video ve diğer tüm unsurlar dahil olmak üzere <strong className="text-foreground">ulusal ve uluslararası telif hakkı, marka ve fikri mülkiyet yasaları</strong> kapsamında korunmaktadır.
                </p>
                <p className="leading-relaxed">
                  Kullanıcıya yalnızca hizmetleri kişisel veya ticari kullanım amacıyla, <strong className="text-foreground">sınırlı, münhasır olmayan, devredilemez ve geri alınabilir</strong> bir kullanım hakkı verilir. Bu hak, mülkiyet devri anlamına gelmez ve herhangi bir zamanda Orbira Labs tarafından sonlandırılabilir.
                </p>
              </section>

              {/* 8. Yasaklı Kullanımlar */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Yasaklı Kullanımlar
                </h2>
                <p className="leading-relaxed mb-4">
                  Aşağıdaki kullanımlar <strong className="text-foreground">kesinlikle yasaktır</strong> ve tespit edilmesi halinde hesabınız derhal sonlandırılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hizmeti yasa dışı, dolandırıcılık veya zararlı amaçlarla kullanmak</li>
                  <li>Başka kişilerin hesaplarına veya verilerine yetkisiz erişmeye çalışmak</li>
                  <li>Sistemi bozacak otomasyon, bot, scraping, saldırı veya kötü amaçlı yazılım kullanmak</li>
                  <li>DDoS saldırıları, SQL injection veya benzeri güvenlik açıklarını istismar etmeye çalışmak</li>
                  <li>Hizmetin herhangi bir bölümünü kopyalamak, çoğaltmak, satmak, lisanslamak veya türev çalışmalar oluşturmak</li>
                  <li>Orbira Labs&apos;in açık yazılı izni olmadan ticari şekilde yeniden dağıtım yapmak</li>
                  <li>Yanıltıcı, sahte veya başkalarını taklit eden içerik oluşturmak</li>
                  <li>Nefret söylemi, şiddet teşviki veya yasadışı içerik paylaşmak</li>
                  <li>Çocuk istismarı içeren veya bunu teşvik eden materyal paylaşmak</li>
                </ul>
              </section>

              {/* 9. Kullanıcı İçerikleri */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Kullanıcı İçerikleri
                </h2>
                <p className="leading-relaxed mb-4">
                  Hizmet kapsamında veri, metin, belge, görsel veya başka içerik yüklemeniz halinde; bu içeriklerin hukuka uygunluğundan, doğruluğundan ve üçüncü taraf haklarına saygılı olmasından <strong className="text-foreground">yalnızca siz sorumlusunuz</strong>.
                </p>
                <p className="leading-relaxed">
                  Orbira Labs, açıkça hukuka aykırı, zararlı, hakaret içeren veya hizmetin işleyişini bozan içerikleri önceden bildirim yapmaksızın kaldırma, erişimi sınırlandırma veya yetkili mercilere bildirme hakkını saklı tutar. Kullanıcı içeriklerinin yedeğini almak kullanıcının sorumluluğundadır.
                </p>
              </section>

              {/* 10. Hizmette Değişiklik ve Erişim */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Hizmette Değişiklik ve Erişim
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs, hizmetleri önceden bildirim yapmaksızın güncelleme, askıya alma, geçici veya kalıcı olarak durdurma veya kapsamını değiştirme hakkını saklı tutar. Hizmetlerin her zaman kesintisiz, hatasız, güvenli veya tüm cihaz ve işletim sistemleriyle uyumlu çalışacağı <strong className="text-foreground">garanti edilmez</strong>. Planlı bakım çalışmaları için önceden bildirim yapılmaya çalışılacak, ancak bu bir yükümlülük değildir.
                </p>
              </section>

              {/* 11. Sorumluluğun Sınırlandırılması */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Sorumluluğun Sınırlandırılması
                </h2>
                <p className="leading-relaxed mb-4">
                  Hizmetler, mümkün olan ölçüde <strong className="text-foreground">&quot;olduğu gibi&quot;</strong> ve <strong className="text-foreground">&quot;mevcut haliyle&quot;</strong> sunulur. Orbira Labs:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kesintisiz hizmet</li>
                  <li>Hatasız veya virüssüz çalışma</li>
                  <li>Belirli bir amaca uygunluk</li>
                  <li>Ticari elverişlilik</li>
                  <li>Kesin veya belirli sonuçların elde edilmesi</li>
                  <li>Veri güvenliği ve bütünlüğü</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  konularında <strong className="text-foreground">açık veya zımni hiçbir garanti vermez</strong>.
                </p>
                <p className="leading-relaxed mt-4">
                  Yürürlükteki hukukun izin verdiği en geniş ölçüde, Orbira Labs; dolaylı zararlar, özel zararlar, arızi zararlar, cezai tazminatlar, veri kaybı, gelir kaybı, iş kaybı, itibar kaybı, kar kaybı veya kullanım kesintisinden doğan zararlardan <strong className="text-foreground">sorumlu tutulamaz</strong>.
                </p>
              </section>

              {/* 12. Tazminat */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. Tazminat
                </h2>
                <p className="leading-relaxed">
                  Kullanıcı, bu Kullanım Koşulları&apos;nı ihlal etmesi, hizmetleri kötüye kullanması veya üçüncü taraf haklarını ihlal etmesi nedeniyle Orbira Labs&apos;in, yöneticilerinin, çalışanlarının ve iş ortaklarının maruz kalabileceği her türlü talep, dava, zarar ve masraftan (makul avukatlık ücretleri dahil) <strong className="text-foreground">Orbira Labs&apos;i tazmin etmeyi ve korumayı</strong> kabul eder.
                </p>
              </section>

              {/* 13. Hesabın Askıya Alınması veya Sonlandırılması */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Hesabın Askıya Alınması veya Sonlandırılması
                </h2>
                <p className="leading-relaxed">
                  Bu koşullara aykırı kullanım tespit edilmesi, şüpheli aktivite veya yasal zorunluluklar halinde Orbira Labs, hesabınızı <strong className="text-foreground">önceden bildirim yapmaksızın</strong> geçici veya kalıcı olarak askıya alma, silme veya hizmet erişimini kısıtlama hakkına sahiptir. Hesap sonlandırıldığında, kullanıcı verilerinize erişiminiz kesilebilir.
                </p>
              </section>

              {/* 14. Gizlilik */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. Gizlilik
                </h2>
                <p className="leading-relaxed">
                  Kişisel verilerin işlenmesine ilişkin detaylar{" "}
                  <Link href="/privacy" className="text-brand-primary hover:underline">
                    Gizlilik Politikası
                  </Link>{" "}
                  içinde açıklanır. Hizmeti kullanarak ilgili politikayı da okuduğunuzu ve kabul ettiğinizi beyan etmiş olursunuz.
                </p>
              </section>

              {/* 15. Üçüncü Taraf Hizmetler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  15. Üçüncü Taraf Hizmetler
                </h2>
                <p className="leading-relaxed">
                  Hizmetlerimiz, üçüncü taraf servisler, API&apos;ler veya harici web sitelerine bağlantılar içerebilir. Bu servislerin içeriklerinden, güvenliğinden, gizlilik politikalarından veya veri işleme uygulamalarından <strong className="text-foreground">Orbira Labs doğrudan sorumlu değildir</strong>. Üçüncü taraf hizmetlerin kullanımı, ilgili hizmetin kendi kullanım koşullarına tabidir.
                </p>
              </section>

              {/* 16. Mücbir Sebepler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  16. Mücbir Sebepler
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs, kontrolü dışındaki nedenlerle (doğal afetler, savaş, terör, salgın hastalık, hükümet eylemleri, internet altyapısı sorunları, siber saldırılar vb.) hizmet sunumunda yaşanan aksaklık veya gecikmelerden <strong className="text-foreground">sorumlu tutulamaz</strong>.
                </p>
              </section>

              {/* 17. Bölünebilirlik */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  17. Bölünebilirlik
                </h2>
                <p className="leading-relaxed">
                  Bu Kullanım Koşulları&apos;nın herhangi bir hükmünün geçersiz veya uygulanamaz bulunması halinde, söz konusu hüküm geçersizlik veya uygulanamama kapsamında değiştirilmiş sayılacak ve diğer hükümler tam olarak yürürlükte kalmaya devam edecektir.
                </p>
              </section>

              {/* 18. Feragat */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  18. Feragat
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs&apos;in bu Kullanım Koşulları kapsamındaki herhangi bir hakkını veya hükmünü kullanmaması veya uygulamaması, söz konusu hak veya hükümden feragat ettiği anlamına gelmez.
                </p>
              </section>

              {/* 19. Değişiklikler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  19. Değişiklikler
                </h2>
                <p className="leading-relaxed">
                  Bu Kullanım Koşulları zaman zaman güncellenebilir. Önemli değişiklikler için makul bir bildirim süresi tanınmaya çalışılacaktır. Güncel versiyon bu sayfada yayımlandığı anda yürürlüğe girer. Değişikliklerden sonra hizmeti kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.
                </p>
              </section>

              {/* 20. Uygulanacak Hukuk ve Yetki */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  20. Uygulanacak Hukuk ve Yetki
                </h2>
                <p className="leading-relaxed">
                  Bu koşullar, aksi zorunlu olarak gerekmedikçe, <strong className="text-foreground">Türkiye Cumhuriyeti hukuku</strong> kapsamında yorumlanır ve uygulanır. Bu koşullardan doğan veya bunlarla ilgili tüm uyuşmazlıklarda <strong className="text-foreground">İstanbul Mahkemeleri ve İcra Daireleri</strong> münhasır yetkiye sahiptir.
                </p>
              </section>

              {/* 21. Sözleşmenin Bütünlüğü */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  21. Sözleşmenin Bütünlüğü
                </h2>
                <p className="leading-relaxed">
                  Bu Kullanım Koşulları, Gizlilik Politikası ile birlikte, taraflar arasındaki anlaşmanın tamamını oluşturur ve konuya ilişkin önceki tüm yazılı veya sözlü anlaşmaların yerine geçer.
                </p>
              </section>

              {/* 22. İletişim */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  22. İletişim
                </h2>
                <p className="leading-relaxed">
                  Kullanım koşulları hakkında sorularınız, şikayetleriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz:
                </p>
                <p className="leading-relaxed mt-4">
                  <strong className="text-foreground">E-posta:</strong>{" "}
                  <a href="mailto:info@orbiralabs.com" className="text-brand-primary hover:underline">
                    info@orbiralabs.com
                  </a>
                </p>
              </section>
            </div>

            {/* Kabul Bildirimi */}
            <div className="mt-12 p-6 bg-background-tertiary rounded-xl border border-border">
              <p className="text-foreground-muted leading-relaxed text-center">
                Bu hizmetleri kullanarak, yukarıdaki tüm koşulları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.
              </p>
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
