import {
  EDIT_SUBTOTAL, EDIT_TAX, EDIT_TIP, EDIT_TOTAL,
} from '../actions/actionTypes';

export const editSubtotal = (subtotal) => (
  {
    type: EDIT_SUBTOTAL,
    payload: {
      subtotal,
    },
  }
);

export const editTax = (tax) => (
  {
    type: EDIT_TAX,
    payload: {
      tax,
    },
  }
);

export const editTip = (tip) => (
  {
    type: EDIT_TIP,
    payload: {
      tip,
    },
  }
);

export const editTotal = (total) => (
  {
    type: EDIT_TOTAL,
    payload: {
      total,
    },
  }
);
