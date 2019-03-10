import {
  EDIT_ASSIGNEE,
  CHECK_ITEM,
  ASSIGN_CHECKED_ITEMS,
  RESET_ASSIGNMENT,
  RESET_ALL,
  SUBMIT_ASSIGNMENTS,
} from '../actions/actionTypes'
import { SUBMIT_ITEMS } from '../../form/actions/actionTypes';

const INITIAL_STATE = {
  assignee: '',
  checked: [], // Item index to whether it is checked
  items: [],
  assignments: new Map(),
};

const resetChecked = (items) => {
  const changedChecked = [];
  for(var i = 0; i < items.length; i++) {
    changedChecked.push(false);
  }
  return changedChecked;
};

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Invoked in ItemFormComponent
    case SUBMIT_ITEMS: {
      const { items } = action.payload;

      // Set all item indices to checked: false
      const checked = resetChecked(items);

      return Object.assign({}, state, {
        checked,
        items,
      });
    }
    case EDIT_ASSIGNEE: {
      const { update } = action.payload;

      return Object.assign({}, state,
        {assignee: update}
      );
    }
    case CHECK_ITEM: {
      const { checked } = state;
      const { itemIndex } = action.payload;

      const changedChecked = checked.slice();
      changedChecked[itemIndex] = !checked[itemIndex]

      return Object.assign({}, state, {
        checked: changedChecked,
      });
    }
    case ASSIGN_CHECKED_ITEMS: {
      const { assignee, checked, items, assignments } = state;

      // If empty assignee or assignee is already assigned
      if(assignments.size > 0 && assignments.has(assignee)) {
        return state;
      }

      // Add all checked item indices to assignment
      const assignment = checked.reduce((arr, check, index) => {
        if(check) {
          arr.push(index);
        }
        return arr;
      }, []);
      // If no items to assign
      if(assignment.length === 0) {
        return state;
      }

      const changedAssignments = new Map(assignments);
      changedAssignments.set(assignee, assignment);

      const changedChecked = resetChecked(items);

      return Object.assign({}, state, {
        assignee: '',
        checked: changedChecked,
        assignments: changedAssignments,
      });
    }
    case RESET_ASSIGNMENT: {
      const { checked, items, assignments } = state;

      const changedChecked = resetChecked(items);
      // No items checked
      if(checked.every(check => !check)) {
        // Remove latest assignment
        const changedAssignments = new Map([...assignments.entries()].slice(0, -1))

        return Object.assign({}, state, {
          assignee: '',
          checked: changedChecked,
          assignments: changedAssignments,
        });
      }

      return Object.assign({}, state, {
        assignee: '',
        checked: changedChecked,
      });
    }
    case SUBMIT_ASSIGNMENTS:  // Reset assignments on submission
    case RESET_ALL: {
      const { items } = state;

      const changedChecked = resetChecked(items);

      return Object.assign({}, state,
        {
          assignee: '',
          checked: changedChecked,
          assignments: new Map(),
        }
      );
    }
    default:
      return state
  }
};

export default assignmentReducer;
