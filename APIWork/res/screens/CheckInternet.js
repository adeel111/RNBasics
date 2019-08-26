import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CheckInternetConnectivity from "../components/CheckInternetConnectivity";

class CheckInternet extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => CheckInternetConnectivity(navigate)}
        >
          <Text style={styles.buttonTextStyle}>
            Check Internet Connectivity
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    width: "75%",
    padding: 15,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "white"
  }
});

export default CheckInternet;
