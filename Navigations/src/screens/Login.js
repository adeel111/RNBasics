import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Login extends Component {

    static navigationOptions = () => ({
        title: 'Login Screen',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#388E3C'
        }
    });

  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.container}>
        <TouchableOpacity
        style = {styles.opacityStyle}
        onPress = {() => navigate('Signup')}>
            <Text style = {styles.opacityTextStyle}>Goto Signup Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      opacityStyle:{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 5,
      },
      opacityTextStyle:{
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
      },
});
