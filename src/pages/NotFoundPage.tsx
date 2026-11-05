import { Link } from "react-router"

export default function NotFoundPage(){
    return(
        <div className="library">
            <h2 className="library__title">Page not found</h2>
            <Link to="/" className="link btn">Back to library</Link>
        </div>
    )
}
