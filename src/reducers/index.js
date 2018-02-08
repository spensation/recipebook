import { combineReducers } from 'redux';
import { recipesReducer } from './recipe';

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default rootReducer
