import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Divider, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles'

class BillComponent extends React.Component {
  render() {
    const { bills, navigation } = this.props;
    return (
      <View style={styles.billView}>
        <ScrollView
          style={styles.billScrollView}
          ref={(ref) => this.scrollView = ref}
          onContentSizeChange={(width, height) => {
            this.scrollView.scrollTo({x: 0, y: height, animated: true})
          }}>
          <View style={styles.billSubView}>
            {
              [...bills.keys()].map(person => {
                const bill = bills.get(person);
                return (
                  <Card
                  containerStyle={styles.billCard}
                  key={person}
                  title={'Bill: ' + person}>
                  <View style={styles.billCardView}>
                    <View style={styles.billCardItemsView}>
                      {
                        bill.items.map((item, itemIndex) => (
                          <ListItem
                            containerStyle={styles.billCardItem}
                            rightSubtitleStyle={styles.billCardCostSubtitle}
                            key={itemIndex}
                            title={item.name}
                            rightSubtitle={item.price.toFixed(2)}
                          />
                        ))
                      }
                    </View>
                    <Divider/>
                    <View style={styles.billCardCostsView}>
                      <View style={styles.billCardFeesView}>
                        {
                          bill.tax > 0 &&
                          <ListItem
                            containerStyle={styles.billCardCosts}
                            titleStyle={styles.billCardCostTitle}
                            subtitleStyle={styles.billCardCostSubtitle}
                            title='Tax'
                            subtitle={bill.tax.toFixed(2)}
                          />
                        }
                        {
                          bill.tip > 0 &&
                          <ListItem
                            containerStyle={styles.billCardCosts}
                            titleStyle={styles.billCardCostTitle}
                            subtitleStyle={styles.billCardCostSubtitle}
                            title='Tip'
                            subtitle={bill.tip.toFixed(2)}
                          />
                        }
                      </View>
                      <View style={styles.billCardTotalsView}>
                        {
                          bill.subtotal > 0 &&
                          <ListItem
                            containerStyle={styles.billCardCosts}
                            titleStyle={styles.billCardCostTitle}
                            subtitleStyle={styles.billCardCostSubtitle}
                            title='Subtotal'
                            subtitle={bill.subtotal.toFixed(2)}
                          />
                        }
                        <ListItem
                          containerStyle={styles.billCardCosts}
                          titleStyle={
                            {
                              ...styles.billCardCostTitle,
                              ...styles.billCardTotal,
                            }
                          }
                          subtitleStyle={
                            {
                              ...styles.billCardCostSubtitle,
                              ...styles.billCardTotal,
                            }
                          }
                          title='Total'
                          subtitle={bill.total.toFixed(2)}
                        />
                      </View>
                    </View>
                  </View>
                </Card>
              )})
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { bills } = state.bill;
  return { bills };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(BillComponent);
