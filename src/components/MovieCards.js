import React from 'react';


function MovieCards({handleClick, movieInfo}){




    return (<>
        {movieInfo.map(movie => {
            
            
            
            let averageRatingArray = movie.reviews.map(review => { return (review.rating)})
            
            const averageRating = arr => arr.reduce((a,b) => a + b, 0) / arr.length



            return ( <div key={movie.id} className='card' onClick={() => handleClick(movie.id) }>
            <h3>{movie.name}</h3>
            <img src={require(`../images/${movie.image }`)} alt='img' className='cardImage'/>
            <h5>Average Rating: {averageRating(averageRatingArray)}/10</h5>
            </div>)
        })}
    </>)
}

export default MovieCards;
