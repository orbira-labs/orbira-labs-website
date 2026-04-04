# Orbira Pro — Wellness Professional Panel

> **Durum:** Tasarım & Planlama  
> **Hedef:** Psikolog ve wellness koçlarının danışanlarını yönettiği, test gönderdiği ve sonuçları takip ettiği SaaS paneli.  
> **Geçici konum:** `orbiralabs.com/pro` — ileride `pro.orbiralabs.com` veya bağımsız domain'e taşınır.

---

## 1. Mimari Kararlar

### 1.1 Neden aynı repo?

- Hız: Sıfırdan proje kurulumu yok, Vercel deploy zaten hazır
- Mevcut infra: Resend (email), Vercel (hosting), domain (GoDaddy)
- Next.js App Router route-level layout izolasyonu bunu destekliyor

### 1.2 İzolasyon stratejisi

```
src/app/(marketing)/    ← Mevcut site (layout.tsx = dark tema, Geist, PageBackground)
  ├── page.tsx
  ├── about/
  ├── products/
  ├── engines/
  └── ...

src/app/(pro)/pro/      ← Yeni panel (layout.tsx = light tema, Inter, Sidebar)
  ├── auth/
  ├── onboarding/
  ├── dashboard/
  └── ...
```

- Route group `(pro)` kendi `layout.tsx` dosyasına sahip → root layout'tan `className="dark"`, `PageBackground`, `Geist` font **hiçbiri** bu route'a uygulanmaz
- Root `layout.tsx` sadece `<html>` + `<body>` + font yüklemesi kalır, tema/background kararı route group layout'larına devredilir
- `globals.css` paylaşılır ama pro-spesifik tokenlar `globals-pro.css` içinde `[data-theme="pro"]` scope'u altında tanımlanır

### 1.3 Taşıma planı

Panel ayrı projeye taşınacağı zaman:

1. `src/app/(pro)/`, `src/components/pro/`, `src/lib/pro/` klasörleri kopyalanır
2. `globals-pro.css` yeni projenin `globals.css`'i olur
3. `middleware.ts`'deki pro route matcher yeni projeye taşınır
4. Supabase `pro` schema'sı zaten izole — sadece env değişkenleri güncellenir
5. Vercel'de yeni proje + subdomain DNS kaydı eklenir

**Bağımlılık grafiği:** Pro modülü mevcut marketing koduna (components/sections, lib/constants vb.) **hiçbir şekilde** bağlı olmayacak. Tek paylaşım `globals.css` base tokenleri.

---

## 2. Tasarım Sistemi

### 2.1 Felsefe

Mevcut site: kozmik, sci-fi, "güçlü teknoloji" hissi → **Panele uygun değil.**

Panel: Bir wellness profesyonelinin her gün 2-3 saat kullandığı araç. Sakinlik, güven, profesyonellik ve netlik ön planda. Göz yormayan, dikkat dağıtmayan, işi hızlı halletmeye odaklı.

### 2.2 Renk paleti

```css
[data-theme="pro"] {
  /* Yüzeyler */
  --pro-bg:             #FAFAF7;    /* Sayfa — saf beyaz değil, sıcak kırık beyaz */
  --pro-surface:        #FFFFFF;    /* Kartlar, paneller */
  --pro-surface-alt:    #F5F3EF;    /* Hover, zebra satırlar, secondary surface */
  --pro-surface-sunken: #EFEAE4;    /* İç gölgeli alanlar, disabled inputlar */

  /* Marka */
  --pro-primary:        #5B7B6A;    /* Sage green — huzur, denge, güven */
  --pro-primary-hover:  #4A6A59;
  --pro-primary-light:  #E8F0EB;    /* Badge bg, hafif vurgu */
  --pro-accent:         #C4956A;    /* Terracotta — CTA, dikkat çekme */
  --pro-accent-hover:   #B38459;
  --pro-accent-light:   #FDF5EE;

  /* Metin */
  --pro-text:           #2D3436;    /* Ana metin — siyah değil, daha yumuşak */
  --pro-text-secondary: #6B7C85;    /* İkincil bilgiler */
  --pro-text-tertiary:  #9CAAAF;    /* Placeholder, ipucu */
  --pro-text-on-primary:#FFFFFF;    /* Primary buton üzerindeki metin */

  /* Kenarlar */
  --pro-border:         #E5E0DB;    /* Kart sınırları */
  --pro-border-strong:  #D1CBC3;    /* Bölücüler, tablo kenarları */
  --pro-ring:           #5B7B6A;    /* Focus ring */

  /* Durum */
  --pro-success:        #27AE60;
  --pro-success-light:  #E9F7EF;
  --pro-warning:        #F39C12;
  --pro-warning-light:  #FEF5E7;
  --pro-danger:         #E74C3C;
  --pro-danger-light:   #FDEDEC;
  --pro-info:           #5B7B6A;
  --pro-info-light:     #E8F0EB;
}
```

