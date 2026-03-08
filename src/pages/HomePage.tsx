import { AnimatePresence } from "framer-motion";
import { SwipeCard } from "@/components/SwipeCard";
import { RotateCcw, Sparkles } from "lucide-react";

interface HomePageProps {
  currentQuote: any;
  remaining: number;
  total: number;
  swipe: (liked: boolean) => void;
  reset: () => void;
  likedCount: number;
}

export default function HomePage({ currentQuote, remaining, total, swipe, reset, likedCount }: HomePageProps) {
  return (
    <div className="flex flex-col items-center px-4 pt-6 pb-24 min-h-screen">
      {/* Header */}
      <div className="w-full max-w-sm mb-6">
        <h1 className="text-2xl font-serif text-gold text-center">Philosophia</h1>
        <p className="text-muted-foreground text-center text-sm mt-1">
          Swipe to discover your inner philosopher
        </p>
      </div>

      {/* Progress */}
      <div className="w-full max-w-sm mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>{total - remaining} / {total} quotes</span>
          <span className="text-gold">{likedCount} agreed</span>
        </div>
        <div className="h-1 bg-surface-elevated rounded-full overflow-hidden">
          <div
            className="h-full gradient-gold rounded-full transition-all duration-500"
            style={{ width: `${((total - remaining) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Card area */}
      <div className="relative w-full max-w-sm h-[480px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentQuote ? (
            <SwipeCard
              key={currentQuote.id}
              quote={currentQuote}
              onSwipe={swipe}
            />
          ) : (
            <div className="text-center space-y-6">
              <Sparkles className="w-12 h-12 text-gold mx-auto" />
              <div>
                <h2 className="font-serif text-xl text-foreground mb-2">Journey Complete!</h2>
                <p className="text-muted-foreground text-sm">
                  Check your Stats to see which philosopher you align with.
                </p>
              </div>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition-opacity"
              >
                <RotateCcw className="w-4 h-4" />
                Start Again
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Hint */}
      {currentQuote && (
        <p className="text-muted-foreground text-xs mt-4 text-center">
          ← Swipe left to pass · Swipe right to agree →
        </p>
      )}
    </div>
  );
}
