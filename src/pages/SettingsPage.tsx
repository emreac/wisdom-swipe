import { RotateCcw, Info, Sparkles } from "lucide-react";

interface SettingsPageProps {
  onReset: () => void;
  totalSwiped: number;
}

export default function SettingsPage({ onReset, totalSwiped }: SettingsPageProps) {
  return (
    <div className="px-4 pt-6 pb-24 max-w-lg mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-serif text-gold">Settings</h1>
      </div>

      {/* About */}
      <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-gold" />
          <h3 className="font-serif text-lg text-foreground">About Philosophia</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Discover which philosophical tradition resonates with your worldview. Swipe through quotes from history's greatest thinkers and uncover your inner philosopher.
        </p>
      </div>

      {/* Data */}
      <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-serif text-lg text-foreground">Your Data</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          You've swiped through <span className="text-gold font-medium">{totalSwiped}</span> quotes so far.
        </p>
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-elevated border border-border text-foreground font-medium hover:border-destructive hover:text-destructive transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset All Progress
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-xs text-muted-foreground">
        Philosophia v1.0 · Made with ✦
      </p>
    </div>
  );
}
