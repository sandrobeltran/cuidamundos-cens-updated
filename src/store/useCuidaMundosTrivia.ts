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
  stage: number, // Start | Playing | Finished,
  hasWon: boolean,
  setHasWon: (value: boolean) => void
  nextPage: () => void;
  prevPage: () => void;
  setStage: (stage: number) => void,
  initializeTrivia: (questions: TTriviaQuestion[], hasWon: boolean) => void;
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
  playing: false,
  stage: 0,
  hasWon: false,
};

export const useCuidaMundosTrivia = create<TCuidamundosTrivia>((set) => ({
  ...initialState,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  initializeTrivia: (questions, hasWon) => set(state => {

    return ({
      questions,
      hasWon: state.hasWon ? state.hasWon : hasWon
    })
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
  setShowResults: (value) => set({ showResults: value }),
  resetTrivia: () => set({ results: [], currentPage: 0, playing: false, stage: 0 }),
  setPlaying: (value) => set({ playing: value })
}));
