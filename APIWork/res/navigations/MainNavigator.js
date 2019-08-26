import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import CheckInternet from "../../res/screens/CheckInternet";
import AxiosFlatList from "../../res/screens/AxiosFlatList";
import SimpleFlatList from "../screens/SimpleFlatList";

const StackNavigator = createStackNavigator(
  {
    CheckInternet: {
      screen: CheckInternet,
      navigationOptions: {
        header: null
      }
    },
    AxiosFlatList: AxiosFlatList,
    SimpleFlatList: SimpleFlatList
  },
  {
    initialRouteName: "CheckInternet"
  }
);
export default MainNavigator = createAppContainer(StackNavigator);
