import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // UserFormComponent
  userFormView: {
    alignItems: 'stretch',
    flex: 1,
  },
  userFormScrollView: {
  },
  userFormSubView: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userFormListItem: {
    width: 180,
  },
  userFormListItemInput: {
  },
  userFormAddUserButton: {
    margin: 10,
  },
  userFormNavigateButton: {
    margin: 10,
  },
  // CostFormComponent
  costFormView: {
    flex: 1,
  },
  costFormSubView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  costFormInput: {
    width: 180,
  },
  costFormNavigateButton: {
    margin: 10,
  },
  // ItemFormComponent
  itemFormView: {
    alignItems: 'stretch',
    flex: 1,
  },
  itemFormListItem: {
  },
  itemFormScrollView: {
  },
  itemFormSubView: {
    alignItems: 'stretch',
    flex: 1,
  },
  itemFormListItemView: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  itemFormListItemName: {
    flex: 2,
  },
  itemFormListItemPrice: {
    flex: 1,
  },
  itemFormAddItemButton: {
    margin: 10,
  },
  itemFormNavigateButton: {
    margin: 10,
  },
});

export default styles;
