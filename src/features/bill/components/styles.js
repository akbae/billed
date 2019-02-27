import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  billView: {
    alignItems: 'stretch',
    flex: 1,
  },
  billScrollView: {
    flex: 1,
  },
  billSubView: {
    margin: 10,
  },
  billCard: {
  },
  billCardView: {
  },
  billCardItemsView: {
  },
  billCardItem: {
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
  },
  billCardCostTitle: {
    textAlign: 'left',
  },
  billCardCostSubtitle: {
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
