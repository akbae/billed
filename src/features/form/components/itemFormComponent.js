import React from 'react';
import { ScrollView, View } from 'react-native';
import { Input, Button, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addItem,
  editItem,
  removeItem,
  submitItems,
} from '../actions/itemFormActions';
import styles from './styles';

class ItemFormComponent extends React.Component {
  render() {
    const { items, navigation } = this.props;
    return (
      <View style={styles.itemFormView}>
        <ScrollView
          style={styles.itemFormScrollView}
          ref={(ref) => this.scrollView = ref}
          onContentSizeChange={(width, height) => {
            this.scrollView.scrollTo({x: 0, y: height, animated: true})
          }}>
          <View style={styles.itemFormSubView}>
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
          </View>
        </ScrollView>
        <Button
          containerStyle={styles.itemFormAddItemButton}
          title='Add Item'
          onPress={() => this.props.addItem()} />
        <Button
          containerStyle={styles.itemFormNavigateButton}
          title='To Assignment'
          onPress={() => {
            this.props.submitItems(items);
            navigation.navigate('Assignment');
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { items } = state.itemForm;
  return { items };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addItem,
    editItem,
    removeItem,
    submitItems,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemFormComponent);
