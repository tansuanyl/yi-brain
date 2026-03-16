const translations = {
  "zh-CN": {
    languageLabel: "语言",
    heroTitle: "把命理推演、每日抽签与家居风水放进同一个入口。",
    heroLede: "用三个清晰的功能分区，让用户直接选择要做的事，而不是在一个很长的表单里来回寻找。",
    methodTitle: "功能入口",
    method1: "生辰八字推演",
    method2: "抽取今日签",
    method3: "风水评估",
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
    resultTitle: "结果展示",
    statusIdle: "提交任一功能后，这里会显示对应分析结果。",
    emptyState: "Yi-Brain 会把你的输入转成结构化分析，而不是给出武断结论。",
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
    aiQuota: "AI 解读当前不可用：OpenAI 配额不足或账单未开启，已自动回退到规则解读。",
    aiNetwork: "AI 解读当前不可用：模型服务连接超时，已自动回退到规则解读。",
    aiGeneric: "AI 解读暂时不可用，已自动回退到详细规则解读。",
    noBirthText: "未提供完整出生信息",
    readingModeTitle: "生辰八字推演",
    readingModeDesc: "输入问题、背景与生辰，获取结构化易经推演和 AI 解读。",
    fortuneModeTitle: "抽取今日签",
    fortuneModeDesc: "根据日期、生辰和所在地区，生成今日运势、五行建议与行动提示。",
    fengshuiModeTitle: "风水评估",
    fengshuiModeDesc: "上传空间照片，结合周易象意与 AI 视觉识别，输出风险点和整改建议。",
    modeReading: "生辰八字推演",
    modeFortune: "抽取今日签",
    modeFengshui: "风水评估",
    roomPhotoLabel: "空间照片",
    roomTypeLabel: "空间类型",
    roomTypePlaceholder: "例如：客厅、卧室、书房、办公室",
    goalsLabel: "优化目标",
    goalsPlaceholder: "例如：招财、睡眠稳定、提升专注、改善关系",
    concernsLabel: "特别担忧",
    concernsPlaceholder: "例如：镜子对床、门冲沙发、杂物太多、光线不足",
    fengshuiSubmit: "开始风水评估",
    fengshuiEmpty: "上传一张空间照片后，这里会显示整体判断、优点、风险点和整改建议。",
    fengshuiStrengths: "有利点",
    fengshuiIssues: "风险点",
    fengshuiRecommendations: "整改建议",
    fengshuiCaution: "提示",
    statusLoadingReading: "正在起卦、排爻并生成解读...",
    statusLoadingFortune: "正在结合生辰、日期与天气生成今日签...",
    statusLoadingFengshui: "正在分析上传的空间照片...",
    statusDoneReading: "推演完成，情绪倾向：{emotion}，分类：{category}",
    statusDoneFortune: "今日签已生成：{sign} · {band}",
    statusDoneFengshui: "风水评估已完成。",
    uploadPhotoFirst: "请先上传一张空间照片。",
    fengshuiPreviewAlt: "风水评估预览图",
    notDrawnYet: "未抽取",
    weatherFallback: "暂无天气信息"
  },
  en: {
    languageLabel: "Language",
    heroTitle: "Bring BaZi reasoning, daily fortune, and feng shui into one clear entry point.",
    heroLede: "Three clear feature modes let people choose exactly what they need instead of navigating one long form.",
    methodTitle: "Feature Entry",
    method1: "BaZi Reading",
    method2: "Daily Fortune",
    method3: "Feng Shui Review",
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
    submitButton: "Start Reading",
    fortuneButton: "Draw Daily Fortune",
    resultTitle: "Results",
    statusIdle: "Results for the selected feature will appear here.",
    emptyState: "Yi-Brain turns your input into a structured reflection instead of a blunt verdict.",
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
    noBirthText: "Birth details not provided",
    readingModeTitle: "BaZi Reading",
    readingModeDesc: "Enter your question, context, and birth details to get a structured I Ching style reading.",
    fortuneModeTitle: "Daily Fortune",
    fortuneModeDesc: "Use date, birth details, and location to generate a daily sign, elemental balance, and practical guidance.",
    fengshuiModeTitle: "Feng Shui Review",
    fengshuiModeDesc: "Upload a room photo and receive a practical, AI-assisted feng shui review.",
    modeReading: "BaZi Reading",
    modeFortune: "Daily Fortune",
    modeFengshui: "Feng Shui Review",
    roomPhotoLabel: "Room photo",
    roomTypeLabel: "Room type",
    roomTypePlaceholder: "For example: living room, bedroom, study, office",
    goalsLabel: "Goals",
    goalsPlaceholder: "For example: wealth, sleep stability, focus, relationship harmony",
    concernsLabel: "Special concerns",
    concernsPlaceholder: "For example: mirror facing bed, blocked entry, clutter, weak lighting",
    fengshuiSubmit: "Start Feng Shui Review",
    fengshuiEmpty: "Upload a room photo to see a summary, strengths, issues, and remedies here.",
    fengshuiStrengths: "Strengths",
    fengshuiIssues: "Risk Points",
    fengshuiRecommendations: "Recommendations",
    fengshuiCaution: "Note",
    statusLoadingReading: "Casting hexagram and generating interpretation...",
    statusLoadingFortune: "Generating today's fortune from birth data, date, and weather...",
    statusLoadingFengshui: "Analyzing the uploaded room photo...",
    statusDoneReading: "Reading complete. Emotion: {emotion}, Category: {category}",
    statusDoneFortune: "Today's fortune: {sign} · {band}",
    statusDoneFengshui: "Feng shui assessment completed.",
    uploadPhotoFirst: "Please upload a room photo first.",
    fengshuiPreviewAlt: "Feng shui preview image",
    notDrawnYet: "Not drawn",
    weatherFallback: "Weather unavailable"
  },
  ja: {
    languageLabel: "言語",
    heroTitle: "命理推演、今日の運勢、風水評価をひとつの入口にまとめます。",
    heroLede: "3つの機能を分けて表示し、長いフォームを探し回らなくても必要な機能をすぐ選べます。",
    methodTitle: "機能入口",
    method1: "生辰八字推演",
    method2: "今日の運勢",
    method3: "風水評価",
    questionLabel: "質問",
    questionPlaceholder: "例：今年転職したほうがいいですか？",
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
    profilePlaceholder: "例：今の会社で5年働いていて成長が鈍いが、新しい機会にはリスクもある。",
    useAiLabel: "AIで自然言語の解釈を生成する",
    submitButton: "推演を開始",
    fortuneButton: "今日の運勢を引く",
    resultTitle: "結果",
    statusIdle: "選択した機能の結果がここに表示されます。",
    emptyState: "Yi-Brain は入力を構造化された内省に変換し、断定的な結論にはしません。",
    primaryHexagramTitle: "本卦",
    relatingHexagramTitle: "之卦",
    judgementTitle: "核心判断",
    lineAdviceTitle: "変爻の示唆",
    scenarioTitle: "条件推演",
    actionsTitle: "行動提案",
    plainReadingTitle: "平易な解釈",
    deepDiveTitle: "深掘り",
    temporalTitle: "進め方",
    aiTitle: "AI 解釈",
    dailyFortuneTitle: "今日の運勢",
    dailyFortuneHeroLabel: "本日の流れ",
    fortuneDateTitle: "日付",
    fortuneWeatherTitle: "天気",
    fortunePersonalElementTitle: "個人五行",
    fortuneTodayElementTitle: "今日五行",
    fortuneAdviceElementTitle: "今日の調和",
    baziTitle: "あなたの八字",
    todayFlowTitle: "今日の気の流れ",
    fortuneSuitableTitle: "今日の宜",
    fortuneAvoidTitle: "今日の忌",
    fortuneAnalysisTitle: "今日の分析",
    requireQuestion: "まず質問を入力してください。",
    requireBirth: "今日の運勢を引く前に、少なくとも生年月日を入力してください。",
    failed: "リクエストに失敗しました。少し待ってから再試行してください。",
    primaryLabel: "本卦",
    relatingLabel: "之卦",
    upperLower: "上卦: {upper}（{upperNature}） / 下卦: {lower}（{lowerNature}）",
    linePhase: "第 {line} 爻 · {phase}",
    decodingTemp: "解釈強度: {temperature}",
    aiQuota: "AI 解釈は現在利用できません。OpenAI の利用枠または請求設定を確認してください。",
    aiNetwork: "AI 解釈は現在利用できません。モデル接続がタイムアウトしました。",
    aiGeneric: "AI 解釈は一時的に利用できません。ルールベースの解釈を表示しています。",
    noBirthText: "出生情報が未入力です",
    readingModeTitle: "生辰八字推演",
    readingModeDesc: "質問、背景、生辰を入力して、構造化された易経風の推演を得ます。",
    fortuneModeTitle: "今日の運勢",
    fortuneModeDesc: "日付、生辰、地域に基づき、今日の流れと行動の示唆を生成します。",
    fengshuiModeTitle: "風水評価",
    fengshuiModeDesc: "部屋の写真をアップロードし、AI を使った実用的な風水レビューを受け取ります。",
    modeReading: "生辰八字推演",
    modeFortune: "今日の運勢",
    modeFengshui: "風水評価",
    roomPhotoLabel: "部屋の写真",
    roomTypeLabel: "空間タイプ",
    roomTypePlaceholder: "例：リビング、寝室、書斎、オフィス",
    goalsLabel: "改善目標",
    goalsPlaceholder: "例：金運、睡眠安定、集中力、関係改善",
    concernsLabel: "気になる点",
    concernsPlaceholder: "例：鏡がベッド正面、入口が詰まる、物が多い、光が弱い",
    fengshuiSubmit: "風水評価を開始",
    fengshuiEmpty: "部屋の写真をアップロードすると、要約、利点、課題、改善案がここに表示されます。",
    fengshuiStrengths: "利点",
    fengshuiIssues: "リスク",
    fengshuiRecommendations: "改善提案",
    fengshuiCaution: "メモ",
    statusLoadingReading: "起卦と解釈を生成しています...",
    statusLoadingFortune: "生辰、日付、天気から今日の運勢を生成しています...",
    statusLoadingFengshui: "アップロードした部屋写真を分析しています...",
    statusDoneReading: "推演が完了しました。感情傾向: {emotion}、分類: {category}",
    statusDoneFortune: "今日の運勢: {sign} · {band}",
    statusDoneFengshui: "風水評価が完了しました。",
    uploadPhotoFirst: "先に部屋の写真をアップロードしてください。",
    fengshuiPreviewAlt: "風水プレビュー画像",
    notDrawnYet: "未抽選",
    weatherFallback: "天気情報なし"
  }
};

