import React, { Component } from "react";
import { PermissionsAndroid, View, Text } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

class AnimatedNearbyPlaces extends Component {
  state = {
    region: {
      latitude: 32.082466,
      longitude: 72.669128,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    error: "",
    places: null
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
        this.getPlaces();
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 2000
      }
    );
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
        {this.state.places}
      </MapView>
    );
  }
}

export default AnimatedNearbyPlaces;
