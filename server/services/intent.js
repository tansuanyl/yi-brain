const categoryKeywords = {
  career: ["工作", "事业", "职业", "升职", "求职", "job", "career", "work"],
  relationship: ["感情", "爱情", "婚姻", "伴侣", "relationship", "love"],
  decision: ["选择", "决策", "取舍", "纠结", "option", "decide"],
  study: ["学习", "考试", "读书", "技能", "study", "exam"]
};

const emotionKeywords = {
  anxious: ["焦虑", "担心", "害怕", "不安", "anxious", "worried"],
  confused: ["迷茫", "纠结", "不知道", "confused", "lost"],
  hopeful: ["期待", "希望", "向往", "hopeful", "excited"],
  hesitant: ["犹豫", "拿不准", "迟疑", "hesitant", "uncertain"]
};

export function analyzeIntent({ question, category, profile, options }) {
  const text = [question, category, profile, ...(options || [])]
    .join(" ")
    .toLowerCase();

  const detectedCategory =
    category ||
    Object.entries(categoryKeywords).find(([, keywords]) =>
      keywords.some((keyword) => text.includes(keyword))
    )?.[0] ||
    "general";

  const emotionalState =
    Object.entries(emotionKeywords).find(([, keywords]) =>
      keywords.some((keyword) => text.includes(keyword))
    )?.[0] || "reflective";

  const extractedEntities = {
    hasTimeline: /(今年|明年|下周|下个月|this year|next month|next week)/i.test(text),
    hasPeople: /(我和|ta|他|她|同事|老板|伴侣|朋友|team|manager)/i.test(text),
    optionCount: Array.isArray(options) ? options.length : 0
  };

  return {
    category: detectedCategory,
    emotionalState,
    extractedEntities
  };
}
