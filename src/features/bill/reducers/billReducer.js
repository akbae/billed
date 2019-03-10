import { SUBMIT_ASSIGNMENTS } from '../../assignment/actions/actionTypes';
import { SUBMIT_COSTS } from '../../form/actions/actionTypes';

const INITIAL_STATE = {
  bills: new Map(),
  subtotal: 0.0,
  tax: 0.0,
  tip: 0.0,
  total: 0.0,
};

const getCalculatedTip = (costs, calculateTip) => {
  // Include tax if checked
  const baseCost = (calculateTip.includeTax)
    ? costs.subtotal + costs.tax
    : costs.subtotal;
  return calculateTip.percent / 100.0 * baseCost;
}

const getNumSplits = (items, assignments) => {
  const numSplits = items.map(_ => 0);
  for(const assignment of assignments.values()) {
    assignment.forEach(itemIndex => {
      numSplits[itemIndex]++;
    })
  }
  return numSplits;
}

const getSubtotal = (assignment, items) => {
  return assignment.reduce((acc, index) => (
    acc + items[index].price / items[index].numSplits
  ), 0.0);
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
      const { costs, calculateTip } = action.payload;

      if(calculateTip.checked) {
        costs.tip = getCalculatedTip(costs, calculateTip);
        costs.total = costs.subtotal + costs.tax + costs.tip;
      }

      // Total is required
      if(costs.total === 0) {
        return state;
      }

      return Object.assign({}, state, costs);
    }
    // Invoked in AssignmentComponent
    case SUBMIT_ASSIGNMENTS: {
      const { subtotal, tax, tip, total } = state;
      const { assignments, items } = action.payload;

      const numSplits = getNumSplits(items, assignments);
      const updatedItems = items.map((item, index) => (
        Object.assign({}, item,
          { numSplits: numSplits[index] }
        )
      ));

      // Assumption that subtotal is correct due to previous validation
      // If subtotal was not provided, calculate from items
      let _subtotal = 0;
      if(subtotal > 0) {
        _subtotal = subtotal;
      } else {
        for(const assignment of assignments.values()) {
          _subtotal += getSubtotal(assignment, updatedItems);
        };
      }

      const bills = new Map();
      assignments.forEach((assignment, assignee) => {
        const billSubtotal = getSubtotal(assignment, updatedItems);
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
            items: updatedItems.filter((item, index) => (
              assignment.includes(index)
            )),
            subtotal: billSubtotal,
            tax: billTax,
            tip: billTip,
            total: billTotal,
          }
        ));
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
