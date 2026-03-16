const translations = {
  "zh-CN": {
    languageLabel: "语言",
    heroTitle: "用易经结构推演，用 AI 语言与空间分析给建议。",
    heroLede: "把决策推演、今日运势和家居风水评估放进同一套反思工具里，让建议更贴近真实生活。",
    methodTitle: "方法",
    method1: "卦象式 Prompting",
    method2: "本卦到之卦的条件推演",
    method3: "照片识别 + 风水整改建议",
    formTitle: "开始提问",
    formIntro: "输入你的问题、背景与可选方案，生成一份完整的结构化推演。",
    questionLabel: "你的问题",
    questionPlaceholder: "例如：我是否应该在今年换工作？",
    categoryLabel: "问题分类",
    categoryAuto: "自动识别",
    categoryCareer: "事业",
    categoryRelationship: "关系",
    categoryDecision: "决策",
    categoryStudy: "学习",
    optionsLabel: "可选方案",
    optionsPlaceholder: "用逗号分隔，例如：留下，跳槽，创业",
    birthDateLabel: "出生日期",
    birthTimeLabel: "出生时间",
    locationLabel: "当前城市 / 地区",
    locationPlaceholder: "例如：上海、北京、Tokyo",
    profileLabel: "补充背景",
    profilePlaceholder: "例如：我在当前公司工作 5 年了，成长变慢，但新机会风险更高。",
    useAiLabel: "使用 AI 生成自然语言解读",
    submitButton: "开始推演",
    fortuneButton: "抽取今日签",
    statusIdle: "提交问题或照片后，这里会显示分析结果。",
    statusLoading: "正在起卦、排爻并生成解读...",
    statusDone: "推演完成，情绪倾向：{emotion}，分类：{category}",
    fortuneLoading: "正在结合生辰、日期与天气生成今日签...",
    fortuneDone: "今日签已生成：{sign} · {band}",
    resultTitle: "推演结果",
    emptyState: "Yi-Brain 会把你的问题或空间照片转成结构化分析，而不是给出武断结论。",
    primaryHexagramTitle: "本卦",
    relatingHexagramTitle: "之卦",
    judgementTitle: "核心判断",
    lineAdviceTitle: "变爻提示",
    scenarioTitle: "条件推演",
    actionsTitle: "行动建议",
    plainReadingTitle: "白话解读",
    deepDiveTitle: "深入展开",
    temporalTitle: "阶段节奏",
    aiTitle: "AI 解读",
    dailyFortuneTitle: "今日签",
    dailyFortuneHeroLabel: "今日运势",
    fortuneDateTitle: "日期",
    fortuneWeatherTitle: "天气",
    fortunePersonalElementTitle: "个人五行",
    fortuneTodayElementTitle: "今日五行",
    fortuneAdviceElementTitle: "今日调和",
    baziTitle: "你的八字",
    todayFlowTitle: "今日气场",
    fortuneSuitableTitle: "今日宜",
    fortuneAvoidTitle: "今日忌",
    fortuneAnalysisTitle: "今日分析",
    requireQuestion: "请先输入你的问题。",
    requireBirth: "建议至少填写出生日期后再抽取今日签。",
    failed: "请求失败，请稍后重试。",
    primaryLabel: "本卦",
    relatingLabel: "之卦",
    upperLower: "上卦：{upper}（{upperNature}） / 下卦：{lower}（{lowerNature}）",
    linePhase: "第 {line} 爻 · {phase}",
    decodingTemp: "解读强度：{temperature}",
    aiQuota: "AI 解读当前不可用：OpenAI 配额不足或账单未开通，已自动回退到规则解读。",
    aiNetwork: "AI 解读当前不可用：模型服务连接超时，已自动回退到规则解读。",
    aiGeneric: "AI 解读暂时不可用，已自动回退到详细规则解读。",
    noBirthText: "未提供完整出生信息"
  },
  en: {
    languageLabel: "Language",
    heroTitle: "Reason with I Ching structure, answer with AI language and spatial review.",
    heroLede: "Bring decision support, daily fortune, and feng shui photo analysis into one reflective toolkit.",
    methodTitle: "Method",
    method1: "Divination-style prompting",
    method2: "Primary to relating scenario reasoning",
    method3: "Photo recognition + feng shui fixes",
    formTitle: "Ask Your Question",
    formIntro: "Enter your question, context, and options to generate a structured reading.",
    questionLabel: "Your question",
    questionPlaceholder: "For example: Should I change jobs this year?",
    categoryLabel: "Category",
    categoryAuto: "Auto detect",
    categoryCareer: "Career",
    categoryRelationship: "Relationship",
    categoryDecision: "Decision",
    categoryStudy: "Study",
    optionsLabel: "Options",
    optionsPlaceholder: "Separate options with commas, for example: stay, switch, start a business",
    birthDateLabel: "Birth date",
    birthTimeLabel: "Birth time",
    locationLabel: "Current city / region",
    locationPlaceholder: "For example: Shanghai, Beijing, Tokyo",
    profileLabel: "Background",
    profilePlaceholder: "For example: I have worked at my current company for 5 years and growth feels flat, but new opportunities are risky.",
    useAiLabel: "Use AI for natural-language interpretation",
    submitButton: "Cast and Interpret",
    fortuneButton: "Draw Daily Fortune",
    statusIdle: "Results will appear here after you submit a question or room photo.",
    statusLoading: "Casting hexagram and generating interpretation...",
    statusDone: "Reading complete. Emotion: {emotion}, Category: {category}",
    fortuneLoading: "Generating today's fortune from birth data, date, and weather...",
    fortuneDone: "Today's fortune: {sign} · {band}",
    resultTitle: "Results",
    emptyState: "Yi-Brain turns your question or room photo into a structured reflection instead of a blunt verdict.",
    primaryHexagramTitle: "Primary Hexagram",
    relatingHexagramTitle: "Relating Hexagram",
    judgementTitle: "Core Judgement",
    lineAdviceTitle: "Changing Lines",
    scenarioTitle: "Scenario Analysis",
    actionsTitle: "Action Guidance",
    plainReadingTitle: "Plain-language Reading",
    deepDiveTitle: "Deep Dive",
    temporalTitle: "Pacing",
    aiTitle: "AI Interpretation",
    dailyFortuneTitle: "Daily Fortune",
    dailyFortuneHeroLabel: "Today's Fortune",
    fortuneDateTitle: "Date",
    fortuneWeatherTitle: "Weather",
    fortunePersonalElementTitle: "Personal Element",
    fortuneTodayElementTitle: "Today's Element",
    fortuneAdviceElementTitle: "Balance Today",
    baziTitle: "Your BaZi",
    todayFlowTitle: "Today's Flow",
    fortuneSuitableTitle: "Recommended",
    fortuneAvoidTitle: "Avoid",
    fortuneAnalysisTitle: "Daily Analysis",
    requireQuestion: "Please enter your question first.",
    requireBirth: "Please provide at least your birth date before drawing today's fortune.",
    failed: "Request failed. Please try again shortly.",
    primaryLabel: "Primary",
    relatingLabel: "Relating",
    upperLower: "Upper trigram: {upper} ({upperNature}) / Lower trigram: {lower} ({lowerNature})",
    linePhase: "Line {line} · {phase}",
    decodingTemp: "Reading intensity: {temperature}",
    aiQuota: "AI interpretation is unavailable because the OpenAI quota is exhausted or billing is inactive.",
    aiNetwork: "AI interpretation is unavailable because the model service timed out.",
    aiGeneric: "AI interpretation is temporarily unavailable. A rule-based reading is shown instead.",
    noBirthText: "Birth details not provided"
  },
  ja: {
    languageLabel: "言語",
    heroTitle: "易経の構造で考え、AI の言葉と空間分析で助言する。",
    heroLede: "意思決定支援、今日の運勢、風水写真分析をひとつの内省ツールにまとめます。",
    methodTitle: "方法",
    method1: "卦象ベースのプロンプティング",
    method2: "本卦から之卦への条件推演",
    method3: "写真認識 + 風水改善提案",
    formTitle: "相談を始める",
    formIntro: "質問、背景、選択肢を入力すると、構造化された推演を生成します。",
    questionLabel: "あなたの質問",
    questionPlaceholder: "例：今年転職するべきでしょうか？",
    categoryLabel: "カテゴリ",
    categoryAuto: "自動判定",
    categoryCareer: "仕事",
    categoryRelationship: "関係",
    categoryDecision: "意思決定",
    categoryStudy: "学習",
    optionsLabel: "選択肢",
    optionsPlaceholder: "例：残る、転職する、起業する",
    birthDateLabel: "生年月日",
    birthTimeLabel: "出生時間",
    locationLabel: "現在の都市 / 地域",
    locationPlaceholder: "例：上海、北京、Tokyo",
    profileLabel: "補足背景",
    profilePlaceholder: "例：今の会社に 5 年いて成長が鈍化しているが、新しい機会にはリスクがある。",
    useAiLabel: "AI で自然言語の解釈を生成する",
    submitButton: "推演する",
    fortuneButton: "今日の運勢を引く",
    statusIdle: "質問または部屋の写真を送信すると、結果がここに表示されます。",
    statusLoading: "起卦と解釈を生成しています...",
    statusDone: "推演完了。感情傾向: {emotion}、カテゴリ: {category}",
    fortuneLoading: "生年月日、日付、天気から今日の運勢を生成しています...",
    fortuneDone: "今日の運勢: {sign} · {band}",
    resultTitle: "結果",
    emptyState: "Yi-Brain は質問や部屋の写真を、断定ではなく構造化された内省へ変換します。",
    primaryHexagramTitle: "本卦",
    relatingHexagramTitle: "之卦",
    judgementTitle: "核心判断",
    lineAdviceTitle: "変爻の示唆",
    scenarioTitle: "条件推演",
    actionsTitle: "行動提案",
    plainReadingTitle: "やさしい解説",
    deepDiveTitle: "深掘り",
    temporalTitle: "ペース判断",
    aiTitle: "AI 解釈",
    dailyFortuneTitle: "今日の運勢",
    dailyFortuneHeroLabel: "本日の流れ",
    fortuneDateTitle: "日付",
    fortuneWeatherTitle: "天気",
    fortunePersonalElementTitle: "個人の五行",
    fortuneTodayElementTitle: "今日の五行",
    fortuneAdviceElementTitle: "今日の調和",
    baziTitle: "あなたの八字",
    todayFlowTitle: "今日の気の流れ",
    fortuneSuitableTitle: "今日の宜",
    fortuneAvoidTitle: "今日の忌",
    fortuneAnalysisTitle: "今日の分析",
    requireQuestion: "まず質問を入力してください。",
    requireBirth: "今日の運勢を引く前に、少なくとも生年月日を入力してください。",
    failed: "リクエストに失敗しました。しばらくしてから再試行してください。",
    primaryLabel: "本卦",
    relatingLabel: "之卦",
    upperLower: "上卦: {upper}（{upperNature}） / 下卦: {lower}（{lowerNature}）",
    linePhase: "第 {line} 爻 · {phase}",
    decodingTemp: "解釈強度: {temperature}",
    aiQuota: "AI 解釈は現在利用できません。OpenAI の利用枠または請求設定を確認してください。",
    aiNetwork: "AI 解釈は現在利用できません。モデル接続がタイムアウトしました。",
    aiGeneric: "AI 解釈は一時的に利用できません。ルールベース解釈を表示しています。",
    noBirthText: "出生情報が未入力です"
  }
};

