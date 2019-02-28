import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, CheckBox, ListItem, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import {
  checkItem,
  checkAllItems,
  assignCheckedItems,
  resetAssignedItems,
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
        <View style={styles.assignmentControlsView}>
          {
            unassignedItems.length > 1 &&
            <CheckBox
              containerStyle={styles.assignmentCheckAll}
              checked={unassignedItems.every(item => item.checked)}
              onPress={() => this.props.checkAllItems()}
            />
          }
          <View style={styles.assignmentButtonsView}>
            {
              unassignedItems.length !== 0 &&
              <Button
                buttonStyle={styles.assignmentAssignButton}
                containerStyle={styles.assignmentAssignButtonCtr}
                title='Assign'
                onPress={() => this.props.assignCheckedItems()}
              />
            }
            {
              assignedItemGroups.length > 0 &&
              <Button
                buttonStyle={styles.assignmentResetButton}
                containerStyle={styles.assignmentResetButtonCtr}
                title='Reset'
                onPress={() => this.props.resetAssignedItems()}
              />
            }
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
          assignedItemGroups.length != 0 &&
          <View style={styles.assignmentGroupsView}>
            <ScrollView
              style={styles.assignmentGroupsScrollView}
              ref={(ref) => this.groupsScrollView = ref}
              onContentSizeChange={(width, height) => {
                this.groupsScrollView.scrollTo({x: 0, y: height, animated: true})
              }}>
              <View style={styles.assignmentGroupsSubView}>
                {
                  assignedItemGroups.map((group, groupIndex) => (
                    <Card
                      containerStyle={styles.assignmentGroupCard}
                      key={groupIndex}>
                      {
                        group.map((item, index) => (
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
    assignCheckedItems,
    resetAssignedItems,
    submitAssignments,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentComponent);
