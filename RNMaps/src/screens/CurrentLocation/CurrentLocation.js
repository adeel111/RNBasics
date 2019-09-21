import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import { TabNavigator } from "react-navigation";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class CurrentLocation extends Component {
  state = {
    latitude: null,
    longitude: null,
    error: null
  };
  componentDidMount = () => {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
    AskPermission(permission);

    navigator.geolocation.getCurrentPosition(
      position => {
        console.warn("wokeeey");
        console.warn(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000 }
    );
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          title={"Current Location"}
        />
      </MapView>
    );
  }
}

export default CurrentLocation;
