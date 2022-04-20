import React from 'react';
import will from '../images/will_smith.jpg'

function MovieCards({handleClick, movieInfo}){

    

    


    return (<>
        {movieInfo.map(movie => {
            return ( <div key={movie.id} className='card' onClick={() => handleClick(movie.id) }>
            <h3>{movie.name}</h3>
            <img src={will} alt='img' className='cardImage'/>
            <h5>Average Rating: {movie.avg_rating}/10</h5>
            </div>)
        })}
    </>)
}

export default MovieCards;
