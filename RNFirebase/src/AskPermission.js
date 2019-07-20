import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";

export const AskPermission = async permission => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(permission, {
      title: "RNFirebase App Camera Permission",
      message:
        "RNFirebase App needs access to your camera " +
        "so you can take awesome pictures.",
      //   buttonNeutral: 'Ask Me Later',
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You now you can accsess ");
    } else {
    }
  } catch (err) {
    console.warn(err);
  }
};
