import { buildBaZiProfile, buildTodayProfile } from "./bazi.js";
import { getWeatherContext } from "./weather.js";

const luckBands = [
  { min: 0, max: 24, label: "守中", tone: "今天更适合稳住节奏，不必给自己安排过多高风险动作。" },
  { min: 25, max: 49, label: "平顺", tone: "今天整体偏平稳，适合把常规事务做细做实。" },
  { min: 50, max: 74, label: "上扬", tone: "今天推进力较好，适合沟通、表达与稳步推进。" },
  { min: 75, max: 100, label: "开运", tone: "今天状态更活跃，适合主动争取、启动与见人见事。" }
];

const elementSupport = {
  木: {
    colors: ["青绿色", "浅绿色", "木质感穿搭"],
    foods: ["蔬菜", "水果", "清爽茶饮"],
    places: ["公园", "绿植多的空间"],
    actions: ["学习", "规划", "开启新项目"]
  },
  火: {
    colors: ["暖红色", "橙色", "有亮点的配饰"],
    foods: ["热汤", "温热食物", "少量辛香"],
    places: ["采光好的地方", "热闹但可控的场景"],
    actions: ["表达", "见人", "公开展示"]
  },
  土: {
    colors: ["米色", "卡其色", "大地色"],
    foods: ["谷物", "根茎类", "炖煮类食物"],
    places: ["安静稳定的室内", "熟悉的环境"],
    actions: ["整理", "收尾", "落地执行"]
  },
  金: {
    colors: ["白色", "银灰色", "利落线条风格"],
    foods: ["清淡饮食", "白色食物", "少油腻"],
    places: ["秩序感强的空间", "办公环境"],
    actions: ["决策", "删减无效事务", "规则沟通"]
  },
  水: {
    colors: ["深蓝色", "黑灰色", "轻盈材质"],
    foods: ["粥", "汤面", "温水"],
    places: ["安静空间", "靠水但安全的地方", "适合独处的场景"],
    actions: ["思考", "复盘", "观察后再行动"]
  }
};

