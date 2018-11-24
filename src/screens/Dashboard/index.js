import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "react-navigation";

// Ajax:
import { get, post } from "../../utils/AJAX";
import url from "../../config/url";

// Styles:
import styles from "./styles";
import { container, margin } from "../../styles/globalStyles";

class Dashboard extends Component {
  render() {
    return (
      <View style={[styles.container, container.center]}>
        <Text style={[margin.mb_4]}>What do you want to do now?</Text>
        <View style={[styles.btnWrapper]}>
          <Button title="Add a place" />
          <Button title="Check user profile" />
        </View>
      </View>
    );
  }
}

export default Dashboard;
