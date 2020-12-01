export default function genre(movies){
  return{
    type: 'FETCH_GENRE',
    movies: movies
  }
}