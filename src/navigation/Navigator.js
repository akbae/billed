import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import AssignmentComponent from '../features/assignment/components/assignmentComponent';
import BillComponent from '../features/bill/components/billComponent';
import CostFormComponent from '../features/form/components/costFormComponent';
import ItemFormComponent from '../features/form/components/itemFormComponent';
import UserFormComponent from '../features/form/components/userFormComponent';

export const Navigator = createAppContainer(createStackNavigator({
  // UserForm: { screen: UserFormComponent },
  CostForm: { screen: CostFormComponent },
  ItemForm: { screen: ItemFormComponent },
  Assignment: { screen: AssignmentComponent },
  Bill: { screen: BillComponent },
}));

export default Navigator;
