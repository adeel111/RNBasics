import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";

export const AskPermission = async permission => {
  try {
    const granted = await PermissionsAndroid.request(permission, {
      title: "Location Permission",
      message: "Allow Location Permission.",
      //   buttonNeutral: "Ask Me Later",
      //   buttonNegative: "Cancel",
      buttonPositive: "OK"
    });
    if (granted === true || granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   alert("Permission Granted");
    } else {
      //   alert("Permission Denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
