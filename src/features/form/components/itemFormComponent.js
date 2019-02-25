import React from 'react';
import { View } from 'react-native';
import { Input, Button, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, editItem, removeItem } from '../actions/itemFormActions';
import styles from './styles';

class ItemFormComponent extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.itemFormView}>
        {
          items.map((item, index) => (
            <ListItem
              style={styles.itemFormListItem}
              key={index}
              rightIcon={
                <Icon
                  name='cancel'
                  onPress={() => this.props.removeItem(index)}
                />
              }
              onPressRightIcon={() => this.props.removeItem(index)}
              title={(
                <View style={styles.itemFormListItemView}>
                  <Input
                    style={styles.itemFormListItemName}
                    value={item.name}
                    onChangeText={(name) => this.props.editItem(index, name, item.price)}
                  />
                  <Input
                    style={styles.itemFormListItemPrice}
                    value={item.price}
                    onChangeText={(price) => this.props.editItem(index, item.name, price)}
                  />
                </View>
              )}
            />
          ))
        }
        <Button
          title='Add Item'
          onPress={() => this.props.addItem()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { items } = state.form.item;
  return { items };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addItem,
    editItem,
    removeItem,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemFormComponent);