const weatherBias = {
  clear: { plus: "火", minus: "水" },
  cloudy: { plus: "土", minus: "火" },
  rain: { plus: "水", minus: "火" },
  snow: { plus: "水", minus: "木" },
  storm: { plus: "金", minus: "火" },
  fog: { plus: "土", minus: "木" },
  mixed: { plus: "土", minus: "火" }
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

function buildElementAdvice(personalWeakest, todayDominant, weatherNormalized) {
  const weatherEffect = weatherBias[weatherNormalized] || weatherBias.mixed;
  return {
    recommendedElement: personalWeakest,
    cautionElement: weatherEffect.minus,
    todayBoostElement: todayDominant
  };
}

function buildSelections(element, seed, kind) {
  const source = elementSupport[element] || elementSupport.土;
  return takeBySeed(source[kind], seed, Math.min(3, source[kind].length));
}

function buildSummary({ band, weather, bazi, todayBazi, advice, language }) {
  if (language === "en") {
    return [
      band.tone,
      bazi
        ? `Your BaZi is ${bazi.text}; ${bazi.elements.dominant} is stronger while ${bazi.elements.weakest} needs support.`
        : "Birth details are incomplete, so the reading leans more on today's time pattern.",
      `Today's lead element is ${todayBazi.elements.dominant}.`,
      `Favor ${advice.recommendedElement} and avoid overloading ${advice.cautionElement}.`,
      weather.summary
    ].join(" ");
  }

  if (language === "ja") {
    return [
      band.tone,
      bazi
        ? `あなたの八字は ${bazi.text} で、${bazi.elements.dominant} が強め、${bazi.elements.weakest} は補いたい要素です。`
        : "出生情報が不完全なため、本日の流れを中心に解釈しています。",
      `今日の主気は ${todayBazi.elements.dominant} です。`,
      `${advice.recommendedElement} を補い、${advice.cautionElement} の偏りを強めすぎないのがよいでしょう。`,
      weather.summary
    ].join(" ");
  }

  return [
    band.tone,
    bazi
      ? `你的八字是 ${bazi.text}，${bazi.elements.dominant} 偏旺，${bazi.elements.weakest} 偏弱。`
      : "出生信息不完整，因此本次解读更偏向今日时空气场。",
    `今日主气偏向 ${todayBazi.elements.dominant}。`,
    `更适合补 ${advice.recommendedElement}，少堆高 ${advice.cautionElement} 的倾向。`,
    weather.summary
  ].join(" ");
}

function describeWeather(weather, language) {
  if (language === "en") {
    return weather.locationName ? `${weather.locationName}: ${weather.summary}.` : weather.summary;
  }

  if (language === "ja") {
    return weather.locationName ? `${weather.locationName} の天気は ${weather.summary}。` : weather.summary;
  }

  return weather.locationName ? `${weather.locationName} 当前天气为${weather.summary}。` : weather.summary;
}

function buildAnalysis({ band, bazi, todayBazi, advice, weather, suitable, unsuitable, language }) {
  if (language === "en") {
    return {
      headline: "Daily Fortune Analysis",
      sections: [
        {
          title: "Overall",
          body: `${band.tone} ${bazi ? `Your chart benefits from adding ${advice.recommendedElement}.` : "Today is best handled with a measured pace."}`
        },
        {
          title: "Timing",
          body: `The day leans toward ${todayBazi.elements.dominant}, which supports ${suitable.activities.slice(0, 2).join(" and ")}.`
        },
        {
          title: "Relationships",
          body: `${describeWeather(weather, language)} Lead with calm and clarity in conversation.`
        },
        {
          title: "Lifestyle",
          body: `Helpful choices today include ${suitable.foods.slice(0, 2).join(", ")} and places like ${suitable.places.slice(0, 2).join(" or ")}.`
        }
      ]
    };
  }

  if (language === "ja") {
    return {
      headline: "今日の分析",
      sections: [
        {
          title: "全体",
          body: `${band.tone} ${bazi ? `${advice.recommendedElement} を補う意識が整えになります。` : "今日はペースを整えることが大切です。"}`
        },
        {
          title: "タイミング",
          body: `今日の主気は ${todayBazi.elements.dominant} で、${suitable.activities.slice(0, 2).join("、")} に向いています。`
        },
        {
          title: "対人",
          body: `${describeWeather(weather, language)} 会話では結論を急がず、落ち着きを優先してください。`
        },
        {
          title: "生活",
          body: `${suitable.foods.slice(0, 2).join("、")} や ${suitable.places.slice(0, 2).join("、")} が整えに役立ちます。`
        }
      ]
    };
  }

  return {
    headline: "今日分析",
    sections: [
      {
        title: "整体解读",
        body: `${band.tone}${bazi ? ` 你的命盘更适合今天补 ${advice.recommendedElement}。` : " 今天更适合稳步推进，不宜过度拉满。"}`
      },
      {
        title: "行动节奏",
        body: `今日主气落在 ${todayBazi.elements.dominant}，适合 ${suitable.activities.slice(0, 2).join("、")}，少做 ${unsuitable.actions.slice(0, 2).join("、")}。`
      },
      {
        title: "人际与情绪",
        body: `${describeWeather(weather, language)} 今天沟通宜慢半拍，先看氛围再给结论。`
      },
      {
        title: "生活调和",
        body: `可优先选择 ${suitable.clothing.slice(0, 2).join("、")} 的穿搭，饮食偏向 ${suitable.foods.slice(0, 2).join("、")}。`
      }
    ]
  };
}

export async function buildDailyFortune({ birthDate = "", birthTime = "", location = "", language = "zh-CN" }) {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const weather = await getWeatherContext(location);
  const bazi = buildBaZiProfile(birthDate, birthTime);
  const todayBazi = buildTodayProfile(today);

  const seed = hashSeed(
    [birthDate, birthTime, todayKey, weather.normalized, weather.temperature || "", bazi?.text || "", todayBazi.text].join("|")
  );

  const scoreBase = seed % 101;
  const personalBoost = bazi ? (bazi.elements.weakest === todayBazi.elements.dominant ? 8 : 0) : 0;
  const score = Math.min(100, scoreBase + personalBoost);
  const band = pickBand(score);

  const advice = buildElementAdvice(
    bazi?.elements.weakest || "木",
    todayBazi.elements.dominant,
    weather.normalized
  );

  const suitableClothing = buildSelections(advice.recommendedElement, seed + 11, "colors");
  const suitableFoods = buildSelections(advice.recommendedElement, seed + 17, "foods");
  const suitablePlaces = buildSelections(advice.recommendedElement, seed + 23, "places");
  const suitableActions = buildSelections(advice.todayBoostElement, seed + 31, "actions");

  const avoidClothing = buildSelections(advice.cautionElement, seed + 41, "colors");
  const cautionActions = buildSelections(advice.cautionElement, seed + 47, "actions").filter(
    (item) => !suitableActions.includes(item)
  );
  const avoidActions = [
    ...cautionActions,
    ...takeBySeed(["冲动表态", "临时改计划", "情绪上头时做决定", "为了效率压缩休息"], seed + 53, 2)
  ].slice(0, 5);

  const suitable = {
    clothing: suitableClothing,
    activities: suitableActions,
    places: suitablePlaces,
    foods: suitableFoods,
    all: [...suitableClothing, ...suitableActions, ...suitablePlaces, ...suitableFoods]
  };

  const unsuitable = {
    clothing: avoidClothing,
    actions: avoidActions,
    all: [...avoidClothing, ...avoidActions]
  };

  return {
    date: todayKey,
    language,
    weather,
    bazi,
    todayBazi,
    score,
    band: band.label,
    sign:
      score >= 75 ? (language === "en" ? "Excellent" : language === "ja" ? "大吉" : "大吉")
      : score >= 50 ? (language === "en" ? "Favorable" : language === "ja" ? "吉" : "吉")
      : score >= 25 ? (language === "en" ? "Steady" : language === "ja" ? "平" : "平")
      : (language === "en" ? "Cautious" : language === "ja" ? "慎重" : "谨慎"),
    summary: buildSummary({ band, weather, bazi, todayBazi, advice, language }),
    analysis: buildAnalysis({
      band,
      bazi,
      todayBazi,
      advice,
      weather,
      suitable,
      unsuitable,
      language
    }),
    fiveElements: {
      personal: bazi?.elements || null,
      today: todayBazi.elements,
      advice
    },
    suitable,
    unsuitable
  };
}
