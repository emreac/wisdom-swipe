import { useState, useCallback } from "react";
import { quotes, Quote } from "@/data/philosophers";

export interface SwipeRecord {
  quote: Quote;
  liked: boolean;
}

export function useSwipeStore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<SwipeRecord[]>([]);

  const currentQuote = currentIndex < quotes.length ? quotes[currentIndex] : null;
  const remaining = quotes.length - currentIndex;

  const swipe = useCallback((liked: boolean) => {
    if (currentIndex >= quotes.length) return;
    setHistory((prev) => [...prev, { quote: quotes[currentIndex], liked }]);
    setCurrentIndex((i) => i + 1);
  }, [currentIndex]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setHistory([]);
  }, []);

  // Stats computation
  const likedRecords = history.filter((r) => r.liked);

  const philosopherScores: Record<string, number> = {};
  const schoolScores: Record<string, number> = {};

  likedRecords.forEach((r) => {
    philosopherScores[r.quote.philosopher] = (philosopherScores[r.quote.philosopher] || 0) + 1;
    schoolScores[r.quote.school] = (schoolScores[r.quote.school] || 0) + 1;
  });

  const topPhilosopher = Object.entries(philosopherScores).sort((a, b) => b[1] - a[1])[0];
  const topSchool = Object.entries(schoolScores).sort((a, b) => b[1] - a[1])[0];

  return {
    currentQuote,
    currentIndex,
    remaining,
    total: quotes.length,
    history,
    swipe,
    reset,
    likedCount: likedRecords.length,
    dislikedCount: history.length - likedRecords.length,
    philosopherScores,
    schoolScores,
    topPhilosopher: topPhilosopher ? { name: topPhilosopher[0], count: topPhilosopher[1] } : null,
    topSchool: topSchool ? { name: topSchool[0], count: topSchool[1] } : null,
  };
}
