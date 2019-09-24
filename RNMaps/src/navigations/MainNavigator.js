import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home/Home";
import CurrentLocation from "../screens/CurrentLocation/CurrentLocation";
import AnimatedCurrentLocation from "../screens/CurrentLocation/AnimatedCurrentLocation";
import TrackCurrentUser from "../screens/CurrentLocation/TrackCurrentUser";
import MoreMarkers from "../screens/CurrentLocation/MoreMarkers";
import NearbyPlaces from "../screens/CurrentLocation/NearbyPlaces";
import AnimatedNearbyPlaces from "../screens/CurrentLocation/AnimatedNearbyPlaces";
import TrackCurrentAndNearbyPlaces from "../screens/CurrentLocation/TrackCurrentAndNearbyPlaces";

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    CurrentLocation: CurrentLocation,
    AnimatedCurrentLocation: AnimatedCurrentLocation,
    TrackCurrentUser: TrackCurrentUser,
    MoreMarkers: MoreMarkers,
    NearbyPlaces: NearbyPlaces,
    AnimatedNearbyPlaces: AnimatedNearbyPlaces,
    TrackCurrentAndNearbyPlaces: TrackCurrentAndNearbyPlaces
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(HomeNavigator);
