import React, { Component } from "react";
import Home from "./src/screens/Home/Home";
import CurrentLocation from "./src/screens/CurrentLocation/CurrentLocation";
import AnimatedCurrentLocation from "./src/screens/CurrentLocation/AnimatedCurrentLocation";
import TrackCurrentUser from "./src/screens/CurrentLocation/TrackCurrentUser";
import MoreMarkers from "./src/screens/CurrentLocation/MoreMarkers";

export default class App extends Component {
  render() {
    return <MoreMarkers />;
  }
}
