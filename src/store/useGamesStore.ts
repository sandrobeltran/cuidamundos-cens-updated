import { create } from "zustand"
import { IGame, ITrivia } from "../utils/customTypes"

type TGamesStore = {
    games: IGame[]
    setGames: (games: IGame[]) => void
    updateGame: (gameId: ITrivia) => void
}

const initialState = {
    games: [],
}

export const useGamesStore = create<TGamesStore>(set => ({
    ...initialState,
    setGames: (games) => set({ games }),
    updateGame: (game) => set(state => {
        const gameIndex = state.games.findIndex(e => e._id === game._id)

        const newGames = [...state.games]
        newGames[gameIndex] = game

        return ({ games: newGames })
    })
}))