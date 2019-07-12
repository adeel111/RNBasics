import React from 'react';
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import TabOne from '../screens/Home/TabOne/TabOne';
import TabTwo from '../screens/Home/TabTwo/TabTwo';
import TabThree from '../screens/Home/TabThree/TabThree';

export default TopTabNavigation = createMaterialTopTabNavigator({
    TabOne: TabOne,
    TabTwo: TabTwo,
    TabThree: TabThree,
},
    {
        tabBarOptions: {
            activeTintColor: '#3F91D6',
            inactiveTintColor: 'gray',
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
            },
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                backgroundColor: '#3F91D6',
            },
        },
        initialRouteName: 'TabOne'
    }
);
