import { combineReducers } from 'redux';
import programmesReducer from './programmes/reducers';

const rootReducer = combineReducers({
  programmesReducer,
});

export default rootReducer;
