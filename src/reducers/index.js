import issueReducer from './issue';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  issue: issueReducer,
});

export default rootReducers;