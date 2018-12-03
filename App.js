import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

// Screens:
import Home from "./src/screens/Home/Login";
import PlaceStack from "./src/screens/PlaceAdd";
import Dashboard from "./src/screens/Dashboard/";
import PlaceSearch from "./src/components/PlaceSearch/index";

const MainStack = createDrawerNavigator(
  {
    PlaceStack,
    PlaceSearch
  },
  {
    initialRouteName: "PlaceStack",
    drawerPosition: "left"
  }
);

const RootStack = createSwitchNavigator(
  {
    Home,
    MainStack
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
