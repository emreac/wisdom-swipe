import { useState, useCallback, useMemo } from "react";
import { allQuotes, Quote } from "@/data/philosophers";

export interface SwipeRecord {
  quote: Quote;
  liked: boolean;
}

const DAILY_LIMIT = 25;

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getStreak(): number {
  const raw = localStorage.getItem("philosophia_streak");
  if (!raw) return 0;
  try {
    const data = JSON.parse(raw);
    return data.count || 0;
  } catch { return 0; }
}

function getLastSessionDate(): string | null {
  const raw = localStorage.getItem("philosophia_streak");
  if (!raw) return null;
  try {
    return JSON.parse(raw).lastDate || null;
  } catch { return null; }
}

function updateStreak() {
  const today = getTodayKey();
  const lastDate = getLastSessionDate();
  const currentStreak = getStreak();

  if (lastDate === today) return; // already counted today

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  const newStreak = lastDate === yesterdayKey ? currentStreak + 1 : 1;
  localStorage.setItem("philosophia_streak", JSON.stringify({ count: newStreak, lastDate: today }));
}

function getDailySwipedCount(): number {
  const raw = localStorage.getItem("philosophia_daily");
  if (!raw) return 0;
  try {
    const data = JSON.parse(raw);
    if (data.date === getTodayKey()) return data.count || 0;
    return 0;
  } catch { return 0; }
}

function setDailySwipedCount(count: number) {
  localStorage.setItem("philosophia_daily", JSON.stringify({ date: getTodayKey(), count }));
}

function getSeenIds(): number[] {
  const raw = localStorage.getItem("philosophia_seen");
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

function addSeenIds(ids: number[]) {
  const existing = getSeenIds();
  const updated = [...new Set([...existing, ...ids])];
  localStorage.setItem("philosophia_seen", JSON.stringify(updated));
}

function generateBatch(batchSize: number): Quote[] {
  const seen = new Set(getSeenIds());
  const unseen = allQuotes.filter(q => !seen.has(q.id));
  
  if (unseen.length >= batchSize) {
    return shuffleArray(unseen).slice(0, batchSize);
  }
  // If we've seen most, reset and reshuffle
  localStorage.removeItem("philosophia_seen");
  return shuffleArray([...allQuotes]).slice(0, batchSize);
}

export function useSwipeStore() {
  const dailyAlreadySwiped = getDailySwipedCount();
  const remainingToday = Math.max(0, DAILY_LIMIT - dailyAlreadySwiped);

  const [batch, setBatch] = useState<Quote[]>(() => {
    if (remainingToday === 0) return [];
    return generateBatch(remainingToday);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<SwipeRecord[]>([]);
  const [sessionComplete, setSessionComplete] = useState(remainingToday === 0);
  const [streak, setStreak] = useState(getStreak);

  const currentQuote = currentIndex < batch.length ? batch[currentIndex] : null;
  const remaining = batch.length - currentIndex;
  const sessionTotal = batch.length;

  const swipe = useCallback((liked: boolean) => {
    if (currentIndex >= batch.length) return;
    const quote = batch[currentIndex];
    setHistory((prev) => [...prev, { quote, liked }]);
    addSeenIds([quote.id]);
    const newDailyCount = getDailySwipedCount() + 1;
    setDailySwipedCount(newDailyCount);
    
    if (currentIndex + 1 >= batch.length) {
      // Session done
      updateStreak();
      setStreak(getStreak());
      setSessionComplete(true);
    }
    setCurrentIndex((i) => i + 1);
  }, [currentIndex, batch]);

  const loadMore = useCallback(() => {
    // This generates new quotes — "endless" but still respects daily limit
    const newBatch = generateBatch(DAILY_LIMIT);
    // Reset daily count for new session
    localStorage.setItem("philosophia_daily", JSON.stringify({ date: getTodayKey(), count: 0 }));
    setBatch(newBatch);
    setCurrentIndex(0);
    setHistory([]);
    setSessionComplete(false);
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem("philosophia_daily");
    localStorage.removeItem("philosophia_seen");
    const newBatch = generateBatch(DAILY_LIMIT);
    setBatch(newBatch);
    setCurrentIndex(0);
    setHistory([]);
    setSessionComplete(false);
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
    total: sessionTotal,
    history,
    swipe,
    reset,
    loadMore,
    sessionComplete,
    streak,
    dailyLimit: DAILY_LIMIT,
    likedCount: likedRecords.length,
    dislikedCount: history.length - likedRecords.length,
    philosopherScores,
    schoolScores,
    topPhilosopher: topPhilosopher ? { name: topPhilosopher[0], count: topPhilosopher[1] } : null,
    topSchool: topSchool ? { name: topSchool[0], count: topSchool[1] } : null,
  };
}
