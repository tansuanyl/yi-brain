import { buildBaZiProfile, buildTodayProfile } from "./bazi.js";
import { getWeatherContext } from "./weather.js";

const luckBands = [
  { min: 0, max: 24, label: "守中签", tone: "今天更适合稳住，不要给自己安排过多高风险动作。" },
  { min: 25, max: 49, label: "平顺签", tone: "今天整体节奏偏平稳，适合把常规事情做细、做稳。" },
  { min: 50, max: 74, label: "上扬签", tone: "今天的推进力较好，适合做推动型和表达型的动作。" },
  { min: 75, max: 100, label: "开运签", tone: "今天的运势偏活跃，适合主动争取、开启和见人见事。" }
];

const elementSupport = {
  木: { colors: ["青绿色", "浅绿色", "木质感配饰"], foods: ["青菜", "水果", "温和茶饮"], places: ["公园", "绿植多的地方"], actions: ["学习", "规划", "开始新项目"] },
  火: { colors: ["朱红色", "暖橘色", "明亮点缀"], foods: ["温热食物", "少量辛香", "热汤"], places: ["采光好的空间", "热闹但可控的场所"], actions: ["表达", "见人", "公开展示"] },
  土: { colors: ["米色", "卡其色", "大地色"], foods: ["谷物", "根茎类", "温润炖煮"], places: ["稳定安静的室内空间", "固定熟悉的地方"], actions: ["整理", "收尾", "落地执行"] },
  金: { colors: ["白色", "银灰色", "简洁线条穿搭"], foods: ["清爽类饮食", "白色食物", "少油腻"], places: ["秩序感强的空间", "办公环境"], actions: ["决策", "裁剪无效事务", "沟通规则"] },
  水: { colors: ["深蓝色", "黑灰色", "轻盈材质"], foods: ["热粥", "汤面", "温水"], places: ["安静空间", "临水但安全的地方", "适合独处的场景"], actions: ["思考", "复盘", "观察再行动"] }
};

const weatherBias = {
  clear: { plus: "火", minus: "水" },
  cloudy: { plus: "土", minus: "火" },
  rain: { plus: "水", minus: "火" },
  snow: { plus: "水", minus: "木" },
  storm: { plus: "金", minus: "火" },
  fog: { plus: "土", minus: "木" },
  mixed: { plus: "土", minus: "无" }
};

function hashSeed(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickBand(score) {
  return luckBands.find((band) => score >= band.min && score <= band.max) || luckBands[1];
}

function takeBySeed(items, seed, count = 3) {
  const cloned = [...items];
  const picks = [];
  let state = seed || 1;

  while (cloned.length && picks.length < count) {
    state = (1103515245 * state + 12345) % 2147483647;
    const index = state % cloned.length;
    picks.push(cloned.splice(index, 1)[0]);
  }

  return picks;
}

function buildElementAdvice(personalDominant, personalWeakest, todayDominant, weatherNormalized) {
  const weatherEffect = weatherBias[weatherNormalized] || weatherBias.mixed;
  const recommendedElement = personalWeakest;
  const cautionElement = weatherEffect.minus === "无" ? personalDominant : weatherEffect.minus;
  const todayBoostElement = todayDominant;

  return {
    recommendedElement,
    cautionElement,
    todayBoostElement
  };
}

function buildSummary({ band, weather, bazi, todayBazi, advice }) {
  const baziText = bazi
    ? `你的八字为 ${bazi.text}，五行偏${bazi.elements.dominant}，较弱的是${bazi.elements.weakest}。`
    : "你尚未完整提供出生信息，因此今日签无法结合个人八字细化。";

  return [
    band.tone,
    baziText,
    `今日时空气场以${todayBazi.elements.dominant}为主，天气对${advice.todayBoostElement}气更有放大作用。`,
    `因此今天宜借${advice.recommendedElement}来调和，忌再过度堆高${advice.cautionElement}的倾向。`,
    weather.summary
  ].join("");
}

function buildSelections(element, seed, kind) {
  const source = elementSupport[element] || elementSupport.土;
  return takeBySeed(source[kind], seed, Math.min(3, source[kind].length));
}

export async function buildDailyFortune({ birthDate = "", birthTime = "", location = "", language = "zh-CN" }) {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const weather = await getWeatherContext(location);
  const bazi = buildBaZiProfile(birthDate, birthTime);
  const todayBazi = buildTodayProfile(today);

  const seed = hashSeed([
    birthDate,
    birthTime,
    todayKey,
    weather.normalized,
    weather.temperature || "",
    bazi?.text || "",
    todayBazi.text
  ].join("|"));

  const scoreBase = seed % 101;
  const personalBoost = bazi ? (bazi.elements.weakest === todayBazi.elements.dominant ? 8 : 0) : 0;
  const score = Math.min(100, scoreBase + personalBoost);
  const band = pickBand(score);

  const advice = buildElementAdvice(
    bazi?.elements.dominant || "土",
    bazi?.elements.weakest || "木",
    todayBazi.elements.dominant,
    weather.normalized
  );

  const suitableClothing = buildSelections(advice.recommendedElement, seed + 11, "colors");
  const suitableFoods = buildSelections(advice.recommendedElement, seed + 17, "foods");
  const suitablePlaces = buildSelections(advice.recommendedElement, seed + 23, "places");
  const suitableActions = buildSelections(advice.todayBoostElement, seed + 31, "actions");

  const avoidClothing = buildSelections(advice.cautionElement === "无" ? "火" : advice.cautionElement, seed + 41, "colors");
  const avoidActions = [
    ...buildSelections(advice.cautionElement === "无" ? "火" : advice.cautionElement, seed + 47, "actions"),
    ...takeBySeed(["冲动表态", "临时改计划", "在情绪上头时做决定", "为了效率压缩休息"], seed + 53, 2)
  ];

  return {
    date: todayKey,
    language,
    weather,
    bazi,
    todayBazi,
    score,
    band: band.label,
    sign: score >= 75 ? "大吉" : score >= 50 ? "吉" : score >= 25 ? "平" : "谨慎",
    summary: buildSummary({ band, weather, bazi, todayBazi, advice }),
    fiveElements: {
      personal: bazi?.elements || null,
      today: todayBazi.elements,
      advice
    },
    suitable: {
      clothing: suitableClothing,
      activities: suitableActions,
      places: suitablePlaces,
      foods: suitableFoods,
      all: [...suitableClothing, ...suitableActions, ...suitablePlaces, ...suitableFoods]
    },
    unsuitable: {
      clothing: avoidClothing,
      actions: avoidActions,
      all: [...avoidClothing, ...avoidActions]
    }
  };
}
