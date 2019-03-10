import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // CostFormComponent
  costFormView: {
    backgroundColor: 'black',
    flex: 1,
  },
  costFormSubView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  costFormInputContainer: {
    width: 180,
  },
  costFormInput: {
    color: 'floralwhite',
  },
  costFormTipCheckBox: {
    backgroundColor: 'black',
  },
  costFormTipCheckBoxView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  costformTipCheckBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  costFormTipCheckBoxInputContainer: {
    width: 75,
  },
  costFormTipCheckBoxInput: {
    color: 'floralwhite',
    fontSize: 20,
    textAlign: 'right',
  },
  costFormTipIncludeTax: {
    backgroundColor: 'black',
  },
  costFormTipIncludeTaxTitle: {
    color: 'steelblue',
  },
  costFormNavigateButton: {
    margin: 10,
  },
  // ItemFormComponent
  itemFormView: {
    alignItems: 'stretch',
    backgroundColor: 'black',
    flex: 1,
  },
  itemFormListItem: {
    backgroundColor: 'black',
    borderColor: 'steelblue',
  },
  itemFormScrollView: {
  },
  itemFormSubView: {
    alignItems: 'stretch',
    flex: 1,
  },
  itemFormListItemView: {
    flexDirection: 'row',
  },
  itemFormListItemInput: {
    color: 'floralwhite',
  },
  itemFormListItemName: {
    flex: 3,
  },
  itemFormListItemPrice: {
    flex: 1,
  },
  itemFormListItemPriceInput: {
    textAlign: 'center',
  },
  itemFormAddItemButton: {
    margin: 10,
  },
  itemFormNavigateButton: {
    margin: 10,
  },
});

export default styles;
