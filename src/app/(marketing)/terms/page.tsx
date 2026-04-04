import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Orbira Labs kullanım koşulları ve şartları.",
};

const sections = [
  { id: "taraflar", num: "01", title: "Taraflar" },
  { id: "hizmet-kapsami", num: "02", title: "Hizmet Kapsamı" },
  { id: "kullanim-sartlari", num: "03", title: "Kullanım Şartları" },
  { id: "hesap-guvenligi", num: "04", title: "Hesap Güvenliği" },
  { id: "yas-siniri", num: "05", title: "Yaş Sınırı ve Ehliyet" },
  { id: "ucretli-hizmetler", num: "06", title: "Ücretli Hizmetler ve Abonelikler" },
  { id: "fikri-mulkiyet", num: "07", title: "Fikri Mülkiyet" },
  { id: "yasakli-kullanimlar", num: "08", title: "Yasaklı Kullanımlar" },
  { id: "kullanici-icerikleri", num: "09", title: "Kullanıcı İçerikleri" },
  { id: "hizmet-degisiklik", num: "10", title: "Hizmette Değişiklik ve Erişim" },
  { id: "sorumluluk", num: "11", title: "Sorumluluğun Sınırlandırılması" },
  { id: "tazminat", num: "12", title: "Tazminat" },
  { id: "hesap-askiya-alma", num: "13", title: "Hesabın Askıya Alınması" },
  { id: "gizlilik", num: "14", title: "Gizlilik" },
  { id: "hybrid-motorlar", num: "15", title: "Hybrid Motorlar (HAE & AQE)" },
  { id: "yapay-zeka", num: "16", title: "Yapay Zeka Destekli Özellikler" },
  { id: "ucuncu-taraf", num: "17", title: "Üçüncü Taraf Hizmetler" },
  { id: "mucbir-sebepler", num: "18", title: "Mücbir Sebepler" },
  { id: "bolunebilirlik", num: "19", title: "Bölünebilirlik" },
  { id: "feragat", num: "20", title: "Feragat" },
  { id: "degisiklikler", num: "21", title: "Değişiklikler" },
  { id: "hukuk-yetki", num: "22", title: "Uygulanacak Hukuk ve Yetki" },
  { id: "butunluk", num: "23", title: "Sözleşmenin Bütünlüğü" },
  { id: "iletisim", num: "24", title: "İletişim" },
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

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <Container size="narrow">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-foreground mb-4">
              Kullanım Koşulları
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs text-foreground-muted mb-8">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Son Güncelleme: 31 Mart 2026
            </div>

            <p className="text-foreground-muted leading-relaxed mb-10">
              Bu Kullanım Koşulları, Orbira Labs tarafından sunulan internet sitesi, mobil uygulamalar ve bağlantılı hizmetlerin kullanımına ilişkin şartları düzenler. Bu siteyi veya uygulamalarımızı kullanarak aşağıdaki koşulları kabul etmiş olursunuz. <strong className="text-foreground">Koşulları kabul etmiyorsanız, hizmetlerimizi kullanmamanız gerekmektedir.</strong>
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
                <SectionHeading id="taraflar" num="01" title="Taraflar" />
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

              {/* 02 */}
              <section>
                <SectionHeading id="hizmet-kapsami" num="02" title="Hizmet Kapsamı" />
                <p className="leading-relaxed">
                  Orbira Labs, kullanıcılarına mobil uygulamalar, web tabanlı araçlar ve dijital hizmetler sunar. Sunulan hizmetlerin kapsamı zaman zaman güncellenebilir, genişletilebilir veya değiştirilebilir. Orbira Labs, herhangi bir hizmeti önceden bildirim yapmaksızın sonlandırma veya değiştirme hakkını saklı tutar.
                </p>
              </section>

              {/* 03 */}
              <section>
                <SectionHeading id="kullanim-sartlari" num="03" title="Kullanım Şartları" />
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

              {/* 04 */}
              <section>
                <SectionHeading id="hesap-guvenligi" num="04" title="Hesap Güvenliği" />
                <p className="leading-relaxed">
                  Bir hesap oluşturmanız halinde, hesap bilgilerinizin gizliliğinden ve hesabınız üzerinden gerçekleşen tüm işlemlerden <strong className="text-foreground">yalnızca siz sorumlusunuz</strong>. Şifrenizi üçüncü kişilerle paylaşmamalı, güçlü ve benzersiz bir şifre kullanmalısınız. Yetkisiz kullanım şüpheniz varsa bizimle derhal iletişime geçmelisiniz. Orbira Labs, yetkisiz erişimden kaynaklanan kayıp veya zararlardan sorumlu tutulamaz.
                </p>
              </section>

              {/* 05 */}
              <section>
                <SectionHeading id="yas-siniri" num="05" title="Yaş Sınırı ve Ehliyet" />
                <p className="leading-relaxed">
                  Hizmetlerimizi kullanmak için en az <strong className="text-foreground">13 yaşında</strong> olmanız gerekmektedir. 18 yaşından küçük kullanıcıların, ebeveyn veya yasal vasilerinin onayı ile hizmetleri kullanması gerekmektedir. Hizmetlerimizi kullanarak, bu yaş şartını karşıladığınızı beyan ve kabul etmiş olursunuz.
                </p>
              </section>

              {/* 06 */}
              <section>
                <SectionHeading id="ucretli-hizmetler" num="06" title="Ücretli Hizmetler ve Abonelikler" />
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

              {/* 07 */}
              <section>
                <SectionHeading id="fikri-mulkiyet" num="07" title="Fikri Mülkiyet" />
                <p className="leading-relaxed mb-4">
                  Orbira Labs&apos;e ait tüm içerikler; marka, logo, yazılım, kaynak kodu, algoritma, motor mimarisi, tasarım, metin, grafik, arayüz, ses, video ve diğer tüm unsurlar dahil olmak üzere <strong className="text-foreground">ulusal ve uluslararası telif hakkı, marka ve fikri mülkiyet yasaları</strong> kapsamında korunmaktadır.
                </p>
                <p className="leading-relaxed mb-4">
                  Orbira Labs bünyesinde geliştirilen <strong className="text-foreground">HAE (Human Analysis Engine)</strong> ve <strong className="text-foreground">AQE (Adaptive Question Engine)</strong> hybrid motorları, bunların algoritmaları, veri işleme yöntemleri, mimari tasarımları ve çıktı formatları Orbira Labs&apos;in münhasır fikri mülkiyetindedir.
                </p>
                <p className="leading-relaxed">
                  Kullanıcıya yalnızca hizmetleri kişisel veya ticari kullanım amacıyla, <strong className="text-foreground">sınırlı, münhasır olmayan, devredilemez ve geri alınabilir</strong> bir kullanım hakkı verilir. Bu hak, mülkiyet devri anlamına gelmez ve herhangi bir zamanda Orbira Labs tarafından sonlandırılabilir.
                </p>
              </section>

              {/* 08 */}
              <section>
                <SectionHeading id="yasakli-kullanimlar" num="08" title="Yasaklı Kullanımlar" />
                <p className="leading-relaxed mb-4">
                  Aşağıdaki kullanımlar <strong className="text-foreground">kesinlikle yasaktır</strong> ve tespit edilmesi halinde hesabınız derhal sonlandırılabilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hizmeti yasa dışı, dolandırıcılık veya zararlı amaçlarla kullanmak</li>
                  <li>Başka kişilerin hesaplarına veya verilerine yetkisiz erişmeye çalışmak</li>
                  <li>Sistemi bozacak otomasyon, bot, scraping, saldırı veya kötü amaçlı yazılım kullanmak</li>
                  <li>DDoS saldırıları, SQL injection veya benzeri güvenlik açıklarını istismar etmeye çalışmak</li>
                  <li>Hizmetin herhangi bir bölümünü kopyalamak, çoğaltmak, satmak, lisanslamak veya türev çalışmalar oluşturmak</li>
                  <li>HAE veya AQE motorlarının algoritmalarını, çıktılarını veya işleyişini tersine mühendislik yoluyla analiz etmeye çalışmak</li>
                  <li>Orbira Labs&apos;in açık yazılı izni olmadan ticari şekilde yeniden dağıtım yapmak</li>
                  <li>Yanıltıcı, sahte veya başkalarını taklit eden içerik oluşturmak</li>
                  <li>Nefret söylemi, şiddet teşviki veya yasadışı içerik paylaşmak</li>
                  <li>Çocuk istismarı içeren veya bunu teşvik eden materyal paylaşmak</li>
                </ul>
              </section>

              {/* 09 */}
              <section>
                <SectionHeading id="kullanici-icerikleri" num="09" title="Kullanıcı İçerikleri" />
                <p className="leading-relaxed mb-4">
                  Hizmet kapsamında veri, metin, belge, görsel veya başka içerik yüklemeniz halinde; bu içeriklerin hukuka uygunluğundan, doğruluğundan ve üçüncü taraf haklarına saygılı olmasından <strong className="text-foreground">yalnızca siz sorumlusunuz</strong>.
                </p>
                <p className="leading-relaxed">
                  Orbira Labs, açıkça hukuka aykırı, zararlı, hakaret içeren veya hizmetin işleyişini bozan içerikleri önceden bildirim yapmaksızın kaldırma, erişimi sınırlandırma veya yetkili mercilere bildirme hakkını saklı tutar. Kullanıcı içeriklerinin yedeğini almak kullanıcının sorumluluğundadır.
                </p>
              </section>

              {/* 10 */}
              <section>
                <SectionHeading id="hizmet-degisiklik" num="10" title="Hizmette Değişiklik ve Erişim" />
                <p className="leading-relaxed">
                  Orbira Labs, hizmetleri önceden bildirim yapmaksızın güncelleme, askıya alma, geçici veya kalıcı olarak durdurma veya kapsamını değiştirme hakkını saklı tutar. Hizmetlerin her zaman kesintisiz, hatasız, güvenli veya tüm cihaz ve işletim sistemleriyle uyumlu çalışacağı <strong className="text-foreground">garanti edilmez</strong>. Planlı bakım çalışmaları için önceden bildirim yapılmaya çalışılacak, ancak bu bir yükümlülük değildir.
                </p>
              </section>

              {/* 11 */}
              <section>
                <SectionHeading id="sorumluluk" num="11" title="Sorumluluğun Sınırlandırılması" />
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

              {/* 12 */}
              <section>
                <SectionHeading id="tazminat" num="12" title="Tazminat" />
                <p className="leading-relaxed">
                  Kullanıcı, bu Kullanım Koşulları&apos;nı ihlal etmesi, hizmetleri kötüye kullanması veya üçüncü taraf haklarını ihlal etmesi nedeniyle Orbira Labs&apos;in, yöneticilerinin, çalışanlarının ve iş ortaklarının maruz kalabileceği her türlü talep, dava, zarar ve masraftan (makul avukatlık ücretleri dahil) <strong className="text-foreground">Orbira Labs&apos;i tazmin etmeyi ve korumayı</strong> kabul eder.
                </p>
              </section>

              {/* 13 */}
              <section>
                <SectionHeading id="hesap-askiya-alma" num="13" title="Hesabın Askıya Alınması veya Sonlandırılması" />
                <p className="leading-relaxed">
                  Bu koşullara aykırı kullanım tespit edilmesi, şüpheli aktivite veya yasal zorunluluklar halinde Orbira Labs, hesabınızı <strong className="text-foreground">önceden bildirim yapmaksızın</strong> geçici veya kalıcı olarak askıya alma, silme veya hizmet erişimini kısıtlama hakkına sahiptir. Hesap sonlandırıldığında, kullanıcı verilerinize erişiminiz kesilebilir.
                </p>
              </section>

              {/* 14 */}
              <section>
                <SectionHeading id="gizlilik" num="14" title="Gizlilik" />
                <p className="leading-relaxed">
                  Kişisel verilerin işlenmesine ilişkin detaylar{" "}
                  <Link href="/privacy" className="text-brand-primary hover:underline">
                    Gizlilik Politikası
                  </Link>{" "}
                  içinde açıklanır. Hizmeti kullanarak ilgili politikayı da okuduğunuzu ve kabul ettiğinizi beyan etmiş olursunuz. Bu belge, KVKK (6698 sayılı Kişisel Verilerin Korunması Kanunu) ve uygulanabildiği ölçüde GDPR (Genel Veri Koruma Yönetmeliği) hükümleri doğrultusunda hazırlanmıştır.
                </p>
              </section>

              {/* 15 — Hybrid Motorlar (YENİ) */}
              <section>
                <SectionHeading id="hybrid-motorlar" num="15" title="Hybrid Motorlar (HAE & AQE)" />
                <p className="leading-relaxed mb-6">
                  Orbira Labs, ürünlerinin temelinde yer alan proprietary hybrid motorlar geliştirmektedir. Bu motorlar, geleneksel algoritmik işleme ile yapay zeka teknolojilerini birleştiren özgün bir mimariye sahiptir.
                </p>

                <div className="space-y-6">
                  <div>
                    <SubHeading>a) Motor Tanımları</SubHeading>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong className="text-foreground">HAE (Human Analysis Engine):</strong> Kullanıcı verilerini algoritmik ve yapay zeka tabanlı yöntemlerle analiz ederek kişiselleştirilmiş içgörüler üreten hybrid bir motordur.
                      </li>
                      <li>
                        <strong className="text-foreground">AQE (Adaptive Question Engine):</strong> Kullanıcı bağlamına göre dinamik ve uyarlanabilir soru katmanları oluşturan, algoritmik mantık ile yapay zeka destekli bir motordur.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>b) Veri İşleme Yaklaşımı</SubHeading>
                    <p className="leading-relaxed mb-3">
                      Hybrid motorlar, verileri iki katmanlı bir yapıda işler:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-foreground">Algoritmik Katman:</strong> Kural tabanlı işleme, puanlama ve sınıflandırma. Bu katmanda veriler yapay zeka servislerine gönderilmez.</li>
                      <li><strong className="text-foreground">AI Katmanı:</strong> Kişiselleştirme ve doğal dil işleme gerektiren durumlarda üçüncü taraf AI servisleri kullanılabilir. Bu işlem yalnızca kullanıcının <strong className="text-foreground">açık rızası</strong> dahilinde gerçekleşir.</li>
                    </ul>
                  </div>

                  <div>
                    <SubHeading>c) Fikri Mülkiyet ve Kısıtlamalar</SubHeading>
                    <p className="leading-relaxed">
                      HAE ve AQE motorlarının algoritmaları, mimarisi, veri işleme mantığı ve çıktı formatları Orbira Labs&apos;in <strong className="text-foreground">münhasır fikri mülkiyetindedir</strong>. Kullanıcılar bu motorları yalnızca ilgili ürünler aracılığıyla ve belirlenen kapsamda kullanabilir. Motorların tersine mühendislik ile analiz edilmesi, çıktılarının sistematik olarak toplanması veya üçüncü taraflara aktarılması yasaktır.
                    </p>
                  </div>

                  <div>
                    <SubHeading>d) Sonuçların Niteliği</SubHeading>
                    <p className="leading-relaxed">
                      Hybrid motorlar tarafından üretilen tüm çıktılar (analiz sonuçları, öneriler, içgörüler) <strong className="text-foreground">bilgilendirme ve yönlendirme amaçlıdır</strong>. Bu çıktılar profesyonel tıbbi, psikolojik, finansal veya hukuki danışmanlık yerine geçmez. Orbira Labs, motor çıktılarına dayanılarak alınan kararlardan sorumlu tutulamaz.
                    </p>
                  </div>
                </div>
              </section>

              {/* 16 */}
              <section>
                <SectionHeading id="yapay-zeka" num="16" title="Yapay Zeka Destekli Özellikler" />
                <p className="leading-relaxed mb-4">
                  Bazı hizmetlerimiz, kişiselleştirilmiş içerik ve öneriler sunmak amacıyla yapay zeka teknolojisinden yararlanmaktadır. Bu özellikleri kullanarak aşağıdakileri kabul etmiş olursunuz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-foreground">Açık Rıza:</strong> Yapay zeka ile veri işleme gerektiren özellikler (örn. Mood Pro Kişisel Dönüşüm Programı), yalnızca açık rızanız alındıktan sonra etkinleştirilir.
                  </li>
                  <li>
                    <strong className="text-foreground">İşleme Amacı:</strong> Verileriniz yalnızca size özel içerik ve öneriler üretmek amacıyla işlenir; reklam, profilleme veya model eğitimi için kullanılmaz.
                  </li>
                  <li>
                    <strong className="text-foreground">Üçüncü Taraf Sağlayıcılar:</strong> Yapay zeka işlemleri için OpenAI gibi üçüncü taraf servis sağlayıcıları kullanılabilir. Bu sağlayıcıların veri işleme politikaları için{" "}
                    <Link href="/privacy" className="text-brand-primary hover:underline">
                      Gizlilik Politikası
                    </Link>{" "}
                    incelenmelidir.
                  </li>
                  <li>
                    <strong className="text-foreground">Rıza Geri Çekme:</strong> Yapay zeka veri işleme rızanızı istediğiniz zaman uygulama ayarlarından geri çekebilirsiniz. Rıza geri çekildiğinde ilgili özellikler devre dışı kalır.
                  </li>
                  <li>
                    <strong className="text-foreground">Sonuçların Niteliği:</strong> Yapay zeka tarafından üretilen içerikler bilgilendirme amaçlıdır ve profesyonel tıbbi, psikolojik veya beslenme danışmanlığı yerine geçmez.
                  </li>
                </ul>
              </section>

              {/* 17 */}
              <section>
                <SectionHeading id="ucuncu-taraf" num="17" title="Üçüncü Taraf Hizmetler" />
                <p className="leading-relaxed">
                  Hizmetlerimiz, üçüncü taraf servisler, API&apos;ler veya harici web sitelerine bağlantılar içerebilir. Bu servislerin içeriklerinden, güvenliğinden, gizlilik politikalarından veya veri işleme uygulamalarından <strong className="text-foreground">Orbira Labs doğrudan sorumlu değildir</strong>. Üçüncü taraf hizmetlerin kullanımı, ilgili hizmetin kendi kullanım koşullarına tabidir.
                </p>
              </section>

              {/* 18 */}
              <section>
                <SectionHeading id="mucbir-sebepler" num="18" title="Mücbir Sebepler" />
                <p className="leading-relaxed">
                  Orbira Labs, kontrolü dışındaki nedenlerle (doğal afetler, savaş, terör, salgın hastalık, hükümet eylemleri, internet altyapısı sorunları, siber saldırılar vb.) hizmet sunumunda yaşanan aksaklık veya gecikmelerden <strong className="text-foreground">sorumlu tutulamaz</strong>.
                </p>
              </section>

              {/* 19 */}
              <section>
                <SectionHeading id="bolunebilirlik" num="19" title="Bölünebilirlik" />
                <p className="leading-relaxed">
                  Bu Kullanım Koşulları&apos;nın herhangi bir hükmünün geçersiz veya uygulanamaz bulunması halinde, söz konusu hüküm geçersizlik veya uygulanamama kapsamında değiştirilmiş sayılacak ve diğer hükümler tam olarak yürürlükte kalmaya devam edecektir.
                </p>
              </section>

              {/* 20 */}
              <section>
                <SectionHeading id="feragat" num="20" title="Feragat" />
                <p className="leading-relaxed">
                  Orbira Labs&apos;in bu Kullanım Koşulları kapsamındaki herhangi bir hakkını veya hükmünü kullanmaması veya uygulamaması, söz konusu hak veya hükümden feragat ettiği anlamına gelmez.
                </p>
              </section>

              {/* 21 */}
              <section>
                <SectionHeading id="degisiklikler" num="21" title="Değişiklikler" />
                <p className="leading-relaxed">
                  Bu Kullanım Koşulları zaman zaman güncellenebilir. Önemli değişiklikler için makul bir bildirim süresi tanınmaya çalışılacaktır. Güncel versiyon bu sayfada yayımlandığı anda yürürlüğe girer. Değişikliklerden sonra hizmeti kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.
                </p>
              </section>

              {/* 22 */}
              <section>
                <SectionHeading id="hukuk-yetki" num="22" title="Uygulanacak Hukuk ve Yetki" />
                <p className="leading-relaxed">
                  Bu koşullar, aksi zorunlu olarak gerekmedikçe, <strong className="text-foreground">Türkiye Cumhuriyeti hukuku</strong> kapsamında yorumlanır ve uygulanır. Avrupa Birliği vatandaşları için uygulanabilir olduğu ölçüde GDPR hükümleri saklıdır. Bu koşullardan doğan veya bunlarla ilgili tüm uyuşmazlıklarda <strong className="text-foreground">İstanbul Mahkemeleri ve İcra Daireleri</strong> münhasır yetkiye sahiptir.
                </p>
              </section>

              {/* 23 */}
              <section>
                <SectionHeading id="butunluk" num="23" title="Sözleşmenin Bütünlüğü" />
                <p className="leading-relaxed">
                  Bu Kullanım Koşulları, Gizlilik Politikası ile birlikte, taraflar arasındaki anlaşmanın tamamını oluşturur ve konuya ilişkin önceki tüm yazılı veya sözlü anlaşmaların yerine geçer.
                </p>
              </section>

              {/* 24 */}
              <section>
                <SectionHeading id="iletisim" num="24" title="İletişim" />
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
            <div className="mt-14 p-6 bg-background-tertiary rounded-xl border border-border">
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
