import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles'

class BillComponent extends React.Component {
  render() {
    const { users, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>BillComponent</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { bill } = state;
  return { bill };
}

export default connect(mapStateToProps)(BillComponent);
