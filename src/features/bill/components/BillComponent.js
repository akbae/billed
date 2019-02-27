import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Divider, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles'

class BillComponent extends React.Component {
  render() {
    const { assignments, navigation } = this.props;
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
              assignments.map((items, cardIndex) => (
                <Card
                  containerStyle={styles.billCard}
                  key={cardIndex}
                  title={'Bill ' + cardIndex}>
                  <View style={styles.billCardView}>
                    <View style={styles.billCardItemsView}>
                      {
                        items.map((item, itemIndex) => (
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
                          items.tax > 0 &&
                          <ListItem
                            containerStyle={styles.billCardCosts}
                            titleStyle={styles.billCardCostTitle}
                            subtitleStyle={styles.billCardCostSubtitle}
                            title='Tax'
                            subtitle={items.tax.toFixed(2)}
                          />
                        }
                        {
                          items.tip > 0 &&
                          <ListItem
                            containerStyle={styles.billCardCosts}
                            titleStyle={styles.billCardCostTitle}
                            subtitleStyle={styles.billCardCostSubtitle}
                            title='Tip'
                            subtitle={items.tip.toFixed(2)}
                          />
                        }
                      </View>
                      <View style={styles.billCardTotalsView}>
                        {
                          items.subtotal > 0 &&
                          <ListItem
                            containerStyle={styles.billCardCosts}
                            titleStyle={styles.billCardCostTitle}
                            subtitleStyle={styles.billCardCostSubtitle}
                            title='Subtotal'
                            subtitle={items.subtotal.toFixed(2)}
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
                          subtitle={items.total.toFixed(2)}
                        />
                      </View>
                    </View>
                  </View>
                </Card>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // const { users } = state.userForm;
  const { assignments } = state.bill;
  return { assignments };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(BillComponent);