const readingForm = document.querySelector("#reading-form");
const fortuneForm = document.querySelector("#fortune-form");
const fengshuiForm = document.querySelector("#fengshui-form");

const submitButton = document.querySelector("#submit-button");
const fortuneButton = document.querySelector("#fortune-button");
const fengshuiButton = document.querySelector("#fengshui-button");

const statusText = document.querySelector("#status-text");
const emptyState = document.querySelector("#empty-state");
const resultRoot = document.querySelector("#result-root");
const languageSelect = document.querySelector("#language-select");

const modeButtons = Array.from(document.querySelectorAll(".mode-button"));
const modePanels = Array.from(document.querySelectorAll(".mode-panel"));
const resultBlocks = Array.from(document.querySelectorAll(".result-block"));

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
let currentMode = "reading";
let currentFengshuiImageDataUrl = "";

if (languageSelect) {
  languageSelect.value = currentLanguage;
}

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

  document.querySelector('button[data-mode="reading"]').textContent = t("modeReading");
  document.querySelector('button[data-mode="fortune"]').textContent = t("modeFortune");
  document.querySelector('button[data-mode="fengshui"]').textContent = t("modeFengshui");

  const panelHeaders = {
    reading: ["readingModeTitle", "readingModeDesc"],
    fortune: ["fortuneModeTitle", "fortuneModeDesc"],
    fengshui: ["fengshuiModeTitle", "fengshuiModeDesc"]
  };

  Object.entries(panelHeaders).forEach(([mode, [titleKey, descKey]]) => {
    const panel = document.querySelector(`[data-mode-panel="${mode}"]`);
    if (!panel) {
      return;
    }

    const [title, desc] = panel.querySelectorAll(".panel-header.compact > *");
    if (title) {
      title.textContent = t(titleKey);
    }
    if (desc) {
      desc.textContent = t(descKey);
    }
  });

  const fengshuiLabels = [
    ["#fengshui-form label:nth-of-type(1) span", "roomPhotoLabel"],
    ["#fengshui-room-type", "roomTypeLabel"],
    ["#fengshui-goals", "goalsLabel"],
    ["#fengshui-concerns", "concernsLabel"],
    ["#fengshui-result article:nth-of-type(1) h3", "fengshuiStrengths"],
    ["#fengshui-result article:nth-of-type(2) h3", "fengshuiIssues"],
    ["#fengshui-result article:nth-of-type(3) h3", "fengshuiRecommendations"],
    ["#fengshui-result article:nth-of-type(4) h3", "fengshuiCaution"]
  ];

  fengshuiLabels.forEach(([selector, key]) => {
    const node = document.querySelector(selector);
    if (node) {
      const target = node.matches("input, textarea") ? node.closest("label")?.querySelector("span") : node;
      if (target) {
        target.textContent = t(key);
      }
    }
  });

  const roomTypeInput = document.querySelector("#fengshui-room-type");
  const goalsInput = document.querySelector("#fengshui-goals");
  const concernsInput = document.querySelector("#fengshui-concerns");

  if (roomTypeInput) {
    roomTypeInput.placeholder = t("roomTypePlaceholder");
  }
  if (goalsInput) {
    goalsInput.placeholder = t("goalsPlaceholder");
  }
  if (concernsInput) {
    concernsInput.placeholder = t("concernsPlaceholder");
  }
  if (fengshuiButton) {
    fengshuiButton.textContent = t("fengshuiSubmit");
  }
  if (fengshuiEmpty) {
    fengshuiEmpty.querySelector("p").textContent = t("fengshuiEmpty");
  }
  if (fengshuiPreview) {
    fengshuiPreview.alt = t("fengshuiPreviewAlt");
  }
  if (fortuneSign && !fortuneSign.dataset.hasValue) {
    fortuneSign.textContent = t("notDrawnYet");
  }
  if (!statusText.dataset.locked) {
    statusText.textContent = t("statusIdle");
  }
}