### 2.3 Tipografi

| Kullanım | Font | Ağırlık | Boyut |
|----------|------|---------|-------|
| Başlıklar (h1-h3) | Inter | 600 (semibold) | 24-30px |
| Alt başlıklar | Inter | 500 (medium) | 16-18px |
| Gövde metin | Inter | 400 (regular) | 14-15px |
| Etiketler, badge | Inter | 500 (medium) | 12-13px |
| Sayısal veri (kart) | Inter | 700 (bold) | 28-36px |

### 2.4 Spacing & Radius

```
Kart radius:    12px
Input radius:   8px
Buton radius:   8px (normal), 20px (pill)
Modal radius:   16px
Sayfa padding:  24px (mobile), 32px (desktop)
Kart padding:   16px (mobile), 20px (desktop)
Grid gap:       16px (mobile), 24px (desktop)
```

### 2.5 Gölge & Derinlik

```css
--pro-shadow-sm:  0 1px 2px rgba(0,0,0,0.04);         /* Input, badge */
--pro-shadow-md:  0 2px 8px rgba(0,0,0,0.06);          /* Kartlar */
--pro-shadow-lg:  0 8px 24px rgba(0,0,0,0.08);         /* Modal, dropdown */
--pro-shadow-xl:  0 16px 48px rgba(0,0,0,0.10);        /* Floating panel */
```

### 2.6 Animasyon ilkeleri

