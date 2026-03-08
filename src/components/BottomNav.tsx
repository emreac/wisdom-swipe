import { NavLink } from "react-router-dom";
import { Home, BarChart3, BookOpen, Settings } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function BottomNav() {
  const { t } = useLanguage();

  const tabs = [
    { to: "/", icon: Home, label: t("nav.home") },
    { to: "/stats", icon: BarChart3, label: t("nav.stats") },
    { to: "/learn", icon: BookOpen, label: t("nav.learn") },
    { to: "/settings", icon: Settings, label: t("nav.settings") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                isActive ? "text-gold" : "text-muted-foreground"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
