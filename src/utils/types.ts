export type CardsType = {
    title: string,
    author: string,
    status: 'want_to_read' | 'reading' | 'finished',
    rating?: number | null,
    notes?: string | null
}
export type BookType = CardsType & {id: number, created_at: string, updated_at: string}
