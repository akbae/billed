import React from 'react';
import { View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  editSubtotal,
  editTax,
  editTip,
  editTotal,
  submitCosts,
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
            keyboardType='numeric'
            label='Subtotal'
            placeholder='(optional)'
            selectTextOnFocus={true}
            value={subtotal}
            onChangeText={(subtotal) => this.props.editSubtotal(subtotal)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Total'
            placeholder='(required)'
            selectTextOnFocus={true}
            value={total}
            onChangeText={(total) => this.props.editTotal(total)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Tax'
            placeholder='(optional)'
            selectTextOnFocus={true}
            value={tax}
            onChangeText={(tax) => this.props.editTax(tax)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Tip'
            placeholder='(optional)'
            selectTextOnFocus={true}
            value={tip}
            onChangeText={(tip) => this.props.editTip(tip)}
          />
        </View>
        <CheckBox
          containerStyle={styles.costFormTipCheckBox}
          checked={false}
          title={
            <View style={styles.costFormTipCheckBoxView}>
              <Text style={styles.costFormTipCheckBoxText}>
                Calculate tip:
              </Text>
              <Input style={styles.costFormTipCheckBoxInput}
                autoCapitalize='none'
                keyboardType='numeric'
                rightIcon={
                  <Icon
                    name='percent'
                    size={20}
                  />
                }
                selectTextOnFocus={true}
              />
              <CheckBox
                containerStyle={styles.costFormTipTaxCheckBox}
                checked={false}
                title='with tax'
              />
            </View>
          }
        />
        <Button
          containerStyle={styles.costFormNavigateButton}
          disabled={!total}
          title='To Items'
          onPress={() => {
            this.props.submitCosts({
              subtotal,
              tax,
              tip,
              total,
            })
            navigation.navigate('ItemForm');
          }}
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
    submitCosts,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CostFormComponent);
