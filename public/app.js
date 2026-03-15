const form = document.querySelector("#reading-form");
const submitButton = document.querySelector("#submit-button");
const statusText = document.querySelector("#status-text");
const emptyState = document.querySelector("#empty-state");
const resultRoot = document.querySelector("#result-root");

const primaryHexagram = document.querySelector("#primary-hexagram");
const relatingHexagram = document.querySelector("#relating-hexagram");
const judgement = document.querySelector("#judgement");
const lineAdvice = document.querySelector("#line-advice");
const scenarios = document.querySelector("#scenarios");
const actions = document.querySelector("#actions");
const temporalStrategy = document.querySelector("#temporal-strategy");
const aiOutput = document.querySelector("#ai-output");

function listHtml(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function transformLines(lines) {
  return lines.map((line) => ({
    ...line,
    yinYang: line.changing ? (line.yinYang === "yang" ? "yin" : "yang") : line.yinYang,
    changing: false
  }));
}

function renderHexagram(target, hexagram, lines, title) {
  target.innerHTML = `
    <p><strong>${hexagram.name}卦</strong> · 第${hexagram.id}卦</p>
    <p>${hexagram.description}</p>
    <p>上卦：${hexagram.upper.hanzi}(${hexagram.upper.nature}) / 下卦：${hexagram.lower.hanzi}(${hexagram.lower.nature})</p>
    <div class="hexagram-lines">
      ${lines
        .slice()
        .reverse()
        .map(
          (line) => `
            <div class="hex-line ${line.yinYang} ${line.changing ? "changing" : ""}" aria-label="${title}第${line.position}爻">
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
          <strong>第${step.line}爻 · ${step.phase}</strong>
          <p>解码温度：${step.temperature}</p>
          <p>${step.note}</p>
        </div>
      `
    )
    .join("");
}

async function submitReading(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const question = String(formData.get("question") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const profile = String(formData.get("profile") || "").trim();
  const options = String(formData.get("options") || "")
    .split(/[，,]/)
    .map((item) => item.trim())
    .filter(Boolean);
  const useAI = formData.get("useAI") === "on";

  if (!question) {
    statusText.textContent = "请先输入你的问题。";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "推演中...";
  statusText.textContent = "正在起卦、排爻并生成解读...";

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
        options,
        useAI
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "生成失败");
    }

    emptyState.classList.add("hidden");
    resultRoot.classList.remove("hidden");
    statusText.textContent = `已完成推演，情绪识别：${data.intent.emotionalState}，分类：${data.intent.category}`;

    renderHexagram(primaryHexagram, data.reading.primary, data.reading.lines, "本卦");
    renderHexagram(relatingHexagram, data.reading.relate, transformLines(data.reading.lines), "之卦");

    judgement.textContent = data.reading.summary.judgement;
    lineAdvice.innerHTML = listHtml(data.reading.summary.lineAdvice);
    scenarios.innerHTML = listHtml(data.reading.summary.scenarios);
    actions.innerHTML = listHtml(data.reading.summary.actionGuide);
    renderTemporal(data.reading.temporalStrategy);

    aiOutput.textContent =
      data.ai?.content ||
      data.ai?.note ||
      "当前未启用 AI 扩展解读，已显示规则式推演结果。";
  } catch (error) {
    statusText.textContent = error.message || "请求失败，请稍后再试。";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "起卦并推演";
  }
}

form.addEventListener("submit", submitReading);
