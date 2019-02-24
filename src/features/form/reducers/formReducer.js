import { combineReducers } from 'redux';

import costFormReducer from './costFormReducer';
import itemFormReducer from './itemFormReducer';
import userFormReducer from './userFormReducer';

export default combineReducers({
  cost: costFormReducer,
  item: itemFormReducer,
  user: userFormReducer,
});
