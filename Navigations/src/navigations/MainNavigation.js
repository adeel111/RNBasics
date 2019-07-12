import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import DrawerNavigation from '../navigations/DrawerNavigation';
import TopTabDrawer from '../navigations/TopTabDrawer';

const drawerNavigations = createStackNavigator({

    DrawerNavigation: DrawerNavigation,
    TopTabDrawer: TopTabDrawer,
},
    {
        initialRouteName: 'DrawerNavigation',
        headerMode: 'none',
    }
);

const registerNavigation = createStackNavigator({
    Login: Login,
    Signup: Signup,
},
    {
        initialRouteName: 'Login',
    }
);

const StackNavigation = createStackNavigator({
    registerNavigation: registerNavigation,
    drawerNavigations: drawerNavigations,
},
    {
        initialRouteName: 'registerNavigation',
        headerMode: 'none',
    }
);

const SwitchNavigation = createSwitchNavigator({
    Splash: Splash,
    StackNavigation: StackNavigation,
},
    {
        initialRouteName: 'Splash'
    }
);

export const MainNavigation = createAppContainer(SwitchNavigation);