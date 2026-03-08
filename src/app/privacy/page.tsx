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
              Son Güncelleme: 8 Mart 2026
            </p>

            <p className="text-foreground-muted leading-relaxed mb-8">
              <strong className="text-foreground">Orbira Labs</strong> olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası; internet sitemiz, mobil uygulamalarımız ve bağlantılı hizmetlerimiz kapsamında hangi verileri topladığımızı, nasıl kullandığımızı, kimlerle paylaştığımızı ve nasıl koruduğumuzu kapsamlı bir şekilde açıklar. Hizmetlerimizi kullanarak bu politikayı kabul etmiş sayılırsınız.
            </p>

            <div className="space-y-10 text-foreground-muted">
              {/* 1. Toplanan Veriler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Toplanan Veriler
                </h2>
                <p className="leading-relaxed mb-4">
                  Kullandığınız hizmete bağlı olarak aşağıdaki kategorilerde veri toplayabiliriz:
                </p>

                {/* 1.a Hesap ve Kimlik Bilgileri */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    a) Hesap ve Kimlik Bilgileri
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ad, soyad</li>
                    <li>E-posta adresi</li>
                    <li>Telefon numarası</li>
                    <li>Hesap giriş bilgileri (şifreler şifrelenmiş olarak saklanır)</li>
                    <li>Profil fotoğrafı (varsa)</li>
                    <li>Kullanıcı adı ve tercih edilen dil</li>
                  </ul>
                </div>

                {/* 1.b Kullanım Verileri */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    b) Kullanım Verileri
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Uygulama içi hareketler ve tıklamalar</li>
                    <li>Özellik kullanım sıklığı ve süreleri</li>
                    <li>Oturum başlangıç ve bitiş zamanları</li>
                    <li>Sayfa görüntüleme verileri</li>
                    <li>Arama sorguları</li>
                    <li>Hata kayıtları ve çökme raporları</li>
                    <li>Performans metrikleri</li>
                  </ul>
                </div>

                {/* 1.c Cihaz ve Teknik Veriler */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    c) Cihaz ve Teknik Veriler
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP adresi ve yaklaşık konum bilgisi</li>
                    <li>Cihaz modeli ve üreticisi</li>
                    <li>İşletim sistemi ve sürümü</li>
                    <li>Tarayıcı türü ve sürümü</li>
                    <li>Uygulama sürümü</li>
                    <li>Ekran çözünürlüğü</li>
                    <li>Dil ve bölge ayarları</li>
                    <li>Zaman dilimi</li>
                    <li>Benzersiz cihaz tanımlayıcıları (IDFA, GAID vb.)</li>
                    <li>Çerezler ve benzeri teknik tanımlayıcılar</li>
                  </ul>
                </div>

                {/* 1.d İşlem ve Hizmet Verileri */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    d) İşlem ve Hizmet Verileri
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Uygulama içinde oluşturulan kayıtlar ve içerikler</li>
                    <li>Finansal veya operasyonel veriler</li>
                    <li>Alacak, verecek, kasa, işlem ve benzeri kullanıcı verileri</li>
                    <li>Abonelik ve ödeme bilgileri</li>
                    <li>Fatura geçmişi</li>
                    <li>Destek talepleri ve iletişim içerikleri</li>
                  </ul>
                </div>

                {/* 1.e Otomatik Toplanan Veriler */}
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    e) Otomatik Toplanan Veriler
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Referans kaynağı (hangi siteden geldiniz)</li>
                    <li>Uygulama yüklenme ve kaldırılma tarihleri</li>
                    <li>Bildirim etkileşimleri</li>
                    <li>Uygulama güncelleme geçmişi</li>
                  </ul>
                </div>
              </section>

              {/* 2. Verileri Hangi Amaçlarla Kullanıyoruz */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Verileri Hangi Amaçlarla Kullanıyoruz
                </h2>
                <p className="leading-relaxed mb-4">
                  Topladığımız verileri aşağıdaki amaçlarla kullanabiliriz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Hizmet Sunumu:</strong> Hizmetleri sunmak, işletmek ve sürdürmek</li>
                  <li><strong className="text-foreground">Hesap Yönetimi:</strong> Hesap oluşturmak, doğrulamak ve yönetmek</li>
                  <li><strong className="text-foreground">Güvenlik:</strong> Uygulama ve kullanıcı güvenliğini sağlamak, dolandırıcılığı önlemek</li>
                  <li><strong className="text-foreground">Destek:</strong> Müşteri destek taleplerini yanıtlamak ve sorunları çözmek</li>
                  <li><strong className="text-foreground">İyileştirme:</strong> Hizmetleri geliştirmek ve kullanıcı deneyimini optimize etmek</li>
                  <li><strong className="text-foreground">Hata Tespiti:</strong> Teknik hataları tespit etmek, teşhis etmek ve önlemek</li>
                  <li><strong className="text-foreground">Analiz:</strong> Kullanım trendlerini ve istatistiklerini analiz etmek</li>
                  <li><strong className="text-foreground">İletişim:</strong> Önemli bilgilendirmeler, güvenlik uyarıları ve hizmet güncellemeleri göndermek</li>
                  <li><strong className="text-foreground">Yasal Uyum:</strong> Yasal yükümlülükleri yerine getirmek ve yasal taleplere yanıt vermek</li>
                  <li><strong className="text-foreground">Kişiselleştirme:</strong> Kullanıcı tercihlerine göre içerik ve öneriler sunmak</li>
                </ul>
              </section>

              {/* 3. Hukuki Dayanak */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Hukuki Dayanak
                </h2>
                <p className="leading-relaxed mb-4">
                  Kişisel veriler, <strong className="text-foreground">6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)</strong> ve ilgili mevzuata uygun olarak aşağıdaki hukuki sebeplere dayanarak işlenebilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Sözleşme:</strong> Bir sözleşmenin kurulması veya ifası için zorunlu olması</li>
                  <li><strong className="text-foreground">Yasal Yükümlülük:</strong> Kanunlarda açıkça öngörülmesi veya yasal yükümlülüklerin yerine getirilmesi</li>
                  <li><strong className="text-foreground">Meşru Menfaat:</strong> Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimizin korunması</li>
                  <li><strong className="text-foreground">Açık Rıza:</strong> Açık rıza gerektiren durumlarda kullanıcıdan alınan açık rıza</li>
                  <li><strong className="text-foreground">Hakkın Tesisi:</strong> Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması</li>
                </ul>
              </section>

              {/* 4. Verilerin Paylaşılması */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Verilerin Paylaşılması
                </h2>
                <p className="leading-relaxed mb-4">
                  Kişisel verileriniz, yalnızca gerekli olduğu ölçüde ve aşağıdaki taraflarla paylaşılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Altyapı Sağlayıcıları:</strong> Sunucu, barındırma ve bulut hizmet sağlayıcıları</li>
                  <li><strong className="text-foreground">Analitik Servisleri:</strong> Kullanım analizi ve hata izleme servisleri</li>
                  <li><strong className="text-foreground">Ödeme İşlemcileri:</strong> Güvenli ödeme işlemleri için ödeme sağlayıcıları</li>
                  <li><strong className="text-foreground">İletişim Servisleri:</strong> E-posta, SMS ve push bildirim hizmet sağlayıcıları</li>
                  <li><strong className="text-foreground">Yasal Merciler:</strong> Hukuken yetkili kamu kurumları, mahkemeler ve icra daireleri</li>
                  <li><strong className="text-foreground">İş Ortakları:</strong> Hizmet sunumu için gerekli iş ortakları (gizlilik anlaşmaları dahilinde)</li>
                </ul>
                <div className="mt-6 p-4 bg-background-tertiary rounded-lg border border-border">
                  <p className="text-foreground font-medium">
                    Orbira Labs, kişisel verilerinizi <strong>asla satmaz</strong> ve pazarlama amacıyla üçüncü taraflarla paylaşmaz.
                  </p>
                </div>
              </section>

              {/* 5. Üçüncü Taraf Hizmetler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Üçüncü Taraf Hizmetler
                </h2>
                <p className="leading-relaxed mb-4">
                  Uygulamalarımız ve web sitemiz, hizmet kalitesini artırmak için üçüncü taraf hizmetlerden yararlanabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Analitik:</strong> Google Analytics, Firebase Analytics, Mixpanel vb.</li>
                  <li><strong className="text-foreground">Hata İzleme:</strong> Sentry, Crashlytics, Bugsnag vb.</li>
                  <li><strong className="text-foreground">Bulut Depolama:</strong> AWS, Google Cloud, Azure vb.</li>
                  <li><strong className="text-foreground">Ödeme:</strong> Stripe, iyzico, PayTR vb.</li>
                  <li><strong className="text-foreground">Bildirimler:</strong> Firebase Cloud Messaging, OneSignal vb.</li>
                  <li><strong className="text-foreground">Kimlik Doğrulama:</strong> Google Sign-In, Apple Sign-In vb.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Bu üçüncü taraf hizmetlerin veri işleme süreçleri kendi gizlilik politikalarına tabidir. İlgili servislerin gizlilik politikalarını incelemenizi öneririz.
                </p>
              </section>

              {/* 6. Çerezler ve Benzeri Teknolojiler */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Çerezler ve Benzeri Teknolojiler
                </h2>
                <p className="leading-relaxed mb-4">
                  Web sitemizde ve bağlantılı servislerimizde çerezler (cookies), piksel etiketleri, yerel depolama ve benzeri teknolojiler kullanılabilir. Bu teknolojiler şu amaçlarla kullanılır:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Zorunlu Çerezler:</strong> Site işlevselliği ve oturum yönetimi için gerekli</li>
                  <li><strong className="text-foreground">Tercih Çerezleri:</strong> Kullanıcı tercihlerinin (dil, tema vb.) hatırlanması</li>
                  <li><strong className="text-foreground">Güvenlik Çerezleri:</strong> Güvenlik önlemleri ve dolandırıcılık tespiti</li>
                  <li><strong className="text-foreground">Analitik Çerezler:</strong> Site kullanımı ve performans ölçümü</li>
                  <li><strong className="text-foreground">İşlevsel Çerezler:</strong> Gelişmiş özellikler ve kişiselleştirme</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda bazı site özellikleri düzgün çalışmayabilir.
                </p>
              </section>

              {/* 7. Veri Saklama Süresi */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Veri Saklama Süresi
                </h2>
                <p className="leading-relaxed mb-4">
                  Kişisel veriler, işlenme amaçları için gerekli olan süre boyunca veya ilgili yasal yükümlülüklerin gerektirdiği süre kadar saklanır. Genel saklama süreleri:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Hesap Verileri:</strong> Hesap aktif olduğu sürece ve hesap silindikten sonra 30 gün</li>
                  <li><strong className="text-foreground">İşlem Kayıtları:</strong> Yasal zorunluluklar gereği 10 yıla kadar</li>
                  <li><strong className="text-foreground">Destek Talepleri:</strong> Talebin çözümünden itibaren 2 yıl</li>
                  <li><strong className="text-foreground">Analitik Veriler:</strong> Anonimleştirilmiş olarak süresiz</li>
                  <li><strong className="text-foreground">Log Kayıtları:</strong> Güvenlik amaçlı 1-2 yıl</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Saklama süresi sona erdiğinde veriler güvenli bir şekilde silinir, anonim hale getirilir veya mevzuata uygun şekilde imha edilir.
                </p>
              </section>

              {/* 8. Veri Güvenliği */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Veri Güvenliği
                </h2>
                <p className="leading-relaxed mb-4">
                  Orbira Labs, kişisel verileri yetkisiz erişim, kayıp, kötüye kullanım, değiştirme veya ifşaya karşı korumak için <strong className="text-foreground">endüstri standardı güvenlik önlemleri</strong> uygular:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Şifreleme:</strong> Veri aktarımında TLS/SSL şifreleme</li>
                  <li><strong className="text-foreground">Depolama Güvenliği:</strong> Hassas verilerin şifrelenmiş depolanması</li>
                  <li><strong className="text-foreground">Erişim Kontrolü:</strong> Rol tabanlı erişim yetkilendirmesi</li>
                  <li><strong className="text-foreground">Güvenlik Duvarları:</strong> Ağ güvenliği ve izinsiz giriş tespiti</li>
                  <li><strong className="text-foreground">Düzenli Denetim:</strong> Güvenlik açığı taramaları ve denetimleri</li>
                  <li><strong className="text-foreground">Personel Eğitimi:</strong> Veri güvenliği konusunda çalışan eğitimleri</li>
                  <li><strong className="text-foreground">Olay Müdahale:</strong> Veri ihlali durumunda müdahale planları</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Ancak internet üzerinden yapılan hiçbir veri aktarımının veya elektronik depolamanın <strong className="text-foreground">%100 güvenli olduğu garanti edilemez</strong>. Olası bir güvenlik ihlali durumunda, yasal yükümlülüklerimiz çerçevesinde kullanıcıları ve yetkili makamları bilgilendireceğiz.
                </p>
              </section>

              {/* 9. Kullanıcı Hakları */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Kullanıcı Hakları
                </h2>
                <p className="leading-relaxed mb-4">
                  6698 sayılı KVKK ve ilgili mevzuat kapsamında, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Bilgi Edinme:</strong> Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li><strong className="text-foreground">Erişim:</strong> İşlenen verilere ilişkin bilgi talep etme</li>
                  <li><strong className="text-foreground">Düzeltme:</strong> Yanlış veya eksik verilerin düzeltilmesini isteme</li>
                  <li><strong className="text-foreground">Silme:</strong> Belirli şartlarda kişisel verilerin silinmesini veya yok edilmesini talep etme</li>
                  <li><strong className="text-foreground">Kısıtlama:</strong> İşlemenin kısıtlanmasını talep etme</li>
                  <li><strong className="text-foreground">İtiraz:</strong> Kişisel verilerinizin işlenmesine itiraz etme</li>
                  <li><strong className="text-foreground">Rıza Geri Çekme:</strong> Açık rızaya dayalı işlemlerde rızanızı geri çekme</li>
                  <li><strong className="text-foreground">Veri Taşınabilirliği:</strong> Uygulanabiliyorsa verilerinizi yapılandırılmış formatta alma</li>
                  <li><strong className="text-foreground">Şikayet:</strong> Kişisel Verileri Koruma Kurulu&apos;na şikayette bulunma</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Bu haklarınızı kullanmak için aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz. Talebiniz <strong className="text-foreground">30 gün</strong> içinde değerlendirilecek ve yanıtlanacaktır.
                </p>
              </section>

              {/* 10. Çocukların Gizliliği */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Çocukların Gizliliği
                </h2>
                <p className="leading-relaxed">
                  Hizmetlerimiz doğrudan <strong className="text-foreground">13 yaş altındaki çocuklara yönelik değildir</strong>. 13 yaşından küçük çocuklardan bilerek kişisel veri toplamıyoruz. Eğer bir ebeveyn veya vasi olarak çocuğunuzun bize kişisel veri sağladığını fark ederseniz, lütfen bizimle iletişime geçin. Böyle bir verinin farkında olmadan toplandığını öğrenmemiz halinde, gerekli silme işlemlerini derhal gerçekleştireceğiz.
                </p>
              </section>

              {/* 11. Uluslararası Veri Aktarımı */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Uluslararası Veri Aktarımı
                </h2>
                <p className="leading-relaxed mb-4">
                  Kullandığımız servis sağlayıcıların altyapısına bağlı olarak verileriniz, <strong className="text-foreground">Türkiye dışındaki sunucularda</strong> işlenebilir veya saklanabilir. Bu tür veri aktarımlarında:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Yeterli koruma sağlayan ülkelere aktarım yapılması tercih edilir</li>
                  <li>Standart sözleşme maddeleri veya benzeri koruma mekanizmaları uygulanır</li>
                  <li>Veri işleyen taraflarla kapsamlı gizlilik anlaşmaları imzalanır</li>
                  <li>KVKK ve GDPR uyumluluğu gözetilir</li>
                </ul>
              </section>

              {/* 12. Veri İhlali Bildirimi */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. Veri İhlali Bildirimi
                </h2>
                <p className="leading-relaxed">
                  Kişisel verilerinizi etkileyen bir güvenlik ihlali tespit edilmesi halinde, <strong className="text-foreground">yasal süreler içinde</strong> (72 saat) Kişisel Verileri Koruma Kurulu&apos;na bildirimde bulunulacak ve ihlalden etkilenen kullanıcılar mümkün olan en kısa sürede bilgilendirilecektir. Bildirimde ihlalin niteliği, etkilenen veri kategorileri, olası sonuçları ve alınan önlemler yer alacaktır.
                </p>
              </section>

              {/* 13. Otomatik Karar Alma */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Otomatik Karar Alma ve Profilleme
                </h2>
                <p className="leading-relaxed">
                  Hizmetlerimizde kullanıcı deneyimini iyileştirmek amacıyla otomatik karar alma süreçleri kullanılabilir. Bu süreçler hakkında bilgi alma ve itiraz etme hakkınız saklıdır. Önemli kararların alınmasında tamamen otomatik sistemlere dayanılmamakta, insan denetimi sağlanmaktadır.
                </p>
              </section>

              {/* 14. Pazarlama İletişimi */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. Pazarlama İletişimi
                </h2>
                <p className="leading-relaxed">
                  Orbira Labs, kullanıcılara yalnızca <strong className="text-foreground">açık onayları dahilinde</strong> pazarlama iletişimi gönderir. Pazarlama e-postalarından istediğiniz zaman çıkabilirsiniz. Ancak hizmetlerinizle ilgili önemli bilgilendirmeler (güvenlik uyarıları, hesap bildirimleri, yasal değişiklikler) pazarlama iletişimi kapsamında değerlendirilmez ve bunlardan çıkış yapılamaz.
                </p>
              </section>

              {/* 15. Politika Güncellemeleri */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  15. Politika Güncellemeleri
                </h2>
                <p className="leading-relaxed">
                  Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler yapılması halinde, kullanıcıları <strong className="text-foreground">e-posta, uygulama içi bildirim veya web sitesinde duyuru</strong> yoluyla bilgilendirmeye çalışacağız. Güncel metin bu sayfada yayımlandığı anda yürürlüğe girer. Değişikliklerden sonra hizmetleri kullanmaya devam etmeniz, güncel politikayı kabul ettiğiniz anlamına gelir.
                </p>
              </section>

              {/* 16. Veri Sorumlusu */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  16. Veri Sorumlusu
                </h2>
                <p className="leading-relaxed">
                  Kişisel verilerinizin işlenmesinden sorumlu veri sorumlusu:
                </p>
                <div className="mt-4 p-4 bg-background-tertiary rounded-lg border border-border">
                  <p className="text-foreground font-medium">Orbira Labs</p>
                  <p className="mt-2">E-posta: hello@orbiralabs.com</p>
                </div>
              </section>

              {/* 17. İletişim */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  17. İletişim
                </h2>
                <p className="leading-relaxed">
                  Gizlilikle ilgili her türlü soru, talep, şikayet veya haklarınızı kullanmak için:
                </p>
                <div className="mt-4 p-4 bg-background-tertiary rounded-lg border border-border space-y-2">
                  <p>
                    <strong className="text-foreground">E-posta:</strong>{" "}
                    <a href="mailto:seyyitaliperseorganization@gmail.com" className="text-brand-primary hover:underline">
                      seyyitaliperseorganization@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Genel İletişim:</strong>{" "}
                    <a href="mailto:hello@orbiralabs.com" className="text-brand-primary hover:underline">
                      hello@orbiralabs.com
                    </a>
                  </p>
                </div>
              </section>
            </div>

            {/* İlgili Belgeler */}
            <div className="mt-12 p-6 bg-background-tertiary rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">İlgili Belgeler</h3>
              <p className="text-foreground-muted">
                Bu Gizlilik Politikası,{" "}
                <Link href="/terms" className="text-brand-primary hover:underline">
                  Kullanım Koşulları
                </Link>{" "}
                ile birlikte okunmalıdır. Hizmetlerimizi kullanarak her iki belgeyi de kabul etmiş sayılırsınız.
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
