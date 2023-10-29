import { IAuthor } from "@/utils/customTypes"
import { create } from "zustand"

interface IAuthorStore {
    authors: IAuthor[],
    addAuthor: (author: IAuthor) => void,
    reset: () => void
}


const initialState = {
    authors: []
}

export const useAuthorsStore = create<IAuthorStore>((set) => ({
    ...initialState,
    addAuthor: (author) => set((state) => {
        const authors = [...state.authors]
        authors.push(author)

        return { authors }
    }),
    reset: () => set({ ...initialState })
}))