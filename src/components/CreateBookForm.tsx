import type { FormEvent } from "react"
import type { BookInput } from "../utils/types"
import { BOOK_STATUSES, isBookStatus, statusLabel } from "../utils/bookStatus"

type CreateBookFormProps = {
    onSubmit: (input: BookInput) => void
    onCancel: () => void
    defaultValues?: BookInput
    submitLabel?: string
    submitting?: boolean
}
function formToBookInput(form: HTMLFormElement): BookInput{
    const fd = new FormData(form)
    const status = fd.get('status')
    const rating = String(fd.get('rating') ?? '')
    const notes = String(fd.get('notes') ?? '').trim()
    return {
        title: String(fd.get('title') ?? '').trim(),
        author: String(fd.get('author') ?? '').trim(),
        status: isBookStatus(status) ? status : 'want_to_read',
        rating: rating === '' ? null : Number(rating),
        notes: notes === '' ? null : notes,
    }
}

export default function CreateBookForm({
    onSubmit,
    onCancel,
    defaultValues,
    submitLabel = 'Save book',
    submitting = false,
}: CreateBookFormProps) {
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit(formToBookInput(e.currentTarget))
    }

    return(
        <form onSubmit={handleSubmit}
                  className="addBook__form">
                <label htmlFor="AddBookTitle" className="addBook__label">Title</label>
                <input
                    type="text"
                    name="title"
                    id="AddBookTitle"
                    defaultValue={defaultValues?.title}
                    className="addBook__text-input" required/>
                <label htmlFor="AddBookAuthor" className="addBook__label">Author</label>
                <input
                    type="text"
                    name="author"
                    id="AddBookAuthor"
                    defaultValue={defaultValues?.author}
                    className="addBook__text-input" required/>
                <div className="addBook__status-rating">
                    <div className="addBook__status">
                        <label htmlFor="AddBookStatus" className="addBook__label">Status</label>
                        <select
                            name="status"
                            id="AddBookStatus"
                            className="addBook__select"
                            defaultValue={defaultValues?.status ?? "want_to_read"}>
                            {BOOK_STATUSES.map((s) => (
                                <option key={s} value={s}>{statusLabel(s)}</option>
                            ))}
                        </select>
                    </div>
                    <div className="addBook__rating">
                        <label htmlFor="AddRating" className="addBook__label">Rating (optional)</label>
                        <select
                            name="rating"
                            id="AddRating"
                            className="addBook__select"
                            defaultValue={defaultValues?.rating?.toString() ?? ""}>
                            <option value="">No rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    </div>
                <label htmlFor="AddNotes" className="addBook__label">Notes (optional)</label>
                <textarea
                    name="notes"
                    id="AddNotes"
                    defaultValue={defaultValues?.notes ?? ""}
                    className="addBook__text-area"/>
                <div className="addBook__footer">
                    <button type="submit" disabled={submitting} className="btn addBook__save-btn">
                        {submitting ? 'Saving...' : submitLabel}
                    </button>
                    <button type="button" onClick={onCancel} className="btn addBook__cancel-btn">
                        Cancel
                    </button>
                </div>
            </form>
    )
}
