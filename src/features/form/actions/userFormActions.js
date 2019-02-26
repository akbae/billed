import { ADD_USER, EDIT_USER, REMOVE_USER } from '../actions/actionTypes';

export const addUser = () => (
  {
    type: ADD_USER,
  }
);

export const editUser = (userIndex, name) => (
  {
    type: EDIT_USER,
    payload: {
      userIndex,
      name,
    },
  }
);

export const removeUser = (userIndex) => (
  {
    type: REMOVE_USER,
    payload: {
      userIndex,
    },
  }
);
