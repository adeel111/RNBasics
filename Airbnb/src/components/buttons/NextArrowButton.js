import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export default class NextArrowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity style = {styles.button}>
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

const styles = StyleSheet.create({
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.white,
        width: 60,
        height: 60,
    }
});