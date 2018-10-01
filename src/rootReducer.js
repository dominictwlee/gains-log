import { combineReducers } from 'redux';
import programmes from './programmes/reducers';

const rootReducer = combineReducers({
  programmes,
});

export default rootReducer;
