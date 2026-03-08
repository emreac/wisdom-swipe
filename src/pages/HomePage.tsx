import { AnimatePresence, motion } from "framer-motion";
import { SwipeCard } from "@/components/SwipeCard";
import { Flame, Sparkles, RefreshCw, Moon } from "lucide-react";
import { schoolDescriptions, Quote } from "@/data/philosophers";

interface HomePageProps {
  currentQuote: any;
  remaining: number;
  total: number;
  swipe: (liked: boolean) => void;
  loadMore: () => void;
  likedCount: number;
  sessionComplete: boolean;
  streak: number;
  dailyLimit: number;
  topSchool: { name: string; count: number } | null;
  topPhilosopher: { name: string; count: number } | null;
  schoolScores: Record<string, number>;
  addFavorite: (quote: Quote) => void;
}

export default function HomePage({
  currentQuote, remaining, total, swipe, loadMore,
  likedCount, sessionComplete, streak, dailyLimit,
  topSchool, topPhilosopher, schoolScores, addFavorite,
}: HomePageProps) {
  const progress = total > 0 ? ((total - remaining) / total) * 100 : 0;

  return (
    <div className="flex flex-col items-center px-4 pt-4 pb-24 min-h-screen">
      {/* Header with streak */}
      <div className="w-full max-w-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-serif text-gold">Philosophia</h1>
          <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-full border border-border">
            <Flame className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold">{streak}</span>
            <span className="text-xs text-muted-foreground">day{streak !== 1 ? "s" : ""}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-center text-xs">
          Swipe to discover your inner philosopher
        </p>
      </div>

      {/* Progress bar */}
      {!sessionComplete && (
        <div className="w-full max-w-sm mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>{total - remaining} / {total} quotes</span>
            <span className="text-gold">{likedCount} agreed</span>
          </div>
          <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-gold rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}

      {/* Card area */}
      <div className={`relative w-full max-w-sm ${sessionComplete ? "" : "h-[460px]"} flex items-center justify-center`}>
        <AnimatePresence mode="wait">
          {sessionComplete ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full space-y-5"
            >
              {/* Session ended card */}
              <div className="bg-card rounded-2xl p-6 border border-gold/20 card-shadow text-center">
                <Moon className="w-10 h-10 text-gold mx-auto mb-3" />
                <h2 className="font-serif text-xl text-foreground mb-1">Today's Session Complete</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  You've reflected on {total} quotes today
                </p>

                {/* Results summary */}
                {topSchool && (
                  <div className="bg-surface rounded-xl p-4 mb-3 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">You resonate with</p>
                    <p className="font-serif text-2xl text-gold">{topSchool.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {schoolDescriptions[topSchool.name]}
                    </p>
                  </div>
                )}

                {topPhilosopher && (
                  <div className="bg-surface rounded-xl p-3 mb-3 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Closest philosopher</p>
                    <p className="font-serif text-lg text-foreground">{topPhilosopher.name}</p>
                    <p className="text-xs text-gold">{topPhilosopher.count} agreements</p>
                  </div>
                )}

                {/* School bars */}
                {Object.entries(schoolScores).length > 0 && (
                  <div className="space-y-2 mt-4">
                    {Object.entries(schoolScores)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 4)
                      .map(([school, count]) => {
                        const max = Object.values(schoolScores).reduce((a, b) => Math.max(a, b), 1);
                        return (
                          <div key={school}>
                            <div className="flex justify-between text-xs mb-0.5">
                              <span className="text-foreground">{school}</span>
                              <span className="text-gold">{count}</span>
                            </div>
                            <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                              <div
                                className="h-full gradient-gold rounded-full transition-all duration-500"
                                style={{ width: `${(count / max) * 100}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* New quotes button */}
              <button
                onClick={loadMore}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition-opacity"
              >
                <RefreshCw className="w-4 h-4" />
                Bring New Quotes
              </button>
            </motion.div>
          ) : currentQuote ? (
            <SwipeCard
              key={currentQuote.id}
              quote={currentQuote}
              onSwipe={swipe}
              onFavorite={addFavorite}
            />
          ) : (
            <div className="text-center space-y-4">
              <Sparkles className="w-12 h-12 text-gold mx-auto" />
              <p className="text-muted-foreground text-sm">Loading quotes...</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Hint */}
      {currentQuote && !sessionComplete && (
        <p className="text-muted-foreground text-xs mt-4 text-center">
          ← Swipe left to pass · Swipe right to agree →
        </p>
      )}
    </div>
  );
}
