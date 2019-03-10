import React from 'react';
import { View } from 'react-native';
import { Badge, CheckBox, ListItem, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import { checkItem } from '../actions/assignmentActions';


class AssignmentItemComponent extends React.Component {
  render() {
    const { assigned, checked, item, index } = this.props;

    return (
      <ListItem
        containerStyle={styles.assignmentItem}
        rightContentContainerStyle={styles.assignmentItemBadge}
        title={
          <CheckBox
            containerStyle={styles.assignmentCheckBox}
            checked={checked}
            title={
              <View style={styles.assignmentCheckBoxView}>
                <Text style={styles.assignmentCheckBoxText}>
                  {item.name}
                </Text>
                <Text style={styles.assignmentCheckBoxText}>
                  {item.price.toFixed(2)}
                </Text>
              </View>
            }
            onPress={() => this.props.checkItem(index)}
          />
        }
        rightElement={
          assigned > 0 &&
          <Badge
            status='success'
            value={assigned}
          />
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    checkItem,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentItemComponent);
