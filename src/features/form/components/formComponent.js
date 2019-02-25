import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import CostFormComponent from './costFormComponent';
import ItemFormComponent from './itemFormComponent';
import UserFormComponent from './userFormComponent';

class FormComponent extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <CostFormComponent/>
        <UserFormComponent/>
        <ItemFormComponent/>
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