- Geçişler: `150ms ease` (hover), `200ms ease-out` (açılma/kapanma)
- Sayfa geçişleri: Yok (SPA hissi için instant navigation, loading state'ler skeleton)
- Framer Motion: Sadece modal/drawer açılma, toast giriş/çıkış. Ambient animasyon **yok**.
- Skeleton loader: Her veri kartı için (`animate-pulse`, hafif gray shimmer)

---

## 3. Kullanıcı Akışları

### 3.1 Kayıt (`/pro/auth/register`)

```
┌─────────────────────────────────────┐
│         Orbira Pro                  │
│    Wellness profesyonelleri için    │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 📧 Email adresiniz           │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 🔒 Şifre (min 8 karakter)    │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │ 🔒 Şifre tekrar              │  │
│  └───────────────────────────────┘  │
│                                     │
│  [  ████ Kayıt Ol ████  ]          │
│                                     │
│  ──── veya ────                     │
│                                     │
│  [ G  Google ile devam et ]         │
│                                     │
│  Zaten hesabınız var mı? Giriş yap │
│                                     │
│  Kayıt olarak KVKK Aydınlatma      │
│  Metnini kabul etmiş olursunuz.    │
└─────────────────────────────────────┘
```

**Sonraki adım:** Email'e 6 haneli OTP gönderilir → `/pro/auth/verify`

### 3.2 OTP Doğrulama (`/pro/auth/verify`)

```
┌─────────────────────────────────────┐
│     Email Doğrulama                 │
│                                     │
│  user@email.com adresine            │
│  6 haneli doğrulama kodu            │
│  gönderdik.                         │
│                                     │
│  ┌──┬──┬──┬──┬──┬──┐               │
│  │ 4│ 8│ 2│ 9│ 1│ 5│               │
│  └──┴──┴──┴──┴──┴──┘               │
│                                     │
│  Kod gelmedi mi? Tekrar gönder (52s)│
│                                     │
│  [  ████ Doğrula ████  ]           │
└─────────────────────────────────────┘
```

### 3.3 Giriş (`/pro/auth/login`)

```
Email + Şifre  VEYA  Google ile giriş
  ↓
Onboarding tamamlanmış mı?
  ├── Hayır → /pro/onboarding
  └── Evet  → /pro/dashboard
```

### 3.4 Onboarding (`/pro/onboarding`)

Tek sayfa, kaydırarak doldurulur. İlerleme çubuğu üstte. Her alan grubu arasında nefes payı. Hiçbir alan gizli/gömülü değil — her şey görünür, form minimal.

**Alan grupları:**

| Grup | Alanlar | Zorunlu? |
|------|---------|----------|
| **Kişisel** | Ad, Soyad | ✓ |
| **İletişim** | Telefon | ✗ |
| **Konum** | İl (select), İlçe (il'e bağlı select) | ✓ |
| **Çalışma** | Bireysel / İşyeri (radio). İşyeri → İşyeri adı (text, opsiyonel) | ✓ |
| **Uzmanlık** | Multi-select chip'ler: Wellness Koçluğu, Klinik Psikoloji, Diyetisyen, Yaşam Koçu, Diğer | ✓ |
| **Profil** | Fotoğraf yükleme (avatar croppper, opsiyonel) | ✗ |
| **Onay** | KVKK Aydınlatma Metni checkbox | ✓ |

**UX detayları:**
- İl listesi: Türkiye 81 il, alfabetik, arama destekli select
- İlçe: Seçilen il'e göre dinamik yüklenir
- Uzmanlık chip'leri: Dokunarak toggle, seçili olanlar `primary-light` arka plan
- Fotoğraf: Yükle → Crop (kare) → Kaydet. Yüklemezse default avatar (baş harfler)
- Form validasyon: Inline hatalar, submit'te tüm hataları göster
- Tamamla butonu: Disable, tüm zorunlu alanlar dolduğunda aktif

### 3.5 Dashboard (`/pro/dashboard`)

Ana ekran. Profesyonelin günlük başlangıç noktası.

**Desktop layout:**

```
┌─────────────────────────────────────────────────────────────┐
│ [Sidebar]  │  Günaydın, Ayşe 👋                            │
│            │                                                 │
│ Dashboard  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────┐│
│ Danışanlar │  │ 👥 12    │ │ 📅 3     │ │ 🧪 5     │ │ ✅ ││
│ Randevular │  │ Danışan  │ │ Bugünkü  │ │ Kalan    │ │ 28 ││
│ Testler    │  │          │ │ randevu  │ │ test     │ │test││
│ Bakiye     │  └──────────┘ └──────────┘ └──────────┘ └────┘│
│            │                                                 │
│ ────────── │  ┌─ Yaklaşan Randevular ─────────────────────┐ │
│ Ayarlar    │  │ Ayşe K.    14:00  Wellness Check-in       │ │
│            │  │ Mehmet D.  16:30  HAE Değerlendirme        │ │
│            │  └───────────────────────────────────────────┘ │
│            │                                                 │
│            │  ┌─ Son Test Aktivitesi ─────────────────────┐ │
│            │  │ ● Ali B. testi tamamladı      2 saat önce │ │
│            │  │ ◐ Zeynep A. teste başladı     5 saat önce │ │
│            │  │ ○ Fatma S. test gönderildi    dün         │ │
│            │  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Mobile layout:**

```
┌──────────────────────────┐
│ Günaydın, Ayşe 👋    🔔 │
│                          │
│ ┌────────┐ ┌────────┐   │
│ │ 👥 12  │ │ 📅 3   │   │
│ │Danışan │ │Randevu │   │
│ └────────┘ └────────┘   │
│ ┌────────┐ ┌────────┐   │
│ │ 🧪 5   │ │ ✅ 28  │   │
│ │Kalan   │ │Tamam.  │   │
│ └────────┘ └────────┘   │
│                          │
│ Yaklaşan Randevular      │
│ ┌──────────────────────┐ │
│ │ Ayşe K. · 14:00     │ │
│ │ Wellness Check-in    │ │
│ ├──────────────────────┤ │
│ │ Mehmet D. · 16:30    │ │
│ │ HAE Değerlendirme    │ │
│ └──────────────────────┘ │
│                          │
│ Son Aktivite             │
│ ● Ali B. — tamamladı    │
│ ◐ Zeynep A. — başladı   │
│ ○ Fatma S. — bekliyor   │
│                          │
├──────────────────────────┤
│ 📊  👥  📅  🧪  💳     │
│ Ana Danı Rand Test Baki  │
└──────────────────────────┘
```

**Dashboard kartları tıklanabilir** — ilgili sayfaya yönlendirir.

### 3.6 Danışanlarım (`/pro/clients`)

**Liste görünümü (desktop):**
- Tablo: Avatar + Ad Soyad | Durum | Son Test | Sonraki Randevu | İşlemler
- Arama + Durum filtresi (Tümü / Aktif / Pasif / Arşiv)
- Sağ üst: **[+ Danışan Ekle]** butonu

**Liste görünümü (mobile):**
- Kart listesi (tablo yerine)
- Her kart: Avatar, ad, son test durumu badge, sonraki randevu
- Dokunarak detaya git
- FAB: **[+]** yeni danışan ekle

**Danışan ekleme (slide-over panel veya modal):**

| Alan | Tip | Zorunlu | Not |
|------|-----|---------|-----|
| Ad | text | ✓ | |
| Soyad | text | ✓ | |
| Email | email | ✓ | Test linki göndermek için |
| Telefon | tel | ✗ | WhatsApp ile göndermek için. Yoksa WhatsApp seçeneği disable |
| Doğum tarihi | date picker | ✗ | HAE profil verisinde kullanılabilir |
| Cinsiyet | select | ✗ | HAE profil verisinde kullanılabilir |
| Not | textarea | ✗ | İlk izlenim, yönlendiren kişi vb. |

**Danışan detay (`/pro/clients/[id]`):**

Tab yapısı: **Genel Bakış** | **Testler** | **Randevular** | **Notlar**

- **Genel Bakış:** Kişi bilgileri, iletişim, hızlı aksiyonlar (test gönder, randevu ekle)
- **Testler:** Gönderilen testler listesi, durum badge'leri, sonuç görüntüleme linki
- **Randevular:** Geçmiş + gelecek randevular, hızlı ekleme
- **Notlar:** Kronolojik not listesi, zengin text değil — sade textarea

**Danışan durum yönetimi:**
- **Aktif:** Varsayılan, test gönderilebilir
- **Pasif:** Geçici olarak inaktif, listede kalır ama test gönderilemez
- **Arşiv:** Gizlenir (filtre ile tekrar görünür), veri korunur

### 3.7 Testlerim (`/pro/tests`)

**Üst bölüm — bakiye kartları:**

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│     5        │ │    28        │ │    33        │
│  Kalan Test  │ │  Kullanılan  │ │  Toplam      │
│              │ │              │ │              │
│ [Satın Al]   │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Alt bölüm — test listesi:**

| Danışan | Test Tipi | Gönderim | Durum | Tarih |
|---------|-----------|----------|-------|-------|
| Ayşe K. | Wellness | Email | ✅ Tamamlandı | 02.04 |
| Ali B. | Wellness | WhatsApp | 🔄 Devam ediyor | 04.04 |
| Fatma S. | Wellness | Email | ⏳ Bekliyor | 05.04 |

**Durum badge renkleri:**
- Gönderildi (bekliyor): `warning` (sarı)
- Başlandı: `info` (sage)
- Tamamlandı: `success` (yeşil)
- Süresi doldu: `danger` (kırmızı)

**Test gönderme akışı (step-by-step modal):**

```
Adım 1: Danışan seç
  ├── Mevcut danışan listesinden seç (arama destekli)
  └── veya [+ Hızlı Danışan Ekle] (ad, soyad, email — minimal)

Adım 2: Test tipi
  └── "Wellness Değerlendirmesi (AQE + HAE)" (şimdilik tek seçenek)

Adım 3: Kredi kontrolü
  ├── Yeterli → Adım 4
  └── Yetersiz → "Testiniz kalmadı" + [Paket Satın Al] → Ödeme → Adım 4

Adım 4: Gönderim yöntemi
  ├── 📧 Email — Hazır şablon önizleme, özelleştirilebilir kısa mesaj
  └── 💬 WhatsApp — Hazır mesaj, WhatsApp deep link (telefon zorunlu)

Adım 5: Onay & Gönder
  └── Özet: Danışan, test tipi, gönderim yöntemi
  └── [Gönder] → Test linki üretilir, gönderilir, 1 kredi düşülür
```

**Test linki sistemi:**
- Format: `orbiralabs.com/t/[token]` (kısa, temiz, paylaşılabilir)
- Token: 12 karakter nanoid (URL-safe)
- Geçerlilik: 7 gün (profesyonel uzatabilir: +7 gün)
- Giriş gerektirmez — danışan tarayıcıdan doğrudan doldurur
- Tamamlanınca: profesyonele email + panel içi bildirim

**WhatsApp mesaj şablonu:**
```
Merhaba {danışan_adı},

Size bir wellness değerlendirme testi gönderdim.
Bu kısa test, birlikte daha iyi çalışmamıza yardımcı olacak.

▸ Testi başlatın: {link}
▸ Süre: ~10-15 dakika
▸ Geçerlilik: 7 gün

İyi günler,
{profesyonel_adı}
```

**Email şablonu:**
- From: `Orbira Pro <noreply@orbiralabs.com>` (Resend)
- Subject: `{profesyonel_adı} size bir wellness testi gönderdi`
- Body: Temiz HTML template, Orbira Pro branding, büyük CTA butonu
- Unsubscribe: Yok (transactional email, marketing değil)

### 3.8 Randevularım (`/pro/appointments`)

- **Görünüm:** Liste bazlı (basit), bugün/bu hafta/bu ay filtresi
- **Ekleme:** Danışan seç, tarih/saat (date-time picker), süre (30/45/60/90 dk), konu, not
- **Durum:** Planlandı → Tamamlandı / İptal
- **Hatırlatma:** Email ile — randevudan 24 saat ve 1 saat önce (hem profesyonel hem danışana)
- **Takvim entegrasyonu:** v1'de yok, ileride Google Calendar sync

### 3.9 Bakiye & Ödeme (`/pro/billing`)

- **Bakiye kartı:** Mevcut kredi miktarı, büyük font
- **Paket seçenekleri (örnek):**

| Paket | Test | Fiyat | Birim |
|-------|------|-------|-------|
| Başlangıç | 10 test | ₺299 | ₺29.9/test |
| Profesyonel | 25 test | ₺599 | ₺24.0/test |
| Klinik | 50 test | ₺999 | ₺20.0/test |

- **Ödeme:** v1'de iyzico placeholder (butonu var, "Yakında" badge), gerçek entegrasyon sonra
- **Geçiş dönemi:** Manuel kredi yükleme (admin panelden veya Supabase'den)
- **İşlem geçmişi:** Tablo — tarih, işlem (satın alma/kullanım), miktar, bakiye

### 3.10 Ayarlar (`/pro/settings`)

- Profil bilgileri düzenleme (onboarding alanları)
- Şifre değiştirme
- Bildirim tercihleri (email açık/kapalı)
- Hesap silme (KVKK gereği)

---

## 4. Danışan Test Deneyimi (`/t/[token]`)

Bu sayfanın önemli bir ayrımı var: **Profesyonelin paneli değil, danışanın gördüğü sayfa.** Login gerektirmez, tarayıcıdan açılır. Minimalist, güven veren, dikkat dağıtmayan bir deneyim.

```
/t/[token]
  ├── Token geçerli mi? → Hayır: "Bu link artık geçerli değil" + profesyonelle iletişim önerisi
  ├── Test durumu: completed? → "Bu test zaten tamamlandı" mesajı
  └── Geçerli → Test akışı başlar
```

**Akış:**
1. Karşılama sayfası: Profesyonel adı, test açıklaması, tahmini süre, [Teste Başla]
2. AQE profil soruları → Core sorular → Deep-dive sorular (AQE pipeline)
3. Tamamla → Teşekkür sayfası, "Sonuçlarınız profesyonelinizle paylaşılacak"
4. Arka planda: AQE session complete → HAE analyze tetiklenir → sonuç `pro.test_invitations.session_id`'ye bağlanır → profesyonele bildirim

**Tasarım:** Panel ile aynı renk paleti ama daha da basit — tek kolon, büyük font, ilerleme çubuğu, mobil-first.

---

## 5. Navigasyon

### Desktop — Sidebar

```
┌──────────────────┐
│  ◯ Orbira Pro    │
│                  │
│  📊 Dashboard    │
│  👥 Danışanlar   │
│  📅 Randevular   │
│  🧪 Testler     │
│  💳 Bakiye      │
│                  │
│  ─────────────── │
│  ⚙️ Ayarlar     │
│                  │
│  ┌────────────┐  │
│  │ AK         │  │
│  │ Ayşe Koç   │  │
│  │ Çıkış      │  │
│  └────────────┘  │
└──────────────────┘
```

- Genişlik: 256px (sabit), mobilde gizli
- Aktif sayfa: `primary-light` arka plan + `primary` metin + sol kenar çizgisi
- Hover: `surface-alt` arka plan
- Daraltılabilir (ikon-only modu): 64px

### Mobile — Bottom Tab Bar

```
┌──────────────────────────────┐
│  📊    👥    📅    🧪    💳  │
│  Ana  Danış Rand  Test  Baki │
└──────────────────────────────┘
```

- Yükseklik: 64px + safe area
- Aktif: `primary` renk ikon + label
- İnaktif: `text-tertiary`
- Üst bar: Sol: sayfa başlığı, Sağ: bildirim + avatar

---

## 6. Veritabanı Şeması

### 6.1 Schema izolasyonu

Yeni `pro` schema'sı oluşturulur. Mevcut `shared`, `aqe`, `hae` schema'larına **hiç dokunulmaz.** Tek bağlantı noktası: `pro.test_invitations.session_id` → `shared.api_sessions.id` (test tamamlanınca bağlanır).

### 6.2 Tablolar

```sql
CREATE SCHEMA IF NOT EXISTS pro;

-- ============================================================
-- Profesyonel profilleri (auth.users ile 1:1)
-- ============================================================
CREATE TABLE pro.professionals (
  id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         text NOT NULL,
  first_name    text NOT NULL,
  last_name     text NOT NULL,
  phone         text,
  city          text,
  district      text,
  work_type     text CHECK (work_type IN ('individual', 'company')),
  company_name  text,
  specializations jsonb DEFAULT '[]',
  avatar_url    text,
  onboarding_completed boolean DEFAULT false,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- ============================================================
-- Danışanlar
-- ============================================================
CREATE TABLE pro.clients (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id uuid NOT NULL REFERENCES pro.professionals(id) ON DELETE CASCADE,
  first_name      text NOT NULL,
  last_name       text NOT NULL,
  email           text,
  phone           text,
  birth_date      date,
  gender          text CHECK (gender IN ('female', 'male', 'other', 'prefer_not_to_say')),
  status          text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'passive', 'archived')),
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);
CREATE INDEX idx_clients_professional ON pro.clients(professional_id);

-- ============================================================
-- Danışan notları
-- ============================================================
CREATE TABLE pro.client_notes (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id       uuid NOT NULL REFERENCES pro.clients(id) ON DELETE CASCADE,
  professional_id uuid NOT NULL REFERENCES pro.professionals(id) ON DELETE CASCADE,
  content         text NOT NULL,
  created_at      timestamptz DEFAULT now()
);
CREATE INDEX idx_notes_client ON pro.client_notes(client_id);

-- ============================================================
-- Randevular
-- ============================================================
CREATE TABLE pro.appointments (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id uuid NOT NULL REFERENCES pro.professionals(id) ON DELETE CASCADE,
  client_id       uuid NOT NULL REFERENCES pro.clients(id) ON DELETE CASCADE,
  starts_at       timestamptz NOT NULL,
  duration_minutes int NOT NULL DEFAULT 60,
  subject         text,
  note            text,
  status          text NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);
CREATE INDEX idx_appointments_professional ON pro.appointments(professional_id, starts_at);
CREATE INDEX idx_appointments_client ON pro.appointments(client_id);

-- ============================================================
-- Test davetleri (danışana gönderilen linkler)
-- ============================================================
CREATE TABLE pro.test_invitations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id uuid NOT NULL REFERENCES pro.professionals(id) ON DELETE CASCADE,
  client_id       uuid NOT NULL REFERENCES pro.clients(id) ON DELETE CASCADE,
  token           text NOT NULL UNIQUE,
  test_type       text NOT NULL DEFAULT 'wellness_aqe_hae',
  status          text NOT NULL DEFAULT 'sent' CHECK (status IN ('sent', 'started', 'completed', 'expired')),
  sent_via        text NOT NULL CHECK (sent_via IN ('whatsapp', 'email')),
  message_text    text,
  expires_at      timestamptz NOT NULL,
  session_id      uuid,
  results_snapshot jsonb,
  created_at      timestamptz DEFAULT now(),
  started_at      timestamptz,
  completed_at    timestamptz
);
CREATE INDEX idx_invitations_token ON pro.test_invitations(token);
CREATE INDEX idx_invitations_professional ON pro.test_invitations(professional_id);
CREATE INDEX idx_invitations_client ON pro.test_invitations(client_id);

