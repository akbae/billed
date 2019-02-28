import { SUBMIT_ASSIGNMENTS } from '../../assignment/actions/actionTypes';
import { SUBMIT_COSTS } from '../../form/actions/actionTypes';
import { Alert } from 'react-native';

const INITIAL_STATE = {
  assignments: [],
  subtotal: 0.0,
  tax: 0.0,
  tip: 0.0,
  total: 0.0,
};

const getBillSubtotal = (group) => (
  // Avoid empty array since the initial value is not the desired format (float)
  group.length > 0
  ? group.reduce((a, b) => a.price + b.price, { price: 0.0 })
  : 0.0
);

const getResponsibleAmount = (amount, billSubtotal, subtotal) => (
  // Prevent divide by 0, default to 0.0
  (subtotal > 0) ? (amount * billSubtotal / subtotal) : 0.0
);

const getBillTotal = (amount, subtotal, total) => (
  // Prevent divide by 0, default to 0.0
  (subtotal > 0) ? (amount * total / subtotal) : 0.0
);

const billReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Invoked in CostFormComponent
    case SUBMIT_COSTS: {
      const { costs } = action.payload;

      return Object.assign({}, state, costs);
    }
    // Invoked in AssignmentComponent
    case SUBMIT_ASSIGNMENTS: {
      const { subtotal, tax, tip, total } = state;
      const { assignedItemGroups } = action.payload;

      // Assumption that subtotal is correct due to previous validation
      // If subtotal was not provided, calculate from items
      const _subtotal = (subtotal > 0)
        ? subtotal
        : assignedItemGroups.reduce((a, b) => (
            getBillSubtotal(a) + getBillSubtotal(b)), []);

      const assignments = assignedItemGroups.map(group => {
        const billSubtotal = getBillSubtotal(group);
        return Object.assign(group,
          {
            subtotal: billSubtotal,
            tax: getResponsibleAmount(tax, billSubtotal, _subtotal),
            tip: getResponsibleAmount(tip, billSubtotal, _subtotal),
            total: getBillTotal(billSubtotal, _subtotal, total),
          }
        );
      });

      return Object.assign({}, state, {
        assignments,
      });
    }
    default:
      return state
  }
};

export default billReducer;
