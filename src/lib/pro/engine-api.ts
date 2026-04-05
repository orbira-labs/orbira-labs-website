const API_URL = process.env.NEXT_PUBLIC_ENGINE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_ENGINE_API_KEY;

const USE_MOCK = !API_URL || !API_KEY;

export type ProfileCategory = "demographic" | "lifestyle" | "health" | "habit" | "nutrition";

export interface ProfileField {
  id: string;
  answer_type: "single_choice" | "boolean" | "text";
  text: string;
  category?: ProfileCategory | string;
  options?: { value: string | boolean; label: string }[];
  required?: boolean;
}

export interface ProfileGroup {
  category: string;
  label: string;
  description: string;
  fields: ProfileField[];
}

const CATEGORY_META: Record<string, { label: string; description: string; order: number }> = {
  demographic: { label: "Temel Bilgiler", description: "Sizi daha iyi tanımamız için birkaç temel bilgi.", order: 0 },
  lifestyle: { label: "Yaşam Tarzı", description: "Günlük yaşamınızı şekillendiren tercihler.", order: 1 },
  health: { label: "Sağlık Durumu", description: "Genel sağlık profiliniz hakkında.", order: 2 },
  habit: { label: "Alışkanlıklar", description: "Günlük alışkanlıklarınız.", order: 3 },
  nutrition: { label: "Beslenme", description: "Beslenme tercihleriniz.", order: 4 },
};

export function groupProfileFields(fields: ProfileField[]): ProfileGroup[] {
  const grouped = new Map<string, ProfileField[]>();

  for (const field of fields) {
    const cat = field.category ?? "other";
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(field);
  }

  return Array.from(grouped.entries())
    .map(([category, fields]) => {
      const meta = CATEGORY_META[category] ?? { label: "Diğer", description: "", order: 99 };
      return { category, label: meta.label, description: meta.description, fields, _order: meta.order };
    })
    .sort((a, b) => a._order - b._order)
    .map(({ _order, ...rest }) => rest);
}

export interface CoreQuestion {
  id: string;
  text: string;
  dimension: string;
}

export interface MeasurementField {
  id: string;
  answer_type: "numeric" | "single_choice";
  text: string;
  numeric_range?: { min: number; max: number } | null;
  options?: { value: string; label: string }[] | null;
}

export interface DeepDiveQuestion {
  id: string;
  text: string;
  pool: string;
}

export interface SessionData {
  session_id: string;
  profile_fields: ProfileField[];
  core_questions: CoreQuestion[];
  measurement_context: MeasurementField[];
}

export interface SubmitAnswersResponse {
  deep_dive_questions: DeepDiveQuestion[];
}

export interface AnalysisResults {
  wellness_score: number;
  dimension_scores: Record<string, number>;
  top_strengths: string[];
  top_risks: string[];
  traits: { id: string; name: string; active: boolean }[];
  patterns: { id: string; type: string; description: string }[];
  inferences: { id: string; title: string; description: string }[];
  bmi_context: { bmi: number; category: string };
}

export interface Report {
  character_analysis: string;
  top5_and_weak5: {
    top5: { name: string; insight: string }[];
    weak5: { name: string; insight: string }[];
  };
  blind_spots: {
    title: string;
    insight: string;
    coach_tip: string;
  }[];
  coaching_roadmap: {
    immediate: string[];
    short_term: string[];
    medium_term: string[];
  };
  generated_at: string;
  model: string;
}

export interface CompleteSessionResponse {
  results: {
    analysis: AnalysisResults;
    report: Report;
  };
}

class EngineAPIError extends Error {
  code: string;
  status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.name = "EngineAPIError";
    this.code = code;
    this.status = status;
  }
}

async function engineFetch<T>(
  path: string,
  body?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY ?? "",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!data.ok) {
    throw new EngineAPIError(
      data.error?.message ?? "API error",
      data.error?.code ?? "UNKNOWN_ERROR",
      res.status
    );
  }

  return data.data as T;
}

export async function createSession(): Promise<SessionData> {
  if (USE_MOCK) {
    console.warn("[Engine API] Using mock data - NEXT_PUBLIC_ENGINE_API_URL not configured");
    return mockCreateSession();
  }
  return engineFetch<SessionData>("/v1/sessions", {});
}

