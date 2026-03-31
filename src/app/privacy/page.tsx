import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Orbira Labs gizlilik politikası ve veri koruma ilkeleri.",
};

const sections = [
  { id: "toplanan-veriler", num: "01", title: "Toplanan Veriler" },
  { id: "veri-amac", num: "02", title: "Verileri Hangi Amaçlarla Kullanıyoruz" },
  { id: "hukuki-dayanak", num: "03", title: "Hukuki Dayanak" },
  { id: "veri-paylasimi", num: "04", title: "Verilerin Paylaşılması" },
  { id: "ucuncu-taraf", num: "05", title: "Üçüncü Taraf Hizmetler" },
  { id: "hybrid-motorlar", num: "06", title: "Hybrid Motorlar — Veri İşleme" },
  { id: "moodumuz", num: "07", title: "Moodumuz — Yapay Zeka ve Veri Kullanımı" },
  { id: "kasabende", num: "08", title: "KasaBende — Abonelik ve Satın Alma" },
  { id: "cerezler", num: "09", title: "Çerezler ve Benzeri Teknolojiler" },
  { id: "veri-saklama", num: "10", title: "Veri Saklama Süresi" },
  { id: "veri-guvenligi", num: "11", title: "Veri Güvenliği" },
  { id: "kullanici-haklari", num: "12", title: "Kullanıcı Hakları" },
  { id: "cocuk-gizliligi", num: "13", title: "Çocukların Gizliliği" },
  { id: "uluslararasi-aktarim", num: "14", title: "Uluslararası Veri Aktarımı" },
  { id: "veri-ihlali", num: "15", title: "Veri İhlali Bildirimi" },
  { id: "otomatik-karar", num: "16", title: "Otomatik Karar Alma ve Profilleme" },
  { id: "pazarlama", num: "17", title: "Pazarlama İletişimi" },
  { id: "guncellemeler", num: "18", title: "Politika Güncellemeleri" },
  { id: "veri-sorumlusu", num: "19", title: "Veri Sorumlusu" },
  { id: "iletisim", num: "20", title: "İletişim" },
];

