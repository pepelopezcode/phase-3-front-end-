import React from "react";



function ReviewForm(){
    return(
    <div>
        <form  >
        <label>Comment:
        <input
            type="text" 
            placeholder="Comment here"
            onChange={(e) => console.log(e.target.value)}
        />
        </label>
        <label>Rating:
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </label>
        <input type="submit" className="submitButton"/>
        </form>
    </div>)
}

export default ReviewForm;