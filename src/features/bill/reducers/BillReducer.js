import { SUBMIT_ASSIGNMENTS } from '../../assignment/actions/actionTypes';
import { SUBMIT_COSTS } from '../../form/actions/actionTypes';
import { Alert } from 'react-native';

const INITIAL_STATE = {
  bills: new Map(),
  subtotal: 0.0,
  tax: 0.0,
  tip: 0.0,
  total: 0.0,
};

const getSubtotal = (group) => {
  Alert.alert(group.map(item => item.price).toString(), group.map(item => item.price).reduce((a, b) => (a + b), 0.0).toString())
  return group.map(item => item.price).reduce((a, b) => (a + b), 0.0)
};

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

      // Total is required
      if(costs.total === 0) {
        return state;
      }

      return Object.assign({}, state, costs);
    }
    // Invoked in AssignmentComponent
    case SUBMIT_ASSIGNMENTS: {
      const { subtotal, tax, tip, total } = state;
      const { assignments } = action.payload;

      // Assumption that subtotal is correct due to previous validation
      // If subtotal was not provided, calculate from items
      let _subtotal = 0;
      if(subtotal > 0) {
        _subtotal = subtotal;
      } else {
        for(const assignment of assignments.values()) {
          _subtotal += getSubtotal(assignment);
        };
      }

      const bills = new Map();
      assignments.forEach((assignment, assignee) => {
        const billSubtotal = getSubtotal(assignment);
        const billTotal = getBillTotal(billSubtotal, _subtotal, total);
        let billTax = getResponsibleAmount(tax, billSubtotal, _subtotal);
        let billTip = getResponsibleAmount(tip, billSubtotal, _subtotal);
        if(!billTax && billTip) { // Deduce from billTip
          billTax = billTotal - billSubtotal - billTip;
        }
        if(!billTip && billTax) { // Deduce from billTax
          billTip = billTotal - billSubtotal - billTax;
        }
        bills.set(assignee, Object.assign({},
          {
            items: assignment,
            subtotal: billSubtotal,
            tax: billTax,
            tip: billTip,
            total: billTotal,
          }
        ))
      });

      return Object.assign({}, state, {
        bills,
      });
    }
    default:
      return state
  }
};

export default billReducer;
