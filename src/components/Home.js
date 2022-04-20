import React,{useState, useEffect} from 'react';

import Movie from './Movie';
import Title from './Title';
import MovieCards from './MovieCards';

function Home() {
  const [currentPage, setCurrentPage] = useState(false)
  const [movieInfo, setMovieInfo] = useState([])
  const [chosenMovieId, setChosenMovieId] = useState(0)

  function handleClick(id){
    setCurrentPage(!currentPage)
    setChosenMovieId(id)
  }

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then(resp => resp.json())
      .then(data => setMovieInfo(data))
  },[])

  const chosenMovie = ((movieInfo.filter(movie => chosenMovieId === movie.id))[0])


  return (
  <div><Title />
  {currentPage ? <Movie chosenMovie={chosenMovie} handleClick={handleClick} /> : <MovieCards movieInfo={movieInfo} handleClick={handleClick} />}
  </div>
    
    
  );
}

export default Home;
