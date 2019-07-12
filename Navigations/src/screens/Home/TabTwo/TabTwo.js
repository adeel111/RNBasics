import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

 class TabTwo extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        
        tabBarLabel: 'Social',
        tabBarIcon: ({tintColor}) => (
            <Ionicons name= 'md-people' color = {tintColor} style = {{fontSize: 24}}/>
        )
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Tab Two</Text>
            </View>
        )
    }
}

export default TabTwo;