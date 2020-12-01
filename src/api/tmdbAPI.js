import axios from 'axios';

const apiKey = '76c3be5a646cbc1177651e80edcb2529';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const upcomingUrl = `${url}/movie/upcoming`;
const genreUrl = `${url}genre/movie/list`;
const movieUrl = `${url}/movie`;

export const nowPlayingTMDB = async () => {
  const response =  axios.get(nowPlayingUrl, {
    params: {
      api_key: apiKey,
      language: 'en_US',
      page: 1
    }
  })
  .then()
}