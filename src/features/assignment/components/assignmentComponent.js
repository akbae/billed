import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles'

class AssignmentComponent extends React.Component {
  render() {
    const { items, users, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>AssignmentComponent</Text>
        <Button
          title="To Bill"
          onPress={() =>
            navigation.navigate('Bill')
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { assignment } = state;
  return { assignment };
}

export default connect(mapStateToProps)(AssignmentComponent);
