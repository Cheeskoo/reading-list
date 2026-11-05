import { API_URL } from "./apiUrl"

export default async function deleteBook(id: number): Promise<void>{
    const res = await fetch(`${API_URL}/books/${id}`, { method: 'DELETE' })
    if(!res.ok){ throw new Error(`HTTP ${res.status}`) }
}
