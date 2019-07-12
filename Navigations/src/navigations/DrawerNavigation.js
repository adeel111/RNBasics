import React from 'react';
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

// Drawer Screens...
import Straints from '../screens/Straints/Straints';
import News from '../screens/News/News';
import Social from '../screens/Social/Social';
import About from '../screens/About/About';

// Custom component and Bottom Nav...
import CustomDrawerComponent from '../components/CustomDrawerComponent';
import BottomTabNavigation from '../navigations/BottomTabNavigation';

// Further Screens of Drawer's Screen...
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import TabFirstScreen from '../screens/TabFirstScreen';

// Vector Icons...
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeStackNav = createStackNavigator({
    Home: BottomTabNavigation,
}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                title: 'Home',
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
        },

        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => (
                    <FontAwesome name='home' color = {tintColor} style={{ fontSize: 24 }} />
                ),
            }
        }
    });

const StraintsStackNav = createStackNavigator({
    Straints: Straints,
    FirstScreen: FirstScreen,
    SecondScreen: SecondScreen,
    TabFirstScreen: TabFirstScreen,
}, {
        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: 'Straints',
                drawerIcon: ({tintColor}) => (
                    <Entypo name='direction' color = {tintColor} style={{ fontSize: 24 }} />
                ),
            }
        }
    });

const NewsStackNav = createStackNavigator({
    News: News,
}, {
        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: 'Marijuana News',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons name='delete' color = {tintColor} style={{ fontSize: 24 }} />
                ),
            }
        }
    });

const SocialStackNav = createStackNavigator({
    Social: Social,
}, {

        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: 'Social',
                drawerIcon: ({tintColor}) => (
                    <Ionicons name='md-people' color = {tintColor} style={{ fontSize: 24 }} />
                ),
            }
        }
    });

const AboutStackNav = createStackNavigator({
    About: About,
}, {
        navigationOptions: ({ navigation }) => {
            return {
                drawerLabel: 'About',
                drawerIcon: ({tintColor}) => (
                    <Entypo name='info-with-circle' color = {tintColor} style={{ fontSize: 24 }} />
                ),
            }
        }
    });

export default DrawerNavigation = createDrawerNavigator({
    Home: HomeStackNav,
    Straints: StraintsStackNav,
    News: NewsStackNav,
    Social: SocialStackNav,
    About: AboutStackNav,
},
    {
        initialRouteName: 'Home',
        drawerType: 'slide',
        drawerPosition: 'left',
        drawerWidth: 300,
        drawerBackgroundColor: 'white',
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
        }
    })
