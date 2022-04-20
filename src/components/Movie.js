import React from "react";
import ReviewForm from "./ReviewForm";

function Movie({handleClick, chosenMovie}){

    console.log(chosenMovie)
    console.log(chosenMovie.reviews)


    return(
    <div>
        <button onClick={() => handleClick()} className="backButton">Back</button>
        <><h1 className="movieReviewsTitle">{chosenMovie.name}</h1></>
        <div className="reviews" ><h2 className="movieReviewsTitle" >{chosenMovie.reviews.map(review => {
            return (<div key={review.id} >
            <h3>{review.comment}</h3><h2>{review.rating}</h2>
            </div>
            
        )})}</h2></div>

        <><ReviewForm /></>
        
    </div>)
}

export default Movie;