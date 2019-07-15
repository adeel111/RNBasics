import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {

  render() {
    return (
      <KeyboardAvoidingView style = {styles.wrapper}>
        <View style = {styles.scrollViewWrapper}>
            <ScrollView style = {styles.scrollView}>
                <Text style = {styles.loginHeader}>Log In</Text>
            </ScrollView>
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
    }
});