const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

const stemElements = {
  甲: "木", 乙: "木",
  丙: "火", 丁: "火",
  戊: "土", 己: "土",
  庚: "金", 辛: "金",
  壬: "水", 癸: "水"
};

const branchElements = {
  子: "水", 亥: "水",
  寅: "木", 卯: "木",
  巳: "火", 午: "火",
  申: "金", 酉: "金",
  辰: "土", 戌: "土", 丑: "土", 未: "土"
};

const hourBranches = [
  { start: 23, branch: "子" },
  { start: 1, branch: "丑" },
  { start: 3, branch: "寅" },
  { start: 5, branch: "卯" },
  { start: 7, branch: "辰" },
  { start: 9, branch: "巳" },
  { start: 11, branch: "午" },
  { start: 13, branch: "未" },
  { start: 15, branch: "申" },
  { start: 17, branch: "酉" },
  { start: 19, branch: "戌" },
  { start: 21, branch: "亥" }
];

function cycle(index) {
  return {
    stem: stems[((index % 10) + 10) % 10],
    branch: branches[((index % 12) + 12) % 12]
  };
}

function pillarText(pillar) {
  return `${pillar.stem}${pillar.branch}`;
}

function parseDateTime(dateText, timeText = "12:00") {
  const [year, month, day] = dateText.split("-").map(Number);
  const [hour = 12, minute = 0] = (timeText || "12:00").split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute));
}

function getAdjustedYear(date) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return month < 2 || (month === 2 && day < 4) ? date.getUTCFullYear() - 1 : date.getUTCFullYear();
}

function getYearPillar(date) {
  const adjustedYear = getAdjustedYear(date);
  const offset = adjustedYear - 1984;
  return cycle(offset);
}

function getMonthBranchIndex(date) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  if (month === 2 && day >= 4 || month === 3 && day < 6) return 2;
  if (month === 3 && day >= 6 || month === 4 && day < 5) return 3;
  if (month === 4 && day >= 5 || month === 5 && day < 6) return 4;
  if (month === 5 && day >= 6 || month === 6 && day < 6) return 5;
  if (month === 6 && day >= 6 || month === 7 && day < 7) return 6;
  if (month === 7 && day >= 7 || month === 8 && day < 8) return 7;
  if (month === 8 && day >= 8 || month === 9 && day < 8) return 8;
  if (month === 9 && day >= 8 || month === 10 && day < 8) return 9;
  if (month === 10 && day >= 8 || month === 11 && day < 7) return 10;
  if (month === 11 && day >= 7 || month === 12 && day < 7) return 11;
  if (month === 12 && day >= 7 || month === 1 && day < 6) return 0;
  return 1;
}

function getMonthPillar(date, yearStem) {
  const branchIndex = getMonthBranchIndex(date);
  const yearStemIndex = stems.indexOf(yearStem);
  const firstMonthStemIndex = ((yearStemIndex % 5) * 2 + 2) % 10;
  const stemIndex = (firstMonthStemIndex + branchIndex - 2 + 10) % 10;
  return { stem: stems[stemIndex], branch: branches[branchIndex] };
}

function getDayPillar(date) {
  const base = Date.UTC(1984, 1, 2);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const diffDays = Math.floor((current - base) / 86400000);
  return cycle(diffDays);
}

function getHourBranch(hour) {
  if (hour === 23 || hour === 0) return "子";
  return hourBranches.find((item) => hour >= item.start && hour < item.start + 2)?.branch || "子";
}

function getHourPillar(dayStem, hour) {
  const branch = getHourBranch(hour);
  const dayStemIndex = stems.indexOf(dayStem);
  const branchIndex = branches.indexOf(branch);
  const stemIndex = ((dayStemIndex % 5) * 2 + branchIndex) % 10;
  return { stem: stems[stemIndex], branch };
}

function countElements(pillars) {
  const counts = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };

  for (const pillar of pillars) {
    counts[stemElements[pillar.stem]] += 1;
    counts[branchElements[pillar.branch]] += 1;
  }

  return counts;
}

function buildElementSummary(counts) {
  const ordered = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return {
    dominant: ordered[0][0],
    weakest: ordered[ordered.length - 1][0],
    counts
  };
}

export function buildBaZiProfile(birthDate, birthTime = "12:00") {
  if (!birthDate) {
    return null;
  }

  const date = parseDateTime(birthDate, birthTime);
  const year = getYearPillar(date);
  const month = getMonthPillar(date, year.stem);
  const day = getDayPillar(date);
  const hour = getHourPillar(day.stem, date.getUTCHours());
  const pillars = [year, month, day, hour];
  const elements = buildElementSummary(countElements(pillars));

  return {
    year,
    month,
    day,
    hour,
    text: [year, month, day, hour].map(pillarText).join(" "),
    elements
  };
}

export function buildTodayProfile(now = new Date()) {
  const date = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes()));
  const year = getYearPillar(date);
  const month = getMonthPillar(date, year.stem);
  const day = getDayPillar(date);
  const hour = getHourPillar(day.stem, date.getUTCHours());
  const pillars = [year, month, day, hour];
  const elements = buildElementSummary(countElements(pillars));

  return {
    year,
    month,
    day,
    hour,
    text: [year, month, day, hour].map(pillarText).join(" "),
    elements
  };
}
