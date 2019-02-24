import { combineReducers } from 'redux';

import assignmentReducer from '../features/assignment/reducers/assignmentReducer';
import billReducer from '../features/bill/reducers/billReducer';
import formReducer from '../features/form/reducers/formReducer';

export default combineReducers({
  assignment: assignmentReducer,
  bill: billReducer,
  form: formReducer,
});
