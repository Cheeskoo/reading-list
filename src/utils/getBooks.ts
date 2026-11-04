import type{ BookType } from "./types"

const API_URL: string = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export default async function getBooks(): Promise<BookType[]>{
    const res = await fetch(`${API_URL}/books`)
    if(!res.ok){
        throw new Error(`HTTP ${res.status}`)
    }
    const books: {data: BookType[]} = await res.json()
    
    return books.data
}