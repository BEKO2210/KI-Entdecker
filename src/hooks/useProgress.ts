import { useState, useEffect, useCallback } from 'react';

export interface Badge {
  id: number;
  name: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface DayProgress {
  dayId: number;
  completed: boolean;
  completedAt?: string;
  lessonsCompleted: number[];
}

export interface UserProgress {
  badges: Badge[];
  days: DayProgress[];
  totalProgress: number;
  lastVisited: string;
  startedAt: string;
}

const STORAGE_KEY = 'ki-entdecker-progress';

const defaultBadges: Badge[] = [
  { id: 1, name: 'KI-Anfänger', icon: '🤖', unlocked: false },
  { id: 2, name: 'Prompt-Meister', icon: '💬', unlocked: false },
  { id: 3, name: 'Kreativ-Genie', icon: '🎨', unlocked: false },
  { id: 4, name: 'Problem-Löser', icon: '🧩', unlocked: false },
  { id: 5, name: 'KI-Experte', icon: '🏆', unlocked: false },
];

const defaultDays: DayProgress[] = [
  { dayId: 1, completed: false, lessonsCompleted: [] },
  { dayId: 2, completed: false, lessonsCompleted: [] },
  { dayId: 3, completed: false, lessonsCompleted: [] },
  { dayId: 4, completed: false, lessonsCompleted: [] },
  { dayId: 5, completed: false, lessonsCompleted: [] },
];

const getDefaultProgress = (): UserProgress => ({
  badges: defaultBadges,
  days: defaultDays,
  totalProgress: 0,
  lastVisited: new Date().toISOString(),
  startedAt: new Date().toISOString(),
});

const loadStoredProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return {
        ...getDefaultProgress(),
        ...parsed,
        lastVisited: new Date().toISOString(),
      };
    } catch (e) {
      console.error('Failed to parse progress:', e);
    }
  }
  return getDefaultProgress();
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(loadStoredProgress);
  const [isLoaded] = useState(true);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const unlockBadge = useCallback((badgeId: number) => {
    setProgress((prev) => ({
      ...prev,
      badges: prev.badges.map((badge) =>
        badge.id === badgeId && !badge.unlocked
          ? { ...badge, unlocked: true, unlockedAt: new Date().toISOString() }
          : badge
      ),
    }));
  }, []);

  const completeDay = useCallback((dayId: number) => {
    setProgress((prev) => ({
      ...prev,
      days: prev.days.map((day) =>
        day.dayId === dayId && !day.completed
          ? { ...day, completed: true, completedAt: new Date().toISOString() }
          : day
      ),
    }));
    // Unlock corresponding badge
    unlockBadge(dayId);
  }, [unlockBadge]);

  const completeLesson = useCallback((dayId: number, lessonId: number) => {
    setProgress((prev) => ({
      ...prev,
      days: prev.days.map((day) =>
        day.dayId === dayId && !day.lessonsCompleted.includes(lessonId)
          ? { ...day, lessonsCompleted: [...day.lessonsCompleted, lessonId] }
          : day
      ),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm('Möchtest du wirklich alle Fortschritte zurücksetzen?')) {
      setProgress(getDefaultProgress());
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const getUnlockedBadgesCount = useCallback(() => {
    return progress.badges.filter((b) => b.unlocked).length;
  }, [progress.badges]);

  const getCompletedDaysCount = useCallback(() => {
    return progress.days.filter((d) => d.completed).length;
  }, [progress.days]);

  const isDayUnlocked = useCallback((dayId: number) => {
    // Day 1 is always unlocked
    if (dayId === 1) return true;
    // Other days require previous day to be completed
    const previousDay = progress.days.find((d) => d.dayId === dayId - 1);
    return previousDay?.completed ?? false;
  }, [progress.days]);

  const getDayProgress = useCallback((dayId: number) => {
    return progress.days.find((d) => d.dayId === dayId);
  }, [progress.days]);

  return {
    progress,
    isLoaded,
    unlockBadge,
    completeDay,
    completeLesson,
    resetProgress,
    getUnlockedBadgesCount,
    getCompletedDaysCount,
    isDayUnlocked,
    getDayProgress,
  };
};

export default useProgress;
