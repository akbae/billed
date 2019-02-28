import {
  CHECK_ITEM,
  CHECK_ALL_ITEMS,
  ASSIGN_CHECKED_ITEMS,
  RESET_ASSIGNED_ITEMS,
  SUBMIT_ASSIGNMENTS,
} from './actionTypes'

export const checkItem = (itemIndex) => (
  {
    type: CHECK_ITEM,
    payload: {
      itemIndex,
    },
  }
)

export const checkAllItems = () => (
  {
    type: CHECK_ALL_ITEMS,
  }
)

export const resetAssignedItems = () => (
  {
    type: RESET_ASSIGNED_ITEMS,
  }
)

export const assignCheckedItems = () => (
  {
    type: ASSIGN_CHECKED_ITEMS,
  }
)

export const submitAssignments = (assignedItemGroups) => (
  {
    type: SUBMIT_ASSIGNMENTS,
    payload: {
      assignedItemGroups,
    },
  }
)
