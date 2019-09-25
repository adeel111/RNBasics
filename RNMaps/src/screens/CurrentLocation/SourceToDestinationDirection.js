import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

class SourceToDestinationDirection extends Component {
  state = {
    region: {
      latitude: 32.082466,
      longitude: 72.669128,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    destination: {
      destinationLatitude: 32.082491,
      destinationLongitude: 72.669151,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    error: ""
  };

  //   getLocation Permission and call getCurrentLocation method
  componentDidMount() {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
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
        timeout: 2000
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

  getDestinationRegion = () => ({
    latitude: this.state.destination.destinationLatitude,
    longitude: this.state.destination.destinationLongitude
  });

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        mapType="satellite"
        region={this.state.mapRegion}
        followUserLocation={true}
        ref={ref => (this.mapView = ref)}
        zoomEnabled={true}
        showsUserLocation={true}
        onMapReady={this.goToInitialLocation}
        initialRegion={this.state.initialRegion}
      >
        <Marker
          pinColor={"green"}
          coordinate={this.getMapRegion()}
          title={"Origin"}
        />

        <Marker
          pinColor={"blue"}
          coordinate={this.getDestinationRegion()}
          title={"Destination"}
        />
        <MapViewDirections
          origin={this.getMapRegion()}
          destination={this.getDestinationRegion()}
          apikey={"AIzaSyCfWU8n-iWvIuwM5rhyodMPD3RhFdcCdm0"}
          strokeWidth={3}
          strokeColor="red"
        />
      </MapView>
    );
  }
}

export default SourceToDestinationDirection;