const form = document.querySelector("#reading-form");
const fengshuiForm = document.querySelector("#fengshui-form");
const submitButton = document.querySelector("#submit-button");
const fortuneButton = document.querySelector("#fortune-button");
const fengshuiButton = document.querySelector("#fengshui-button");
const statusText = document.querySelector("#status-text");
const emptyState = document.querySelector("#empty-state");
const resultRoot = document.querySelector("#result-root");
const languageSelect = document.querySelector("#language-select");

const primaryHexagram = document.querySelector("#primary-hexagram");
const relatingHexagram = document.querySelector("#relating-hexagram");
const judgement = document.querySelector("#judgement");
const lineAdvice = document.querySelector("#line-advice");
const scenarios = document.querySelector("#scenarios");
const actions = document.querySelector("#actions");
const temporalStrategy = document.querySelector("#temporal-strategy");
const aiOutput = document.querySelector("#ai-output");
const plainReading = document.querySelector("#plain-reading");
const deepDive = document.querySelector("#deep-dive");
const dailyFortune = document.querySelector("#daily-fortune");
const fortuneSign = document.querySelector("#fortune-sign");
const fortuneBand = document.querySelector("#fortune-band");
const fortuneDate = document.querySelector("#fortune-date");
const fortuneWeather = document.querySelector("#fortune-weather");
const fortunePersonalElement = document.querySelector("#fortune-personal-element");
const fortuneTodayElement = document.querySelector("#fortune-today-element");
const fortuneAdviceElement = document.querySelector("#fortune-advice-element");
const fortuneBazi = document.querySelector("#fortune-bazi");
const fortuneTodayFlow = document.querySelector("#fortune-today-flow");
const fortuneSuitable = document.querySelector("#fortune-suitable");
const fortuneAvoid = document.querySelector("#fortune-avoid");
const fortuneAnalysis = document.querySelector("#fortune-analysis");

