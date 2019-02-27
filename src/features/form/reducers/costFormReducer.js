import {
  EDIT_SUBTOTAL, EDIT_TAX, EDIT_TIP, EDIT_TOTAL, SUBMIT_COSTS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  subtotal: '',
  tax: '',
  tip: '',
  total: '',
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_SUBTOTAL: {
      const { subtotal } = action.payload;
      return Object.assign({}, state,
        { subtotal });
    }
    case EDIT_TAX: {
      const { tax } = action.payload;
      return Object.assign({}, state,
        { tax });
    }
    case EDIT_TIP: {
      const { tip } = action.payload;
      return Object.assign({}, state,
        { tip });
    }
    case EDIT_TOTAL: {
      const { total } = action.payload;
      return Object.assign({}, state,
        { total });
    }
    case SUBMIT_COSTS: {
      // TODO validation
      return state;
    }
    default:
      return state
  }
};

export default formReducer;
