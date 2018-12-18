import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import { select, exec } from "./src/utils/db";

// Screens:
import Home from "./src/screens/Home/Login";
import PlaceStack from "./src/screens/PlaceAdd";
import Dashboard from "./src/screens/Dashboard/";
import PlaceSearch from "./src/components/PlaceSearch/index";

const SQLite = require("react-native-sqlite-storage");
//const db = SQLite.openDatabase({});

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
  async componentDidMount() {
    const selectPer = "SELECT * from person";
    const peter = `INSERT INTO person( firstname, lastname, email, country, vip) VALUES('peter', 'parker', 'spider@men.us','USA', 1)`;

    try {
      //const res = await select(selectPer);
      const res = await exec(selectPer);
      console.log("got res: ", res.rows.raw());
    } catch (error) {
      console.log("get err: ", error);
    }
  }

  render() {
    return <RootStack />;
  }
}

export default App;
