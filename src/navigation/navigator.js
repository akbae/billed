import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import AssignmentComponent from '../features/assignment/components/assignmentComponent';
import BillComponent from '../features/bill/components/billComponent';
import FormComponent from '../features/form/components/formComponent';

export const Navigator = createAppContainer(createStackNavigator({
  Form: { screen: FormComponent },
  Assignment: { screen: AssignmentComponent },
  Bill: { screen: BillComponent },
}));

export default Navigator;
