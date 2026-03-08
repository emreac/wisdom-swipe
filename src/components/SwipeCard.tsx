import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Quote } from "@/data/philosophers";
import { ThumbsUp, ThumbsDown, Heart } from "lucide-react";

interface SwipeCardProps {
  quote: Quote;
  onSwipe: (liked: boolean) => void;
  onFavorite: (quote: Quote) => void;
  isFavorited?: boolean;
}

export function SwipeCard({ quote, onSwipe, onFavorite, isFavorited }: SwipeCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe(true);
    } else if (info.offset.x < -100) {
      onSwipe(false);
    }
  };

  return (
    <motion.div
      className="absolute w-full cursor-grab active:cursor-grabbing"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ 
        x: 300,
        opacity: 0,
        transition: { duration: 0.3 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative bg-card rounded-2xl p-8 card-shadow border border-border min-h-[400px] flex flex-col justify-between overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
          <div className="w-full h-full gradient-gold rounded-bl-full" />
        </div>

        {/* Like/Nope indicators */}
        <motion.div
          className="absolute top-6 right-6 border-2 border-green-500 rounded-lg px-4 py-1"
          style={{ opacity: likeOpacity }}
        >
          <span className="text-green-500 font-bold text-lg tracking-wider">AGREE</span>
        </motion.div>
        <motion.div
          className="absolute top-6 left-6 border-2 border-red-500 rounded-lg px-4 py-1"
          style={{ opacity: nopeOpacity }}
        >
          <span className="text-red-500 font-bold text-lg tracking-wider">PASS</span>
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center py-8">
          <p className="font-serif text-2xl leading-relaxed text-center text-foreground italic">
            "{quote.text}"
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <div>
            <p className="text-gold font-semibold text-lg">{quote.emoji} {quote.philosopher}</p>
            <p className="text-muted-foreground text-sm">{quote.school} · {quote.era}</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={(e) => { e.stopPropagation(); onSwipe(false); }}
          className="w-14 h-14 rounded-full bg-surface-elevated border border-border flex items-center justify-center hover:border-destructive transition-colors"
        >
          <ThumbsDown className="w-6 h-6 text-muted-foreground" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onFavorite(quote); }}
          className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center hover:border-red-400 transition-colors self-center"
        >
          <Heart className="w-5 h-5 text-red-400" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onSwipe(true); }}
          className="w-14 h-14 rounded-full bg-surface-elevated border border-border flex items-center justify-center hover:border-gold transition-colors"
        >
          <ThumbsUp className="w-6 h-6 text-gold" />
        </button>
      </div>
    </motion.div>
  );
}
