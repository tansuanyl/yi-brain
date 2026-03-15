const trigrams = [
  { id: "qian", symbol: "111", name: "Qian", hanzi: "\u4e7e", nature: "\u5929", trait: "\u5f00\u521b\u3001\u51b3\u65ad\u3001\u9886\u5bfc" },
  { id: "dui", symbol: "110", name: "Dui", hanzi: "\u5151", nature: "\u6cfd", trait: "\u6c9f\u901a\u3001\u559c\u60a6\u3001\u8868\u8fbe" },
  { id: "li", symbol: "101", name: "Li", hanzi: "\u79bb", nature: "\u706b", trait: "\u6d1e\u5bdf\u3001\u4f9d\u9644\u3001\u663e\u5316" },
  { id: "zhen", symbol: "100", name: "Zhen", hanzi: "\u9707", nature: "\u96f7", trait: "\u884c\u52a8\u3001\u542f\u52a8\u3001\u60ca\u9192" },
  { id: "xun", symbol: "011", name: "Xun", hanzi: "\u5dfd", nature: "\u98ce", trait: "\u6e17\u900f\u3001\u8fdb\u5165\u3001\u5f71\u54cd" },
  { id: "kan", symbol: "010", name: "Kan", hanzi: "\u574e", nature: "\u6c34", trait: "\u98ce\u9669\u3001\u6df1\u6d41\u3001\u8bd5\u70bc" },
  { id: "gen", symbol: "001", name: "Gen", hanzi: "\u826e", nature: "\u5c71", trait: "\u6b62\u5b9a\u3001\u8fb9\u754c\u3001\u6c89\u6dc0" },
  { id: "kun", symbol: "000", name: "Kun", hanzi: "\u5764", nature: "\u5730", trait: "\u627f\u8f7d\u3001\u914d\u5408\u3001\u5305\u5bb9" }
];

const hexagramNames = [
  "\u4e7e", "\u5764", "\u5c6f", "\u8499", "\u9700", "\u8bbc", "\u5e08", "\u6bd4",
  "\u5c0f\u755c", "\u5c65", "\u6cf0", "\u5426", "\u540c\u4eba", "\u5927\u6709", "\u8c26", "\u8c6b",
  "\u968f", "\u86ca", "\u4e34", "\u89c2", "\u566c\u55d1", "\u8d32", "\u5265", "\u590d",
  "\u65e0\u5984", "\u5927\u755c", "\u9890", "\u5927\u8fc7", "\u574e", "\u79bb", "\u54b8", "\u6052",
  "\u9041", "\u5927\u58ee", "\u664b", "\u660e\u5937", "\u5bb6\u4eba", "\u777d", "\u8e47", "\u89e3",
  "\u635f", "\u76ca", "\u592c", "\u59e4", "\u8403", "\u5347", "\u56f0", "\u4e95",
  "\u9769", "\u9f0e", "\u9707", "\u826e", "\u6e10", "\u5f52\u59b9", "\u4e30", "\u65c5",
  "\u5dfd", "\u5151", "\u6da3", "\u8282", "\u4e2d\u5b5a", "\u5c0f\u8fc7", "\u65e2\u6d4e", "\u672a\u6d4e"
];

const lineThemes = [
  "\u8d77\u70b9\u672a\u7a33\uff0c\u5148\u89c2\u5bdf\u4e8b\u5b9e\u4e0e\u8d44\u6e90\u3002",
  "\u8fdb\u5165\u4e92\u52a8\u9636\u6bb5\uff0c\u5b9c\u5efa\u7acb\u652f\u6301\u4e0e\u534f\u540c\u3002",
  "\u4e2d\u6bb5\u6709\u6469\u64e6\uff0c\u5173\u952e\u5728\u4e8e\u6821\u51c6\u8282\u594f\u3002",
  "\u5c40\u52bf\u5f00\u59cb\u5916\u663e\uff0c\u9700\u8981\u5904\u7406\u5173\u7cfb\u4e0e\u8fb9\u754c\u3002",
  "\u5df2\u7ecf\u63a5\u8fd1\u7ed3\u679c\uff0c\u4e0d\u80fd\u56e0\u6025\u8e81\u800c\u5931\u8861\u3002",
  "\u7ec8\u5c40\u4e4b\u4f4d\uff0c\u9002\u5408\u603b\u7ed3\u3001\u5b9a\u6848\u4e0e\u8f6c\u8eab\u3002"
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
  if (roll === 0) return { value: 0, changing: true, label: "\u8001\u9634" };
  if (roll === 1) return { value: 1, changing: false, label: "\u5c11\u9633" };
  if (roll === 2) return { value: 0, changing: false, label: "\u5c11\u9634" };
  return { value: 1, changing: true, label: "\u8001\u9633" };
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
  return `${meta.name}\u5366\u5448\u73b0\u51fa\u201c\u4e0a${meta.upper.nature}\u4e0b${meta.lower.nature}\u201d\u7684\u7ed3\u6784\uff0c\u4e3b\u8c03\u662f${meta.upper.trait}\u4e0e${meta.lower.trait}\u7684\u4e92\u52a8\uff0c\u9002\u5408\u4ece${category || "\u5f53\u524d\u8bae\u9898"}\u7684\u8282\u594f\u3001\u8fb9\u754c\u548c\u884c\u52a8\u987a\u5e8f\u6765\u7406\u89e3\u3002`;
}

function buildTemporalStrategy(lines) {
  return lines.map((line, index) => ({
    line: index + 1,
    phase: index < 2 ? "explore" : index < 4 ? "stabilize" : "converge",
    temperature: index < 2 ? 0.9 : index < 4 ? 0.6 : 0.3,
    note: lineThemes[index]
  }));
}

