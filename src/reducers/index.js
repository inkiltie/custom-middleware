import { combineReducers } from 'redux';
import commentReducer from 'reducers/comments';
import authReducder from 'reducers/auth';

export default combineReducers({
  comments: commentReducer,
  auth: authReducder
});
