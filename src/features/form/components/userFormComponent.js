import React from 'react';
import { ScrollView, View } from 'react-native';
import { Input, Button, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUser, editUser, removeUser } from '../actions/userFormActions';
import styles from './styles';

class UserFormComponent extends React.Component {
  render() {
    const { users, navigation } = this.props;
    return (
      <View style={styles.userFormView}>
        <ScrollView
          style={styles.userFormScrollView}
          ref={(ref) => this.scrollView = ref}
          onContentSizeChange={(width, height) => {
            this.scrollView.scrollTo({x: 0, y: height, animated: true})
          }}>
          <View style={styles.userFormSubView}>
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
                      style={styles.userFormListItemInput}
                      value={user.name}
                      onChangeText={(text) => this.props.editUser(index, text)}
                    />
                  )}
                />
              ))
            }
          </View>
        </ScrollView>
        <Button
          containerStyle={styles.userFormAddUserButton}
          title='Add User'
          onPress={() => this.props.addUser()}
        />
        <Button
          containerStyle={styles.userFormNavigateButton}
          title='To Cost'
          onPress={() => navigation.navigate('CostForm')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state.userForm;
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
