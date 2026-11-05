import { API_URL } from "./apiUrl"
import type { BookType } from "./types"

export default async function getBooks(): Promise<BookType[]>{
    const res = await fetch(`${API_URL}/books`)
    if(!res.ok){ throw new Error(`HTTP ${res.status}`) }
    const books: {data: BookType[]} = await res.json()
    return books.data
}
