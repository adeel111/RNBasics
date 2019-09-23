import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

class AnimatedCurrentLocation extends Component {
  state = {
    region: {
      latitude: 32.082466,
      longitude: 72.669128,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    error: ""
  };

  //   getLocation Permission and call getCurrentLocation method
  componentDidMount() {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
    AskPermission(permission);
    this.getCurrentLocation();
  }

  //   getting the current Location of a user...
  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 5,
          longitudeDelta: 5
        };
        this.setState({
          initialRegion: region,
          region: region
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  };

  //   animate to current user Location
  goToInitialLocation = () => {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    this.mapView.animateToRegion(initialRegion, 2000);
  };

  //   lat & lng for Marker
  getMapRegion = () => ({
    latitude: this.state.region.latitude,
    longitude: this.state.region.longitude
  });

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={this.state.mapRegion}
        followUserLocation={true}
        ref={ref => (this.mapView = ref)}
        zoomEnabled={true}
        showsUserLocation={true}
        onMapReady={this.goToInitialLocation}
        initialRegion={this.state.initialRegion}
      >
        <Marker
          coordinate={this.getMapRegion()}
          title={"Sargodha"}
          description="City of Eagles."
        ></Marker>
      </MapView>
    );
  }
}

export default AnimatedCurrentLocation;