export async function submitAnswers(
  sessionId: string,
  profile: Record<string, unknown>,
  coreAnswers: Record<string, number>,
  measurements: Record<string, unknown>
): Promise<SubmitAnswersResponse> {
  if (USE_MOCK) {
    return mockSubmitAnswers();
  }
  return engineFetch<SubmitAnswersResponse>(
    `/v1/sessions/${sessionId}/answers`,
    {
      profile,
      core_answers: coreAnswers,
      measurements,
    }
  );
}

export async function completeSession(
  sessionId: string,
  deepDiveAnswers: Record<string, number>
): Promise<CompleteSessionResponse> {
  if (USE_MOCK) {
    return mockCompleteSession();
  }
  return engineFetch<CompleteSessionResponse>(
    `/v1/sessions/${sessionId}/complete`,
    {
      deep_dive_answers: deepDiveAnswers,
    }
  );
}

export { EngineAPIError };

// ============================================
// MOCK DATA - Used when Engine API is not configured
// ============================================

const MOCK_SESSION_DATA: SessionData = {
  session_id: `mock_${Date.now()}`,
  profile_fields: [
    {
      id: "gender",
      answer_type: "single_choice",
      text: "Cinsiyetiniz?",
      category: "demographic",
      options: [
        { value: "female", label: "Kadın" },
        { value: "male", label: "Erkek" },
        { value: "prefer_not_to_say", label: "Belirtmek istemiyorum" },
      ],
      required: true,
    },
    {
      id: "age_range",
      answer_type: "single_choice",
      text: "Yaş aralığınız?",
      category: "demographic",
      options: [
        { value: "13_18", label: "13-18" },
        { value: "18_26", label: "18-26" },
        { value: "26_40", label: "26-40" },
        { value: "40_55", label: "40-55" },
        { value: "55_plus", label: "55+" },
      ],
      required: true,
    },
    {
      id: "relationship_status",
      answer_type: "single_choice",
      text: "İlişki durumunuz?",
      category: "lifestyle",
      options: [
        { value: "single", label: "Bekar" },
        { value: "in_relationship", label: "İlişkim var" },
        { value: "married", label: "Evli" },
      ],
      required: true,
    },
    {
      id: "chronic_condition",
      answer_type: "boolean",
      text: "Kronik bir sağlık durumunuz var mı?",
      category: "health",
      options: [
        { value: true, label: "Evet" },
        { value: false, label: "Hayır" },
      ],
      required: true,
    },
    {
      id: "smoking_status",
      answer_type: "single_choice",
      text: "Sigara kullanıyor musunuz?",
      category: "habit",
      options: [
        { value: "yes", label: "Evet" },
        { value: "no", label: "Hayır" },
        { value: "social", label: "Sosyal içici" },
      ],
      required: true,
    },
    {
      id: "nutrition_preference",
      answer_type: "single_choice",
      text: "Beslenme tercihiniz hangisine daha yakın?",
      category: "nutrition",
      options: [
        { value: "omnivore", label: "Omnivor" },
        { value: "vegetarian", label: "Vejetaryen" },
        { value: "vegan", label: "Vegan" },
      ],
      required: true,
    },
  ],
  core_questions: [
    { id: "sleep_quality", text: "Uyku kalitenizi nasıl değerlendirirsiniz?", dimension: "physical" },
    { id: "energy_level", text: "Gün içi enerji seviyenizi nasıl değerlendirirsiniz?", dimension: "physical" },
    { id: "stress_management", text: "Stresinizi yönetebilme düzeyinizi nasıl değerlendirirsiniz?", dimension: "mental" },
    { id: "emotional_balance", text: "Duygusal olarak ne kadar dengede hissediyorsunuz?", dimension: "mental" },
    { id: "focus", text: "Zihinsel odaklanma düzeyinizi nasıl değerlendirirsiniz?", dimension: "mental" },
    { id: "support_access", text: "İhtiyaç duyduğunuzda destek bulabileceğinizi ne kadar hissediyorsunuz?", dimension: "social" },
    { id: "relationship_quality", text: "Yakın ilişkilerinizin kalitesini nasıl değerlendirirsiniz?", dimension: "social" },
    { id: "work_life_balance", text: "İş, okul ve özel hayat dengenizi nasıl değerlendirirsiniz?", dimension: "functional" },
    { id: "life_satisfaction", text: "Genel yaşam memnuniyetinizi nasıl değerlendirirsiniz?", dimension: "general" },
    { id: "resilience", text: "Zorlandığınızda ne kadar toparlanabiliyorsunuz?", dimension: "mental" },
  ],
  measurement_context: [
    { id: "height", answer_type: "numeric", text: "Boyunuz? (cm)", numeric_range: { min: 100, max: 250 } },
    { id: "weight", answer_type: "numeric", text: "Kilonuz? (kg)", numeric_range: { min: 30, max: 300 } },
    {
      id: "water_intake",
      answer_type: "single_choice",
      text: "Günlük su tüketiminiz hangisine daha yakın?",
      options: [
        { value: "none", label: "Neredeyse hiç" },
        { value: "low", label: "1-3 bardak" },
        { value: "medium", label: "4-6 bardak" },
        { value: "good", label: "7-9 bardak" },
        { value: "high", label: "10+ bardak" },
      ],
    },
  ],
};

