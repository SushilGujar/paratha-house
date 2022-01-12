import { combineReducers } from 'redux';
import userReducer from './user.reducer';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export default combineReducers({
    user: userReducer,
});