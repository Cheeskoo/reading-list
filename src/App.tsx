import {BrowserRouter, Routes, Route} from 'react-router'
import RootLayout from "./pages/RootLayout"
import LibraryPage from "./pages/LibraryPage"
import AddBookPage from "./pages/AddBookPage"
import BookPage from "./pages/BookPage"
import NotFoundPage from "./pages/NotFoundPage"


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LibraryPage />} />
          <Route path="books/new" element={<AddBookPage />} />
          <Route path="books/:id" element={<BookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}