import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import Entypo from 'react-native-vector-icons/Entypo';

 class About extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'About',
            headerTintColor: 'white',
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                backgroundColor: '#388E3C',
            },
            headerLeft: <Entypo
                onPress={() => navigation.openDrawer()}
                name='menu' style={{ fontSize: 24, paddingLeft: 10, color: 'white' }} />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>About Screen</Text>
            </View>
        )
    }
}

export default About;