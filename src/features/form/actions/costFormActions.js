import {
  EDIT_SUBTOTAL, EDIT_TAX, EDIT_TIP, EDIT_TOTAL, SUBMIT_COSTS,
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

export const submitCosts = (costs) => {
  const { subtotal, tax, tip, total } = costs;
  let convert = parseFloat(subtotal);
  const _subtotal = isNaN(convert) ? 0.0 : convert;
  convert = parseFloat(tax);
  const _tax = isNaN(convert) ? 0.0 : convert;
  convert = parseFloat(tip);
  const _tip = isNaN(convert) ? 0.0 : convert;
  convert = parseFloat(total);
  const _total = isNaN(convert) ? 0.0 : convert;
  return {
    type: SUBMIT_COSTS,
    payload: {
      costs: {
        subtotal: _subtotal,
        tax: _tax,
        tip: _tip,
        total: _total,
      },
    },
  };
}
