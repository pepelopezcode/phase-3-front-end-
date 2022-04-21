import React from 'react';


function MovieCards({handleClick, movieInfo}){


    console.log(movieInfo)


    return (<>
        {movieInfo.map(movie => {
            return ( <div key={movie.id} className='card' onClick={() => handleClick(movie.id) }>
            <h3>{movie.name}</h3>
            <img src={require(`../images/${movie.image }`)} alt='img' className='cardImage'/>
            <h5>Average Rating: {movie.avg_rating}/10</h5>
            </div>)
        })}
    </>)
}

export default MovieCards;