-- ============================================================
-- Kredi paketleri (admin tarafından yönetilir)
-- ============================================================
CREATE TABLE pro.credit_packages (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  test_count  int NOT NULL,
  price_cents int NOT NULL,
  currency    text NOT NULL DEFAULT 'TRY',
  is_active   boolean DEFAULT true,
  sort_order  int DEFAULT 0,
  created_at  timestamptz DEFAULT now()
);

-- ============================================================
-- Kredi hareketleri
-- ============================================================
CREATE TABLE pro.credit_transactions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id uuid NOT NULL REFERENCES pro.professionals(id) ON DELETE CASCADE,
  package_id      uuid REFERENCES pro.credit_packages(id),
  invitation_id   uuid REFERENCES pro.test_invitations(id),
  amount          int NOT NULL,
  balance_after   int NOT NULL,
  type            text NOT NULL CHECK (type IN ('purchase', 'usage', 'refund', 'bonus')),
  description     text,
  payment_provider text,
  payment_id      text,
  created_at      timestamptz DEFAULT now()
);
CREATE INDEX idx_transactions_professional ON pro.credit_transactions(professional_id, created_at DESC);

-- ============================================================
-- Bildirimler
-- ============================================================
CREATE TABLE pro.notifications (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  professional_id uuid NOT NULL REFERENCES pro.professionals(id) ON DELETE CASCADE,
  type            text NOT NULL,
  title           text NOT NULL,
  body            text,
  data            jsonb DEFAULT '{}',
  is_read         boolean DEFAULT false,
  created_at      timestamptz DEFAULT now()
);
CREATE INDEX idx_notifications_professional ON pro.notifications(professional_id, is_read, created_at DESC);

