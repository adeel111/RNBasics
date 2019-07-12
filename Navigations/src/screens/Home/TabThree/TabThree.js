import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

 class TabThree extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'About',
        tabBarIcon: ({tintColor}) => (
            <Entypo name= 'info-with-circle' color = {tintColor} style = {{fontSize: 24}}/>
        )
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Tab Three</Text>
            </View>
        )
    }
}

export default TabThree;