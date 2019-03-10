import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button, Card, CheckBox, Input, ListItem, Text
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import {
  editAssignee,
  checkItem,
  assignCheckedItems,
  resetAssignment,
  resetAll,
  submitAssignments,
} from '../actions/assignmentActions';

import AssignmentItemComponent from './assignmentItemComponent';

class AssignmentComponent extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return Object.assign({}, navigationOptions,
      { title: 'Assignments' });
  }

  allItemsAssigned() {
    const { assignments, checked } = this.props;

    const assignedItems = [].concat(...assignments.values());
    return checked.every((check, index) => assignedItems.includes(index));
  }

  numAssignments(itemIndex) {
    const { assignments } = this.props;
    let count = 0;
    for(const assignment of assignments.values()) {
      count += assignment.reduce((acc, index) => (
        acc + (index === itemIndex)
      ), 0);
    }
    return count;
  }

  render() {
    const {
      assignee,
      checked,
      statuses,
      items,
      assignments,
      navigation,
    } = this.props;

    return (
      <View style={styles.assignmentView}>
        <View style={styles.assignmentControlsView}>
          <Input
            containerStyle={styles.assigneeInputContainer}
            inputStyle={styles.assigneeInput}
            leftIconContainerStyle={styles.assigneeIcon}
            leftIcon={
              <Icon
                name='user'
                size={20}
                color='grey'/>
            }
            placeholder='Add assignee'
            selectTextOnFocus={true}
            value={assignee}
            onChangeText={(update) => this.props.editAssignee(update)}
          />
          <View style={styles.assignmentButtonsView}>
            <Button
              buttonStyle={styles.assignmentAssignButton}
              containerStyle={styles.assignmentAssignButtonCtr}
              disabled={
                !assignee ||
                checked.every(check => !check)
              }
              title='Assign'
              onPress={() => this.props.assignCheckedItems()}
            />
            <Button
              buttonStyle={styles.assignmentResetButton}
              containerStyle={styles.assignmentResetButtonCtr}
              disabled={checked.every(check => false) && assignments.size === 0}
              title='Reset'
              onPress={() => this.props.resetAssignment()}
              onLongPress={() => this.props.resetAll()}
            />
          </View>
        </View>
        <View style={styles.assignmentItemsView}>
          <ScrollView
            style={styles.assignmentItemsScrollView}>
            <View style={styles.assignmentItemsSubView}>
              {
                items.map((item, index) => (
                  <AssignmentItemComponent
                    key={index}
                    badge={{
                      status: statuses[index],
                      value: this.numAssignments(index),
                    }}
                    checked={checked[index]}
                    item={item}
                    index={index}
                  />
                ))
              }
            </View>
          </ScrollView>
        </View>
        {
          <Button
            containerStyle={styles.assignmentNavigateButton}
            disabled={!this.allItemsAssigned()}
            title='To Bill'
            onPress={() => {
              this.props.submitAssignments(assignments, items);
              this.props.navigation.navigate('Bill');
            }}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    assignee,
    checked,
    statuses,
    items,
    assignments,
  } = state.assignment;
  return { assignee, checked, statuses, items, assignments };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    editAssignee,
    checkItem,
    assignCheckedItems,
    resetAssignment,
    resetAll,
    submitAssignments,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentComponent);
