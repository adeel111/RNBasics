import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

export default class Login extends Component {

  handleNextButton() {
    alert('Next button pressed')
  }

  render() {
    return (
      <KeyboardAvoidingView style = {styles.wrapper}>
        <View style = {styles.scrollViewWrapper}>
            <ScrollView style = {styles.scrollView}>
                <Text style = {styles.loginHeader}>Log In</Text>
                <InputField
                labelText = "EMAIL ADDRESS"
                labelTextSize = {14}
                labelColor = {colors.white}
                textColor = {colors.white}
                borderBottomColor = {colors.white}
                inputType = 'email'
                customStyle = {{marginBottom: 30}}
                />
                <InputField
                labelText = "PASSWORD"
                labelTextSize = {14}
                labelColor = {colors.white}
                textColor = {colors.white}
                borderBottomColor = {colors.white}
                inputType = 'password'
                customStyle = {{marginBottom: 30}}
                />
            </ScrollView>
        </View>
        <View style = {styles.nextButton}>
              <NextArrowButton 
              handleNextButton = {this.handleNextButton} />
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    scrollViewWrapper: {
        flex: 1,
        marginTop: 70,
    },
    scrollView: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
    },
    loginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    nextButton: {
      alignItems: 'flex-end',
      right: 20,
      bottom: 20,
    },
});