import { combineReducers } from 'redux';
import searchReducer from './searchReducre';

export default combineReducers({
  movies: searchReducer
});
