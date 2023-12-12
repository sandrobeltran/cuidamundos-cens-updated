import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import { create } from "zustand";

type TResult = {
  question: TTriviaQuestion;
  selection: string;
  correct: boolean;
};

type TUsoEficiente = {
  results: TResult[];
  currentPage: number;
  questionsAmount: number;
  showResults: boolean;
  playing: boolean;
  questions: TTriviaQuestion[];
  stage: number; // 0: Start | 1: Playing | 2: Finished,
  hasWon: boolean;
  lose: boolean;
  userIsUpdated: boolean;
  setUserIsUpdated: (value: boolean) => void
  setLose: () => void;
  setHasWon: (value: boolean) => void;
  nextPage: () => void;
  prevPage: () => void;
  setStage: (stage: number) => void;
  initializeTrivia: (questions: TTriviaQuestion[], hasWon: boolean) => void;
  addResult: (result: TResult) => void;
  setShowResults: (value: boolean) => void;
  resetTrivia: () => void;
  setPlaying: (value: boolean) => void;
};

const initialState = {
  results: [],
  questions: [],
  showResults: false,
  currentPage: 0,
  questionsAmount: 0,
  playing: false,
  stage: 0,
  hasWon: false,
  lose: false,
  userIsUpdated: false
};

export const useUsoEficiente = create<TUsoEficiente>((set) => ({
  ...initialState,
  setUserIsUpdated: (value) => set({ userIsUpdated: value }),
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  initializeTrivia: (questions, hasWon) =>
    set((state) => {

      return {
        questions,
        currentPage: 0,
        hasWon: hasWon
      };
    }),
  addResult: (result) =>
    set((state) => {
      const newResults = [...state.results];

      newResults.push(result);

      return {
        results: newResults,
      };
    }),
  setStage: (stage) => set({ stage }),
  setHasWon: (value) => set({ hasWon: value }),
  setLose: () => set({ lose: true }),
  setShowResults: (value) => set({ showResults: value }),
  resetTrivia: () =>
    set({ results: [], currentPage: 0, playing: false, stage: 0, lose: false }),
  setPlaying: (value) => set({ playing: value }),
}));
