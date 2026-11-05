import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { IoIosArrowBack } from "react-icons/io"
import CreateBookForm from "../components/CreateBookForm"
import createBook from "../utils/createBook"
import { useBooks } from "../utils/booksContext"
import type { BookInput } from "../utils/types"

export default function AddBookPage(){
    const navigate = useNavigate()
    const { refetch } = useBooks()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(input: BookInput){
        setSubmitting(true)
        setError(null)
        try{
            await createBook(input)
            await refetch()
            navigate('/')
        }catch(error){
            setError(error instanceof Error ? error.message : 'The book could not be saved')
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
                <h2 className="addBook__title">Add a book</h2>
            </div>
            {error && <p role="alert">Error: {error}</p>}
            <CreateBookForm
                onSubmit={handleSubmit}
                onCancel={() => navigate('/')}
                submitting={submitting}
            />
        </div>
    )
}
