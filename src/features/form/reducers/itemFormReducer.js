import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../actions/actionTypes';
import { Item } from '../../../models/item';

const INITIAL_STATE = {
  items: [],
};

const itemFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { items } = state;

      const changedItems = [
        ...items.slice(),
        new Item('Item ' + items.length, '0.00')
      ];

      return { items: changedItems };
    }
    case EDIT_ITEM: {
      const { items } = state;
      const { itemIndex, name } = action.payload;

      const changedItems = items.map((item, index) => {
        if(index !== itemIndex) {
          return item;
        }

        return new Item(name);
      })

      return { items: changedItems };
    }
    case REMOVE_ITEM: {
      const { items } = state;
      const { itemIndex } = action.payload;

      let changedItems = items.slice()
      changedItems.splice(itemIndex, 1);

      return { items: changedItems };
    }
    default:
      return state
  }
};

export default itemFormReducer;
