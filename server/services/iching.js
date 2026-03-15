const trigrams = [
  { id: "qian", symbol: "111", name: "Qian", hanzi: "乾", nature: "天", trait: "开创、决断、领导" },
  { id: "dui", symbol: "110", name: "Dui", hanzi: "兑", nature: "泽", trait: "沟通、喜悦、表达" },
  { id: "li", symbol: "101", name: "Li", hanzi: "离", nature: "火", trait: "洞察、依附、显化" },
  { id: "zhen", symbol: "100", name: "Zhen", hanzi: "震", nature: "雷", trait: "行动、启动、惊醒" },
  { id: "xun", symbol: "011", name: "Xun", hanzi: "巽", nature: "风", trait: "渗透、进入、影响" },
  { id: "kan", symbol: "010", name: "Kan", hanzi: "坎", nature: "水", trait: "风险、深流、试炼" },
  { id: "gen", symbol: "001", name: "Gen", hanzi: "艮", nature: "山", trait: "止定、边界、沉淀" },
  { id: "kun", symbol: "000", name: "Kun", hanzi: "坤", nature: "地", trait: "承载、配合、包容" }
];

const hexagramNames = [
  "乾", "坤", "屯", "蒙", "需", "讼", "师", "比",
  "小畜", "履", "泰", "否", "同人", "大有", "谦", "豫",
  "随", "蛊", "临", "观", "噬嗑", "贲", "剥", "复",
  "无妄", "大畜", "颐", "大过", "坎", "离", "咸", "恒",
  "遁", "大壮", "晋", "明夷", "家人", "睽", "蹇", "解",
  "损", "益", "夬", "姤", "萃", "升", "困", "井",
  "革", "鼎", "震", "艮", "渐", "归妹", "丰", "旅",
  "巽", "兑", "涣", "节", "中孚", "小过", "既济", "未济"
];

const lineThemes = [
  "起点未稳，先观察事实与资源。",
  "进入互动阶段，宜建立支持与协同。",
  "中段有摩擦，关键在于校准节奏。",
  "局势开始外显，需要处理关系与边界。",
  "已经接近结果，不能因急躁而失衡。",
  "终局之位，适合总结、定案与转身。"
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
    name: hexagramNames[index],
    upper,
    lower
  };
}

function describeHexagram(meta, category) {
  return `${meta.name}卦呈现出“上${meta.upper.nature}下${meta.lower.nature}”的结构，主调是${meta.upper.trait}与${meta.lower.trait}的互动，适合从${category || "当前议题"}的节奏、边界和行动顺序来理解。`;
}

function buildTemporalStrategy(lines) {
  return lines.map((line, index) => ({
    line: index + 1,
    phase: index < 2 ? "explore" : index < 4 ? "stabilize" : "converge",
    temperature: index < 2 ? 0.9 : index < 4 ? 0.6 : 0.3,
    note: `${lineThemes[index]} 这一爻在当前问题中更适合采取${index < 2 ? "先广后收" : index < 4 ? "边走边调" : "收束判断"}的策略。`
  }));
}

function birthContextText(birthDate, birthTime) {
  if (!birthDate && !birthTime) {
    return "这次起卦主要依据你当前提出的问题与背景情境生成，更强调此刻的处境而非先天命盘。";
  }

  if (birthDate && birthTime) {
    return `你补充了出生日期 ${birthDate} 与出生时间 ${birthTime}，系统会把它作为个人节律线索并入种子，帮助结果更贴近你的长期气质与阶段感。`;
  }

  return "你提供了部分出生信息，系统将其作为辅助线索参考，但仍以当前问题处境为主要判断依据。";
}

function buildChangingLineAdvice(changingLines) {
  if (!changingLines.length) {
    return [
      "此卦无变爻，表示当前局势更偏向延续与自我校准，先稳住判断框架再行动。",
      "无变爻并不意味着没有变化，而是说明真正关键的变化还在你的执行和节奏管理上。"
    ];
  }

  return changingLines.map(
    (lineNumber) =>
      `第${lineNumber}爻变化，提示你在${lineThemes[lineNumber - 1]} 这一阶段不要只看表面结果，而要看是否踩准时机。`
  );
}

function buildScenario(primary, relate, options) {
  const scenarioBase = `本卦为${primary.name}，之卦为${relate.name}，说明局势不是静态答案，而是从一种力量结构向另一种结构转移。`;

  if (!options?.length) {
    return [
      scenarioBase,
      `如果继续沿用旧路径，更要留意${primary.upper.trait}与${primary.lower.trait}之间是否失衡，尤其要观察你是被动承受变化，还是主动布局变化。`,
      `如果主动调整策略，则更可能进入${relate.upper.trait}与${relate.lower.trait}主导的阶段，这通常意味着你需要承担更清晰的选择成本，但也会得到更明确的方向反馈。`
    ];
  }

  return options.map(
    (option, index) =>
      `如果选择“${option}”，建议重点评估它在第${index + 1}阶段是否与${relate.name}卦强调的节奏相容，并思考它要求你强化的是耐心、表达、行动还是收敛。`
  );
}