-- ============================================================
-- Trigger: updated_at otomatik güncelleme
-- ============================================================
CREATE OR REPLACE FUNCTION pro.trigger_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at BEFORE UPDATE ON pro.professionals
  FOR EACH ROW EXECUTE FUNCTION pro.trigger_set_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON pro.clients
  FOR EACH ROW EXECUTE FUNCTION pro.trigger_set_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON pro.appointments
  FOR EACH ROW EXECUTE FUNCTION pro.trigger_set_updated_at();

-- ============================================================
-- RLS: Her profesyonel sadece kendi verisini görür
-- ============================================================
ALTER TABLE pro.professionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.client_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.test_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.credit_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE pro.credit_packages ENABLE ROW LEVEL SECURITY;

-- Professionals: kendi profili
CREATE POLICY "own_profile" ON pro.professionals
  FOR ALL USING (id = auth.uid());

-- Clients: kendi danışanları
CREATE POLICY "own_clients" ON pro.clients
  FOR ALL USING (professional_id = auth.uid());

-- Notes: kendi notları
CREATE POLICY "own_notes" ON pro.client_notes
  FOR ALL USING (professional_id = auth.uid());

-- Appointments: kendi randevuları
CREATE POLICY "own_appointments" ON pro.appointments
  FOR ALL USING (professional_id = auth.uid());

