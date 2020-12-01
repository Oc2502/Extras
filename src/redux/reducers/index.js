import { combineReducers } from 'redux';

// movie ----------------------------------------------------
const movieReducer = (state, action) => {
  if(action.type === 'FETCH_MOVIE'){
    return{
      ...state,
      movie: action.movie
    }
  } else {
    return {
      ...state
    }
  }
}

// upcoming ----------------------------------------------------
const upcomingReducer = (state, action) => {
  if(action.type === 'FETCH_UPCOMING'){
    return{
      ...state,
      list: action.list
    }
  } else {
    return {
      ...state
    }
  }
}

// top rated ----------------------------------------------------
const topRatedReducer = (state, action) => {
  if(action.type === 'FETCH_TOP_RATED'){
    return{
      ...state,
      list: action.list
    }
  } else {
    return {
      ...state
    }
  }
}

// now playing ----------------------------------------------------
const nowPlayingReducer = (state, action) => {
  if(action.type === 'FETCH_NOW_PLAYING'){
    return{
      ...state,
      list: action.list
    }
  } else {
    return {
      ...state
    }
  }
}

// genre ----------------------------------------------------
const genreReducer = (state, action) => {
  if(action.type === 'FETCH_GENRE'){
    return{
      ...state,
      list: action.list
    }
  } else {
    return {
      ...state
    }
  }
}

// combine reducers ---------------------------------

export default combineReducers({
  movieReducer,
  upcomingReducer,
  topRatedReducer,
  nowPlayingReducer,
  genreReducer
});