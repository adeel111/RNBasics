import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';

const { SCREEN_HEIGHT, SCREEN_WIDTH } = Dimensions.get('window');

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={{ flex: 1, position: 'relative', zIndex: 5, justifyContent: 'center',flexDirection: 'row' }}>
                    <Image // flex-end
                        style={{ height: 100, width: 100, alignSelf: 'flex-end' }}
                        source={require('./assets/icon.png')} />
                </View>

                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    margin: 20,
                    marginTop: 30,
                    padding: 15
                }}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Name"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Email"
                        placeholderTextColor="gray"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />
                    <TouchableOpacity style={{ backgroundColor: '#F57C00', margin: 15, padding: 15, borderRadius: 20, }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Sign In</Text>
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

                <TouchableOpacity style={{ backgroundColor: 'white', margin: 30, marginTop: 15, padding: 15, borderRadius: 20, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Sign Up Today ></Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976D2',
        // margiBottom: 30, 
    },
    input: {
        margin: 15,
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 9,
    },
});
