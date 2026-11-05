import { API_URL } from "./apiUrl"
import type { BookInput, BookType } from "./types"

export default async function createBook(input: BookInput): Promise<BookType>{
    const res = await fetch(`${API_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
    })
    if(!res.ok){ throw new Error(`HTTP ${res.status}`) }
    const book: {data: BookType} = await res.json()
    return book.data
}
