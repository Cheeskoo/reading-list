import React from "react";
import { FaPlus } from "react-icons/fa6"
import { LiaBookSolid } from "react-icons/lia"

export default function Header({addBtn, setAddBtn}:{
    addBtn: boolean,
    setAddBtn: React.Dispatch<React.SetStateAction<boolean>>
    }){

  return(
    <header>
      <nav className="navbar">
        <div className="navbar__left">
            <LiaBookSolid className="navbar__icon"/>
            <a href="#" className="link navbar__title">Reading List</a>
        </div>
        <div className="navbar-right">
       { addBtn && 
        <button 
        type="button"
        className="btn navbar__add-btn" 
        onClick={()=> setAddBtn(false)}>
        <FaPlus className="navbar__icon-btn"/>
          Add book
        </button>}
        </div>
      </nav>
    </header>
  )
}