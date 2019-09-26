import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import { PropTypes } from "prop-types";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(
        props.inputType === "text" ||
        props.inputType === "email" ||
        props.inputType === "number"
      )
    };
  }

  render() {
    const {
      inputType,
      placeholder,
      multiline,
      autoCorrect,
      autoFocus,
      onChangeText
    } = this.props;
    const { secureInput } = this.state;

    return (
      <TextInput
        inputType={inputType}
        secureTextEntry={secureInput}
        placeholder={placeholder}
        multiline={multiline}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
      />
    );
  }
}

InputField.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textInputStyle: {
    color: "black",
    fontSize: 16
  }
});

export default InputField;
