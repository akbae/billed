import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../actions/actionTypes';
import { Item } from '../../../models/item';

const INITIAL_STATE = {
  items: [],
  // TextInput props
  style: {
    height: 100,
    width: 100,
  },
  placeholder: 'Add Item',
};

const userFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { items } = state;

      const { name, price } = action.payload;
      items.push(new Item(name, price));

      const newState = { items };
      return newState;
    }
    case EDIT_ITEM: {
      const { items } = state;

      const { itemIndex, name, price } = action.payload;
      items[itemIndex].update(name, price);

      const newState = { items };
      return newState;
    }
    case REMOVE_ITEM: {
      const { items } = state;

      const { itemIndex } = action.payload;
      items.splice(itemIndex, 1);

      const newState = { items };
      return newState;
    }
    default:
      return state
  }
};

export default userFormReducer;
