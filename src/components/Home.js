import React,{useState, useEffect} from 'react';

import Movie from './Movie';
import Title from './Title';
import MovieCards from './MovieCards';

function Home() {
  const [currentPage, setCurrentPage] = useState(false)
  const [movieInfo, setMovieInfo] = useState([])

  function handleClick(){
    setCurrentPage(!currentPage)
    console.log(1)
  }

  useEffect(() => {
    fetch('http://localhost:9292/movies')
      .then(resp => resp.json())
      .then(data => setMovieInfo(data))
  },[])


  return (
  <div><Title />
  {currentPage ? <Movie handleClick={handleClick} /> : <MovieCards movieInfo={movieInfo} handleClick={handleClick} />}
  </div>
    
    
  );
}

export default Home;
