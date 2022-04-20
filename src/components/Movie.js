import React from "react";
import ReviewForm from "./ReviewForm";

function Movie({handleClick}){
    return(
    <div>
        <button onClick={() => handleClick()} className="backButton">Back</button>
        <><h1 className="movieReviewsTitle">Movie title</h1></>
        <div className="movieDescription"><h2  className="movieReviewsTitle">Movie description</h2></div>
        <div className="reviews" ><h2 className="movieReviewsTitle" >Movie Reviews</h2></div>

        <><ReviewForm /></>
        
    </div>)
}

export default Movie;