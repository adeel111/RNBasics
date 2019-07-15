import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import PropTypes from 'prop-types';

export default class NextArrowButton extends Component {

  render() {
    const {disabled, handleNextButton} = this.props
    const opacityStyle = disabled ?
     {backgroundColor: 'rgba(255, 255, 255, 0.2)'}
      :
     {backgroundColor: 'rgba(255, 255, 255, 0.6)'}

    return (
      <TouchableOpacity style = {[opacityStyle, styles.button]}
      onPress = {handleNextButton}>
          <FontAwesome 
          name = 'angle-right'
          color = {colors.green01}
          size = {32}
          style = {styles.icon}
          />
      </TouchableOpacity>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
    }
});