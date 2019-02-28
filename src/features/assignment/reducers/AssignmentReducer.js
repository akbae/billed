import {
  CHECK_ITEM,
  CHECK_ALL_ITEMS,
  RESET_ASSIGNED_ITEMS,
  ASSIGN_CHECKED_ITEMS,
  SUBMIT_ASSIGNMENTS,
} from '../actions/actionTypes'
import { SUBMIT_ITEMS } from '../../form/actions/actionTypes';
import { Alert } from 'react-native';

const INITIAL_STATE = {
  unassignedItems: [],
  originalItems: [],
  assignedItemGroups: [],
};

const assignmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Invoked in ItemFormComponent
    case SUBMIT_ITEMS: {
      const { items } = action.payload;

      const submittedItems = items.map(item => Object.assign(item,
        {checked: false}
      ));

      return Object.assign({}, state, {
        unassignedItems: submittedItems,
        originalItems: items,
      });
    }
    case CHECK_ITEM: {
      const { unassignedItems } = state;
      const { itemIndex } = action.payload;

      const changedUnassignedItems = unassignedItems.map((item, index) => {
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
    case CHECK_ALL_ITEMS: {
      const { unassignedItems } = state;

      const allChecked = unassignedItems.every(item => item.checked);
      const changedUnassignedItems = unassignedItems.map(item => Object.assign(item,
        {checked: !allChecked}
      ));

      return Object.assign({}, state, {
        unassignedItems: changedUnassignedItems,
      });
    }
    case ASSIGN_CHECKED_ITEMS: {
      const {
        unassignedItems,
        assignedItemGroups,
      } = state;

      const assignedItemGroup = unassignedItems.filter(item => item.checked);
      if(assignedItemGroup.length === 0) {
        return state;
      }
      const changedUnassignedItems = unassignedItems.filter(item => !item.checked);

      const changedAssignedItemGroups = [
        ...assignedItemGroups.slice(),
        assignedItemGroup,
      ];

      return Object.assign({}, state, {
        unassignedItems: changedUnassignedItems,
        assignedItemGroups: changedAssignedItemGroups,
      });
    }
    case SUBMIT_ASSIGNMENTS: // Reset assignments on submission - TODO validation
    case RESET_ASSIGNED_ITEMS: {
      const { unassignedItems, originalItems } = state;

      const changedUnassignedItems = originalItems.map(item => Object.assign(item,
        {checked: false}
      ));

      return Object.assign({}, state, {
        unassignedItems: changedUnassignedItems,
        assignedItemGroups: [],
      });
    }
    default:
      return state
  }
};

export default assignmentReducer;
