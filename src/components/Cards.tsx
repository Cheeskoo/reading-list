import { CiEdit } from "react-icons/ci"
import { MdOutlineDelete } from "react-icons/md"
import Stars from "./Stars"
import type { CardsType } from "../utils/types"

export default function Cards({book}: {book: CardsType}){
    const cleanStatus: string = book.status === "want_to_read" ? book.status.replaceAll('_', ' '): book.status
    const newStatus: string = cleanStatus.slice(0,1).toUpperCase() + cleanStatus.slice(1)

    return(
       <article className="card">
        <div className="card__status-wrapper">
            <span 
                className={`card__status card__status--${book.status}`}>
                {newStatus}
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
                <button type="button" className="btn card__edit">
                    <CiEdit className="edit__icon"/> 
                    Edit
                </button>
                <button type="button" className="btn card__delete">
                    <MdOutlineDelete className="delete__icon"/>
                    Delete
                </button>
            </div>
        </div>
       </article>
    )
}