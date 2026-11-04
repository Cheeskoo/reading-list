import React from "react";

export default function CreateBookForm({
    handleSubmit,
}: {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
    return(
        <form onSubmit={handleSubmit}
                  className="addBook__form">
                <label htmlFor="AddBookTitle" className="addBook__label">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="AddBookTitle" 
                    className="addBook__text-input" required/>
                <label htmlFor="AddBookAuthor" className="addBook__label">Author</label>
                <input 
                    type="text" 
                    name="author" 
                    id="AddBookAuthor" 
                    className="addBook__text-input" required/>
                <label htmlFor="AddBookStatus" className="addBook__label">Status</label>
                <select name="status" id="AddBookStatus" className="addBook__select" defaultValue="want_to_read">
                    <option value="want_to_read">want to read</option>
                    <option value="reading">reading</option>
                    <option value="finished">finished</option>
                </select>
                <label htmlFor="AddRating" className="addBook__label">Rating (optional)</label>
                <select name="rating" id="AddRating" className="addBook__select">
                    <option value="">No rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="AddNotes" className="addBook__label">Notes (optional)</label>
                <textarea name="notes" id="AddNotes" className="addBook__text-area"/>
                <div className="addBook__footer">
                    <button type="submit" className="btn addBook__save-btn">
                        Save book
                    </button>
                    <button type="button" className="btn addBook__cancel-btn">
                        Cancel
                    </button>
                </div>
            </form>
    )
}