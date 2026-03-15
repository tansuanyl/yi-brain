const translations = {
  "zh-CN": {
    languageLabel: "语言",
    heroTitle: "以易经结构做推演，以 AI 语言给建议。",
    heroLede: "将“起卦、变爻、时位”转化为结构化推理流程，帮助用户做反思、决策和情境判断。",
    methodTitle: "产品方法",
    method1: "占卜式 Prompting",
    method2: "本卦 → 变卦 条件推演",
    method3: "时位感知解码",
    formTitle: "开始问事",
    formIntro: "输入问题、背景和可选方案，生成一次完整的易理推演。",
    questionLabel: "你的问题",
    questionPlaceholder: "例如：我是否应该在今年换工作？",
    categoryLabel: "问题分类",
    categoryAuto: "自动识别",
    categoryCareer: "事业",
    categoryRelationship: "感情",
    categoryDecision: "决策",
    categoryStudy: "学习",
    optionsLabel: "可选方案",
    optionsPlaceholder: "用中文逗号分隔，例如：留下，跳槽，创业",
    birthDateLabel: "出生日期",
    birthTimeLabel: "出生时间",
    profileLabel: "补充背景",
    profilePlaceholder: "例如：我在当前公司做了 5 年，最近成长停滞，但新机会风险较高。",
    useAiLabel: "调用 AI 生成现代语言解读",
    submitButton: "起卦并推演",
    statusIdle: "提交问题后，这里会展示本卦、变卦、变爻和行动建议。",
    statusLoading: "正在起卦、排爻并生成解读...",
    statusDone: "已完成推演，情绪识别：{emotion}，分类：{category}",
    resultTitle: "推演结果",
    emptyState: "Yi-Brain 会把你的问题转成一次“结构化易理推演”。",
    primaryHexagramTitle: "本卦",
    relatingHexagramTitle: "之卦",
    judgementTitle: "核心判断",
    lineAdviceTitle: "变爻提示",
    scenarioTitle: "条件推演",
    actionsTitle: "行动建议",
    plainReadingTitle: "白话详解",
    deepDiveTitle: "深度展开",
    temporalTitle: "时位感知解码",
    aiTitle: "AI 解读",
    requireQuestion: "请先输入你的问题。",
    failed: "请求失败，请稍后再试。",
    disabledAi: "当前未启用 AI 扩展解读，已显示规则式推演结果。",
    primaryLabel: "本卦",
    relatingLabel: "之卦",
    upperLower: "上卦：{upper}({upperNature}) / 下卦：{lower}({lowerNature})",
    linePhase: "第{line}爻 · {phase}",
    decodingTemp: "解码温度：{temperature}",
    aiQuota: "当前 AI 解读不可用：OpenAI 配额不足或计费未开通。你仍然可以继续使用完整的规则式易理推演。",
    aiNetwork: "当前 AI 解读不可用：模型服务连接超时。你仍然可以继续使用规则式推演结果。",
    aiGeneric: "当前 AI 解读暂时不可用，已自动降级为详细规则式解读。"
  },
  en: {
    languageLabel: "Language",
    heroTitle: "Reason with I Ching structure, answer with AI language.",
    heroLede: "Turn hexagram casting, changing lines, and phase awareness into a structured reflection and decision workflow.",
    methodTitle: "Method",
    method1: "Divination-style Prompting",
    method2: "Primary to relating hexagram reasoning",
    method3: "Phase-aware decoding",
    formTitle: "Ask Your Question",
    formIntro: "Enter your question, context, and options to generate a complete I Ching-based reading.",
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
    profileLabel: "Background",
    profilePlaceholder: "For example: I have worked at my current company for 5 years and growth feels flat, but new opportunities are risky.",
    useAiLabel: "Use AI for natural-language interpretation",
    submitButton: "Cast and Interpret",
    statusIdle: "Your primary hexagram, relating hexagram, changing lines, and action guidance will appear here.",
    statusLoading: "Casting hexagram, mapping lines, and generating interpretation...",
    statusDone: "Reading complete. Emotion: {emotion}, Category: {category}",
    resultTitle: "Reading Result",
    emptyState: "Yi-Brain transforms your question into a structured I Ching reasoning session.",
    primaryHexagramTitle: "Primary Hexagram",
    relatingHexagramTitle: "Relating Hexagram",
    judgementTitle: "Core Judgement",
    lineAdviceTitle: "Changing Lines",
    scenarioTitle: "Scenario Analysis",
    actionsTitle: "Action Guidance",
    plainReadingTitle: "Plain-language Reading",
    deepDiveTitle: "Deep Interpretation",
    temporalTitle: "Phase-aware Decoding",
    aiTitle: "AI Interpretation",
    requireQuestion: "Please enter your question first.",
    failed: "Request failed. Please try again shortly.",
    disabledAi: "AI interpretation is disabled. Rule-based reading is shown instead.",
    primaryLabel: "Primary",
    relatingLabel: "Relating",
    upperLower: "Upper trigram: {upper}({upperNature}) / Lower trigram: {lower}({lowerNature})",
    linePhase: "Line {line} · {phase}",
    decodingTemp: "Decoding temperature: {temperature}",
    aiQuota: "AI interpretation is unavailable because the OpenAI API quota is exhausted or billing is not active. The full rule-based reading still works.",
    aiNetwork: "AI interpretation is unavailable because the model service timed out. The rule-based reading is still available.",
    aiGeneric: "AI interpretation is temporarily unavailable. Yi-Brain has fallen back to a detailed rule-based reading."
  },
  ja: {
    languageLabel: "言語",
    heroTitle: "易経の構造で推演し、AIの言葉で助言する。",
    heroLede: "起卦・変爻・時位を、内省と意思決定のための構造化された推論フローへ変換します。",
    methodTitle: "方法論",
    method1: "占断型プロンプティング",
    method2: "本卦から之卦への条件推論",
    method3: "時位を考慮したデコーディング",
    formTitle: "相談を始める",
    formIntro: "質問、背景、選択肢を入力して、完全な易理推演を生成します。",
    questionLabel: "あなたの質問",
    questionPlaceholder: "例：今年転職すべきでしょうか？",
    categoryLabel: "カテゴリ",
    categoryAuto: "自動判定",
    categoryCareer: "仕事",
    categoryRelationship: "関係",
    categoryDecision: "意思決定",
    categoryStudy: "学習",
    optionsLabel: "選択肢",
    optionsPlaceholder: "例：残る、転職する、起業する",
    birthDateLabel: "生年月日",
    birthTimeLabel: "出生時刻",
    profileLabel: "補足背景",
    profilePlaceholder: "例：今の会社に5年いて成長が停滞していますが、新しい機会にはリスクがあります。",
    useAiLabel: "AIで現代語の解釈を生成する",
    submitButton: "起卦して推演する",
    statusIdle: "ここに本卦、之卦、変爻、行動提案が表示されます。",
    statusLoading: "起卦・配爻・解釈を生成中...",
    statusDone: "推演完了。感情: {emotion}、カテゴリ: {category}",
    resultTitle: "推演結果",
    emptyState: "Yi-Brain はあなたの質問を構造化された易経推演に変換します。",
    primaryHexagramTitle: "本卦",
    relatingHexagramTitle: "之卦",
    judgementTitle: "核心判断",
    lineAdviceTitle: "変爻の示唆",
    scenarioTitle: "条件推演",
    actionsTitle: "行動提案",
    plainReadingTitle: "わかりやすい解説",
    deepDiveTitle: "詳細解釈",
    temporalTitle: "時位デコーディング",
    aiTitle: "AI 解釈",
    requireQuestion: "まず質問を入力してください。",
    failed: "リクエストに失敗しました。しばらくしてから再試行してください。",
    disabledAi: "AI 解釈は無効です。代わりにルールベースの推演を表示しています。",
    primaryLabel: "本卦",
    relatingLabel: "之卦",
    upperLower: "上卦: {upper}({upperNature}) / 下卦: {lower}({lowerNature})",
    linePhase: "第{line}爻 · {phase}",
    decodingTemp: "デコード温度: {temperature}",
    aiQuota: "OpenAI の利用枠不足または課金未設定のため、AI 解釈は利用できません。ルールベースの詳細推演は引き続き利用できます。",
    aiNetwork: "モデル接続がタイムアウトしたため、AI 解釈は現在利用できません。ルールベースの推演は利用できます。",
    aiGeneric: "AI 解釈は一時的に利用できません。詳細なルールベース解釈へ自動的に切り替えました。"
  }
};

