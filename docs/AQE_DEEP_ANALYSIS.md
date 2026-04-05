# AQE Derin Analiz Raporu

> Tarih: 2026-04-05  
> Kapsam: Soru kalitesi, label tutarsızlıkları, frontend akış hataları, engine mantık eksikleri, veri bütünlüğü

---

## ÖZET

AQE sistemi 4 fazdan oluşuyor: **Profile → Core (19 soru) → Measurements (5 alan) → Deep Dive (dinamik)**. DB'de toplam **~200+ deep dive sorusu**, **22 havuz** bulunuyor. Aşağıda **Kritik**, **Yüksek** ve **Orta** öncelikli sorunlar detaylı olarak listelenmiştir.

---

## 1. KRİTİK SORUNLAR (Kullanıcı Engelleyen)

### 1.1 "Devam Et" Butonu Aktif Olmuyor (Son Deep Dive Sorusu)

**Dosya:** `src/app/(pro)/t/[token]/TestFlow.tsx` satır 626  
**Sorun:** Son deep dive sorusunda "Testi Tamamla" butonu `disabled={Object.keys(deepDiveAnswers).length < deepDiveQuestions.length}` koşuluyla kontrol ediliyor. Ancak `handleDeepDiveAnswer` fonksiyonunda **auto-advance** (satır 114-119) **son soruda da tetikleniyor**. Son soruyu yanıtladığında `setTimeout` devreye giriyor ama index artık son soruda olduğu için hiçbir şey olmadığı gibi, butonu disabled bırakan bir race condition oluşabiliyor.

**Asıl problem:** `handleDeepDiveAnswer` state'i async olarak güncelliyor (`setState`). `Object.keys(deepDiveAnswers).length` kontrolü, React'in batch render'ı nedeniyle henüz güncellenmiş state'i görmeyebiliyor.

**Çözüm:**
```
- Son sorudaki auto-advance'i devre dışı bırak (zaten `if (currentDeepDiveIndex < deepDiveQuestions.length - 1)` kontrolü var ama setTimeout hâlâ çalışıyor)
- Buton disabled kontrolünü `>=` yerine son sorunun cevabının var olup olmadığına da bağla
- disabled={Object.keys(deepDiveAnswers).length < deepDiveQuestions.length && !deepDiveAnswers[currentDeepDiveQuestion.id]}
```

### 1.2 Deep Dive `single_choice` Sorularında Seçenek Etiketleri İngilizce

**DB Verisi:** `gen_priority_area_01` sorusunun `options` alanı:
```json
["physical_health", "mental_health", "relationships", "work_school", "personal_growth", "other"]
```

**Sorun:** Seçenekler `{value, label}` formatı yerine düz string. Frontend'de bu stringler direkt gösteriliyor. Kullanıcı "physical_health" gibi İngilizce slug'lar görüyor.

**Çözüm:** DB'deki options'ı `{value, label}` formatına çevir:
```json
[
  {"value": "physical_health", "label": "Fiziksel Sağlık"},
  {"value": "mental_health", "label": "Ruh Sağlığı"},
  {"value": "relationships", "label": "İlişkiler"},
  {"value": "work_school", "label": "İş / Okul"},
  {"value": "personal_growth", "label": "Kişisel Gelişim"},
  {"value": "other", "label": "Diğer"}
]
```

---

## 2. YÜKSEK ÖNCELİKLİ SORUNLAR (Kullanıcı Deneyimini Bozan)

### 2.1 Deep Dive Sorularında Scale Labels Eksik (NULL)

**Sorun:** DB'deki **tüm** deep dive soruları `scale_labels: null`. Gateway'deki `attachScaleLabels()` fonksiyonu soru metninden regex ile "kalite" vs "sıklık" tahmini yapıyor. Bu tahmin çoğu zaman yanlış sonuç veriyor.

**Etkilenen soru örnekleri:**

| Soru | Gateway Tahmini | Doğru Label |
|------|-----------------|-------------|
| `Zorlandığınızda ne kadar toparlanabiliyorsunuz?` | Çok kötü…Çok iyi (kalite) | Hiç…Çok kolay |
| `Duygusal olarak hissizleştiğinizi... oluyor mu?` | Çok kötü…Çok iyi | Hiç…Çok sık |
| `Sosyal olarak bağlı ve temas halinde hissetme düzeyinizi...` | Çok kötü…Çok iyi | Hiç…Tamamen |
| `Maddi olarak ne kadar güvende ve dengede hissediyorsunuz?` | Çok kötü…Çok iyi | ✅ Core'da doğru label var |

**Core soruları OK** — DB'de `scale_labels` dolu. Sorun sadece deep dive'da.

