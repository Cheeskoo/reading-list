import React from "react"
import{useState, useEffect} from "react"
import Library from "../components/Library";
import AddBook from "../components/AddBook";
import getBooks from "../utils/getBooks";
import type { BookType } from "../utils/types";

export default function Home({}){
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState<BookType[]>([])
    useEffect(()=>{
        async function loadBooks (){
            try{
                const data = await getBooks()
                setBooks(data)
            }catch(error){
                setError(error instanceof Error ? error.message: 'The books cannot be reached')
            }finally{
                setLoading(false)
            }
        }
        void loadBooks()
    }, [])
    return(
        <div className="body">
            <Library count={books.length} error={error} loading={loading} books={books}/>
            <AddBook />
        </div>
    )
}