function SectionHeading({ id, num, title }: { id: string; num: string; title: string }) {
  return (
    <h2 id={id} className="flex items-baseline gap-3 text-2xl font-semibold text-foreground mb-4 scroll-mt-28">
      <span className="text-sm font-mono text-brand-primary/70">{num}</span>
      {title}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-foreground/90 mb-3 pl-1 border-l-2 border-brand-primary/30 ml-0.5 leading-tight" style={{ paddingLeft: "10px" }}>
      {children}
    </h3>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <Container size="narrow">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-foreground mb-4">
              Gizlilik Politikası
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs text-foreground-muted mb-8">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Son Güncelleme: 31 Mart 2026
            </div>

            <p className="text-foreground-muted leading-relaxed mb-10">
              <strong className="text-foreground">Orbira Labs</strong> olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası; internet sitemiz, mobil uygulamalarımız ve bağlantılı hizmetlerimiz kapsamında hangi verileri topladığımızı, nasıl kullandığımızı, kimlerle paylaştığımızı ve nasıl koruduğumuzu kapsamlı bir şekilde açıklar. Hizmetlerimizi kullanarak bu politikayı kabul etmiş sayılırsınız.
            </p>

            {/* İçindekiler */}
            <nav className="mb-14 p-5 rounded-xl bg-white/[0.02] border border-border">
              <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">İçindekiler</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors no-underline"
                  >
                    <span className="font-mono text-xs text-brand-primary/50 group-hover:text-brand-primary transition-colors">{s.num}</span>
                    {s.title}
                  </a>
                ))}
              </div>
            </nav>

            <div className="space-y-12 text-foreground-muted">
              {/* 01 */}
              <section>
                <SectionHeading id="toplanan-veriler" num="01" title="Toplanan Veriler" />
                <p className="leading-relaxed mb-4">
                  Kullandığınız hizmete bağlı olarak aşağıdaki kategorilerde veri toplayabiliriz:
                </p>

                <div className="space-y-6">
                  <div>
                    <SubHeading>a) Hesap ve Kimlik Bilgileri</SubHeading>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Ad, soyad</li>
                      <li>E-posta adresi</li>
                      <li>Telefon numarası</li>
                      <li>Hesap giriş bilgileri (şifreler şifrelenmiş olarak saklanır)</li>
                      <li>Profil fotoğrafı (varsa)</li>
                      <li>Kullanıcı adı ve tercih edilen dil</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>b) Kullanım Verileri</SubHeading>
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

                  <div>
                    <SubHeading>c) Cihaz ve Teknik Veriler</SubHeading>
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
                    </ul>
                  </div>

                  <div>
                    <SubHeading>d) İşlem ve Hizmet Verileri</SubHeading>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Uygulama içinde oluşturulan kayıtlar ve içerikler</li>
                      <li>Finansal veya operasyonel veriler</li>
                      <li>Alacak, verecek, kasa, işlem ve benzeri kullanıcı verileri</li>
                      <li>Abonelik ve ödeme bilgileri</li>
                      <li>Fatura geçmişi</li>
                      <li>Destek talepleri ve iletişim içerikleri</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>e) Otomatik Toplanan Veriler</SubHeading>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Referans kaynağı (hangi siteden geldiniz)</li>
                      <li>Uygulama yüklenme ve kaldırılma tarihleri</li>
                      <li>Bildirim etkileşimleri</li>
                      <li>Uygulama güncelleme geçmişi</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 02 */}
              <section>
                <SectionHeading id="veri-amac" num="02" title="Verileri Hangi Amaçlarla Kullanıyoruz" />
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

              {/* 03 */}
              <section>
                <SectionHeading id="hukuki-dayanak" num="03" title="Hukuki Dayanak" />
                <p className="leading-relaxed mb-4">
                  Kişisel veriler, <strong className="text-foreground">6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)</strong> ve uygulanabildiği ölçüde <strong className="text-foreground">GDPR (Genel Veri Koruma Yönetmeliği)</strong> hükümlerine uygun olarak aşağıdaki hukuki sebeplere dayanarak işlenebilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Sözleşme:</strong> Bir sözleşmenin kurulması veya ifası için zorunlu olması</li>
                  <li><strong className="text-foreground">Yasal Yükümlülük:</strong> Kanunlarda açıkça öngörülmesi veya yasal yükümlülüklerin yerine getirilmesi</li>
                  <li><strong className="text-foreground">Meşru Menfaat:</strong> Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimizin korunması</li>
                  <li><strong className="text-foreground">Açık Rıza:</strong> Açık rıza gerektiren durumlarda kullanıcıdan alınan açık rıza</li>
                  <li><strong className="text-foreground">Hakkın Tesisi:</strong> Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması</li>
                </ul>
              </section>

              {/* 04 */}
              <section>
                <SectionHeading id="veri-paylasimi" num="04" title="Verilerin Paylaşılması" />
                <p className="leading-relaxed mb-4">
                  Kişisel verileriniz, yalnızca gerekli olduğu ölçüde ve aşağıdaki taraflarla paylaşılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Altyapı Sağlayıcıları:</strong> Sunucu, barındırma ve bulut hizmet sağlayıcıları</li>
                  <li><strong className="text-foreground">Analitik Servisleri:</strong> Kullanım analizi ve hata izleme servisleri</li>
                  <li><strong className="text-foreground">Ödeme İşlemcileri:</strong> Güvenli ödeme işlemleri için ödeme sağlayıcıları</li>
                  <li><strong className="text-foreground">İletişim Servisleri:</strong> E-posta, SMS ve push bildirim hizmet sağlayıcıları</li>
                  <li><strong className="text-foreground">AI Servis Sağlayıcıları:</strong> Hybrid motorların AI katmanı için kullanılan yapay zeka servisleri (yalnızca açık rıza dahilinde)</li>
                  <li><strong className="text-foreground">Yasal Merciler:</strong> Hukuken yetkili kamu kurumları, mahkemeler ve icra daireleri</li>
                  <li><strong className="text-foreground">İş Ortakları:</strong> Hizmet sunumu için gerekli iş ortakları (gizlilik anlaşmaları dahilinde)</li>
                </ul>
                <div className="mt-6 p-4 bg-background-tertiary rounded-lg border border-border">
                  <p className="text-foreground font-medium">
                    Orbira Labs, kişisel verilerinizi <strong>asla satmaz</strong> ve pazarlama amacıyla üçüncü taraflarla paylaşmaz.
                  </p>
                </div>
              </section>

              {/* 05 */}
              <section>
                <SectionHeading id="ucuncu-taraf" num="05" title="Üçüncü Taraf Hizmetler" />
                <p className="leading-relaxed mb-4">
                  Uygulamalarımız ve web sitemiz, hizmet kalitesini artırmak için üçüncü taraf hizmetlerden yararlanabilir. Şu anda aktif olarak kullandığımız veya kullanmayı planladığımız servisler:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Yapay Zeka:</strong> OpenAI API (GPT-4o)</li>
                  <li><strong className="text-foreground">Bulut Altyapı:</strong> Supabase, Vercel</li>
                  <li><strong className="text-foreground">Abonelik Yönetimi:</strong> RevenueCat</li>
                  <li><strong className="text-foreground">Hava Durumu:</strong> Open-Meteo (açık kaynak, kişisel veri içermez)</li>
                  <li><strong className="text-foreground">Kimlik Doğrulama:</strong> Apple Sign-In, Google Sign-In</li>
                  <li><strong className="text-foreground">Bildirimler:</strong> Firebase Cloud Messaging</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Bu üçüncü taraf hizmetlerin veri işleme süreçleri kendi gizlilik politikalarına tabidir. İlgili servislerin gizlilik politikalarını incelemenizi öneririz.
                </p>
              </section>

              {/* 06 — Hybrid Motorlar (YENİ) */}
              <section>
                <SectionHeading id="hybrid-motorlar" num="06" title="Hybrid Motorlar — Veri İşleme" />
                <p className="leading-relaxed mb-6">
                  Orbira Labs ürünleri, <strong className="text-foreground">HAE (Human Analysis Engine)</strong> ve <strong className="text-foreground">AQE (Adaptive Question Engine)</strong> adlı proprietary hybrid motorlar ile desteklenmektedir. Bu motorlar algoritmik işleme ve yapay zeka teknolojilerini birleştirerek çalışır.
                </p>

                <div className="space-y-6">
                  <div>
                    <SubHeading>a) Algoritmik Katman</SubHeading>
                    <p className="leading-relaxed mb-2">
                      Motorların algoritmik katmanında veriler kural tabanlı sistemlerle işlenir:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Bu katmanda veriler Orbira Labs altyapısı dışına çıkmaz</li>
                      <li>Üçüncü taraf AI servislerine veri gönderilmez</li>
                      <li>Puanlama, sınıflandırma ve eşleştirme işlemleri bu katmanda gerçekleşir</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>b) AI Katmanı</SubHeading>
                    <p className="leading-relaxed mb-2">
                      Kişiselleştirme ve doğal dil işleme gerektiren durumlarda:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Kullanıcının <strong className="text-foreground">açık rızası</strong> alındıktan sonra AI servisleri devreye girer</li>
                      <li>Yalnızca işlem için gerekli minimum veri gönderilir</li>
                      <li>Gönderilen veriler AI model eğitimi için kullanılmaz</li>
                      <li>Veriler işlem sonrası servis sağlayıcı tarafından belirli süre içinde silinir</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>c) Hangi Veriler İşlenir?</SubHeading>
                    <p className="leading-relaxed mb-2">
                      Hybrid motorlar, kullandığınız ürüne bağlı olarak şu veri kategorilerini işleyebilir:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Kullanıcı profil bilgileri ve tercihleri</li>
                      <li>Uygulama içi etkileşim ve davranış verileri</li>
                      <li>Anket/analiz cevapları ve geri bildirimler</li>
                      <li>Sağlık ve wellness verileri (ilgili ürünlerde, açık rıza ile)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-background-tertiary rounded-lg border border-border">
                    <p className="text-foreground font-medium">
                      Hybrid motorların çıktıları <strong>bilgilendirme ve yönlendirme amaçlıdır</strong>. Profesyonel danışmanlık yerine geçmez.
                    </p>
                  </div>
                </div>
              </section>

              {/* 07 */}
              <section>
                <SectionHeading id="moodumuz" num="07" title="Moodumuz — Yapay Zeka ve Veri Kullanımı" />
                <p className="leading-relaxed mb-4">
                  Moodumuz uygulaması, kullanıcılara kişiselleştirilmiş içerik sunmak amacıyla yapay zeka teknolojisinden yararlanmaktadır.
                </p>

                <div className="space-y-6">
                  <div>
                    <SubHeading>a) Yapay Zekanın Kullanım Amaçları</SubHeading>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong className="text-foreground">Sana Özel (Haftalık Öneriler):</strong> Regl döngüsü fazlarına ve günlük ruh hali ile enerji trendlerine göre kişiselleştirilmiş aktivite ve öneri içerikleri üretilmektedir.
                      </li>
                      <li>
                        <strong className="text-foreground">Burçlar:</strong> Her burç ve döngü fazına özel günlük yorum içerikleri üretilmektedir.
                      </li>
                      <li>
                        <strong className="text-foreground">Mood Pro – Kişisel Dönüşüm Programı:</strong> Premium üyelik kapsamında sunulan 12 aylık kişiselleştirilmiş program. Bu özellik, kullanıcının açık rızası ile analiz cevaplarını ve görev geçmişini yapay zeka ile işleyerek beslenme, hareket, uyku, zihinsel sağlık ve sosyal ilişkiler alanlarında kişiye özel görevler ve öneriler üretir.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>b) Veri İşleme Yaklaşımı</SubHeading>
                    
                    <div className="p-4 bg-background-tertiary rounded-lg border border-border mb-4">
                      <p className="text-foreground font-medium mb-2">Ücretsiz Özellikler</p>
                      <p className="text-foreground-muted">
                        Sana Özel ve Burçlar özelliklerinde kullanıcılara ait hiçbir kişisel veri yapay zeka servisine gönderilmez. Bu içerikler Orbira Labs tarafından önceden üretilerek veritabanında saklanır ve kullanıcının burç/döngü fazına göre gösterilir.
                      </p>
                    </div>

                    <div className="p-4 bg-background-tertiary rounded-lg border border-border">
                      <p className="text-foreground font-medium mb-2">Mood Pro – Kişisel Dönüşüm Programı</p>
                      <p className="text-foreground-muted mb-3">
                        Bu premium özellik, kişiselleştirilmiş program üretebilmek için kullanıcı verilerini yapay zeka ile işlemeyi gerektirir. Bu işlem yalnızca kullanıcının <strong className="text-foreground">açık rızası</strong> alındıktan sonra gerçekleştirilir.
                      </p>
                      <p className="text-foreground-muted mb-2"><strong className="text-foreground">İşlenen veriler:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-foreground-muted">
                        <li>Analiz anketindeki cevaplar (hedefler, yaşam tarzı, tercihler)</li>
                        <li>Görev tamamlama geçmişi ve geri bildirimler</li>
                        <li>Döngü fazı ve genel wellness verileri</li>
                      </ul>
                      <p className="text-foreground-muted mt-3 mb-2"><strong className="text-foreground">Güvenceler:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-foreground-muted">
                        <li>Veriler yalnızca program üretimi için kullanılır</li>
                        <li>Üçüncü taraflarla paylaşılmaz</li>
                        <li>Reklamcılık amacıyla işlenmez</li>
                        <li>Yapay zeka modeli eğitimi için kullanılmaz</li>
                        <li>İstediğiniz zaman rızanızı geri çekebilirsiniz</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <SubHeading>c) Toplanan Veriler ve Kullanım Amaçları</SubHeading>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong className="text-foreground">Doğum Tarihi:</strong> Kullanıcının burç bilgisini hesaplamak ve regl döngüsü fazını doğru belirlemek için kullanılmaktadır.
                      </li>
                      <li>
                        <strong className="text-foreground">İl ve İlçe:</strong> Kullanıcının bulunduğu bölgeye ait güncel hava durumu verilerini çekmek için kullanılmaktadır. Hava durumu verileri Open-Meteo gibi açık kaynaklı, kişisel veri içermeyen servislerden alınmaktadır.
                      </li>
                      <li>
                        <strong className="text-foreground">Ruh Hali ve Enerji Kayıtları:</strong> Haftalık öneri ve kişisel mesajların kişiselleştirilmesinde kullanılmaktadır. Bu veriler yalnızca cihazda ve Orbira Labs altyapısında işlenmekte; hiçbir üçüncü tarafla paylaşılmamaktadır.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>d) Yapay Zeka Servis Sağlayıcısı</SubHeading>
                    <p className="leading-relaxed mb-3">
                      Moodumuz, yapay zeka işlemleri için <strong className="text-foreground">OpenAI GPT-4o</strong> modelini kullanmaktadır. OpenAI&apos;nin veri işleme politikası gereği:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>API üzerinden gönderilen veriler model eğitimi için kullanılmaz</li>
                      <li>Veriler 30 gün içinde OpenAI sistemlerinden silinir</li>
                      <li>OpenAI, verileri kötüye kullanım tespiti dışında saklamaz</li>
                    </ul>
                    <p className="leading-relaxed mt-3">
                      Detaylı bilgi için:{" "}
                      <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        OpenAI Gizlilik Politikası
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* 08 */}
              <section>
                <SectionHeading id="kasabende" num="08" title="KasaBende — Abonelik ve Satın Alma Verileri" />
                <p className="leading-relaxed mb-4">
                  KasaBende uygulaması, işletme yönetimi ve kasa takibi için tasarlanmış bir mobil uygulamadır.
                </p>

                <div className="space-y-6">
                  <div>
                    <SubHeading>a) Toplanan Satın Alma Verileri</SubHeading>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-foreground">Satın Alma Geçmişi:</strong> Abonelik başlangıç tarihi, yenileme tarihleri, abonelik türü (aylık/yıllık) ve abonelik durumu</li>
                      <li><strong className="text-foreground">Abonelik Kimliği:</strong> App Store veya Google Play tarafından sağlanan anonim işlem tanımlayıcıları</li>
                      <li><strong className="text-foreground">Ürün Bilgisi:</strong> Satın alınan abonelik planı ve fiyatlandırma bilgisi</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>b) Ödeme Bilgileri</SubHeading>
                    <div className="p-4 bg-background-tertiary rounded-lg border border-border mb-3">
                      <p className="text-foreground font-medium">
                        KasaBende, kredi kartı numarası, CVV veya banka hesap bilgileri gibi hassas ödeme bilgilerini <strong>toplamaz ve saklamaz</strong>.
                      </p>
                    </div>
                    <p className="leading-relaxed">
                      Tüm ödeme işlemleri Apple App Store veya Google Play Store üzerinden güvenli bir şekilde gerçekleştirilmektedir. Orbira Labs, bu platformların ödeme altyapısını kullanır ve ödeme bilgilerine doğrudan erişimi yoktur.
                    </p>
                  </div>

                  <div>
                    <SubHeading>c) Verilerin Kullanım Amaçları</SubHeading>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-foreground">Abonelik Yönetimi:</strong> Pro özelliklerin etkinleştirilmesi ve yönetilmesi</li>
                      <li><strong className="text-foreground">Hesap Senkronizasyonu:</strong> Farklı cihazlarda abonelik durumunun tutarlı kalması</li>
                      <li><strong className="text-foreground">Müşteri Desteği:</strong> Abonelikle ilgili sorunların çözümlenmesi</li>
                      <li><strong className="text-foreground">Yasal Uyum:</strong> Fatura ve muhasebe kayıtlarının tutulması</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>d) Üçüncü Taraf Abonelik Servisi</SubHeading>
                    <p className="leading-relaxed">
                      KasaBende, abonelik yönetimi için <strong className="text-foreground">RevenueCat</strong> servisini kullanmaktadır. RevenueCat&apos;in veri işleme politikaları için:{" "}
                      <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                        RevenueCat Gizlilik Politikası
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* 09 */}
              <section>
                <SectionHeading id="cerezler" num="09" title="Çerezler ve Benzeri Teknolojiler" />
                <p className="leading-relaxed mb-4">
                  Web sitemiz şu anda analitik, reklam veya tercih amaçlı <strong className="text-foreground">üçüncü taraf çerezi kullanmamaktadır</strong>. Site deneyimini iyileştirmek amacıyla gelecekte çerez kullanılması halinde bu bölüm güncellenecektir.
                </p>
                <p className="leading-relaxed mb-4">
                  Mobil uygulamalarımızda çerez yerine aşağıdaki teknolojiler kullanılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Yerel Depolama:</strong> Uygulama ayarları ve kullanıcı tercihlerinin cihazda saklanması</li>
                  <li><strong className="text-foreground">Oturum Yönetimi:</strong> Güvenli kimlik doğrulama tokenları</li>
                  <li><strong className="text-foreground">Cihaz Tanımlayıcıları:</strong> Abonelik doğrulama ve güvenlik amaçlı anonim cihaz kimlikleri</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Tarayıcı veya cihaz ayarlarınızdan bu teknolojileri yönetebilirsiniz; ancak bu durumda bazı özellikler düzgün çalışmayabilir.
                </p>
              </section>

              {/* 10 */}
              <section>
                <SectionHeading id="veri-saklama" num="10" title="Veri Saklama Süresi" />
                <p className="leading-relaxed mb-4">
                  Kişisel veriler, işlenme amaçları için gerekli olan süre boyunca veya ilgili yasal yükümlülüklerin gerektirdiği süre kadar saklanır:
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

              {/* 11 */}
              <section>
                <SectionHeading id="veri-guvenligi" num="11" title="Veri Güvenliği" />
                <p className="leading-relaxed mb-4">
                  Orbira Labs, kişisel verileri yetkisiz erişim, kayıp, kötüye kullanım, değiştirme veya ifşaya karşı korumak için <strong className="text-foreground">endüstri standardı güvenlik önlemleri</strong> uygular:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Şifreleme:</strong> Veri aktarımında TLS/SSL şifreleme</li>
                  <li><strong className="text-foreground">Depolama Güvenliği:</strong> Hassas verilerin şifrelenmiş depolanması</li>
                  <li><strong className="text-foreground">Erişim Kontrolü:</strong> Rol tabanlı erişim yetkilendirmesi</li>
                  <li><strong className="text-foreground">Güvenlik Duvarları:</strong> Ağ güvenliği ve izinsiz giriş tespiti</li>
                  <li><strong className="text-foreground">Düzenli Denetim:</strong> Güvenlik açığı taramaları ve denetimleri</li>
                  <li><strong className="text-foreground">Olay Müdahale:</strong> Veri ihlali durumunda müdahale planları</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Ancak internet üzerinden yapılan hiçbir veri aktarımının veya elektronik depolamanın <strong className="text-foreground">%100 güvenli olduğu garanti edilemez</strong>. Olası bir güvenlik ihlali durumunda, yasal yükümlülüklerimiz çerçevesinde kullanıcıları ve yetkili makamları bilgilendireceğiz.
                </p>
              </section>

              {/* 12 */}
              <section>
                <SectionHeading id="kullanici-haklari" num="12" title="Kullanıcı Hakları" />
                <p className="leading-relaxed mb-4">
                  6698 sayılı KVKK ve uygulanabildiği ölçüde GDPR kapsamında, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
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

              {/* 13 */}
              <section>
                <SectionHeading id="cocuk-gizliligi" num="13" title="Çocukların Gizliliği" />
                <p className="leading-relaxed">
                  Hizmetlerimiz doğrudan <strong className="text-foreground">13 yaş altındaki çocuklara yönelik değildir</strong>. 13 yaşından küçük çocuklardan bilerek kişisel veri toplamıyoruz. Eğer bir ebeveyn veya vasi olarak çocuğunuzun bize kişisel veri sağladığını fark ederseniz, lütfen bizimle iletişime geçin. Böyle bir verinin farkında olmadan toplandığını öğrenmemiz halinde, gerekli silme işlemlerini derhal gerçekleştireceğiz.
                </p>
              </section>

              {/* 14 */}
              <section>
                <SectionHeading id="uluslararasi-aktarim" num="14" title="Uluslararası Veri Aktarımı" />
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

              {/* 15 */}
              <section>
                <SectionHeading id="veri-ihlali" num="15" title="Veri İhlali Bildirimi" />
                <p className="leading-relaxed">
                  Kişisel verilerinizi etkileyen bir güvenlik ihlali tespit edilmesi halinde, <strong className="text-foreground">yasal süreler içinde</strong> (72 saat) Kişisel Verileri Koruma Kurulu&apos;na bildirimde bulunulacak ve ihlalden etkilenen kullanıcılar mümkün olan en kısa sürede bilgilendirilecektir. Bildirimde ihlalin niteliği, etkilenen veri kategorileri, olası sonuçları ve alınan önlemler yer alacaktır.
                </p>
              </section>

              {/* 16 */}
              <section>
                <SectionHeading id="otomatik-karar" num="16" title="Otomatik Karar Alma ve Profilleme" />
                <p className="leading-relaxed">
                  Hizmetlerimizde kullanıcı deneyimini iyileştirmek amacıyla hybrid motorlar aracılığıyla otomatik karar alma süreçleri kullanılabilir. Bu süreçler hakkında bilgi alma ve itiraz etme hakkınız saklıdır. Önemli kararların alınmasında tamamen otomatik sistemlere dayanılmamakta, insan denetimi sağlanmaktadır.
                </p>
              </section>

              {/* 17 */}
              <section>
                <SectionHeading id="pazarlama" num="17" title="Pazarlama İletişimi" />
                <p className="leading-relaxed">
                  Orbira Labs, kullanıcılara yalnızca <strong className="text-foreground">açık onayları dahilinde</strong> pazarlama iletişimi gönderir. Pazarlama e-postalarından istediğiniz zaman çıkabilirsiniz. Ancak hizmetlerinizle ilgili önemli bilgilendirmeler (güvenlik uyarıları, hesap bildirimleri, yasal değişiklikler) pazarlama iletişimi kapsamında değerlendirilmez ve bunlardan çıkış yapılamaz.
                </p>
              </section>

              {/* 18 */}
              <section>
                <SectionHeading id="guncellemeler" num="18" title="Politika Güncellemeleri" />
                <p className="leading-relaxed">
                  Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler yapılması halinde, kullanıcıları <strong className="text-foreground">e-posta, uygulama içi bildirim veya web sitesinde duyuru</strong> yoluyla bilgilendirmeye çalışacağız. Güncel metin bu sayfada yayımlandığı anda yürürlüğe girer. Değişikliklerden sonra hizmetleri kullanmaya devam etmeniz, güncel politikayı kabul ettiğiniz anlamına gelir.
                </p>
              </section>

              {/* 19 */}
              <section>
                <SectionHeading id="veri-sorumlusu" num="19" title="Veri Sorumlusu" />
                <p className="leading-relaxed">
                  Kişisel verilerinizin işlenmesinden sorumlu veri sorumlusu:
                </p>
                <div className="mt-4 p-4 bg-background-tertiary rounded-lg border border-border">
                  <p className="text-foreground font-medium">Orbira Labs</p>
                  <p className="mt-2">E-posta: info@orbiralabs.com</p>
                </div>
              </section>

              {/* 20 */}
              <section>
                <SectionHeading id="iletisim" num="20" title="İletişim" />
                <p className="leading-relaxed">
                  Gizlilikle ilgili her türlü soru, talep, şikayet veya haklarınızı kullanmak için:
                </p>
                <div className="mt-4 p-4 bg-background-tertiary rounded-lg border border-border">
                  <p>
                    <strong className="text-foreground">E-posta:</strong>{" "}
                    <a href="mailto:info@orbiralabs.com" className="text-brand-primary hover:underline">
                      info@orbiralabs.com
                    </a>
                  </p>
                </div>
              </section>
            </div>

            {/* İlgili Belgeler */}
            <div className="mt-14 p-6 bg-background-tertiary rounded-xl border border-border">
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
