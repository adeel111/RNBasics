import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class Home extends Component {
  state = {
    buttonsData: [
      {
        screen: "CurrentLocation",
        btnText: "Current Location"
      },
      {
        screen: "AnimatedCurrentLocation",
        btnText: "Animated Current Location"
      },
      {
        screen: "TrackCurrentUser",
        btnText: "Track Current Location"
      },
      {
        screen: "MoreMarkers",
        btnText: "More Markers"
      },
      {
        screen: "NearbyPlaces",
        btnText: "Nearby Places"
      },
      {
        screen: "AnimatedNearbyPlaces",
        btnText: "Animated Nearby Places"
      },
      {
        screen: "TrackCurrentAndNearbyPlaces",
        btnText: "Track Current User & \n Show Nearby Places"
      }
    ]
  };

  replaceScreen = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.buttonsData.map((button, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => {
                this.replaceScreen(button.screen);
              }}
              style={styles.buttonContainerStyle}
            >
              <Text style={styles.buttonTextStyle}>{button.btnText}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainerStyle: {
    width: "70%",
    paddingTop: 12.5,
    paddingBottom: 12.5,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6600"
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: "700",
    color: "white"
  }
});
