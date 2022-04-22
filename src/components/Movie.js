import React, {useState, useEffect} from "react";
import ReviewForm from "./ReviewForm";

function Movie({handleClick, chosenMovie, setReviews, reviews}){

    const [commentValue, setCommentValue] = useState("")
    const [ratingValue, setRatingValue] = useState("")
    const [users, setUsers] = useState(null)
    const [userId, setUserId] = useState(0)
    


    useEffect(() => {
        fetch('http://localhost:9292/users')
            .then(resp => resp.json())
            .then(data => setUsers(data))
        
        setReviews(chosenMovie.reviews)
        
    },[])

    function handleSubmit(e){
        e.preventDefault()
        
        fetch('http://localhost:9292/reviews',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'rating': ratingValue,
        'comment': commentValue,
        'movie_id': chosenMovie.id,
        'user_id': userId
        })
    })
        .then(resp => resp.json())
        .then(data => setReviews([...reviews, data]))

    
    }


    useEffect(() => {
        
        users === null ? console.log(users) : setUserId(users[users.length - 1].id)

    },[users])

    function deleteReview(review){

        
        fetch(`http://localhost:9292/reviews/${review.id}`,{
        method: 'DELETE'
    })
    setReviews(reviews.filter(r => r !== review))
    
    }

    function patchReview(review){

        const reviewArrayWithNewRevivew = reviews.filter(r => r !== review)
        fetch(`http://localhost:9292/reviews/${review.id}`,{
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'rating': ratingValue,
        'comment': commentValue
    })
    })
        .then(resp => resp.json())
        .then(data => setReviews([...reviewArrayWithNewRevivew, data]))

    
    }


    return(
    <div>
        <button onClick={() => handleClick()} className="backButton">Back</button>
        <><h1 className="movieReviewsTitle">{chosenMovie.name}</h1></>
        <img src={require(`../images/${chosenMovie.image }`)} className="reviewImage" alt={chosenMovie.name} />
        <div className="reviews" ><h2 className="movieReviewsTitle" >Reviews</h2>{reviews.map(review => {
            if (review.user_id === userId){
                
                return (<div key={review.id} >
                    <h3>{review.comment}</h3>
                    <h2>Rating: {review.rating}/10</h2>
                    <button onClick={() => deleteReview(review)} className="deleteButton">delete</button>
                    <button onClick={() => patchReview(review)} className="updateButton">update</button>
                    </div>)
            }else{
                return (<div key={review.id} >
            <h3>{review.comment}</h3>
            <h2>Rating: {review.rating}/10</h2>
            </div>)
            }
        })}</div>

        <><ReviewForm setCommentValue={setCommentValue} setRatingValue={setRatingValue} handleSubmit={handleSubmit} /></>
        
    </div>)
}

export default Movie;