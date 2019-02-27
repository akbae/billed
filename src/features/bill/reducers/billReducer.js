import { SUBMIT_ASSIGNMENTS } from '../../assignment/actions/actionTypes';
import { SUBMIT_COSTS } from '../../form/actions/actionTypes';

const INITIAL_STATE = {
  assignments: [],
  subtotal: NaN,
  tax: NaN,
  tip: NaN,
  total: 0.0,
};

const getBillSubtotal = (group) => (
  group.length > 1
  ? group.reduce((a, b) => a.price + b.price)
  : group[0].price
)

const getResponsibleAmount = (amount, billSubtotal, subtotal) => (
  (amount * billSubtotal / subtotal).toFixed(2)
);

const getBillTotal = (amount, subtotal, total) => (
  (amount * total / subtotal).toFixed(2)
);

const billReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Invoked in CostFormComponent
    case SUBMIT_COSTS: {
      const { costs } = action.payload;
      const { subtotal, tax, tip, total } = costs;

      return Object.assign({}, state, {
        subtotal: parseFloat(subtotal),
        tax: parseFloat(tax),
        tip: parseFloat(tip),
        total: parseFloat(total),
      });
    }
    // Invoked in AssignmentComponent
    case SUBMIT_ASSIGNMENTS: {
      const { subtotal, tax, tip, total } = state;
      const { assignedItemGroups } = action.payload;

      // If subtotal was not provided, calculate
      const _subtotal = isNaN(subtotal)
        ? assignedItemGroups.reduce((groupA, groupB) => (
            getBillSubtotal(groupA) + getBillSubtotal(groupB)
          ))
        : subtotal;

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
