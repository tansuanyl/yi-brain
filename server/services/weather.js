function normalizeWeatherCode(code) {
  if ([0, 1].includes(code)) return "clear";
  if ([2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "storm";
  return "mixed";
}

function weatherLabel(normalized) {
  const labels = {
    clear: "晴朗",
    cloudy: "多云",
    fog: "有雾",
    rain: "有雨",
    snow: "有雪",
    storm: "雷暴",
    mixed: "多变"
  };

  return labels[normalized] || labels.mixed;
}

export async function getWeatherContext(location) {
  if (!location?.trim()) {
    return {
      available: false,
      source: "none",
      summary: "未提供位置，今日签将只基于出生信息与日期生成。",
      normalized: "mixed"
    };
  }

  try {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=zh&format=json`
    );
    const geoData = await geoResponse.json();
    const place = geoData?.results?.[0];

    if (!place) {
      return {
        available: false,
        source: "geocoding",
        summary: `未能识别“${location}”的位置，今日签将忽略天气因素。`,
        normalized: "mixed"
      };
    }

    const forecastResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,weather_code&timezone=auto`
    );
    const forecastData = await forecastResponse.json();
    const current = forecastData?.current;

    if (!current) {
      return {
        available: false,
        source: "forecast",
        summary: `已定位到${place.name}，但未成功获取天气，今日签将忽略天气因素。`,
        normalized: "mixed"
      };
    }

    const normalized = normalizeWeatherCode(current.weather_code);
    return {
      available: true,
      source: "open-meteo",
      locationName: place.name,
      temperature: current.temperature_2m,
      weatherCode: current.weather_code,
      normalized,
      summary: `${place.name} 当前约 ${current.temperature_2m}°C，天气状态为 ${weatherLabel(normalized)}。`
    };
  } catch (error) {
    return {
      available: false,
      source: "error",
      normalized: "mixed",
      summary: error instanceof Error ? `天气获取失败：${error.message}` : "天气获取失败。"
    };
  }
}
