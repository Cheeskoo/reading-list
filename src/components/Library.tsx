import Cards from "./Cards"
import type { BookType } from "../utils/types"

export default function Library({count, error, loading, books}: {count: number, error: null | string, loading: boolean, books: BookType[]}){
    return( 
        <section className="library">
           <div className="library-top">
                <h2 className="library__title">Your library</h2>
                <span className="library__quantity"> {count} books in your list </span>
            </div>
            <div className="library__navigation">
                <button type="button" className="btn library__btn">All</button>
                <button type="button" className="btn library__btn">Want to read</button>
                <button type="button" className="btn library__btn">Reading</button>
                <button type="button" className="btn library__btn">Finished</button>
            </div>
            {loading ? (
                <h3>Loading...</h3>
            ) : error ? (
                <h3 role="alert">Error loading books: {error}</h3>
            ) : count === 0 ? (
                <h3>No books found.</h3>
            ) : (
               <div className="books__section">
                {books.map((b)=>{
                    return <Cards key={b.id} 
                                  book={b}
                                  />
                })}
               </div> 
            )}
        </section>
    )
}