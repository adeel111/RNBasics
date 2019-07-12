import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Entypo from 'react-native-vector-icons/Entypo';

class Straints extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Straints',
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
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Straints Screen</Text>
                <TouchableOpacity
                    style={styles.opacityStyle}
                    onPress={() => navigate('FirstScreen')}>
                    <Text style={styles.opacityTextStyle}>Goto First Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Straints;
