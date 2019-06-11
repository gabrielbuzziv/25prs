import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import posts from './posts';

export default history =>
  combineReducers({
    auth,
    posts,
    router: connectRouter(history),
  });
