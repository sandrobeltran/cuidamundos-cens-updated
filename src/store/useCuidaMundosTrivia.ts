import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import { create } from "zustand";

type TResult = {
  question: TTriviaQuestion;
  selection: string;
  correct: boolean;
};

type TCuidamundosTrivia = {
  results: TResult[];
  mixedOptions: string[];
  currentPage: number;
  questionsAmount: number;
  showResults: boolean;
  nextPage: () => void;
  prevPage: () => void;
  initializeQuestion: (mixedOptions: string[]) => void;
  addResult: (result: TResult) => void;
  setShowResults: (value: boolean) => void;
  resetTrivia: () => void;
};

const initialState = {
  results: [],
  mixedOptions: [],
  showResults: false,
  currentPage: 0,
  questionsAmount: 0,
};

export const useCuidaMundosTrivia = create<TCuidamundosTrivia>((set) => ({
  ...initialState,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  initializeQuestion: (mixedOptions) => set({ mixedOptions }),
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
}));
