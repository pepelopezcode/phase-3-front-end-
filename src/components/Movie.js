import React, {useState} from "react";
import ReviewForm from "./ReviewForm";

function Movie({handleClick, chosenMovie}){

    const [commentValue, setCommentValue] = useState("")
    const [ratingValue, setRatingValue] = useState("")

    // console.log(chosenMovie)
    // console.log(chosenMovie.reviews)

    function handleSubmit(e){
        e.preventDefault()
        console.log(commentValue)
        console.log(ratingValue)
        console.log(chosenMovie.id)
    }


    return(
    <div>
        <button onClick={() => handleClick()} className="backButton">Back</button>
        <><h1 className="movieReviewsTitle">{chosenMovie.name}</h1></>
        <img src={require(`../images/${chosenMovie.image }`)} className="reviewImage" />
        <div className="reviews" ><h2 className="movieReviewsTitle" >Reviews</h2>{chosenMovie.reviews.map(review => {
            return (<div key={review.id} >
            <h3>{review.comment}</h3><h2>Rating: {review.rating}/10</h2>
            </div>
            
        )})}</div>

        <><ReviewForm setCommentValue={setCommentValue} setRatingValue={setRatingValue} handleSubmit={handleSubmit} /></>
        
    </div>)
}

export default Movie;