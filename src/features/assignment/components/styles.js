import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  assignmentView: {
    backgroundColor: 'black',
    flex: 1,
  },
  assignmentItemsView: {
    flex: 0,
    maxHeight: 400,
  },
  assignmentControlsView: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  assigneeInputContainer: {
    flex: 1,
  },
  assigneeInput: {
    color: 'floralwhite',
  },
  assigneeIcon: {
    marginRight: 5,
  },
  assignmentButtonsView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row-reverse',
  },
  assignmentResetButton: {
    backgroundColor: 'crimson',
  },
  assignmentResetButtonCtr: {
    marginRight: 5,
  },
  assignmentAssignButton: {
  },
  assignmentAssignButtonCtr: {
    marginRight: 5,
  },
  assignmentItemsScrollView: {
  },
  assignmentItemsSubView: {
  },
  assignmentItem: {
    backgroundColor: 'black',
    padding: 0,
  },
  assignmentCheckBox: {
    backgroundColor: 'black',
  },
  assignmentCheckBoxView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  assignmentCheckBoxText: {
    color: 'floralwhite',
    flex: 0,
  },
  assignmentGroupsView: {
    flex: 1,
  },
  assignmentGroupsScrollView: {
  },
  assignmentGroupsSubView: {
  },
  assignmentGroupCard: {
    backgroundColor: 'black',
    padding: 5,
  },
  assignmentGroupItem: {
    backgroundColor: 'black',
    padding: 3,
    margin: 5,
  },
  assignmentGroupItemTitle: {
    color: 'floralwhite',
  },
  assignmentNavigateButton: {
    margin: 10,
  },
});

export default styles;
