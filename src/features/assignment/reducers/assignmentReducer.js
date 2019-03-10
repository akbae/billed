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
  statuses: [], // Status of items: 'error' => recently reset, 'primary' => added previously, 'success' => recently added
  items: [],
  assignments: new Map(),
};

const initChecked = (items) => {
  const checked = [];
  for(var i = 0; i < items.length; i++) {
    checked.push(false);
  }
  return checked;
};

const initStatuses = (items) => {
  const statuses = [];
  for(var i = 0; i < items.length; i++) {
    statuses.push('primary');
  }
  return statuses;
}

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Invoked in ItemFormComponent
    case SUBMIT_ITEMS: {
      const { items } = action.payload;

      // Set all item indices to checked: false
      const checked = initChecked(items);
      // Set all badge statuses to primary
      const statuses = initStatuses(items);

      return Object.assign({}, state, {
        checked,
        statuses,
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
      const { assignee, checked, statuses, items, assignments } = state;

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

      // Uncheck everything
      const changedChecked = initChecked(items);
      const changedStatuses = statuses.map((status, index) => {
        // Change recent assignment to success
        if(assignment.includes(index)) {
          return 'success';
        }
        // Change previous assignments to primary
        if(status === 'success') {
          return 'primary';
        }
        return status;
      });

      return Object.assign({}, state, {
        assignee: '',
        checked: changedChecked,
        statuses: changedStatuses,
        assignments: changedAssignments,
      });
    }
    case RESET_ASSIGNMENT: {
      const { checked, statuses, items, assignments } = state;

      const changedChecked = initChecked(items);
      // No items checked
      if(checked.every(check => !check)) {
        const latestAssignment = [...assignments.values()].slice(-1);
        const changedStatuses = statuses.map(status => {
          // Change latest assignment to error
          if(status === 'success') {
            return 'error';
          }
          return status;
        });

        // Remove latest assignment
        const changedAssignments = new Map([...assignments.entries()].slice(0, -1))

        return Object.assign({}, state, {
          assignee: '',
          checked: changedChecked,
          statuses: changedStatuses,
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

      const changedChecked = initChecked(items);

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
