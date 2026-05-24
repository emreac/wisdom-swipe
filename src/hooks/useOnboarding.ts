import { useState, useCallback } from "react";

const ONBOARDING_KEY = "philosophia_onboarding_complete";

export function useOnboarding() {
  const [isComplete, setIsComplete] = useState(() => {
    return localStorage.getItem(ONBOARDING_KEY) === "true";
  });

  const completeOnboarding = useCallback(() => {
    localStorage.setItem(ONBOARDING_KEY, "true");
    setIsComplete(true);
  }, []);

  return { isOnboardingComplete: isComplete, completeOnboarding };
}
