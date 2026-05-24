import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, Brain } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface OnboardingPageProps {
  onComplete: () => void;
}

export default function OnboardingPage({ onComplete }: OnboardingPageProps) {
  const [page, setPage] = useState(0);
  const { t } = useLanguage();

  const pages = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: t("onboarding.page1Title"),
      subtitle: t("onboarding.page1Subtitle"),
      features: [
        { emoji: "📜", text: t("onboarding.page1Feature1") },
        { emoji: "👆", text: t("onboarding.page1Feature2") },
        { emoji: "🏛️", text: t("onboarding.page1Feature3") },
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: t("onboarding.page2Title"),
      subtitle: t("onboarding.page2Subtitle"),
      features: [
        { emoji: "→", text: t("onboarding.page2Feature1") },
        { emoji: "←", text: t("onboarding.page2Feature2") },
        { emoji: "❤️", text: t("onboarding.page2Feature3") },
      ],
    },
  ];

  const currentPage = pages[page];
  const isLastPage = page === pages.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      onComplete();
    } else {
      setPage((p) => p + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-between overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[hsl(var(--gold)/0.06)] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[hsl(var(--gold)/0.04)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[hsl(var(--gold)/0.02)] blur-3xl" />
      </div>

      {/* Skip button */}
      {!isLastPage && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onComplete}
          className="absolute top-[calc(env(safe-area-inset-top)+16px)] right-6 text-muted-foreground text-sm z-10 hover:text-gold transition-colors"
        >
          {t("onboarding.skip")}
        </motion.button>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center w-full"
          >
            {/* Icon with glow */}
            <div className="relative mb-8">
              <div className="absolute inset-0 gradient-gold rounded-2xl blur-xl opacity-30 scale-150" />
              <div className="relative w-24 h-24 rounded-2xl gradient-gold flex items-center justify-center text-primary-foreground shadow-gold">
                {currentPage.icon}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl text-foreground mb-3 leading-tight">
              {currentPage.title}
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground text-base mb-10 leading-relaxed max-w-[280px]">
              {currentPage.subtitle}
            </p>

            {/* Features */}
            <div className="w-full space-y-3">
              {currentPage.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-card/60 backdrop-blur-sm rounded-xl px-5 py-4 border border-border/50"
                >
                  <span className="text-xl w-8 text-center flex-shrink-0">{feature.emoji}</span>
                  <span className="text-foreground text-sm text-left leading-snug">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom section */}
      <div className="w-full max-w-sm px-6 pb-[calc(env(safe-area-inset-bottom)+32px)] relative z-10">
        {/* Page indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {pages.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === page ? 24 : 8,
                backgroundColor: i === page
                  ? "hsl(var(--gold))"
                  : "hsl(var(--muted-foreground) / 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full"
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleNext}
          whileTap={{ scale: 0.97 }}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl gradient-gold text-primary-foreground font-semibold text-lg shadow-gold hover:opacity-90 transition-opacity"
        >
          {isLastPage ? (
            <>
              <Sparkles className="w-5 h-5" />
              {t("onboarding.start")}
            </>
          ) : (
            <>
              {t("onboarding.next")}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
