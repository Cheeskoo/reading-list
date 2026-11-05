import { useSearchParams } from "react-router"
import Library from "../components/Library"
import { useBooks } from "../utils/booksContext"
import { isBookStatus } from "../utils/bookStatus"

export default function LibraryPage(){
    const { books, loading, error } = useBooks()
    const [searchParams] = useSearchParams()

    // /?status=reading -> filtra; sin parámetro (o inválido) -> todos
    const statusParam = searchParams.get('status')
    const status = isBookStatus(statusParam) ? statusParam : null
    const visibleBooks = status ? books.filter((b) => b.status === status) : books

    return(
        <Library
            count={visibleBooks.length}
            error={error}
            loading={loading}
            books={visibleBooks}
            activeStatus={status}
        />
    )
}
