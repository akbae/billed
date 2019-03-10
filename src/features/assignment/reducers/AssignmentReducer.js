import {
  EDIT_ASSIGNEE,
  CHECK_ITEM,
  RESET_ASSIGNED_ITEMS,
  ASSIGN_CHECKED_ITEMS,
  SUBMIT_ASSIGNMENTS,
} from '../actions/actionTypes'
import { SUBMIT_ITEMS } from '../../form/actions/actionTypes';

const INITIAL_STATE = {
  assignee: '',
  unassignedItems: [],
  originalItems: [],
  assignments: new Map(),
};

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Invoked in ItemFormComponent
    case SUBMIT_ITEMS: {
      const { items } = action.payload;

      // Copy over submitted items and set checked to false
      const submittedItems = items.map(item => Object.assign(item,
        {checked: false}
      ));

      return Object.assign({}, state, {
        unassignedItems: submittedItems,
        originalItems: items,
      });
    }
    case EDIT_ASSIGNEE: {
      const { update } = action.payload;

      return Object.assign({}, state,
        {assignee: update}
      );
    }
    case CHECK_ITEM: {
      const { unassignedItems } = state;
      const { itemIndex } = action.payload;

      const changedUnassignedItems = unassignedItems.map((item, index) => {
        // No change to other values
        if(index !== itemIndex) {
          return item;
        }

        // Switch checked value
        return Object.assign(item, {checked: !item.checked});
      })

      return Object.assign({}, state, {
        unassignedItems: changedUnassignedItems,
      });
    }
    case ASSIGN_CHECKED_ITEMS: {
      const {
        assignee,
        unassignedItems,
        assignments,
      } = state;

      // If empty assignee or assignee is already assigned
      if(!assignee || assignments.has(assignee)) {
        return state;
      }

      const assignment = unassignedItems.filter(item => item.checked);
      // If no items to assign
      if(assignment.length === 0) {
        return state;
      }
      const changedUnassignedItems = unassignedItems.filter(item => !item.checked);

      const changedAssignments = new Map(assignments);
      changedAssignments.set(assignee, assignment);

      return Object.assign({}, state, {
        assignee: '',
        unassignedItems: changedUnassignedItems,
        assignments: changedAssignments,
      });
    }
    case SUBMIT_ASSIGNMENTS:  // Reset assignments on submission
    case RESET_ASSIGNED_ITEMS: {
      const {
        originalItems,
      } = state;

      const resetItems = originalItems.map(item => Object.assign(item,
        {checked: false}
      ));

      return Object.assign({}, state,
        {
          assignee: '',
          unassignedItems: resetItems,
          assignments: new Map(),
        }
      );
    }
    default:
      return state
  }
};

export default assignmentReducer;
