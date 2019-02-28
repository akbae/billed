import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../actions/actionTypes';
import { Item } from '../../../models/item';

const INITIAL_STATE = {
  items: [new Item('Item 1', '')],
  itemNamingCount: 1,
};

const itemFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { items, itemNamingCount } = state;

      const changedItemNamingCount = itemNamingCount + 1;
      const changedItems = [
        ...items.slice(),
        new Item('Item ' + changedItemNamingCount, '')
      ];

      return Object.assign({}, state,
        { items: changedItems, itemNamingCount: changedItemNamingCount });
    }
    case EDIT_ITEM: {
      const { items } = state;
      const { itemIndex, name, price } = action.payload;

      // No difference -> no state change
      if(items[itemIndex].name === name
          && items[itemIndex].price.toString() === price) {
        return state;
      }

      const changedItems = items.map((item, index) => {
        // Leave other items unchanged
        if(index !== itemIndex) {
          return item;
        }

        return new Item(name, price);
      })

      return Object.assign({}, state,
        { items: changedItems });
    }
    case REMOVE_ITEM: {
      const { items } = state;
      const { itemIndex } = action.payload;

      let changedItems = items.slice()
      changedItems.splice(itemIndex, 1);

      return Object.assign({}, state,
        { items: changedItems });
    }
    default:
      return state
  }
};

export default itemFormReducer;
