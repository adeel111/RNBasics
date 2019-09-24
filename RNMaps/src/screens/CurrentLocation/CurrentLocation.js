import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class CurrentLocation extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    error: null
  };
  componentDidMount = () => {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
    AskPermission(permission);

    navigator.geolocation.getCurrentPosition(
      position => {
        // console.warn(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 2000
      }
    );
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        mapType="satellite" // To change the type of Map
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        loadingIndicatorColor="#606060"
        loadingBackgroundColor="#FFFFFF"
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
