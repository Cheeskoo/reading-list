import { useOutletContext } from "react-router";
import type {BookType} from "./types"

export type BooksContext = {
    books: BookType[]
    loading: boolean
    error: string | null
    refetch : () => Promise<void> 
}

export function useBooks(): BooksContext{
    return useOutletContext<BooksContext>()
}