function buildJudgement(question, emotionalState) {
  if (emotionalState === "anxious") {
    return `你对“${question}”的关注带有明显压力感，这次卦象更适合帮你拆解节奏、梳理优先级，而不是追求一步到位的确定答案。`;
  }
  if (emotionalState === "confused") {
    return `你对“${question}”的状态偏向迷茫，因此本次推演更强调辨别轻重缓急、看清先后顺序，而不是立刻做终局判断。`;
  }
  return `围绕“${question}”，这次推演强调在变化中找到可执行的下一步，并通过本卦到之卦的变化判断你是该守、该调，还是该转。`;
}

function buildPlainReading({ question, primary, relate, changingLines, emotionalState, birthText }) {
  const changingText = changingLines.length
    ? `这次有 ${changingLines.length} 条变爻，说明局势并不稳定，你需要把注意力放在变化正在发生的节点，而不是只盯着最后结果。`
    : "这次没有出现变爻，意味着当前问题更适合先稳住阵脚、厘清边界，在现有结构里微调，而不是激烈翻盘。";

  return [
    `先用白话来说，这一卦并不是在回答“行还是不行”这么简单，而是在提醒你：关于“${question}”，真正重要的是你身处的阶段、你采取行动的顺序，以及你是否看清了变化从哪里开始。`,
    `${primary.name}卦作为本卦，描绘的是你眼下的真实局面。它强调${primary.upper.trait}与${primary.lower.trait}，说明你的问题里同时存在外在推动力和内在节奏管理的问题。`,
    `${relate.name}卦作为之卦，代表事情继续发展后更可能出现的方向。它不是命令你必须走向哪里，而是在告诉你：如果你顺着当前变化演进，事情会更偏向${relate.upper.trait}与${relate.lower.trait}的格局。`,
    changingText,
    emotionalState === "anxious"
      ? "你的情绪状态偏焦虑，所以这次阅读尤其提醒你，不要因为急于获得确定性而做出过快决策。"
      : "从情绪层面看，你当前并不只是在问一个问题，也是在寻找一种更安心、更可执行的判断方式。",
    birthText
  ];
}

function buildDeepDive({ category, options, primary, relate, changingLines, profile }) {
  const optionText = options?.length
    ? `你提供了 ${options.length} 个备选方向，这很重要，因为易理并不只是判断吉凶，更擅长比较不同路径在不同阶段的代价与顺势程度。`
    : "你没有提供明确选项，因此这次推演会更偏向帮助你看清方向，而不是替你在现成选项里打分。";

  return [
    `从结构上看，${primary.name}卦到${relate.name}卦，说明你当前面对的不是单点问题，而是一个会逐步展开的过程型问题。对于${category || "当前议题"}来说，这通常意味着你不能只问“做不做”，而要追问“先做什么、后做什么、做到什么程度收手”。`,
    optionText,
    profile
      ? `你补充的背景“${profile}”说明，现实处境已经给你施加了明确的约束，所以任何建议都不能脱离资源、关系和时间窗口来谈。`
      : "由于背景信息有限，系统会更侧重给出结构性建议，而不是非常个体化的结论。",
    changingLines.length
      ? "变爻意味着转折点已经出现。对你来说，最需要警惕的不是没有机会，而是误判变化的节奏，导致在应该观察时冲动出手，或在应该定案时持续拖延。"
      : "无变爻意味着不是没有变化，而是变化暂时没有外显到足以迫使你立刻重构全局。这个阶段更适合做小规模验证。",
    "如果你想把这次推演真正用起来，最好的方式不是记住一句“吉”或“凶”，而是把本卦当成现状地图，把之卦当成趋势地图，再把变爻当成关键节点提醒。这样你会得到更接近现实决策的方法论。"
  ];
}

export function buildReading({
  question,
  category,
  profile,
  birthDate,
  birthTime,
  options,
  emotionalState
}) {
  const seed = hashSeed([question, category, profile, birthDate, birthTime, ...options].join("|"));
  const random = createRng(seed);
  const lines = Array.from({ length: 6 }, () => lineToValue(random));
  const primaryLines = lines.map((line) => line.value);
  const changingLines = lines
    .map((line, index) => (line.changing ? index + 1 : null))
    .filter(Boolean);
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
        "先确认你真正要解决的是方向问题、节奏问题，还是关系问题；不同问题需要不同的动作，而不是一个统一答案。",
        "把接下来 7 天内可执行的一步写成清单，只保留一个最小动作，用现实反馈校验卦象提醒是否命中。",
        "对照本卦和之卦，判断你是在守势中优化，还是在转折中重构；两者的风险管理方式完全不同。",
        "如果你在做重要决定，至少再做一次现实层面的信息补充：和关键人沟通一次，或者完成一次低成本试探。"
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
