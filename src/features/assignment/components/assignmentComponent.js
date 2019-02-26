import React from 'react';
import { Text, View } from 'react-native';
import { Button, CheckBox, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import {
  checkItem,
  checkAllItems,
  resetCheckedItems,
  assignCheckedItems,
  submitAssignments,
} from '../actions/assignmentActions';

class AssignmentComponent extends React.Component {
  render() {
    const {
      unassignedItems,
      assignedItemGroups,
      navigation,
    } = this.props;

    return (
      <View style={styles.assignmentView}>
        <View style={styles.assignmentSubView}>
          {
            unassignedItems.length > 1 &&
            <CheckBox
              style={styles.assignmentCheckAll}
              checked={unassignedItems.every(item => item.checked)}
              onPress={() => this.props.checkAllItems()}
            />
          }
          {
            unassignedItems.map((item, index) => (
              <ListItem
                style={styles.assignmentListItem}
                key={index}
                title={
                  <CheckBox
                    checked={item.checked}
                    subtitle={item.price}
                    title={item.name}
                    onPress={() => this.props.checkItem(index)}
                  />
                }
              />
            ))
          }
        </View>
        <Text>{assignedItemGroups.map(g => g.map(item => item.name).join()).join('\n')}</Text>
        <Button
          containerStyle={styles.assignmentResetButton}
          title='Reset'
          onPress={() => this.props.resetCheckedItems()}
        />
        <Button
          containerStyle={styles.assignmentSubmitButton}
          title='Submit Group'
          onPress={() => this.props.assignCheckedItems()}
        />
        <Button
          containerStyle={styles.assignmentNavigateButton}
          title='To Bill'
          onPress={() => {
            this.props.submitAssignments(assignedItemGroups);
            navigation.navigate('Bill');
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // const { users } = state.userForm;
  const {
    unassignedItems,
    originalItems,
    assignedItemGroups
  } = state.assignment;
  return { unassignedItems, originalItems, assignedItemGroups };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    checkItem,
    checkAllItems,
    resetCheckedItems,
    assignCheckedItems,
    submitAssignments,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentComponent);
