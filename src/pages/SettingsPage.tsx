import { RotateCcw, Info, Sparkles, Globe, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageLabels, languageFlags } from "@/i18n/languages";

interface SettingsPageProps {
  onReset: () => void;
  totalSwiped: number;
}

const allLanguages: Language[] = ["en", "fr", "it", "de", "es", "ko", "ja", "zh"];

export default function SettingsPage({ onReset, totalSwiped }: SettingsPageProps) {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="px-4 pt-6 pb-24 max-w-lg mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-serif text-gold">{t("settings.title")}</h1>
      </div>

      {/* Language */}
      <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-gold" />
          <h3 className="font-serif text-lg text-foreground">{t("settings.language")}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {allLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
                language === lang
                  ? "border-gold bg-gold/10 text-foreground"
                  : "border-border bg-surface-elevated text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              <span className="text-lg">{languageFlags[lang]}</span>
              <span className="text-sm font-medium flex-1 text-left">{languageLabels[lang]}</span>
              {language === lang && <Check className="w-4 h-4 text-gold" />}
            </button>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-gold" />
          <h3 className="font-serif text-lg text-foreground">{t("settings.about")}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t("settings.aboutDesc")}
        </p>
      </div>

      {/* Data */}
      <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-serif text-lg text-foreground">{t("settings.yourData")}</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          {t("settings.swipedCount", { count: totalSwiped })}
        </p>
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-elevated border border-border text-foreground font-medium hover:border-destructive hover:text-destructive transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          {t("settings.reset")}
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-xs text-muted-foreground">
        {t("settings.version")}
      </p>
    </div>
  );
}
