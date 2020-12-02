const nowPlayingReducer = (state = [], action) => {
  console.log(action);
  if(action.type === 'FETCH_NOW_PLAYING'){
    return action.payload
  } else {
    return state;
  }
}

export default nowPlayingReducer;