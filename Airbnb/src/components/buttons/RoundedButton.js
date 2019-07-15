import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const { text, textColor, background, icon, handleOnPress } = this.props;
      const backgroundColor =  background || 'transparent';
      const color = textColor || colors.black
    return (
      <View>
          <TouchableOpacity style = {[{backgroundColor: background}, styles.wrapper]}
          onPress = {handleOnPress}>
              <View style = {styles.buttonTextWrapper}>
                  {icon}
        <Text style = {[{color}, styles.buttonText]}> {text} </Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

 RoundedButton.propTypes = {
     text: PropTypes.string.isRequired,
     textColor: PropTypes.string,
     background: PropTypes.string,
     icon: PropTypes.object,
     handleOnPress: PropTypes.func.isRequired,
 };

 const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
    }
 });