const fengshuiImageInput = document.querySelector("#fengshui-image");
const fengshuiPreviewWrap = document.querySelector("#fengshui-preview-wrap");
const fengshuiPreview = document.querySelector("#fengshui-preview");
const fengshuiSummary = document.querySelector("#fengshui-summary");
const fengshuiStrengths = document.querySelector("#fengshui-strengths");
const fengshuiIssues = document.querySelector("#fengshui-issues");
const fengshuiRecommendations = document.querySelector("#fengshui-recommendations");
const fengshuiCaution = document.querySelector("#fengshui-caution");
const fengshuiEmpty = document.querySelector("#fengshui-empty");
const fengshuiResult = document.querySelector("#fengshui-result");
const fengshuiNote = document.querySelector("#fengshui-note");

let currentLanguage = localStorage.getItem("yi-brain-language") || "zh-CN";
let currentFengshuiImageDataUrl = "";
languageSelect.value = currentLanguage;

function getApiBaseUrl() {
  return String(window.YI_BRAIN_CONFIG?.apiBaseUrl || "").replace(/\/$/, "");
}

function buildApiUrl(path) {
  const base = getApiBaseUrl();
  return base ? `${base}${path}` : path;
}

function t(key, vars = {}) {
  const table = translations[currentLanguage] || translations["zh-CN"];
  const source = table[key] || translations["zh-CN"][key] || key;
  return Object.entries(vars).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    source
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
}

