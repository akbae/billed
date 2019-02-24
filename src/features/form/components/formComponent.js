import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import styles from './styles';
import UserFormComponent from './userFormComponent';

class FormComponent extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>FormComponent</Text>
        <UserFormComponent/>
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

export default FormComponent;
