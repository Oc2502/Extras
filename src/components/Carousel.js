import React from 'react';
import MovieCard from './MovieCard';

const Carousel = () => {
  return(
    <div>
      <h3 className='carousel__title'>Title</h3>
      <div className='carousel'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default Carousel;