function setActiveMode(mode) {
  currentMode = mode;

  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  modePanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.modePanel !== mode);
  });

  resultBlocks.forEach((block) => {
    block.classList.toggle("hidden", block.dataset.resultBlock !== mode);
  });
}

function setStatus(message) {
  statusText.dataset.locked = "true";
  statusText.textContent = message;
}

function releaseStatus() {
  delete statusText.dataset.locked;
}

function showResultRoot(mode) {
  setActiveMode(mode);
  emptyState.classList.add("hidden");
  resultRoot.classList.remove("hidden");
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

function formatFortuneWeather(fortune) {
  if (!fortune?.weather) {
    return t("weatherFallback");
  }

  return fortune.weather.locationName
    ? `${fortune.weather.locationName} · ${fortune.weather.summary}`
    : fortune.weather.summary || t("weatherFallback");
}

function formatBaziText(fortune) {
  if (!fortune?.bazi) {
    return t("noBirthText");
  }

  return `${fortune.bazi.text} · ${fortune.bazi.elements.dominant} / ${fortune.bazi.elements.weakest}`;
}

function formatTodayFlowText(fortune) {
  if (!fortune?.todayBazi) {
    return "-";
  }

  return `${fortune.todayBazi.text} · ${fortune.todayBazi.elements.dominant}`;
}

function renderFengshuiAssessment(payload) {
  const assessment = payload?.assessment || payload?.fallback;
  if (!assessment) {
    return;
  }

  showResultRoot("fengshui");
  fengshuiEmpty.classList.add("hidden");
  fengshuiResult.classList.remove("hidden");

  fengshuiSummary.textContent = assessment.summary || "";
  fengshuiStrengths.innerHTML = listHtml(assessment.strengths);
  fengshuiIssues.innerHTML = listHtml(assessment.issues);
  fengshuiRecommendations.innerHTML = listHtml(assessment.recommendations);
  fengshuiCaution.textContent = assessment.caution || "";

  if (payload?.note) {
    fengshuiNote.classList.remove("hidden");
    fengshuiNote.textContent = payload.note;
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

  const formData = new FormData(readingForm);
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
    setStatus(t("requireQuestion"));
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = t("statusLoadingReading");
  setStatus(t("statusLoadingReading"));

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

    showResultRoot("reading");
    setStatus(
      t("statusDoneReading", {
        emotion: data.intent.emotionalState,
        category: data.intent.category
      })
    );

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
    setStatus(error.message || t("failed"));
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t("submitButton");
  }
}

async function submitDailyFortune(event) {
  event.preventDefault();

  const formData = new FormData(fortuneForm);
  const birthDate = String(formData.get("birthDate") || "").trim();
  const birthTime = String(formData.get("birthTime") || "").trim();
  const location = String(formData.get("location") || "").trim();

  if (!birthDate) {
    setStatus(t("requireBirth"));
    return;
  }

  fortuneButton.disabled = true;
  fortuneButton.textContent = t("statusLoadingFortune");
  setStatus(t("statusLoadingFortune"));

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

    showResultRoot("fortune");
    fortuneSign.textContent = data.fortune.sign || t("notDrawnYet");
    fortuneSign.dataset.hasValue = "true";
    fortuneBand.textContent = data.fortune.band || "-";
    fortuneDate.textContent = data.fortune.date || "-";
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

    setStatus(
      t("statusDoneFortune", {
        sign: data.fortune.sign,
        band: data.fortune.band
      })
    );
  } catch (error) {
    setStatus(error.message || t("failed"));
  } finally {
    fortuneButton.disabled = false;
    fortuneButton.textContent = t("fortuneButton");
  }
}

