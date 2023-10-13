import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import { create } from "zustand";

type TResult = {
  question: TTriviaQuestion;
  selection: string;
  correct: boolean;
};

type TCuidamundosTrivia = {
  results: TResult[];
  currentPage: number;
  questionsAmount: number;
  showResults: boolean;
  playing: boolean
  questions: TTriviaQuestion[];
  nextPage: () => void;
  prevPage: () => void;
  initializeTrivia: (questions: TTriviaQuestion[]) => void;
  addResult: (result: TResult) => void;
  setShowResults: (value: boolean) => void;
  resetTrivia: () => void;
  setPlaying: (value: boolean) => void
};

const initialState = {
  results: [],
  questions: [],
  showResults: false,
  currentPage: 0,
  questionsAmount: 0,
  playing: false
};

export const useCuidaMundosTrivia = create<TCuidamundosTrivia>((set) => ({
  ...initialState,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  initializeTrivia: (questions) => set({ questions }),
  addResult: (result) =>
    set((state) => {
      const newResults = [...state.results];

      newResults.push(result);

      return {
        results: newResults,
      };
    }),
  setShowResults: (value) => set({ showResults: value }),
  resetTrivia: () => set(initialState),
  setPlaying: (value) => set({ playing: value })
}));
