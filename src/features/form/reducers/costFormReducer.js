import {
  ADD_SUBTOTAL,
  ADD_TAX, REMOVE_TAX,
  ADD_TIP, REMOVE_TIP,
  ADD_TOTAL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  subtotal: 0,
  tax: 0,
  tip: 0,
  total: 0,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SUBTOTAL: {
      const { subtotal } = action.payload;
      return Object.assign({}, state, {subtotal: subtotal});
    }
    case ADD_TAX: {
      const { tax } = action.payload;
      return Object.assign({}, state, {tax: tax});
    }
    case REMOVE_TAX: {
      return Object.assign({}, state, {tax: 0});
    }
    case ADD_TIP: {
      const { tip } = action.payload;
      return Object.assign({}, state, {tip: tip});
    }
    case REMOVE_TIP: {
      return Object.assign({}, state, {tip: 0});
    }
    case ADD_TOTAL: {
      const { total } = action.payload;
      return Object.assign({}, state, {total: total});
    }
    default:
      return state
  }
};

export default formReducer;
