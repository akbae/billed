import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUser, editUser, removeUser } from '../actions/userFormActions';
import styles from './styles';

class UserFormComponent extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <View style={styles.userFormView}>
        <Text>UserFormComponent</Text>
        {
          users.map((user, index) => (
            <ListItem
              style={styles.userFormListItem}
              key={index}
              rightIcon={
                <Icon
                  name='cancel'
                  onPress={() => this.props.removeUser(index)}
                />
              }
              onPressRightIcon={() => this.props.removeUser(index)}
              title={(
                <Input
                  value={user.name}
                  onChangeText={(text) => this.props.editUser(index, text)}
                />
              )}
            />
          ))
        }
        <Button
          title='Add User'
          onPress={() => this.props.addUser()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state.form.user;
  return { users };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addUser,
    editUser,
    removeUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormComponent);