const MOCK_DEEP_DIVE_QUESTIONS: DeepDiveQuestion[] = [
  { id: "dd1", text: "Zor kararlar almadan önce uzun süre düşünürüm.", pool: "Karar Verme" },
  { id: "dd2", text: "Eleştirildiğimde savunmaya geçerim.", pool: "Geri Bildirim" },
  { id: "dd3", text: "Belirsizlik beni rahatsız eder.", pool: "Belirsizlik Toleransı" },
  { id: "dd4", text: "Başarısızlıklarımı kolay kabullenirim.", pool: "Öz-Kabul" },
  { id: "dd5", text: "Uzun vadeli hedefler belirlerim.", pool: "Planlama" },
];

function generateMockResults(): CompleteSessionResponse {
  return {
    results: {
      analysis: {
        wellness_score: 72,
        dimension_scores: {
          "Sosyallik": 78,
          "Duygusal Denge": 65,
          "Sorumluluk": 82,
          "Empati": 75,
          "Açıklık": 70,
          "Öz-Farkındalık": 68,
          "Motivasyon": 74,
          "Stres Yönetimi": 62,
          "İletişim": 76,
          "Adaptasyon": 71,
        },
        top_strengths: ["Sorumluluk", "Sosyallik", "İletişim"],
        top_risks: ["Stres Yönetimi", "Duygusal Denge"],
        traits: [
          { id: "t1", name: "Dışa Dönük", active: true },
          { id: "t2", name: "Planlı", active: true },
          { id: "t3", name: "Empatik", active: true },
          { id: "t4", name: "Mükemmeliyetçi", active: false },
        ],
        patterns: [
          { id: "p1", type: "strength", description: "Güçlü sosyal bağlar kurma eğilimi" },
          { id: "p2", type: "risk", description: "Stres altında duygusal tepki verme eğilimi" },
        ],
        inferences: [
          { id: "i1", title: "Liderlik Potansiyeli", description: "Sosyal beceriler ve sorumluluk bilinci liderlik için güçlü bir temel oluşturuyor." },
          { id: "i2", title: "Stres Yönetimi Geliştirilebilir", description: "Duygusal denge skorları, stres yönetimi tekniklerinden fayda görebileceğinizi gösteriyor." },
        ],
        bmi_context: { bmi: 23.5, category: "Normal" },
      },
      report: {
        character_analysis: `Bu analiz sonuçlarına göre, sosyal ilişkilerde güçlü bir profil sergiliyorsunuz. İnsanlarla iletişim kurmaktan keyif alıyor ve empati yeteneğinizi aktif olarak kullanıyorsunuz.

Sorumluluk bilinciniz yüksek ve görevlerinizi titizlikle yerine getiriyorsunuz. Bu özellik, hem iş hem de özel hayatınızda güvenilir bir kişi olarak algılanmanızı sağlıyor.

Gelişim alanı olarak stres yönetimi öne çıkıyor. Yoğun dönemlerde duygusal tepkilerinizi kontrol etmekte zorlanabiliyorsunuz. Mindfulness ve nefes egzersizleri gibi teknikler bu alanda size yardımcı olabilir.

Genel olarak, dengeli bir kişilik yapısına sahipsiniz ve potansiyelinizi gerçekleştirmek için küçük iyileştirmeler yapabilirsiniz.`,
        top5_and_weak5: {
          top5: [
            { name: "Sorumluluk", insight: "Verilen görevleri zamanında ve kaliteli şekilde tamamlarsınız." },
            { name: "Sosyallik", insight: "İnsanlarla kolayca bağ kurabilir ve ilişkileri sürdürebilirsiniz." },
            { name: "İletişim", insight: "Düşüncelerinizi açık ve etkili bir şekilde ifade edebilirsiniz." },
            { name: "Empati", insight: "Başkalarının duygularını anlama ve paylaşma kapasiteniz yüksek." },
            { name: "Motivasyon", insight: "Hedeflerinize ulaşmak için içsel bir itici güce sahipsiniz." },
          ],
          weak5: [
            { name: "Stres Yönetimi", insight: "Baskı altında duygusal tepkiler verme eğiliminiz var." },
            { name: "Duygusal Denge", insight: "Ani ruh hali değişimleri yaşayabiliyorsunuz." },
            { name: "Öz-Farkındalık", insight: "Kendi güdülerinizi ve tepkilerinizi analiz etmekte gelişebilirsiniz." },
            { name: "Açıklık", insight: "Yeni deneyimlere karşı daha cesur olabilirsiniz." },
            { name: "Adaptasyon", insight: "Beklenmedik değişikliklere uyum sağlamak zaman alabilir." },
          ],
        },
        blind_spots: [
          {
            title: "Mükemmeliyetçilik Tuzağı",
            insight: "Yüksek standartlarınız bazen stresinizi artırıyor olabilir. Her şeyin mükemmel olması gerekmediğini kabul etmek rahatlamanızı sağlayabilir.",
            coach_tip: "\"Yeterince iyi\" kavramını benimseyin. Her projede %80 kaliteye ulaştığınızda durun ve değerlendirin.",
          },
          {
            title: "Aşırı Empati",
            insight: "Başkalarının sorunlarını kendi sorunlarınız gibi hissedebiliyorsunuz. Bu duygusal yükü dengelemeyi öğrenmek önemli.",
            coach_tip: "Sağlıklı sınırlar belirleyin. Başkalarına yardım ederken kendi enerjinizi de koruyun.",
          },
          {
            title: "Erteleme Eğilimi",
            insight: "Zorlu görevleri erteleme eğiliminiz olabilir, özellikle belirsizlik içeriyorlarsa.",
            coach_tip: "Büyük görevleri küçük, yönetilebilir parçalara bölün. İlk adımı atmak en zor kısımdır.",
          },
        ],
        coaching_roadmap: {
          immediate: [
            "Günde 5 dakika nefes egzersizi yapın",
            "Günlük tutmaya başlayın - duygularınızı yazın",
            "Uyku düzeninizi optimize edin",
          ],
          short_term: [
            "Stres tetikleyicilerinizi belirleyin ve listeleyin",
            "Haftalık öz-değerlendirme rutini oluşturun",
            "Bir mentor veya hesap verebilirlik ortağı bulun",
          ],
          medium_term: [
            "Mindfulness veya meditasyon pratiğine başlayın",
            "Duygusal zeka üzerine bir kitap okuyun",
            "Yeni bir hobi veya beceri geliştirin",
          ],
        },
        generated_at: new Date().toISOString(),
        model: "Mock Engine v1.0",
      },
    },
  };
}

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Mock implementations
async function mockCreateSession(): Promise<SessionData> {
  await delay(800);
  return { ...MOCK_SESSION_DATA, session_id: `mock_${Date.now()}` };
}

async function mockSubmitAnswers(): Promise<SubmitAnswersResponse> {
  await delay(1000);
  return { deep_dive_questions: MOCK_DEEP_DIVE_QUESTIONS };
}

async function mockCompleteSession(): Promise<CompleteSessionResponse> {
  await delay(2000);
  return generateMockResults();
}
