import {
  EDIT_ASSIGNEE,
  CHECK_ITEM,
  ASSIGN_CHECKED_ITEMS,
  RESET_ASSIGNED_ITEMS,
  SUBMIT_ASSIGNMENTS,
} from './actionTypes'

export const editAssignee = (update) => (
  {
    type: EDIT_ASSIGNEE,
    payload: {
      update,
    },
  }
)

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

export const submitAssignments = (assignments) => (
  {
    type: SUBMIT_ASSIGNMENTS,
    payload: {
      assignments,
    },
  }
)
