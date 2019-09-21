import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";
import { AskPermission } from "../../components/AskPermissions";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class Home extends Component {
  state = {
    latitude: 32.082466,
    longitude: 72.669128
  };
  componentDidMount = () => {
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
    AskPermission(permission);
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
          title={"City of Eagles"}
        />
      </MapView>
    );
  }
}

export default Home;
