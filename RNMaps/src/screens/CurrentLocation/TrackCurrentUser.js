import React, { Component } from "react";
import {
  StyleSheet,
  PermissionsAndroid,
  View,
  Text,
  Image
} from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import haversine from "haversine";

class TrackCurrentUser extends Component {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922, // must give some valid value
      longitudeDelta: 0.0421 // must give some valid value
    },
    error: "",
    routeCoordinates: [],
    distanceTravelled: 0, // contain live distance
    prevLatLng: {} // contain pass lat and lang value
  };

  //   getLocation Permission and call getCurrentLocation method
  componentDidMount() {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
    AskPermission(permission);
    this.getCurrentLocation();
  }

  //   getting the current Location of a user...
  getCurrentLocation = () => {
    navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const { routeCoordinates } = this.state;
        const newCoordinate = { latitude, longitude };

        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 5,
          longitudeDelta: 5
        };

        this.setState({
          initialRegion: region,
          region: region,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            this.state.distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 1
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

  //   calculate the total distance
  calcDistance = newLatLng => {
    // console.warn("Method Called");
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 0.9 }}
          provider={PROVIDER_GOOGLE}
          region={this.state.mapRegion}
          followUserLocation={true}
          ref={ref => (this.mapView = ref)}
          zoomEnabled={true}
          showsUserLocation={true}
          onMapReady={this.goToInitialLocation}
          initialRegion={this.state.initialRegion}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker coordinate={this.getMapRegion()} title={"Current Location"}>
            <Image
              source={require("../../images/car.png")}
              style={{ height: 35, width: 35 }}
            />
          </Marker>
        </MapView>
        <View style={styles.distanceContainer}>
          <Text>{parseFloat(this.state.distanceTravelled).toFixed(2)} km</Text>
        </View>
      </View>
    );
  }
}

export default TrackCurrentUser;

const styles = StyleSheet.create({
  distanceContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});