-- Test invitations: kendi davetleri
CREATE POLICY "own_invitations" ON pro.test_invitations
  FOR ALL USING (professional_id = auth.uid());

-- Credit transactions: kendi hareketleri
CREATE POLICY "own_transactions" ON pro.credit_transactions
  FOR ALL USING (professional_id = auth.uid());

-- Notifications: kendi bildirimleri
CREATE POLICY "own_notifications" ON pro.notifications
  FOR ALL USING (professional_id = auth.uid());

-- Credit packages: herkes okuyabilir
CREATE POLICY "read_packages" ON pro.credit_packages
  FOR SELECT USING (is_active = true);
```

### 6.3 Hesaplanan değerler (RPC / view)

```sql
-- Profesyonelin kredi bakiyesi
CREATE OR REPLACE FUNCTION pro.get_credit_balance(p_professional_id uuid)
RETURNS int AS $$
  SELECT COALESCE(SUM(amount), 0)::int
  FROM pro.credit_transactions
  WHERE professional_id = p_professional_id;
$$ LANGUAGE sql SECURITY DEFINER;

-- Dashboard istatistikleri
CREATE OR REPLACE FUNCTION pro.get_dashboard_stats(p_professional_id uuid)
RETURNS json AS $$
  SELECT json_build_object(
    'total_clients', (SELECT count(*) FROM pro.clients WHERE professional_id = p_professional_id AND status = 'active'),
    'todays_appointments', (SELECT count(*) FROM pro.appointments WHERE professional_id = p_professional_id AND starts_at::date = CURRENT_DATE AND status = 'scheduled'),
    'remaining_tests', pro.get_credit_balance(p_professional_id),
    'completed_tests', (SELECT count(*) FROM pro.test_invitations WHERE professional_id = p_professional_id AND status = 'completed')
  );