**Çözüm:** Her deep dive sorusuna uygun `scale_labels` eklenecek (DB migration). Soru tipine göre 4 temel label seti:
1. **Kalite:** `["Çok kötü", "Kötü", "Orta", "İyi", "Çok iyi"]`
2. **Sıklık:** `["Hiç", "Nadiren", "Bazen", "Sık sık", "Neredeyse her zaman"]`
3. **Düzey:** `["Hiç", "Az", "Orta", "Oldukça", "Tamamen"]`
4. **Zorluk:** `["Hiç zorlanmıyorum", "Az", "Orta", "Çok", "Aşırı zorlanıyorum"]`

### 2.2 Soru Metinlerinde Anlam Belirsizliği

Ekran görüntülerindeki spesifik sorunlar:

**Soru: "Sosyal olarak bağlı ve temas halinde hissetme düzeyinizi nasıl değerlendirirsiniz?"**
- Sorun: "temas halinde hissetme düzeyinizi" ifadesi doğal değil
- Öneri: "Sosyal çevrenizle ne kadar bağlantıda hissediyorsunuz?"

**Soru: "Maddi olarak ne kadar güvende ve dengede hissediyorsunuz?"**
- Sorun: "güvende ve dengede" iki farklı kavramı birleştiriyor
- Etiketler: `["Hiç güvende değilim", "Az güvendeyim", "Orta", "Oldukça güvendeyim", "Tamamen güvendeyim"]` — "Orta" tek kelime, diğerleri tam cümle → tutarsız
- Öneri: "OrtaOldukça güvendeyim" olarak gösteriliyor çünkü LikertScale'deki label'lar `flex justify-between` ile sıralanıyor ve "Orta" ile "Oldukça güvendeyim" bitişik görünüyor (ekran görüntüsü 2. resim bunu gösteriyor)

**Soru: "Zorlandığınızda ne kadar toparlanabiliyorsunuz?"**
- Sorun: Core soru, gateway'den dönen label: `["Hiç toparlanamıyorum", "Zor toparlanıyorum", "Orta", "İyi toparlanıyorum", "Çok çabuk toparlanıyorum"]`
- Uzun label'lar LikertScale'de taşıyor ve birbirine yapışıyor (ekran görüntüsü 1)
- Çözüm: Kısa label'lar kullan → `["Hiç", "Zor", "Orta", "İyi", "Çok kolay"]`

### 2.3 LikertScale Label Taşma Problemi

**Dosya:** `src/components/pro/test/LikertScale.tsx`  
**Sorun:** 5 label `flex justify-between` ile yan yana sıralanıyor. Uzun label'lar (ör. "Hiç toparlanamıyorum", "Çok çabuk toparlanıyorum") birbirine yapışıyor, özellikle mobilde okunamaz oluyor.

**Çözüm:**
1. Label'ları kısalt (DB tarafında)
2. Her label'a `text-center` ve sabit `w-1/5` ver
3. Sadece 1 ve 5 numaralı uç label'ları göster (ortayı gizle) — daha temiz UX

### 2.4 Deep Dive Pool Badge'leri Ham İngilizce Slug Gösteriyor

**Dosya:** `TestFlow.tsx` satır 581  
```tsx
{currentDeepDiveQuestion.pool}
```

**Sorun:** Pool adı direkt render ediliyor: `_general`, `sleep`, `emotional`, `stress` vs. Kullanıcı İngilizce teknik isimler görüyor.

**Çözüm:** `getPoolTheme()` veya yeni bir mapping fonksiyonu ile Türkçe etiket:
```
_general → Genel
sleep → Uyku
emotional → Duygusal
stress → Stres
focus → Odaklanma
routine → Düzen
...
```

---

## 3. ORTA ÖNCELİKLİ SORUNLAR

### 3.1 Yaş Aralığı Belirsizliği

**Profile:** `age_range` seçenekleri: `13-18`, `18-26`, `26-40`  
**Sorun:** 18 yaş iki aralıkta da var. 26 yaş da iki aralıkta.  
**Çözüm:** `13-17`, `18-25`, `26-39`, `40-54`, `55+`

### 3.2 Erişilemeyen Havuzlar (Orphan Pools)

**Sorun:** `routing_rules.json`'da hiçbir kural tarafından tetiklenmeyen 4 havuz var:
- `digital_habits` (9 soru)
- `cognitive_style` (8 soru)
- `caregiving` (7 soru)  
- `hobbies_leisure` (8 soru)

Bu havuzlardaki sorular asla kullanıcıya gösterilmiyor. Ya routing kuralı eklenmeli ya da havuzlar devre dışı bırakılmalı.

### 3.3 Per-Question Conditions Yoksayılıyor

**Gateway:** `selectQuestions()` fonksiyonu (satır 822-875) soruların `conditions` alanını **kontrol etmiyor**. Yani:
- `dh_teen_fomo_01` (age_range 13-18 / 18-26 koşullu) → 55+ yaşında birine çıkabilir
- `hor_perimenopause_01` (40-55 / 55+ koşullu) → 18 yaşında birine çıkabilir
- `com_partner_communication_01` (relationship_status != single) → bekar birine çıkabilir

**Çözüm:** `selectQuestions()` içinde her soru için `evaluateConditions()` çağrısı ekle.

