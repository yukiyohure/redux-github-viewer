import issueReducer from './issue';
import profileReducer from './profile';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  issue: issueReducer,
  profile: profileReducer
});

export default rootReducers;