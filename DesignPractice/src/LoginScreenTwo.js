import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { SCREEN_HEIGHT, SCREEN_WIDTH } = Dimensions.get('window');

export class LoginScreenTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ position: 'absolute', zIndex: 5, justifyContent: 'center', flexDirection: 'row', margin: '50%', marginTop: '5.5%' }}>
                    <Image 
                        style={{ height: 100, width: 100, }}
                        source={require('./assets/icon.png')} />
                </View>

                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    margin: 20,
                    marginTop: 70,
                    padding: 15
                }}>
                    <TextInput style={styles.inputOne}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Email"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />

                    <TextInput style={styles.inputTwo}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Password"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        secureTextEntry
                        onChangeText={this.handleEmail} />

                    <TouchableOpacity >
                        <LinearGradient
                            // To set orientation of Gradient (left to right or top to bottom etc)... 
                            // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                            // locations={[0, 0.5, 0.6]}
                            colors={['#f76b1c', '#f76b1c']} style={{ margin: 15, padding: 15, borderRadius: 20, }}>

                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Sign In</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', margin: 15, }}>Forgot your password?</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderColor: 'white',
                            borderWidth: 1,
                            width: 100
                        }}
                    />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', alignSelf: 'center', margin: 15, }}>OR</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderColor: 'white',
                            borderWidth: 1,
                            width: 100
                        }}
                    />
                </View>

                <View>
                    <TouchableOpacity style={{ backgroundColor: 'white', margin: 30, marginTop: 15, padding: 15, borderRadius: 20, }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Sign Up Today ></Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976D2',
    },
    inputOne: {
        margin: 15,
        marginTop: 50,
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 9,
    },
    inputTwo: {
        margin: 15,
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 9,
    },
});
