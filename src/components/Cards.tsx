import { useState } from "react"
import { CiEdit } from "react-icons/ci"
import { MdOutlineDelete } from "react-icons/md"
import { Link } from "react-router"
import Stars from "./Stars"
import type { BookType } from "../utils/types"
import { statusLabel } from "../utils/bookStatus"
import { useBooks } from "../utils/booksContext"
import deleteBook from "../utils/deleteBook"

export default function Cards({book}: {book: BookType}){
    const { refetch } = useBooks()
    const [deleting, setDeleting] = useState(false)

    async function handleDelete(){
        if(!window.confirm(`Delete "${book.title}"?`)) return
        setDeleting(true)
        try{
            await deleteBook(book.id)
            await refetch()
        }catch(error){
            alert(error instanceof Error ? error.message : 'The book could not be deleted')
            setDeleting(false)
        }
    }

    return(
       <article className="card">
        <div className="card__status-wrapper">
            <span
                className={`card__status card__status--${book.status}`}>
                {statusLabel(book.status)}
            </span>
            {book.rating != null &&
                <Stars rating={book.rating} />
            }
        </div>
        <div className="card__title-wrapper">
            <h3 className="card__title">{book.title}</h3>
            <p className="card__author">{book.author}</p>
        </div>
        {book.notes != null &&
            <div className="card__description-wrapper">
                <p className="card__description">
                    {book.notes}
                </p>
            </div>
        }
        <div className="card__footer">
            <hr className="card__separator"/>
            <div className="card__config">
                <Link to={`/books/${book.id}`} className="link btn card__edit">
                    <CiEdit className="edit__icon"/>
                    Edit
                </Link>
                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={deleting}
                    className="btn card__delete">
                    <MdOutlineDelete className="delete__icon"/>
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
            </div>
        </div>
       </article>
    )
}
