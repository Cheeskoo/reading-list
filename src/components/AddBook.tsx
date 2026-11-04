import { IoIosArrowBack } from "react-icons/io"
import type { FormEvent } from "react"
import CreateBookForm from "./CreateBookForm"

export default function AddBook(){
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)
        console.log(data)
    }
    return(
        <div className="addBook">
            <div className="addBook__header">
                <button
                    type="button" 
                    className="btn addBook__back-btn">
                    <IoIosArrowBack className="addBook__back-btn-icon"/>
                    Back to library
                </button>
                <h2 className="addBook__title">Add a book</h2>
            </div>
            <CreateBookForm handleSubmit={handleSubmit}/>
        </div>
    )
}