### 3.4 `inconsistency_rules.json` Kullanılmıyor

**Sorun:** Tutarsızlık kontrol kuralları tanımlı ama gateway'de hiç çalıştırılmıyor. Ör. biri "mükemmel uyku" deyip "çok yorgun" derse doğrulama sorusu sorulmuyor.

### 3.5 Answer Validation Yok

**Sorun:** `submitAnswers` ve `completeSession` endpoint'lerinde:
- Core cevaplarının 1-5 arasında olduğu kontrol edilmiyor
- Gelen key'lerin gerçek soru ID'leriyle eşleştiği doğrulanmıyor
- Eksik soru cevabı kabul ediliyor

### 3.6 HAE Trait Polarite Hataları

**Stress pool:**
- `stress_intensity_anchor_01`: `STRES_YUKSEK` direction: "negative" ✅
- `stress_daily_impact_anchor_02`: `STRES_DUSUK` direction: "negative" ❌ (düşük stres negative olmamalı)

**Focus pool:**
- `foc_memory_01`: `HAFIZA_SORUNLARI` direction: "positive" ❌ (hafıza sorunları positive olmamalı)

---

## 4. FRONTEND-SPECIFIC SORUNLAR

### 4.1 `createSession()` Token Bağlamıyor

**Sorun:** Test başlarken `createSession()` invite token'ı engine'e iletmiyor. Session anonymous kalıyor. Token sadece `handleMeasurementsSubmit`'te Supabase'e yazılıyor.

### 4.2 Duplicate Codebase (src/ vs website/src/)

**Sorun:** Aynı dosyalar iki yerde: `src/` ve `website/src/`. Değişiklikler senkronize edilmezse drift oluşuyor.

### 4.3 Profile Required Text Validation

**Sorun:** `profile[f.id] == null` kontrolü boş string `""` kabul ediyor. Required text field boş bırakılabilir.

---

## 5. IMPLEMENTASYON PLANI (Todo)

### Faz 1 — Kritik Düzeltmeler (Hemen)
- [ ] **FIX-01:** "Testi Tamamla" buton disabled mantığını düzelt
- [ ] **FIX-02:** `gen_priority_area_01` options'ı Türkçe label'lı formata çevir (DB migration)
- [ ] **FIX-03:** Deep dive pool badge'lerini Türkçe göster (frontend mapping)

### Faz 2 — Label ve Soru Kalitesi (Öncelikli)
- [ ] **FIX-04:** Tüm deep dive sorularına `scale_labels` ekle (DB migration — ~200 soru)
- [ ] **FIX-05:** Core soru label'larını kısalt (uzun olanları 2-3 kelimeye indir)
- [ ] **FIX-06:** LikertScale component'ini uzun label'lara dayanıklı yap (CSS fix)
- [ ] **FIX-07:** Anlam belirsizliği olan soru metinlerini düzelt (DB migration)

### Faz 3 — Engine Mantık (Planlanan)
- [ ] **FIX-08:** `selectQuestions()` içinde per-question conditions kontrolü ekle
- [ ] **FIX-09:** Orphan pool'lar için routing kuralı ekle veya devre dışı bırak
- [ ] **FIX-10:** Yaş aralığı çakışmasını düzelt (DB migration)
- [ ] **FIX-11:** Answer validation ekle (gateway)
- [ ] **FIX-12:** HAE trait polarite hatalarını düzelt

### Faz 4 — İyileştirmeler (Sonra)
- [ ] **FIX-13:** `inconsistency_rules` implementasyonu
- [ ] **FIX-14:** `system_config` pool_limits, cut_order implementasyonu
- [ ] **FIX-15:** Duplicate codebase sync mekanizması

---

## 6. ÖNCELİK SIRASI

| # | Sorun | Etki | Efor | Nerede |
|---|-------|------|------|--------|
| FIX-01 | Devam Et butonu | Kritik — test tamamlanamaz | Düşük | Frontend |
| FIX-02 | İngilizce seçenekler | Kritik — anlamsız UI | Düşük | DB Migration |
| FIX-03 | İngilizce pool badge | Yüksek — kafa karıştırıcı | Düşük | Frontend |
| FIX-04 | Deep dive scale labels | Yüksek — yanlış etiketler | Orta | DB Migration |
| FIX-05 | Core label kısaltma | Yüksek — taşan etiketler | Düşük | DB Migration |
| FIX-06 | LikertScale CSS | Yüksek — mobil UX | Düşük | Frontend |
| FIX-07 | Soru metin düzeltmeleri | Orta | Düşük | DB Migration |
| FIX-08 | Conditions kontrolü | Yüksek — yanlış soru çıkıyor | Orta | Gateway |
| FIX-09 | Orphan pools | Orta | Düşük | Routing Rules |
| FIX-10 | Yaş aralığı | Orta | Düşük | DB Migration |
| FIX-11 | Validation | Orta | Orta | Gateway |
| FIX-12 | Trait polarite | Düşük | Düşük | DB/JSON |
