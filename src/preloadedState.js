import { Item } from './models/item';

const items = [
  new Item('Fries', '3.00'),
  new Item('Burger', '7.50'),
  new Item('Drink', '1.50'),
  new Item('Shake', '3.00'),
];

const assignments = [
  Object.assign([
    new Item('Burger', '7.50'),
    new Item('Drink', '1.50'),
  ], {
    subtotal: 9.00,
    tax: 0.90,
    tip: 2.10,
    total: 12.00,
  }),
  Object.assign([
    new Item('Fries', '3.00'),
    new Item('Shake', '3.00'),
  ], {
    subtotal: 6.00,
    tax: 0.60,
    tip: 1.40,
    total: 8.00,
  }),
]

export const preloadedState = {
  costForm: {
    subtotal: '',
    tax: '1.50',
    tip: '3.50',
    total: '20',
  },
  itemForm: {
    items: items,
    itemNamingCount: 1,
  },
  assignment: {
    unassignedItems: items,
    originalItems: items,
    assignedItemGroups: [],
  },
  bill: {
    assignments: assignments,
    subtotal: NaN,
    tax: 3.50,
    tip: 1.50,
    total: 20,
  }
}
