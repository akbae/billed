import React from 'react';
import { View } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  editSubtotal, editTax, editTip, editTotal,
} from '../actions/costFormActions';
import styles from './styles';

class CostFormComponent extends React.Component {
  render() {
    const { subtotal, tax, tip, total, navigation } = this.props;
    return (
      <View style={styles.costFormView}>
        <View style={styles.costFormSubView}>
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='decimal-pad'
            label='Subtotal'
            value={subtotal}
            onChangeText={(subtotal) => this.props.editSubtotal(subtotal)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='decimal-pad'
            label='Total'
            value={total}
            onChangeText={(total) => this.props.editTotal(total)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='decimal-pad'
            label='Tax'
            placeholder='(optional)'
            value={tax}
            onChangeText={(tax) => this.props.editTax(tax)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='decimal-pad'
            label='Tip'
            placeholder='(optional)'
            value={tip}
            onChangeText={(tip) => this.props.editTip(tip)}
          />
        </View>
        <Button
          containerStyle={styles.costFormNavigateButton}
          title='To Items'
          onPress={() => navigation.navigate('ItemForm')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { subtotal, tax, tip, total } = state.costForm;
  return { subtotal, tax, tip, total };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    editSubtotal,
    editTax,
    editTip,
    editTotal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CostFormComponent);
