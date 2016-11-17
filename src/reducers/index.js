import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import photos from './photos';

const appReducer = combineReducers({
  routing: routerReducer,
  photos,
});

export default appReducer;
