import React, { Component } from "react";
import { PermissionsAndroid, View, Text } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

class NearbyPlaces extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    places: null,
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
        this.getPlaces();
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 2000
      }
    );
  };

  //   call getUrlWithParameters with Params to found desired nearby locations...
  getPlaces() {
    const url = this.getUrlWithParameters(
      this.state.latitude,
      this.state.longitude,
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

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        // mapType="satellite" // To change the type of Map
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
        {this.state.places}
      </MapView>
    );
  }
}

export default NearbyPlaces;
