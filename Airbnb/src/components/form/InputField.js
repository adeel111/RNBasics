import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  render() {
      const { labelText, labelTextSize, labelColor, textColor, borderBottomColor,
        inputType, customStyle } = this.props
      const fontSize = labelTextSize
      const color = labelColor
      const inputColor = textColor
      const borderBottom = borderBottomColor || 'transparent'
    return (
      <View style = {[customStyle, styles.wrapper]}>
        <Text style = {[{fontSize, color},styles.label]}> {labelText} </Text>
        <TextInput
        autoCorrect = {false}
        style = {[{color: inputColor, borderBottomColor: borderBottom}, styles.inputField]}
        secureTextEntry = {inputType === 'password'}
        />
      </View>
    );
  }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label: {
        fontWeight: '700',
        marginBottom: 20
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },
});
