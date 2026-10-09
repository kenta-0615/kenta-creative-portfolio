import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { clearAppData, loadAppData, saveAppData } from '../storage';
import { addHabit, createInitialState, removeHabit, toggleHabit, type AppState } from '../domain/habits';

type HabitsContextValue = {
  state: AppState;
  ready: boolean;
  toggle: (id: string) => void;
  add: (title: string) => void;
  remove: (id: string) => void;
  setLargeText: (value: boolean) => void;
  setReminder: (value: boolean) => void;
  reset: () => Promise<void>;
};
const HabitsContext = createContext<HabitsContextValue | null>(null);

export function HabitsProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AppState>(createInitialState());
  const [ready, setReady] = useState(false);
  useEffect(() => { loadAppData().then((saved) => { if (saved) setState(saved); setReady(true); }); }, []);
  useEffect(() => { if (ready) void saveAppData(state); }, [ready, state]);
  const value = useMemo<HabitsContextValue>(() => ({
    state, ready,
    toggle: (id) => setState((current) => ({ ...current, habits: toggleHabit(current.habits, id) })),
    add: (title) => setState((current) => ({ ...current, habits: addHabit(current.habits, title) })),
    remove: (id) => setState((current) => ({ ...current, habits: removeHabit(current.habits, id) })),
    setLargeText: (largeText) => setState((current) => ({ ...current, largeText })),
    setReminder: (reminderEnabled) => setState((current) => ({ ...current, reminderEnabled })),
    reset: async () => { await clearAppData(); setState(createInitialState()); },
  }), [ready, state]);
  return <HabitsContext.Provider value={value}>{children}</HabitsContext.Provider>;
}
export function useHabits() {
  const value = useContext(HabitsContext);
  if (!value) throw new Error('useHabits must be used inside HabitsProvider');
  return value;
}
