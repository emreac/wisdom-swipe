export type Language = "en" | "fr" | "it" | "de" | "es" | "ko" | "ja" | "zh";

export const languageLabels: Record<Language, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  es: "Español",
  ko: "한국어",
  ja: "日本語",
  zh: "中文",
};

export const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  it: "🇮🇹",
  de: "🇩🇪",
  es: "🇪🇸",
  ko: "🇰🇷",
  ja: "🇯🇵",
  zh: "🇨🇳",
};

export function getSavedLanguage(): Language {
  const saved = localStorage.getItem("philosophia_lang");
  if (saved && saved in languageLabels) return saved as Language;
  return "en";
}

export function saveLanguage(lang: Language) {
  localStorage.setItem("philosophia_lang", lang);
}