$$ LANGUAGE sql SECURITY DEFINER;
```

---

## 7. Teknik Bağımlılıklar

```
@supabase/supabase-js    — DB client + Auth
@supabase/ssr            — Next.js server-side auth (cookie-based sessions)
sonner                   — Toast bildirimleri (küçük, şık)
date-fns                 — Tarih formatlama / karşılaştırma
react-hook-form          — Form state yönetimi
zod                      — Şema doğrulama (form + API)
nanoid                   — Test token üretimi
lucide-react             — İkon seti (hafif, tutarlı)
```

**Kullanılmayan / eklenmeyecek:**
- Framer Motion → panel için gereksiz ağırlık, CSS transitions yeterli
- Stripe → v1'de yok, ödeme sonra

---

## 8. Dosya Yapısı

```
src/
├── app/
│   ├── (marketing)/              ← Mevcut site (yeniden adlandırılacak)
│   │   ├── layout.tsx            ← Dark tema, Geist, PageBackground
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── products/
│   │   └── ...
│   │
│   ├── (pro)/                    ← Panel route group
│   │   └── pro/
│   │       ├── layout.tsx        ← Light tema, Inter, Sidebar/BottomTab
│   │       ├── auth/
│   │       │   ├── login/page.tsx
│   │       │   ├── register/page.tsx
│   │       │   ├── verify/page.tsx
│   │       │   └── callback/route.ts
│   │       ├── onboarding/page.tsx
│   │       ├── dashboard/page.tsx
│   │       ├── clients/
│   │       │   ├── page.tsx
│   │       │   └── [id]/page.tsx
│   │       ├── appointments/page.tsx
│   │       ├── tests/page.tsx
│   │       ├── billing/page.tsx
│   │       └── settings/page.tsx
│   │
│   └── t/                        ← Danışan test sayfası (public, auth yok)
│       └── [token]/page.tsx
│
├── components/
│   ├── pro/
│   │   ├── ui/                   ← Button, Card, Input, Select, Badge, Modal, Skeleton
│   │   ├── layout/               ← Sidebar, TopBar, BottomNav, PageWrapper
│   │   ├── dashboard/            ← StatCard, ActivityFeed, UpcomingAppointments
│   │   ├── clients/              ← ClientCard, ClientForm, ClientDetail, NotesList
│   │   ├── tests/                ← TestSendModal, TestStatusBadge, TestList
│   │   ├── appointments/         ← AppointmentCard, AppointmentForm
│   │   └── billing/              ← CreditCard, PackageCard, TransactionTable
│   │
│   └── test-flow/                ← Danışanın gördüğü test UI
│       ├── WelcomeScreen.tsx
│       ├── QuestionStep.tsx
│       ├── ProgressBar.tsx
│       └── CompletionScreen.tsx
│
├── lib/
│   └── pro/
│       ├── supabase/
│       │   ├── client.ts         ← createBrowserClient
│       │   ├── server.ts         ← createServerClient
│       │   └── middleware.ts     ← Auth guard (pro routes)
│       ├── types.ts              ← TypeScript interfaces (DB row types)
│       ├── constants.ts          ← Uzmanlık alanları, iller, paket bilgileri
│       ├── validations.ts        ← Zod şemaları
│       └── utils.ts              ← Tarih formatlama, token üretimi, vb.
│
├── styles/
│   └── pro.css                   ← [data-theme="pro"] token tanımları
│
└── middleware.ts                  ← Route koruma: /pro/** → auth kontrol
```

---

## 9. Middleware & Auth Akışı

```typescript
// middleware.ts (root)
// /pro/** route'ları (auth/* hariç) → Supabase session kontrolü
// Session yoksa → /pro/auth/login'e redirect
// Session var + onboarding tamamlanmamış → /pro/onboarding'e redirect
// /t/** → auth kontrolü yok (public)
```

---

## 10. Performans & Mobil Optimizasyon

| Teknik | Uygulama |
|--------|----------|
| Server Components | Veri çeken sayfalar server component, interaktif parçalar client |
| Streaming | Dashboard kartları bağımsız Suspense boundary'ler içinde |
| Skeleton | Her async bileşen için skeleton loader |
| Image optimization | Avatar'lar `next/image` ile, Supabase Storage'dan |
| Bundle | Pro componentleri dynamic import ile — marketing sayfaları etkilenmez |
| Font | Inter sadece `(pro)` layout'ta yüklenir |
| CSS | `pro.css` sadece `(pro)` layout'ta import edilir |
| Mobile | Bottom tab bar ile touch-friendly navigasyon, büyük hit area'lar (min 44px) |
| Offline | v1'de yok; ileride danışan listesi için local cache |

---

## 11. Faz Planı

| Faz | Kapsam | Öncelik |
|-----|--------|---------|
| **1 — Temel** | Root layout refactor (route groups), Pro layout (light tema, sidebar, bottom tab), globals-pro.css, Supabase Auth entegrasyonu, middleware | Kritik |
| **2 — Auth** | Register, Login, OTP verify, Google callback sayfaları | Kritik |
| **3 — Onboarding** | Onboarding formu, il/ilçe data, profil kaydetme | Kritik |
| **4 — Dashboard** | Dashboard shell, stat kartları, aktivite feed, yaklaşan randevular | Kritik |
| **5 — Danışanlar** | CRUD, liste, detay (tab yapısı), not ekleme | Kritik |
| **6 — Test Gönderme** | Test gönderme modal, link üretimi, WhatsApp/email gönderim, durum takibi | Kritik |
| **7 — Test Doldurma** | `/t/[token]` danışan deneyimi, AQE entegrasyonu | Kritik |
| **8 — Sonuçlar** | HAE sonuç görüntüleme (danışan detayında), temel veri görselleri | Yüksek |
| **9 — Randevular** | Randevu CRUD, liste, hatırlatma email | Orta |
| **10 — Bakiye** | Kredi gösterimi, paket sayfası, işlem geçmişi, ödeme placeholder | Orta |
| **11 — Bildirimler** | Panel içi bildirimler, email bildirimleri | Düşük |
| **12 — Polish** | Animasyon detayları, empty state'ler, error handling, edge case'ler | Düşük |
