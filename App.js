import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";

// Screens:
import Home from "./src/screens/Home";
import PlaceSearch from "./src/screens/PlaceSearch";

const RootStack = createStackNavigator(
  {
    Home,
    PlaceSearch
  },
  {
    initialRouteName: "Home"
  }
);

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
