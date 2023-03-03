import { combineReducers } from 'redux';
import moviesReducer from './movies';

const rootReduce = combineReducers({
  movies: moviesReducer,
});

export default rootReduce;
