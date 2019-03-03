import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  assignmentView: {
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
  assigneeInput: {
    flex: 1,
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
    padding: 0,
  },
  assignmentCheckBox: {
  },
  assignmentCheckBoxView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  assignmentCheckBoxText: {
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
    padding: 5,
  },
  assignmentGroupItem: {
    padding: 3,
    margin: 5,
  },
  assignmentNavigateButton: {
    margin: 10,
  },
});

export default styles;
