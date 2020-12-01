import React from 'react';

const MovieCard = () =>{
  return(
    <div className='movie__card'>
      <img src={require('../images/moviePoster.jpg')} alt='logo' className='logo'/>
      <span className='movie_title'>Movie Title</span>
      <span className='release_date'>01/01/2020</span>
    </div>
  )
}

export default MovieCard;