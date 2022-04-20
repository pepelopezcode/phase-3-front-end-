import React from "react";
import ReviewForm from "./ReviewForm";

function Movie({handleClick}){
    return(
    <div>
        <button onClick={() => handleClick()} >Back</button>
        <><h1>Movie title</h1></>
        <div>Movie description </div>
        <div>Movie Reviews</div>
        <><ReviewForm /></>
        
    </div>)
}

export default Movie;