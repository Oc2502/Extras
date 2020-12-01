import React from 'react';
import './App.css';
import './normalize.css';
import Carousel from './components/Carousel';

const App = () => {
  return(
    <div className='main__page'>
      <img src={require('./images/logo.png')} alt='logo' className='logo'/>
      <br />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  )
}

export default App;