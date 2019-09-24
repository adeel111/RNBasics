import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class MoreMarkers extends Component {
  state = {
    markers: [
      {
        title: "Hello One",
        coordinates: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        title: "Hello Two",
        coordinates: {
          latitude: 0,
          longitude: 5
        }
      },
      {
        title: "Hello Three",
        coordinates: {
          latitude: 0,
          longitude: 10
        }
      }
    ]
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
      >
        {this.state.markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
      </MapView>
    );
  }
}

export default MoreMarkers;
