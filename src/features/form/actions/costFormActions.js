import {
  EDIT_SUBTOTAL,
  EDIT_TAX,
  EDIT_TIP,
  EDIT_TOTAL,
  CHECK_CALCULATE_TIP,
  EDIT_TIP_PERCENT,
  CHECK_INCLUDE_TAX,
  SUBMIT_COSTS,
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

export const checkCalculateTip = () => (
  {
    type: CHECK_CALCULATE_TIP,
  }
);

export const editTipPercent = (percent) => (
  {
    type: EDIT_TIP_PERCENT,
    payload: {
      percent,
    },
  }
);

export const checkIncludeTax = () => (
  {
    type: CHECK_INCLUDE_TAX,
  }
);

export const submitCosts = (costs, calculateTip) => {
  const { subtotal, tax, tip, total } = costs;
  let convert = parseFloat(subtotal);
  costs.subtotal = isNaN(convert) ? 0.0 : convert;
  convert = parseFloat(tax);
  costs.tax = isNaN(convert) ? 0.0 : convert;
  convert = parseFloat(tip);
  costs.tip = isNaN(convert) ? 0.0 : convert;
  convert = parseFloat(total);
  costs.total = isNaN(convert) ? 0.0 : convert;

  const { percent } = calculateTip;
  convert = parseFloat(percent);
  calculateTip.percent = isNaN(convert) ? 0.0 : convert;

  return {
    type: SUBMIT_COSTS,
    payload: {
      calculateTip,
      costs,
    },
  };
}
