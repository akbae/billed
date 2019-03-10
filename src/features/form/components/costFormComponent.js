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
  checkCalculateTip,
  editTipPercent,
  checkIncludeTax,
  submitCosts,
} from '../actions/costFormActions';
import styles from './styles';

class CostFormComponent extends React.Component {
  render() {
    const { calculateTip, subtotal, tax, tip, total, navigation } = this.props;
    return (
      <View style={styles.costFormView}>
        <View style={styles.costFormSubView}>
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Subtotal'
            selectTextOnFocus={true}
            value={subtotal}
            onChangeText={(subtotal) => this.props.editSubtotal(subtotal)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Total'
            selectTextOnFocus={true}
            value={total}
            onChangeText={(total) => this.props.editTotal(total)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Tax'
            selectTextOnFocus={true}
            value={tax}
            onChangeText={(tax) => this.props.editTax(tax)}
          />
          <Input
            containerStyle={styles.costFormInput}
            autoCapitalize='none'
            keyboardType='numeric'
            label='Tip'
            selectTextOnFocus={true}
            value={tip}
            onChangeText={(tip) => this.props.editTip(tip)}
          />
        </View>
        {
          !tip && !total &&
          <CheckBox
            containerStyle={styles.costFormTipCheckBox}
            checked={calculateTip.checked}
            title={
              <View style={styles.costFormTipCheckBoxView}>
                <Text style={styles.costFormTipCheckBoxText}>
                  Calculate tip:
                </Text>
                <Input style={styles.costFormTipCheckBoxInput}
                  autoCapitalize='none'
                  defaultValue='20'
                  keyboardType='numeric'
                  rightIcon={
                    <Icon
                      name='percent'
                      size={20}
                    />
                  }
                  selectTextOnFocus={true}
                  value={calculateTip.percent.toString()}
                  onChangeText={(percent) => this.props.editTipPercent(percent)}
                />
                <CheckBox
                  containerStyle={styles.costFormTipTaxCheckBox}
                  checked={calculateTip.includeTax}
                  title='include tax'
                  onPress={() => this.props.checkIncludeTax()}
                />
              </View>
            }
            onPress={() => this.props.checkCalculateTip()}
          />
        }
        <Button
          containerStyle={styles.costFormNavigateButton}
          disabled={!((subtotal && tax && calculateTip.checked) || total)}
          title='To Items'
          onPress={() => {
            this.props.submitCosts({
              subtotal,
              tax,
              tip,
              total,
            }, calculateTip)
            navigation.navigate('ItemForm');
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { calculateTip, subtotal, tax, tip, total } = state.costForm;
  return { calculateTip, subtotal, tax, tip, total };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    editSubtotal,
    editTax,
    editTip,
    editTotal,
    checkCalculateTip,
    editTipPercent,
    checkIncludeTax,
    submitCosts,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CostFormComponent);
