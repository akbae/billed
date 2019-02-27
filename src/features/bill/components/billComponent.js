import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
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
                  title='Bill'>
                  <View style={styles.billCardView}>
                    {
                      items.map((item, itemIndex) => (
                        <ListItem
                          containerStyle={styles.billCardListItem}
                          key={itemIndex}
                          title={item.name}
                          subtitle={item.price.toString()}
                        />
                      ))
                    }
                    <View style={styles.billCardCostsView}>
                      <ListItem
                        containerStyle={styles.billCardCosts}
                        title='Subtotal'
                        subtitle={items.subtotal.toString()}
                      />
                      {
                        items.tax > 0 &&
                        <ListItem
                          containerStyle={styles.billCardCosts}
                          title='Tax'
                          subtitle={items.tax.toString()}
                        />
                      }
                      {
                        items.tip > 0 &&
                        <ListItem
                          containerStyle={styles.billCardCosts}
                          title='Tip'
                          subtitle={items.tip.toString()}
                        />
                      }
                      <ListItem
                        containerStyle={styles.billCardCosts}
                        title='Total'
                        subtitle={items.total.toString()}
                      />
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
