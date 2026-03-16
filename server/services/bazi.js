const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const elements = ["木", "火", "土", "金", "水"];

const stemElements = {
  甲: "木",
  乙: "木",
  丙: "火",
  丁: "火",
  戊: "土",
  己: "土",
  庚: "金",
  辛: "金",
  壬: "水",
  癸: "水"
};

const branchElements = {
  子: "水",
  丑: "土",
  寅: "木",
  卯: "木",
  辰: "土",
  巳: "火",
  午: "火",
  未: "土",
  申: "金",
  酉: "金",
  戌: "土",
  亥: "水"
};

function cycle(index) {
  return {
    stem: stems[((index % 10) + 10) % 10],
    branch: branches[((index % 12) + 12) % 12]
  };
}

function parseDateTime(dateText, timeText = "12:00") {
  const [year, month, day] = dateText.split("-").map(Number);
  const [hour = 12, minute = 0] = timeText.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute));
}

function pillarText(pillar) {
  return `${pillar.stem}${pillar.branch}`;
}

function getYearPillar(date) {
  return cycle(date.getUTCFullYear() - 1984);
}

function getMonthPillar(date, yearStem) {
  const branchIndex = date.getUTCMonth();
  const yearStemIndex = stems.indexOf(yearStem);
  return {
    stem: stems[(yearStemIndex * 2 + branchIndex) % 10],
    branch: branches[(branchIndex + 2) % 12]
  };
}

function getDayPillar(date) {
  const base = Date.UTC(1984, 1, 2);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const diffDays = Math.floor((current - base) / 86400000);
  return cycle(diffDays);
}

function getHourPillar(dayStem, hour) {
  const branchIndex = Math.floor(((hour + 1) % 24) / 2);
  const dayStemIndex = stems.indexOf(dayStem);
  return {
    stem: stems[(dayStemIndex * 2 + branchIndex) % 10],
    branch: branches[branchIndex]
  };
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
  const ordered = elements
    .map((element) => [element, counts[element]])
    .sort((a, b) => b[1] - a[1] || elements.indexOf(a[0]) - elements.indexOf(b[0]));

  return {
    dominant: ordered[0][0],
    weakest: ordered[ordered.length - 1][0],
    counts
  };
}

function buildProfile(date) {
  const year = getYearPillar(date);
  const month = getMonthPillar(date, year.stem);
  const day = getDayPillar(date);
  const hour = getHourPillar(day.stem, date.getUTCHours());
  const pillars = [year, month, day, hour];

  return {
    year,
    month,
    day,
    hour,
    text: pillars.map(pillarText).join(" "),
    elements: buildElementSummary(countElements(pillars))
  };
}

export function buildBaZiProfile(birthDate, birthTime = "12:00") {
  if (!birthDate) {
    return null;
  }

  return buildProfile(parseDateTime(birthDate, birthTime));
}

export function buildTodayProfile(now = new Date()) {
  const date = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())
  );
  return buildProfile(date);
}
