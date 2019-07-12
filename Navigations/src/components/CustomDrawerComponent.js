import React from 'react';
import { View, SafeAreaView, ScrollView, Image, Text } from 'react-native';
import { DrawerItems } from "react-navigation";

export default CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>

        <View style={{ backgroundColor: '#F5F5F5', height: 200, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/drawer_pic.jpeg')}
                style={{ height: "100%", width: "100%", resizeMode: 'cover' }}
            />
        </View >

        <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{padding: 7, fontSize: 16, height: 35, alignSelf: 'flex-start', color: 'white'}}>
                Email
                </Text>
        </View >

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>

        <View style={{ height: 120, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/logo.png')}
                style={{ height: 70, width: 150, resizeMode: 'contain' }}
            />
        </View >

    </SafeAreaView>
)