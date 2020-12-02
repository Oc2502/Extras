import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/fetchNowPlayingReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));