function listHtml(items) {
  return (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function paragraphsHtml(items) {
  return (items || []).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function tagHtml(items, variant = "") {
  return (items || [])
    .map((item) => `<span class="fortune-tag ${variant}">${escapeHtml(item)}</span>`)
    .join("");
}

function analysisHtml(analysis) {
  if (!analysis?.sections?.length) {
    return "";
  }

  return analysis.sections
    .map(
      (section) => `
        <article class="fortune-analysis-item">
          <h5>${escapeHtml(section.title)}</h5>
          <p>${escapeHtml(section.body)}</p>
        </article>
      `
    )
    .join("");
}

function transformLines(lines) {
  return (lines || []).map((line) => ({
    ...line,
    yinYang: line.changing ? (line.yinYang === "yang" ? "yin" : "yang") : line.yinYang,
    changing: false
  }));
}

function renderHexagram(target, hexagram, lines, titleKey) {
  target.innerHTML = `
    <p><strong>${escapeHtml(hexagram.name)}卦</strong> · 第 ${escapeHtml(hexagram.id)} 卦</p>
    <p>${escapeHtml(hexagram.description)}</p>
    <p>${escapeHtml(
      t("upperLower", {
        upper: hexagram.upper.hanzi,
        upperNature: hexagram.upper.nature,
        lower: hexagram.lower.hanzi,
        lowerNature: hexagram.lower.nature
      })
    )}</p>
    <div class="hexagram-lines">
      ${(lines || [])
        .slice()
        .reverse()
        .map(
          (line) => `
            <div class="hex-line ${line.yinYang} ${line.changing ? "changing" : ""}" aria-label="${escapeHtml(
              `${t(titleKey)} ${line.position}`
            )}">
              ${line.changing ? '<span class="marker"></span>' : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTemporal(steps) {
  temporalStrategy.innerHTML = (steps || [])
    .map(
      (step) => `
        <div class="timeline-step">
          <strong>${escapeHtml(t("linePhase", { line: step.line, phase: step.phase }))}</strong>
          <p>${escapeHtml(t("decodingTemp", { temperature: step.temperature }))}</p>
          <p>${escapeHtml(step.note)}</p>
        </div>
      `
    )
    .join("");
}

function renderAi(ai) {
  aiOutput.className = "ai-output";

  if (ai?.content) {
    aiOutput.textContent = ai.content;
    return;
  }

  if (ai?.reason === "insufficient_quota") {
    aiOutput.classList.add("warning");
    aiOutput.textContent = t("aiQuota");
    return;
  }

  if (ai?.reason === "network_timeout") {
    aiOutput.classList.add("warning");
    aiOutput.textContent = t("aiNetwork");
    return;
  }

  aiOutput.classList.add("warning");
  aiOutput.textContent = ai?.note || t("aiGeneric");
}

function showResultRoot() {
  emptyState.classList.add("hidden");
  resultRoot.classList.remove("hidden");
}

function formatFortuneWeather(fortune) {
  if (!fortune?.weather) {
    return "-";
  }

  return fortune.weather.locationName
    ? `${fortune.weather.locationName} · ${fortune.weather.summary}`
    : fortune.weather.summary || "-";
}

function formatBaziText(fortune) {
  if (!fortune?.bazi) {
    return t("noBirthText");
  }

  return `${fortune.bazi.text} · ${fortune.bazi.elements.dominant} 偏旺 / ${fortune.bazi.elements.weakest} 偏弱`;
}

function formatTodayFlowText(fortune) {
  if (!fortune?.todayBazi) {
    return "-";
  }

  return `${fortune.todayBazi.text} · 今日主气偏向 ${fortune.todayBazi.elements.dominant}`;
}

function renderFengshuiAssessment(assessmentPayload) {
  const assessment = assessmentPayload?.assessment || assessmentPayload?.fallback;
  if (!assessment) {
    return;
  }

  showResultRoot();
  fengshuiEmpty.classList.add("hidden");
  fengshuiResult.classList.remove("hidden");

  fengshuiSummary.textContent = assessment.summary || "";
  fengshuiStrengths.innerHTML = listHtml(assessment.strengths);
  fengshuiIssues.innerHTML = listHtml(assessment.issues);
  fengshuiRecommendations.innerHTML = listHtml(assessment.recommendations);
  fengshuiCaution.textContent = assessment.caution || "";

  if (assessmentPayload?.note) {
    fengshuiNote.classList.remove("hidden");
    fengshuiNote.textContent = assessmentPayload.note;
  } else {
    fengshuiNote.classList.add("hidden");
    fengshuiNote.textContent = "";
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read image."));
    reader.readAsDataURL(file);
  });
}

async function submitReading(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const question = String(formData.get("question") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const profile = String(formData.get("profile") || "").trim();
  const birthDate = String(formData.get("birthDate") || "").trim();
  const birthTime = String(formData.get("birthTime") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const options = String(formData.get("options") || "")
    .split(/[，,]/)
    .map((item) => item.trim())
    .filter(Boolean);
  const useAI = formData.get("useAI") === "on";

  if (!question) {
    statusText.textContent = t("requireQuestion");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = t("statusLoading");
  statusText.textContent = t("statusLoading");

  try {
    const response = await fetch(buildApiUrl("/api/reading"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        category,
        profile,
        birthDate,
        birthTime,
        location,
        options,
        useAI,
        language: currentLanguage
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || t("failed"));
    }

    showResultRoot();
    statusText.textContent = t("statusDone", {
      emotion: data.intent.emotionalState,
      category: data.intent.category
    });

    renderHexagram(primaryHexagram, data.reading.primary, data.reading.lines, "primaryLabel");
    renderHexagram(relatingHexagram, data.reading.relate, transformLines(data.reading.lines), "relatingLabel");
    judgement.textContent = data.reading.summary.judgement;
    lineAdvice.innerHTML = listHtml(data.reading.summary.lineAdvice);
    scenarios.innerHTML = listHtml(data.reading.summary.scenarios);
    actions.innerHTML = listHtml(data.reading.summary.actionGuide);
    plainReading.innerHTML = paragraphsHtml(data.reading.summary.plainReading);
    deepDive.innerHTML = paragraphsHtml(data.reading.summary.deepDive);
    renderTemporal(data.reading.temporalStrategy);
    renderAi(data.ai);
  } catch (error) {
    statusText.textContent = error.message || t("failed");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t("submitButton");
  }
}

async function submitDailyFortune() {
  const formData = new FormData(form);
  const birthDate = String(formData.get("birthDate") || "").trim();
  const birthTime = String(formData.get("birthTime") || "").trim();
  const location = String(formData.get("location") || "").trim();

  if (!birthDate) {
    statusText.textContent = t("requireBirth");
    return;
  }

  fortuneButton.disabled = true;
  fortuneButton.textContent = t("fortuneLoading");
  statusText.textContent = t("fortuneLoading");

  try {
    const response = await fetch(buildApiUrl("/api/daily-fortune"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        birthDate,
        birthTime,
        location,
        language: currentLanguage
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || t("failed"));
    }

    showResultRoot();
    fortuneSign.textContent = data.fortune.sign;
    fortuneBand.textContent = data.fortune.band;
    fortuneDate.textContent = data.fortune.date;
    fortuneWeather.textContent = formatFortuneWeather(data.fortune);
    fortunePersonalElement.textContent = data.fortune.bazi
      ? `${data.fortune.bazi.elements.dominant} / ${data.fortune.bazi.elements.weakest}`
      : "-";
    fortuneTodayElement.textContent = data.fortune.todayBazi?.elements?.dominant || "-";
    fortuneAdviceElement.textContent = data.fortune.fiveElements?.advice?.recommendedElement || "-";
    dailyFortune.innerHTML = `<p>${escapeHtml(data.fortune.summary)}</p>`;
    fortuneBazi.textContent = formatBaziText(data.fortune);
    fortuneTodayFlow.textContent = formatTodayFlowText(data.fortune);
    fortuneSuitable.innerHTML = tagHtml(data.fortune.suitable?.all);
    fortuneAvoid.innerHTML = tagHtml(data.fortune.unsuitable?.all, "avoid");
    fortuneAnalysis.innerHTML = analysisHtml(data.fortune.analysis);
    statusText.textContent = t("fortuneDone", {
      sign: data.fortune.sign,
      band: data.fortune.band
    });
  } catch (error) {
    statusText.textContent = error.message || t("failed");
  } finally {
    fortuneButton.disabled = false;
    fortuneButton.textContent = t("fortuneButton");
  }
}

async function submitFengshui(event) {
  event.preventDefault();

  if (!currentFengshuiImageDataUrl) {
    statusText.textContent = currentLanguage === "en" ? "Please upload a room photo first." : currentLanguage === "ja" ? "まず部屋の写真をアップロードしてください。" : "请先上传一张空间照片。";
    return;
  }

  const formData = new FormData(fengshuiForm);
  const roomType = String(formData.get("roomType") || "").trim();
  const goals = String(formData.get("goals") || "").trim();
  const concerns = String(formData.get("concerns") || "").trim();

  fengshuiButton.disabled = true;
  fengshuiButton.textContent = currentLanguage === "en" ? "Analyzing..." : currentLanguage === "ja" ? "分析中..." : "分析中...";
  statusText.textContent = currentLanguage === "en" ? "Analyzing the uploaded room photo..." : currentLanguage === "ja" ? "部屋の写真を分析しています..." : "正在分析上传的空间照片...";

  try {
    const response = await fetch(buildApiUrl("/api/fengshui-assessment"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageDataUrl: currentFengshuiImageDataUrl,
        roomType,
        goals,
        concerns,
        language: currentLanguage
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || t("failed"));
    }

    renderFengshuiAssessment(data.assessment);
    statusText.textContent =
      currentLanguage === "en"
        ? "Feng shui assessment completed."
        : currentLanguage === "ja"
          ? "風水評価が完了しました。"
          : "风水评估已完成。";
  } catch (error) {
    statusText.textContent = error.message || t("failed");
  } finally {
    fengshuiButton.disabled = false;
    fengshuiButton.textContent =
      currentLanguage === "en" ? "Start Feng Shui Review" : currentLanguage === "ja" ? "風水評価を開始" : "开始风水评估";
  }
}

fengshuiImageInput.addEventListener("change", async () => {
  const file = fengshuiImageInput.files?.[0];
  if (!file) {
    currentFengshuiImageDataUrl = "";
    fengshuiPreviewWrap.classList.add("hidden");
    fengshuiPreview.removeAttribute("src");
    return;
  }

  currentFengshuiImageDataUrl = await readFileAsDataUrl(file);
  fengshuiPreview.src = currentFengshuiImageDataUrl;
  fengshuiPreviewWrap.classList.remove("hidden");
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem("yi-brain-language", currentLanguage);
  applyTranslations();

  if (!submitButton.disabled) {
    submitButton.textContent = t("submitButton");
  }

  if (!fortuneButton.disabled) {
    fortuneButton.textContent = t("fortuneButton");
  }
});

applyTranslations();
form.addEventListener("submit", submitReading);
fengshuiForm.addEventListener("submit", submitFengshui);
fortuneButton.addEventListener("click", submitDailyFortune);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}
