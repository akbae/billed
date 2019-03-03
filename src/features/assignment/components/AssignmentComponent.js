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
  resetAssignedItems,
  submitAssignments,
} from '../actions/assignmentActions';

class AssignmentComponent extends React.Component {
  render() {
    const {
      assignee,
      unassignedItems,
      assignments,
      navigation,
    } = this.props;

    return (
      <View style={styles.assignmentView}>
        <View style={styles.assignmentControlsView}>
          {
            unassignedItems.length !== 0 &&
            <Input
              containerStyle={styles.assigneeInput}
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
          }
          <View style={styles.assignmentButtonsView}>
            <Button
              buttonStyle={styles.assignmentAssignButton}
              containerStyle={styles.assignmentAssignButtonCtr}
              disabled={
                !assignee ||
                unassignedItems.length === 0 ||
                unassignedItems.filter(item => item.checked).length === 0
              }
              title='Assign'
              onPress={() => this.props.assignCheckedItems()}
            />
            <Button
              buttonStyle={styles.assignmentResetButton}
              containerStyle={styles.assignmentResetButtonCtr}
              disabled={assignments.size === 0}
              title='Reset'
              onPress={() => this.props.resetAssignedItems()}
            />
          </View>
        </View>
        {
          unassignedItems.length != 0 &&
          <View style={styles.assignmentItemsView}>
            <ScrollView
              style={styles.assignmentItemsScrollView}>
              <View style={styles.assignmentItemsSubView}>
                {
                  unassignedItems.map((item, index) => (
                    <ListItem
                      containerStyle={styles.assignmentItem}
                      key={index}
                      title={
                        <CheckBox
                          containerStyle={styles.assignmentCheckBox}
                          checked={item.checked}
                          title={
                            <View style={styles.assignmentCheckBoxView}>
                              <Text style={styles.assignmentCheckBoxText}>
                                {item.name}
                              </Text>
                              <Text style={styles.assignmentCheckBoxText}>
                                {item.price.toFixed(2)}
                              </Text>
                            </View>
                          }
                          onPress={() => this.props.checkItem(index)}
                        />
                      }
                    />
                  ))
                }
              </View>
            </ScrollView>
          </View>
        }
        {
          assignments.size != 0 &&
          <View style={styles.assignmentGroupsView}>
            <ScrollView
              style={styles.assignmentGroupsScrollView}
              ref={(ref) => this.groupsScrollView = ref}
              onContentSizeChange={(width, height) => {
                this.groupsScrollView.scrollTo({x: 0, y: height, animated: true})
              }}>
              <View style={styles.assignmentGroupsSubView}>
                {
                  [...assignments.keys()].map(person => (
                    <Card
                      containerStyle={styles.assignmentGroupCard}
                      key={person}
                      title={person}>
                      {
                        assignments.get(person).map((item, index) => (
                          <ListItem
                            containerStyle={styles.assignmentGroupItem}
                            key={index}
                            title={item.name}>
                          </ListItem>
                        ))
                      }
                    </Card>
                  ))
                }
              </View>
            </ScrollView>
          </View>
        }
        {
          <Button
            containerStyle={styles.assignmentNavigateButton}
            disabled={unassignedItems.length !== 0}
            title='To Bill'
            onPress={() => {
              this.props.submitAssignments(assignments);
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
    unassignedItems,
    originalItems,
    assignments,
  } = state.assignment;
  return { assignee, unassignedItems, originalItems, assignments };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    editAssignee,
    checkItem,
    assignCheckedItems,
    resetAssignedItems,
    submitAssignments,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentComponent);
