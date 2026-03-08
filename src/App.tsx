import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import HomePage from "@/pages/HomePage";
import StatsPage from "@/pages/StatsPage";
import LearnPage from "@/pages/LearnPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/NotFound";
import { useSwipeStore } from "@/hooks/useSwipeStore";
import { LanguageProvider } from "@/i18n/LanguageContext";

const App = () => {
  const store = useSwipeStore();

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  currentQuote={store.currentQuote}
                  remaining={store.remaining}
                  total={store.total}
                  swipe={store.swipe}
                  loadMore={store.loadMore}
                  likedCount={store.likedCount}
                  sessionComplete={store.sessionComplete}
                  streak={store.streak}
                  dailyLimit={store.dailyLimit}
                  topSchool={store.topSchool}
                  topPhilosopher={store.topPhilosopher}
                  schoolScores={store.schoolScores}
                  addFavorite={store.addFavorite}
                  favorites={store.favorites}
                />
              }
            />
            <Route
              path="/stats"
              element={
                <StatsPage
                  history={store.history}
                  likedCount={store.likedCount}
                  dislikedCount={store.dislikedCount}
                  philosopherScores={store.philosopherScores}
                  schoolScores={store.schoolScores}
                  topPhilosopher={store.topPhilosopher}
                  topSchool={store.topSchool}
                  favorites={store.favorites}
                  removeFavorite={store.removeFavorite}
                />
              }
            />
            <Route path="/learn" element={<LearnPage />} />
            <Route
              path="/settings"
              element={
                <SettingsPage
                  onReset={store.reset}
                  totalSwiped={store.history.length}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
