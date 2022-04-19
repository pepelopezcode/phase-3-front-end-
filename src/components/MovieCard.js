import React from 'react';
import will from '../images/will_smith.jpg'

function MovieCard(){

    const movieInfo = [{
        "id": 1,
        "title": "Bad Boys",
        "averageRating": 4
    },
    {
        "id": 2,
        "title": "King Richard",
        "averageRating": 3
    },
    {
        "id": 3,
        "title": "I am Legend",
        "averageRating": 1
    },
    {
        "id": 4,
        "title": "Focus",
        "averageRating": 2
    }]


    return (<>
        {movieInfo.map(movie => {
            return ( <div key={movie.id} className='card' >
            <h3>{movie.title}</h3>
            <img src={will} alt='img' className='cardImage'/>
            <h5>Average Rating: {movie.averageRating}/5</h5>
            </div>)
        })}
    </>)
}

export default MovieCard;