async function submitFengshui(event) {
  event.preventDefault();

  if (!currentFengshuiImageDataUrl) {
    setStatus(t("uploadPhotoFirst"));
    return;
  }

  const formData = new FormData(fengshuiForm);
  const roomType = String(formData.get("roomType") || "").trim();
  const goals = String(formData.get("goals") || "").trim();
  const concerns = String(formData.get("concerns") || "").trim();

  fengshuiButton.disabled = true;
  fengshuiButton.textContent = t("statusLoadingFengshui");
  setStatus(t("statusLoadingFengshui"));

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
    setStatus(t("statusDoneFengshui"));
  } catch (error) {
    setStatus(error.message || t("failed"));
  } finally {
    fengshuiButton.disabled = false;
    fengshuiButton.textContent = t("fengshuiSubmit");
  }
}

async function handleFengshuiImageChange() {
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
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    releaseStatus();
    setActiveMode(button.dataset.mode);
    statusText.textContent = t("statusIdle");
  });
});

languageSelect?.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem("yi-brain-language", currentLanguage);
  applyTranslations();

  if (!submitButton.disabled) {
    submitButton.textContent = t("submitButton");
  }
  if (!fortuneButton.disabled) {
    fortuneButton.textContent = t("fortuneButton");
  }
  if (!fengshuiButton.disabled) {
    fengshuiButton.textContent = t("fengshuiSubmit");
  }
});

readingForm?.addEventListener("submit", submitReading);
fortuneForm?.addEventListener("submit", submitDailyFortune);
fengshuiForm?.addEventListener("submit", submitFengshui);
fengshuiImageInput?.addEventListener("change", handleFengshuiImageChange);

applyTranslations();
setActiveMode(currentMode);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}
