import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  billView: {
    alignItems: 'stretch',
    backgroundColor: 'black',
    flex: 1,
  },
  billScrollView: {
    flex: 1,
  },
  billSubView: {
    margin: 10,
  },
  billCard: {
    backgroundColor: 'black',
  },
  billCardTitle: {
    color: 'floralwhite',
  },
  billCardView: {
  },
  billCardItemsView: {
  },
  billCardItem: {
    backgroundColor: 'black',
  },
  billCardItemName: {
    color: 'floralwhite',
  },
  billCardItemPrice: {
    color: 'floralwhite',
  },
  billCardCostsView: {
    flex: 1,
    flexDirection: 'row',
  },
  billCardFeesView: {
    width: Dimensions.get('window').width / 2.6,
  },
  billCardTotalsView: {
    width: Dimensions.get('window').width / 2.6,
  },
  billCardCosts: {
    backgroundColor: 'black',
  },
  billCardCostTitle: {
    color: 'floralwhite',
    textAlign: 'left',
  },
  billCardCostSubtitle: {
    color: 'floralwhite',
    fontSize: 16,
    textAlign: 'right',
  },
  billCardTotal: {
    fontSize: 20,
    color: 'deepskyblue',
    fontWeight: 'bold',
  },
});

export default styles;
