import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.replaceWithLoginScreen()
        }, 1000)
    }

    replaceWithLoginScreen = () => {
        const { navigate } = this.props.navigation
        navigate("Login")
      }

    render() {
        return (
            <View style={styles.container}>
                <Image source = {require('../assets/map_symbol.png')} />
            </View>
        );
    }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
      },
});
