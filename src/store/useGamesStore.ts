import { create } from "zustand"
import { IGame } from "../utils/customTypes"

type TGamesStore = {
    games: IGame[]
    setGames: (games: IGame[]) => void
}

const initialState = {
    games: [],
}

export const useGamesStore = create<TGamesStore>(set => ({
    ...initialState,
    setGames: (games) => set({ games })
}))