import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { styles } from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

 class TabOne extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <FontAwesome name= 'home' color = {tintColor} style = {{fontSize: 24}}/>
        )
    })

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Home Tab Screen</Text>
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={() => navigate('TabFirstScreen')}>
                    <Text style={styles.opacityTextStyle}>Goto First Tab Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default TabOne;