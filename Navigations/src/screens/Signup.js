import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Signup extends Component {

    static navigationOptions = () => ({
        title: 'Signup Screen',
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
                    style={styles.opacityStyle}
                    onPress={() => navigate('TopTabDrawer')}>
                    <Text style={styles.opacityTextStyle}>Drawer + TopTab Navigation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={() => navigate('DrawerNavigation')}>
                    <Text style={styles.opacityTextStyle}>Drawer + BottomTab Navigation</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Signup;

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
