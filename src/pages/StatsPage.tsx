import { motion } from "framer-motion";
import { schoolDescriptions, philosophers, Quote } from "@/data/philosophers";
import { Brain, TrendingUp, Heart, Zap, X } from "lucide-react";

interface StatsPageProps {
  history: any[];
  likedCount: number;
  dislikedCount: number;
  philosopherScores: Record<string, number>;
  schoolScores: Record<string, number>;
  topPhilosopher: { name: string; count: number } | null;
  topSchool: { name: string; count: number } | null;
  favorites: Quote[];
  removeFavorite: (quoteId: number) => void;
}

export default function StatsPage({
  history, likedCount, dislikedCount,
  philosopherScores, schoolScores,
  topPhilosopher, topSchool,
  favorites, removeFavorite,
}: StatsPageProps) {
  const totalSwiped = history.length;
  const philosopherEmoji = (name: string) => philosophers.find(p => p.name === name)?.emoji || "🧠";

  const sortedPhilosophers = Object.entries(philosopherScores).sort((a, b) => b[1] - a[1]);
  const sortedSchools = Object.entries(schoolScores).sort((a, b) => b[1] - a[1]);
  const maxSchoolScore = sortedSchools[0]?.[1] || 1;

  if (totalSwiped === 0 && favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pb-24">
        <Brain className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="font-serif text-xl text-foreground mb-2">No Data Yet</h2>
        <p className="text-muted-foreground text-center text-sm">
          Start swiping quotes on the Home tab to discover your philosophical identity.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 pt-6 pb-24 max-w-lg mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-serif text-gold">Your Philosophy</h1>
        <p className="text-muted-foreground text-sm mt-1">{totalSwiped} quotes analyzed</p>
      </div>

      {/* Top Match Card */}
      {topSchool && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-6 border border-gold/20 card-shadow"
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-gold" />
            <span className="text-xs font-medium text-gold uppercase tracking-wider">Your Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl text-foreground mb-2">{topSchool.name}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {schoolDescriptions[topSchool.name]}
          </p>
        </motion.div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Agreed", value: likedCount, icon: Heart, color: "text-gold" },
          { label: "Passed", value: dislikedCount, icon: TrendingUp, color: "text-muted-foreground" },
          { label: "Total", value: totalSwiped, icon: Brain, color: "text-foreground" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card rounded-xl p-4 border border-border text-center">
            <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} />
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Favorites */}
      {favorites.length > 0 && (
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-red-400" />
            <h3 className="font-serif text-lg text-foreground">Favorites</h3>
            <span className="text-xs text-muted-foreground ml-auto">{favorites.length}</span>
          </div>
          <div className="space-y-3">
            {favorites.map((quote, i) => (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface rounded-xl p-4 border border-border relative group"
              >
                <button
                  onClick={() => removeFavorite(quote.id)}
                  className="absolute top-3 right-3 w-6 h-6 rounded-full bg-surface-elevated border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
                <p className="font-serif text-sm text-foreground italic leading-relaxed pr-6">
                  "{quote.text}"
                </p>
                <p className="text-xs text-gold mt-2">
                  {quote.emoji} {quote.philosopher} · {quote.school}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* School Breakdown */}
      {sortedSchools.length > 0 && (
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="font-serif text-lg text-foreground mb-4">School Affinity</h3>
          <div className="space-y-3">
            {sortedSchools.map(([school, count], i) => (
              <motion.div
                key={school}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{school}</span>
                  <span className="text-gold">{count}</span>
                </div>
                <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gradient-gold rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(count / maxSchoolScore) * 100}%` }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Philosopher Ranking */}
      {sortedPhilosophers.length > 0 && (
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="font-serif text-lg text-foreground mb-4">Philosopher Ranking</h3>
          <div className="space-y-3">
            {sortedPhilosophers.map(([name, count], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{philosopherEmoji(name)}</span>
                  <span className="text-foreground text-sm">{name}</span>
                </div>
                <span className="text-gold font-semibold">{count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
