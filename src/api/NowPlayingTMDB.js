import React from 'react';
import axios from 'axios';
import { connect } from "react-redux" ;
import nowPlaying from '../redux/actions/nowPlaying';

// const apiKey = '76c3be5a646cbc1177651e80edcb2529';
// const url = 'https://api.themoviedb.org/3';
// const nowPlayingUrl = `${url}/movie/now_playing`;

class NowPlayingTMDB extends React.Component {
  componentDidMount(){
    const fetchData = 
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=76c3be5a646cbc1177651e80edcb2529&language=en-US&page=1')
    .then(res => {
      console.log(res.data)
     return this.props.nowPlayingMovies(res.data)
    })
    console.log(fetchData)
    
  }

  render(){
    return(
     <div><p>blahblah</p></div>
    )
  }
};

const mapStateToDispatch = {
  nowPlayingMovies: (movies) => nowPlaying(movies),
}

export default connect (null, mapStateToDispatch)(NowPlayingTMDB);
