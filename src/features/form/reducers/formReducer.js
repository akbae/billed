const INITIAL_STATE = {
  items: [],
  users: [],
  subtotal: 0,
  tax: 0,
  tip: 0,
  total: 0,
  superUser: '',
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default formReducer;
