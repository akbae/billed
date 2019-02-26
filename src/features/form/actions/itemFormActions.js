import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../actions/actionTypes';

export const addItem = (name, price) => (
  {
    type: ADD_ITEM,
    payload: {
      name,
      price,
    },
  }
);

export const editItem = (itemIndex, name, price) => (
  {
    type: EDIT_ITEM,
    payload: {
      itemIndex,
      name,
      price,
    },
  }
);

export const removeItem = (itemIndex) => (
  {
    type: REMOVE_ITEM,
    payload: {
      itemIndex,
    },
  }
);
