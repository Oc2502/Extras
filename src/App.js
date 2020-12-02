import React from 'react';
import './App.css';
import './normalize.css';
import NowPlayingTMDB from './api/NowPlayingTMDB';

const App = () => {
  return(
    <div className='main__page'>
      <NowPlayingTMDB />
    </div>
  )
}

export default App;