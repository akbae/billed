import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles'

class FormComponent extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>FormComponent</Text>
        <Button
          title="To Assignment"
          onPress={() =>
            navigation.navigate('Assignment')
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { form } = state;
  return { form };
}

export default connect(mapStateToProps)(FormComponent);
