import { FaStar } from "react-icons/fa6"

export default function Stars({rating} : {rating: number}){
    return(
        <div role="img"
             aria-label={`Stars ${rating} of 5`}
             className="stars">
                {Array.from({length: 5}, (_, i)=>(
                    <FaStar
                        key={i}
                        style={{
                            fontSize: "0.7em",
                            color: i < rating ? '#b45309' : 'lightgray'}}
                            />
                ))}
             </div>
    )
}