import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { IoIosArrowBack } from "react-icons/io"
import CreateBookForm from "../components/CreateBookForm"
import updateBook from "../utils/updateBook"
import { useBooks } from "../utils/booksContext"
import type { BookInput } from "../utils/types"

export default function BookPage(){
    const { id } = useParams()
    const navigate = useNavigate()
    const { books, loading, refetch } = useBooks()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const book = books.find((b) => b.id === Number(id))

    if(loading) return <h3>Loading...</h3>

    if(!book){
        return(
            <div className="addBook">
                <h2 className="addBook__title">Book not found</h2>
                <Link to="/" className="link btn">Back to library</Link>
            </div>
        )
    }

    async function handleSubmit(input: BookInput){
        if(!book) return
        setSubmitting(true)
        setError(null)
        try{
            await updateBook(book.id, input)
            await refetch()
            navigate('/')
        }catch(error){
            setError(error instanceof Error ? error.message : 'The book could not be updated')
            setSubmitting(false)
        }
    }

    return(
        <div className="addBook">
            <div className="addBook__header">
                <Link to="/" className="link btn addBook__back-btn">
                    <IoIosArrowBack className="addBook__back-btn-icon"/>
                    Back to library
                </Link>
                <h2 className="addBook__title">Edit "{book.title}"</h2>
            </div>
            {error && <p role="alert">Error: {error}</p>}
            <CreateBookForm
                key={book.id}
                defaultValues={book}
                onSubmit={handleSubmit}
                onCancel={() => navigate('/')}
                submitLabel="Update book"
                submitting={submitting}
            />
        </div>
    )
}
