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
  return {
    clear: "晴朗",
    cloudy: "多云",
    fog: "有雾",
    rain: "有雨",
    snow: "有雪",
    storm: "雷暴",
    mixed: "天气多变"
  }[normalized] || "天气多变";
}

export async function getWeatherContext(location) {
  if (!location?.trim()) {
    return {
      available: false,
      source: "none",
      normalized: "mixed",
      summary: "未提供位置，今日签将主要依据日期与个人信息生成。"
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
        normalized: "mixed",
        summary: `未识别到 ${location} 的位置，今日签将忽略天气因素。`
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
        normalized: "mixed",
        locationName: place.name,
        summary: `已定位到 ${place.name}，但暂时未获取到实时天气。`
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
      summary: `${weatherLabel(normalized)}，约 ${current.temperature_2m}°C`
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
