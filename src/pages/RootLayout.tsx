import { useState, useEffect, useCallback } from "react"
import { Outlet } from "react-router"
import Header from "../components/Header"
import getBooks from "../utils/getBooks"
import type { BookType } from "../utils/types"
import type { BooksContext } from "../utils/booksContext"

export default function RootLayout(){
    const [books, setBooks] = useState<BookType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Carga los libros desde la API y actualiza el estado compartido
    async function loadBooks(){
        try{
            const data = await getBooks()
            setBooks(data)
            setError(null)
        }catch(error){
            setError(error instanceof Error ? error.message : 'The books cannot be reached')
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        async function initialLoad(){ await loadBooks() }
        void initialLoad()
    }, [])

    // Las páginas hijas llaman a esto después de crear/editar/borrar
    const refetch = useCallback(() => loadBooks(), [])

    const context: BooksContext = { books, loading, error, refetch }

    return(
        <>
            <Header />
            <div className="body">
                <Outlet context={context} />
            </div>
        </>
    )
}
