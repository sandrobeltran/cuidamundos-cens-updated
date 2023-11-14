import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import { ITestQuestion } from "@/utils/customTypes";
import { create } from "zustand";

type TResult = {
  question: ITestQuestion;
  selection: number;
};

type THuellaEcologica = {
  results: TResult[];
  currentPage: number;
  questionsAmount: number;
  questions: ITestQuestion[];
  stage: number; // Start | Playing | Finished,
  hasWon: boolean;
  setHasWon: (value: boolean) => void;
  nextPage: () => void;
  prevPage: () => void;
  setStage: (stage: number) => void;
  initializeGame: (questions: ITestQuestion[], hasWon: boolean) => void;
  addResult: (result: TResult) => void;
  resetGame: () => void;
};

const initialState = {
  results: [],
  questions: [],
  currentPage: 0,
  questionsAmount: 0,
  stage: 0,
  hasWon: false,
};

export const useHuellaEcologica = create<THuellaEcologica>((set) => ({
  ...initialState,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  initializeGame: (questions, hasWon) =>
    set((state) => {
      return {
        questions,
        hasWon: state.hasWon ? state.hasWon : hasWon,
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
  resetGame: () => set({ results: [], currentPage: 0, stage: 0 }),
}));
