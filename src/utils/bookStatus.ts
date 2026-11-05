import type { BookInput } from "./types"

export type BookStatus = BookInput['status']

export const BOOK_STATUSES: BookStatus[] = ['want_to_read', 'reading', 'finished']

export function isBookStatus(value: unknown): value is BookStatus{
    return typeof value === 'string' && (BOOK_STATUSES as string[]).includes(value)
}

// 'want_to_read' -> 'Want to read'
export function statusLabel(status: BookStatus): string{
    const clean = status.replaceAll('_', ' ')
    return clean.slice(0, 1).toUpperCase() + clean.slice(1)
}
