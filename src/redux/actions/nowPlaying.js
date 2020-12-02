export default function nowPlaying(movies){
  return{
    type: 'FETCH_NOW_PLAYING',
    payload: movies
  }
}
