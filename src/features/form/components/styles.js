import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
  },
  // CostFormComponent
  costFormView: {
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  costFormInput: {
    flex: 1,
  },
  // UserFormComponent
  userFormView: {
    alignItems: 'stretch',
    backgroundColor: '#ddd',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userFormListItem: {
    width: 180,
  },
  userFormListItemInput: {
  },
  // ItemFormComponent
  itemFormView: {
    alignItems: 'stretch',
    backgroundColor: '#eee',
    flex: 3,
  },
  itemFormListItem: {
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
});

export default styles;
