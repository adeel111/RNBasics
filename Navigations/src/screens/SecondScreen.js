import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorPrimary } from "../prefabs/colors";

class SecondScreen extends Component {
  
    static navigationOptions = () => ({
        title: 'Second Screen',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#388E3C'
        }
    });

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>Second Screen</Text>
      </View>
    );
  }
}

export default SecondScreen;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
  },
  textStyle: {
      fontSize: 25,
      alignSelf: 'center',
      color: colorPrimary,
  },
});


