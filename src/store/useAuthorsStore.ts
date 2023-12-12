import { IAuthor } from "@/utils/customTypes"
import { create } from "zustand"

interface IAuthorStore {
    authors: IAuthor[],
    addAuthor: (author: IAuthor) => void,
    updateAuthor: (author: IAuthor) => void
    reset: () => void
}


const initialState = {
    authors: []
}

export const useAuthorsStore = create<IAuthorStore>((set) => ({
    ...initialState,
    addAuthor: (author) => set((state) => {
        if (state.authors.find(e => e._id === author._id)) return {}
        const authors = [...state.authors]


        authors.push(author)

        return { authors }
    }),
    reset: () => set({ ...initialState }),
    updateAuthor: (author) => set(state => {
        const newAuthors = [...state.authors]
        const index = newAuthors.findIndex(e => e._id === author._id)
        newAuthors[index] = author

        return { authors: newAuthors }
    })
}))