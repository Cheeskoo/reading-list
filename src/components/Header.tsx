import { FaPlus } from "react-icons/fa6"
import { LiaBookSolid } from "react-icons/lia"
import { Link, useLocation } from "react-router"

export default function Header(){
  const {pathname} = useLocation()
  return(
    <header>
      <nav className="navbar">
        <div className="navbar__left">
            <LiaBookSolid className="navbar__icon"/>
            <Link to="/" className="link navbar__title">Reading List</Link>
        </div>
        <div className="navbar__right"> 
          {pathname === "/" && 
          <Link 
            to="/books/new"
            className="link btn navbar__add-btn">
            <FaPlus className="navbar__icon-btn"/>
              Add book
            </Link>}
        </div>
      </nav>
    </header>
  )
}