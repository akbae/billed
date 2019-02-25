import {
  EDIT_SUBTOTAL, EDIT_TAX, EDIT_TIP, EDIT_TOTAL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  subtotal: '0.00',
  tax: '',
  tip: '',
  total: '0.00',
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_SUBTOTAL: {
      const { subtotal } = action.payload;
      return Object.assign({}, state, {subtotal: subtotal});
    }
    case EDIT_TAX: {
      const { tax } = action.payload;
      return Object.assign({}, state, {tax: tax});
    }
    case EDIT_TIP: {
      const { tip } = action.payload;
      return Object.assign({}, state, {tip: tip});
    }
    case EDIT_TOTAL: {
      const { total } = action.payload;
      return Object.assign({}, state, {total: total});
    }
    default:
      return state
  }
};

export default formReducer;
