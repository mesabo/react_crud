import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  // Other reducers can be added here
});

export default rootReducer;
