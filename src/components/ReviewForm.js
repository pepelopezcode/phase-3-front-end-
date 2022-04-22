import React from "react";



function ReviewForm({setCommentValue, setRatingValue, handleSubmit}){




    return(
    <div className="reviewForm">
        <form onSubmit={(e) => handleSubmit(e)} >
        <label>Comment:
        <input
            type="text" 
            placeholder="Comment here"
            onChange={(e) =>setCommentValue(e.target.value)}
        />
        </label>
        <label>Rating:
        <select  onChange={(e)=> setRatingValue(e.target.value) } >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </label>
        <input type="submit" className="submitButton"/>
        </form>
    </div>)
}

export default ReviewForm;