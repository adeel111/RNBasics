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
      },
      {
        screen: "SourceToDestinationDirection",
        btnText: "Draw Polyline from \n Source To Destination"
      },
      {
        screen: "SourceToDestinationTracking",
        btnText: "Origin to Destination \n Tracking with Direction"
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
    alignItems: "center",
    backgroundColor: "#263238"
  },
  buttonContainerStyle: {
    width: "80%",
    paddingTop: 11,
    paddingBottom: 11,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90A4AE"
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#263238"
  }
});
