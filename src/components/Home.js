import React,{useState} from 'react';

import Movie from './Movie';
import Title from './Title';
import MovieCards from './MovieCards';

function Home() {
  const [currentPage, setCurrentPage] = useState(false)

  function handleClick(){
    setCurrentPage(!currentPage)
    console.log(1)
  }


  return (
  <div><Title />
  {currentPage ? <Movie handleClick={handleClick} /> : <MovieCards handleClick={handleClick} />}
  </div>
    
    
  );
}

export default Home;
