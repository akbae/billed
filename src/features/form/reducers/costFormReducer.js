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

const INITIAL_STATE = {
  calculateTip: {
    includeTax: true,
    percent: 20,
    checked: false,
  },
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

      let newState = Object.assign({}, state,
        { tip });

      if(tip) { // Tip should not be calculated if tip is provided
        newState.calculateTip.checked = false;
      }
      return newState;
    }
    case EDIT_TOTAL: {
      const { total } = action.payload;

      let newState = Object.assign({}, state,
        { total });

      if(total) { // Tip should not be calculated if total is provided
        newState.calculateTip.checked = false;
      }
      return newState;
    }
    case CHECK_CALCULATE_TIP: {
      const { calculateTip } = state;

      return Object.assign({}, state,
        { calculateTip: Object.assign({}, calculateTip,
          { checked: !calculateTip.checked })}
      );
    }
    case EDIT_TIP_PERCENT: {
      const { calculateTip } = state;
      const { percent } = action.payload;

      return Object.assign({}, state,
        { calculateTip: Object.assign({}, calculateTip,
          { percent })}
      );
    }
    case CHECK_INCLUDE_TAX: {
      const { calculateTip } = state;

      return Object.assign({}, state,
        { calculateTip: Object.assign({}, calculateTip,
          { includeTax: !calculateTip.includeTax })}
      );
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
