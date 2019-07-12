import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

class FirstScreen extends Component {
  
    static navigationOptions = () => ({
        title: 'First Screen',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#388E3C'
        }
    });

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = {styles.container}>
          <TouchableOpacity
      style={styles.opacityStyle}
      onPress={() => navigate('SecondScreen')}>
      <Text style={styles.opacityTextStyle}>Goto Second Screen</Text>
  </TouchableOpacity>
      </View>
    );
  }
}

export default FirstScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacityStyle: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        margin: 15,
    },
    opacityTextStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

