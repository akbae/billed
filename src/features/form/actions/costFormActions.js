import {
  ADD_SUBTOTAL,
  ADD_TAX, REMOVE_TAX,
  ADD_TIP, REMOVE_TIP,
  ADD_TOTAL,
} from '../actions/actionTypes';

export const addSubtotal = (subtotal) => (
  {
    type: ADD_SUBTOTAL,
    payload: {
      subtotal: subtotal,
    },
  }
);

export const addTax = (tax) => (
  {
    type: ADD_TAX,
    payload: {
      tax: tax,
    },
  }
);

export const removeTax = () => (
  {
    type: REMOVE_TAX,
  }
);

export const addTip = (tip) => (
  {
    type: ADD_TIP,
    payload: {
      tip: tip,
    },
  }
);

export const removeTip = () => (
  {
    type: REMOVE_TAX,
  }
);

export const addTotal = (total) => (
  {
    type: ADD_TOTAL,
    payload: {
      total: total,
    },
  }
);