function buildChangingLineAdvice(changingLines) {
  if (!changingLines.length) {
    return ["\u6b64\u5366\u65e0\u53d8\u723b\uff0c\u8868\u793a\u5f53\u524d\u5c40\u52bf\u66f4\u504f\u5411\u5ef6\u7eed\u4e0e\u81ea\u6211\u6821\u51c6\uff0c\u5148\u7a33\u4f4f\u5224\u65ad\u6846\u67b6\u518d\u884c\u52a8\u3002"];
  }

  return changingLines.map((lineNumber) => `\u7b2c${lineNumber}\u723b\u53d8\u5316\uff0c\u63d0\u793a\u4f60\u5728${lineThemes[lineNumber - 1]}`);
}

function buildScenario(primary, relate, options) {
  const scenarioBase = `\u672c\u5366\u4e3a${primary.name}\uff0c\u4e4b\u5366\u4e3a${relate.name}\uff0c\u8bf4\u660e\u5c40\u52bf\u4e0d\u662f\u9759\u6001\u7b54\u6848\uff0c\u800c\u662f\u4ece\u4e00\u79cd\u529b\u91cf\u7ed3\u6784\u5411\u53e6\u4e00\u79cd\u7ed3\u6784\u8f6c\u79fb\u3002`;

  if (!options?.length) {
    return [
      scenarioBase,
      `\u5982\u679c\u7ee7\u7eed\u6cbf\u7528\u65e7\u8def\u5f84\uff0c\u66f4\u8981\u7559\u610f${primary.upper.trait}\u4e0e${primary.lower.trait}\u4e4b\u95f4\u662f\u5426\u5931\u8861\u3002`,
      `\u5982\u679c\u4e3b\u52a8\u8c03\u6574\u7b56\u7565\uff0c\u5219\u66f4\u53ef\u80fd\u8fdb\u5165${relate.upper.trait}\u4e0e${relate.lower.trait}\u4e3b\u5bfc\u7684\u9636\u6bb5\u3002`
    ];
  }

  return options.map((option, index) => `\u5982\u679c\u9009\u62e9\u201c${option}\u201d\uff0c\u5efa\u8bae\u91cd\u70b9\u8bc4\u4f30\u5b83\u5728\u7b2c${index + 1}\u9636\u6bb5\u662f\u5426\u4e0e${relate.name}\u5366\u5f3a\u8c03\u7684\u8282\u594f\u76f8\u5bb9\u3002`);
}

function buildJudgement(question, emotionalState) {
  if (emotionalState === "anxious") {
    return `\u4f60\u5bf9\u201c${question}\u201d\u7684\u5173\u6ce8\u5e26\u6709\u660e\u663e\u538b\u529b\u611f\uff0c\u5366\u8c61\u66f4\u9002\u5408\u5e2e\u52a9\u4f60\u62c6\u89e3\u8282\u594f\uff0c\u800c\u4e0d\u662f\u8ffd\u6c42\u4e00\u6b65\u5230\u4f4d\u3002`;
  }
  if (emotionalState === "confused") {
    return `\u4f60\u5bf9\u201c${question}\u201d\u7684\u72b6\u6001\u504f\u5411\u8ff7\u832b\uff0c\u672c\u6b21\u63a8\u6f14\u66f4\u5f3a\u8c03\u8fa8\u522b\u4f18\u5148\u7ea7\u4e0e\u5148\u540e\u987a\u5e8f\u3002`;
  }
  return `\u56f4\u7ed5\u201c${question}\u201d\uff0c\u8fd9\u6b21\u63a8\u6f14\u5f3a\u8c03\u5728\u53d8\u5316\u4e2d\u627e\u5230\u53ef\u6267\u884c\u7684\u4e0b\u4e00\u6b65\u3002`;
}

export function buildReading({ question, category, profile, options, emotionalState }) {
  const seed = hashSeed([question, category, profile, ...options].join("|"));
  const random = createRng(seed);
  const lines = Array.from({ length: 6 }, () => lineToValue(random));
  const primaryLines = lines.map((line) => line.value);
  const changingLines = lines
    .map((line, index) => (line.changing ? index + 1 : null))
    .filter(Boolean);
  const relatingLines = lines.map((line) => (line.changing ? 1 - line.value : line.value));

  const primary = buildHexagramMeta(primaryLines);
  const relate = buildHexagramMeta(relatingLines);

  return {
    seed,
    question,
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
        "\u5148\u786e\u8ba4\u4f60\u771f\u6b63\u8981\u89e3\u51b3\u7684\u662f\u65b9\u5411\u95ee\u9898\u3001\u8282\u594f\u95ee\u9898\uff0c\u8fd8\u662f\u5173\u7cfb\u95ee\u9898\u3002",
        "\u628a\u63a5\u4e0b\u6765 7 \u5929\u5185\u53ef\u6267\u884c\u7684\u4e00\u6b65\u5199\u6210\u6e05\u5355\uff0c\u53ea\u4fdd\u7559\u4e00\u4e2a\u6700\u5c0f\u52a8\u4f5c\u3002",
        "\u5bf9\u7167\u672c\u5366\u548c\u4e4b\u5366\uff0c\u5224\u65ad\u4f60\u662f\u5728\u5b88\u52bf\u4e2d\u4f18\u5316\uff0c\u8fd8\u662f\u5728\u8f6c\u6298\u4e2d\u91cd\u6784\u3002"
      ]
    }
  };
}
