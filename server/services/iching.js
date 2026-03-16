const trigrams = [
  { id: "qian", symbol: "111", name: "乾", hanzi: "乾", nature: "天", trait: "主动、开创、决断" },
  { id: "dui", symbol: "110", name: "兑", hanzi: "兑", nature: "泽", trait: "表达、沟通、悦纳" },
  { id: "li", symbol: "101", name: "离", hanzi: "离", nature: "火", trait: "洞察、辨析、显化" },
  { id: "zhen", symbol: "100", name: "震", hanzi: "震", nature: "雷", trait: "启动、行动、触发" },
  { id: "xun", symbol: "011", name: "巽", hanzi: "巽", nature: "风", trait: "渗透、进入、影响" },
  { id: "kan", symbol: "010", name: "坎", hanzi: "坎", nature: "水", trait: "风险、试炼、深流" },
  { id: "gen", symbol: "001", name: "艮", hanzi: "艮", nature: "山", trait: "止定、边界、收束" },
  { id: "kun", symbol: "000", name: "坤", hanzi: "坤", nature: "地", trait: "承载、配合、包容" }
];

const hexagramNames = [
  "乾", "履", "同人", "无妄", "姤", "讼", "遯", "否",
  "夬", "兑", "革", "随", "大过", "困", "咸", "萃",
  "离", "睽", "离中有明", "丰", "家人", "既济", "贲", "明夷",
  "震", "归妹", "丰动", "震", "恒", "解", "小过", "豫",
  "巽", "中孚", "家人风火", "益", "巽", "涣", "渐", "观",
  "坎", "节", "既济水火", "屯", "井", "坎", "蹇", "比",
  "艮", "损", "贲山火", "颐", "蛊", "蒙", "艮", "剥",
  "坤", "临", "明夷地火", "复", "升", "师", "谦", "坤"
];

const lineThemes = [
  "起点阶段，适合观察现实条件，不宜过早下重注。",
  "开始进入互动阶段，要建立支持、边界和协同。",
  "中段容易出现摩擦，关键在于校准节奏与预期。",
  "局势开始外显，关系与资源配置会变得更重要。",
  "接近结果时更要稳住心态，避免临门一脚时急躁。",
  "终局阶段适合总结、定案、收口或转身。"
];

