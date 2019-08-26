import React, { Component } from "react";
import { Platform, Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default CheckInternetConnectivity = navigate => {
  // For Android devices
  if (Platform.OS === "android") {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        // Alert.alert("You are Online!");
        navigate("SimpleFlatList");
      } else {
        Alert.alert("You are Offline!");
      }
    });
  } else {
    // For iOS devices
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange("hg")
    );
  }
};

handleConnectivityChange = isConnected => {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    this.handleConnectivityChange
  );

  if (isConnected === false) {
    Alert.alert("You are Offline!");
  } else {
    Alert.alert("You are Online!");
  }
};
