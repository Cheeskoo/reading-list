import Cards from "./Cards"
import type { BookType } from "../utils/types"
import { Link } from "react-router"
import { BOOK_STATUSES, statusLabel, type BookStatus } from "../utils/bookStatus"

type LibraryProps = {
    count: number
    error: null | string
    loading: boolean
    books: BookType[]
    activeStatus: BookStatus | null
}

export default function Library({count, error, loading, books, activeStatus}: LibraryProps){
    // NavLink solo compara el pathname (no el ?status=), así que calculamos el "activo" a mano
    const filterClass = (active: boolean) =>
        `link btn library__btn${active ? ' library__btn--active' : ''}`

    return(
        <section className="library">
           <div className="library-top">
                <h2 className="library__title">Your library</h2>
                <span className="library__quantity"> {count} books in your list </span>
            </div>
            <nav className="library__navigation">
                <Link to="/" className={filterClass(activeStatus === null)}>All</Link>
                {BOOK_STATUSES.map((s) => (
                    <Link
                        key={s}
                        to={`/?status=${s}`}
                        className={filterClass(activeStatus === s)}>
                        {statusLabel(s)}
                    </Link>
                ))}
            </nav>
            {loading ? (
                <h3>Loading...</h3>
            ) : error ? (
                <h3 role="alert">Error loading books: {error}</h3>
            ) : count === 0 ? (
                <h3>No books found.</h3>
            ) : (
               <div className="books__section">
                {books.map((b)=> <Cards key={b.id} book={b} />)}
               </div>
            )}
        </section>
    )
}
