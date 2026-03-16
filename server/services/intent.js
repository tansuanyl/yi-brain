const categoryKeywords = {
  career: ["工作", "事业", "职业", "升职", "求职", "job", "career", "work"],
  relationship: ["感情", "关系", "恋爱", "婚姻", "伴侣", "love", "relationship"],
  decision: ["选择", "决定", "决策", "取舍", "纠结", "decide", "decision", "option"],
  study: ["学习", "考试", "读书", "技能", "study", "exam", "course"]
};

const emotionKeywords = {
  anxious: ["焦虑", "担心", "害怕", "不安", "anxious", "worried", "stress"],
  confused: ["迷茫", "纠结", "不知道", "混乱", "confused", "lost"],
  hopeful: ["期待", "希望", "向往", "兴奋", "hopeful", "excited"],
  hesitant: ["犹豫", "迟疑", "拿不准", "hesitant", "uncertain"]
};

export function analyzeIntent({ question = "", category = "", profile = "", options = [] }) {
  const text = [question, category, profile, ...(options || [])].join(" ").toLowerCase();

  const detectedCategory =
    category ||
    Object.entries(categoryKeywords).find(([, keywords]) => keywords.some((keyword) => text.includes(keyword)))?.[0] ||
    "general";

  const emotionalState =
    Object.entries(emotionKeywords).find(([, keywords]) => keywords.some((keyword) => text.includes(keyword)))?.[0] ||
    "reflective";

  return {
    category: detectedCategory,
    emotionalState,
    extractedEntities: {
      hasTimeline: /(今年|明年|下周|下个月|this year|next week|next month)/i.test(text),
      hasPeople: /(我和|同事|老板|伴侣|朋友|team|manager|partner)/i.test(text),
      optionCount: Array.isArray(options) ? options.length : 0
    }
  };
}
