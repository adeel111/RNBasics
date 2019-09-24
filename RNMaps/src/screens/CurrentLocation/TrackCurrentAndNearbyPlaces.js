import React, { Component } from "react";
import {
  StyleSheet,
  PermissionsAndroid,
  View,
  Text,
  Image
} from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  Callout
} from "react-native-maps";
import haversine from "haversine";

class TrackCurrentAndNearbyPlaces extends Component {
  state = {
    region: {
      latitude: 32.082466,
      longitude: 72.669128,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    error: "",
    places: null,
    routeCoordinates: [],
    distanceTravelled: 0, // contain live distance
    prevLatLng: {} // contain pass lat and lang value
  };

  //   getLocation Permission and call getCurrentLocation method
  componentDidMount() {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
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
        this.getPlaces();
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 2000,
        distanceFilter: 1
      }
    );
  };

  //   calculate the total distance
  calcDistance = newLatLng => {
    // console.warn("Method Called");
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  //   call getUrlWithParameters with Params to found desired nearby locations...
  getPlaces() {
    const url = this.getUrlWithParameters(
      this.state.region.latitude,
      this.state.region.longitude,
      1500,
      "mosque",
      "AIzaSyCfWU8n-iWvIuwM5rhyodMPD3RhFdcCdm0"
    );
    fetch(url)
      .then(data => data.json())
      .then(res => {
        // console.warn(res);
        const arrayMarkers = [];
        res.results.map((element, index) => {
          arrayMarkers.push(
            <Marker
              key={index}
              coordinate={{
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng
              }}
            >
              <Callout>
                <View>
                  <Text>{element.name}</Text>
                  {/* <Text>
                      Open: {element.opening_hours.open_now} ? "YES" : "NO"
                    </Text> */}
                </View>
              </Callout>
            </Marker>
          );
        });
        this.setState({ places: arrayMarkers });
      });
  }

  //   url to find nearby places
  getUrlWithParameters(lat, long, radius, type, API) {
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const key = `&key=${API}`;
    return `${url}${location}${typeData}${key}`;
  }

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
          <Marker
            coordinate={this.getMapRegion()}
            title={"Sargodha"}
            description="City of Eagles."
          >
            <Image
              source={require("../../images/car.png")}
              style={{ height: 35, width: 35 }}
            />
          </Marker>
          {this.state.places}
        </MapView>
        <View style={styles.distanceContainer}>
          <Text>{parseFloat(this.state.distanceTravelled).toFixed(2)} km</Text>
        </View>
      </View>
    );
  }
}

export default TrackCurrentAndNearbyPlaces;

const styles = StyleSheet.create({
  distanceContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});
