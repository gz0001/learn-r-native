import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

// Screens:
import Home from "./src/screens/Home";
import PlaceSearch from "./src/screens/PlaceSearch";

const MainStack = createStackNavigator(
  {
    PlaceSearch
  },
  {
    initialRouteName: "PlaceSearch",
    //headerMode: "none",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center"
        //flex: 1
      }
    }
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
