import { combineReducers } from 'redux';

import assignmentReducer from '../features/assignment/reducers/assignmentReducer';
import billReducer from '../features/bill/reducers/billReducer';
import costFormReducer from '../features/form/reducers/costFormReducer';
import itemFormReducer from '../features/form/reducers/itemFormReducer';
import userFormReducer from '../features/form/reducers/userFormReducer';

export default combineReducers({
  assignment: assignmentReducer,
  bill: billReducer,
  costForm: costFormReducer,
  itemForm: itemFormReducer,
  // userForm: userFormReducer,
});