function hashSeed(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function createRng(seed) {
  let state = seed || 1;
  return () => {
    state = (1664525 * state + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function lineToValue(random) {
  const roll = Math.floor(random() * 4);
  if (roll === 0) return { value: 0, changing: true, label: "老阴" };
  if (roll === 1) return { value: 1, changing: false, label: "少阳" };
  if (roll === 2) return { value: 0, changing: false, label: "少阴" };
  return { value: 1, changing: true, label: "老阳" };
}

function trigramFromLines(lines) {
  const symbol = lines.join("");
  return trigrams.find((item) => item.symbol === symbol) || trigrams[0];
}

function hexagramIndex(lower, upper) {
  const lowerIndex = trigrams.findIndex((item) => item.id === lower.id);
  const upperIndex = trigrams.findIndex((item) => item.id === upper.id);
  return upperIndex * 8 + lowerIndex;
}

function buildHexagramMeta(lines) {
  const lower = trigramFromLines(lines.slice(0, 3));
  const upper = trigramFromLines(lines.slice(3, 6));
  const index = hexagramIndex(lower, upper);
  return {
    id: index + 1,
    name: hexagramNames[index] || `卦 ${index + 1}`,
    upper,
    lower
  };
}

function describeHexagram(meta, category) {
  return `${meta.name}卦呈现出上${meta.upper.nature}下${meta.lower.nature}的结构，主题偏向${meta.upper.trait}与${meta.lower.trait}。这更适合用来理解${category || "当前问题"}中的节奏、边界与推进顺序。`;
}

function buildTemporalStrategy(lines) {
  return lines.map((line, index) => ({
    line: index + 1,
    phase: index < 2 ? "explore" : index < 4 ? "stabilize" : "converge",
    temperature: index < 2 ? 0.9 : index < 4 ? 0.6 : 0.3,
    note: `${lineThemes[index]} 当前这一爻的变化提示你更适合${index < 2 ? "先广泛观察" : index < 4 ? "边做边调" : "收束判断"}。`
  }));
}

function birthContextText(birthDate, birthTime) {
  if (!birthDate && !birthTime) {
    return "这次推演主要依据你当前的问题与背景情境生成，更强调当下处境而非先天气质。";
  }

  if (birthDate && birthTime) {
    return `你补充了出生日期 ${birthDate} 与出生时间 ${birthTime}，系统会把它作为个人节律线索纳入判断。`;
  }

  return "你提供了部分出生信息，系统会把它作为辅助线索参考，但仍以当前问题情境为主。";
}

function buildChangingLineAdvice(changingLines) {
  if (!changingLines.length) {
    return [
      "本次无变爻，说明眼下更适合稳住结构、微调策略，而不是激烈翻盘。",
      "真正的变化更可能发生在执行方式和节奏管理里，而不是外部条件突然改写。"
    ];
  }

  return changingLines.map(
    (lineNumber) =>
      `第 ${lineNumber} 爻发生变化，提示你在这一阶段不要只看结果，更要看时机是否成熟。`
  );
}

function buildScenario(primary, relate, options) {
  const base = `本卦为 ${primary.name}，之卦为 ${relate.name}，意味着事情不是静态答案，而是从一种结构向另一种结构演进。`;

  if (!options?.length) {
    return [
      base,
      `如果继续沿用旧路径，要重点留意 ${primary.upper.trait} 与 ${primary.lower.trait} 之间是否失衡。`,
      `如果主动调整策略，更可能进入 ${relate.upper.trait} 与 ${relate.lower.trait} 主导的新阶段。`
    ];
  }

  return options.map(
    (option, index) =>
      `如果选择“${option}”，请重点评估它在第 ${index + 1} 阶段是否与 ${relate.name}卦强调的节奏相容。`
  );
}

function buildJudgement(question, emotionalState) {
  if (emotionalState === "anxious") {
    return `你对“${question}”的关注带有明显压力，这次推演更适合帮你拆解节奏与优先级，而不是追求一步到位的确定答案。`;
  }

  if (emotionalState === "confused") {
    return `你对“${question}”目前偏向迷茫，所以这次推演重点在于厘清先后顺序，而不是立刻做终局判断。`;
  }

  return `围绕“${question}”，这次推演强调的是：在变化中找到下一步可执行动作，而不是急着给自己贴上“该不该”的结论。`;
}

function buildPlainReading({ question, primary, relate, changingLines, emotionalState, birthText }) {
  const changingText = changingLines.length
    ? `这次共有 ${changingLines.length} 条变爻，说明局势并不静止，你需要把注意力放在正在发生的转折点上。`
    : "这次没有变爻，说明当前更适合在现有结构里做稳定优化，而不是进行剧烈变动。";

  return [
    `先用白话来说，这一卦不是在简单回答“行还是不行”，而是在提醒你：关于“${question}”，真正重要的是你所处的阶段、行动顺序，以及变化从哪里开始。`,
    `${primary.name}卦作为本卦，描绘的是你眼下的真实局面。它强调${primary.upper.trait}与${primary.lower.trait}同时存在。`,
    `${relate.name}卦作为之卦，代表事情继续发展后更可能出现的方向。它不是命令，而是趋势提醒。`,
    changingText,
    emotionalState === "anxious"
      ? "你当前的情绪里带着焦虑，所以尤其不适合因为想快速获得确定性，就做出过快决定。"
      : "从情绪层面看，你不只是问一个问题，也是在寻找一种更稳妥的判断方式。",
    birthText
  ];
}

function buildDeepDive({ category, options, primary, relate, changingLines, profile }) {
  const optionText = options?.length
    ? `你给出了 ${options.length} 个备选方向，这很有价值，因为这次推演可以帮助比较不同路径在不同阶段的代价与顺势程度。`
    : "你没有提供明确选项，所以这次推演会更偏向帮助你看清方向，而不是替你给现成选项打分。";

  return [
    `从结构上看，${primary.name}卦到${relate.name}卦，说明你面对的是一个过程型问题，而不是单点问题。对${category || "当前主题"}来说，重点在于先做什么、后做什么。`,
    optionText,
    profile
      ? `你补充的背景“${profile}”说明现实约束已经很明确，所以建议必须结合资源、关系和时间窗口来看。`
      : "由于背景信息有限，系统会更侧重给出结构化建议，而不是过度个性化判断。",
    changingLines.length
      ? "变爻意味着转折点已经出现，你要警惕的是误判变化节奏。"
      : "无变爻不代表没有变化，而是变化还没强到逼迫你立刻重构全局。",
    "如果你想把这次推演用起来，最好的方式不是记住一个吉凶标签，而是把本卦当现状地图，把之卦当趋势地图，再把变爻当关键提醒。"
  ];
}

export function buildReading({
  question,
  category,
  profile,
  birthDate,
  birthTime,
  options = [],
  emotionalState
}) {
  const seed = hashSeed([question, category, profile, birthDate, birthTime, ...options].join("|"));
  const random = createRng(seed);
  const lines = Array.from({ length: 6 }, () => lineToValue(random));
  const primaryLines = lines.map((line) => line.value);
  const changingLines = lines.map((line, index) => (line.changing ? index + 1 : null)).filter(Boolean);
  const relatingLines = lines.map((line) => (line.changing ? 1 - line.value : line.value));
  const birthText = birthContextText(birthDate, birthTime);

  const primary = buildHexagramMeta(primaryLines);
  const relate = buildHexagramMeta(relatingLines);

  return {
    seed,
    question,
    birthDate,
    birthTime,
    lines: lines.map((line, index) => ({
      position: index + 1,
      yinYang: line.value ? "yang" : "yin",
      changing: line.changing,
      label: line.label
    })),
    primary: {
      ...primary,
      description: describeHexagram(primary, category)
    },
    relate: {
      ...relate,
      description: describeHexagram(relate, category)
    },
    changingLines,
    temporalStrategy: buildTemporalStrategy(lines),
    summary: {
      judgement: buildJudgement(question, emotionalState),
      lineAdvice: buildChangingLineAdvice(changingLines),
      scenarios: buildScenario(primary, relate, options),
      actionGuide: [
        "先确认你真正要解决的是方向问题、节奏问题，还是关系协同问题。",
        "把未来 7 天内最小可执行的一步写下来，用现实反馈校验你的判断。",
        "对照本卦和之卦，判断你现在是在守势优化，还是在转折重构。",
        "如果这是重要决策，至少补做一次现实信息验证，例如沟通关键人或做一次低成本试探。"
      ],
      plainReading: buildPlainReading({
        question,
        primary,
        relate,
        changingLines,
        emotionalState,
        birthText
      }),
      deepDive: buildDeepDive({
        category,
        options,
        primary,
        relate,
        changingLines,
        profile
      })
    }
  };
}
