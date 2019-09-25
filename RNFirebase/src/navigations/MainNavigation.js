import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";
import AllUsers from "../screens/AllUsers/AllUsers";

const HomeNavigation = createStackNavigator(
  {
    AllUsers: AllUsers
  },
  {
    initialRouteName: "AllUsers"
  }
);

const AuthNavigation = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none"
  }
);

const SwitchNavigation = createSwitchNavigator(
  {
    AuthNavigation: AuthNavigation,
    HomeNavigation: HomeNavigation
  },
  {
    initialRouteName: "AuthNavigation"
  }
);

export const MainNavigation = createAppContainer(SwitchNavigation);