const form = document.querySelector("#reading-form");
const submitButton = document.querySelector("#submit-button");
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

let currentLanguage = localStorage.getItem("yi-brain-language") || "zh-CN";
languageSelect.value = currentLanguage;

function t(key, vars = {}) {
  const table = translations[currentLanguage] || translations["zh-CN"];
  const source = table[key] || translations["zh-CN"][key] || key;
  return Object.entries(vars).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    source
  );
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
  return items.map((item) => `<li>${item}</li>`).join("");
}

function paragraphsHtml(items) {
  return items.map((item) => `<p>${item}</p>`).join("");
}

function transformLines(lines) {
  return lines.map((line) => ({
    ...line,
    yinYang: line.changing ? (line.yinYang === "yang" ? "yin" : "yang") : line.yinYang,
    changing: false
  }));
}

function renderHexagram(target, hexagram, lines, titleKey) {
  target.innerHTML = `
    <p><strong>${hexagram.name}卦</strong> · 第${hexagram.id}卦</p>
    <p>${hexagram.description}</p>
    <p>${t("upperLower", {
      upper: hexagram.upper.hanzi,
      upperNature: hexagram.upper.nature,
      lower: hexagram.lower.hanzi,
      lowerNature: hexagram.lower.nature
    })}</p>
    <div class="hexagram-lines">
      ${lines
        .slice()
        .reverse()
        .map(
          (line) => `
            <div class="hex-line ${line.yinYang} ${line.changing ? "changing" : ""}" aria-label="${t(titleKey)}第${line.position}爻">
              ${line.changing ? '<span class="marker"></span>' : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTemporal(steps) {
  temporalStrategy.innerHTML = steps
    .map(
      (step) => `
        <div class="timeline-step">
          <strong>${t("linePhase", { line: step.line, phase: step.phase })}</strong>
          <p>${t("decodingTemp", { temperature: step.temperature })}</p>
          <p>${step.note}</p>
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

async function submitReading(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const question = String(formData.get("question") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const profile = String(formData.get("profile") || "").trim();
  const birthDate = String(formData.get("birthDate") || "").trim();
  const birthTime = String(formData.get("birthTime") || "").trim();
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
    const response = await fetch("/api/reading", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question,
        category,
        profile,
        birthDate,
        birthTime,
        options,
        useAI,
        language: currentLanguage
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || t("failed"));
    }

    emptyState.classList.add("hidden");
    resultRoot.classList.remove("hidden");
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

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem("yi-brain-language", currentLanguage);
  applyTranslations();
  if (!submitButton.disabled) {
    submitButton.textContent = t("submitButton");
  }
});

applyTranslations();
form.addEventListener("submit", submitReading);
