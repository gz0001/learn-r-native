import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "react-navigation";

// Ajax:
import { get, post } from "../../utils/AJAX";
import url from "../../config/url";

// Styles:
import { margin } from "../../styles/globalStyles";
import styles from "./styles";

class Example extends Component {
  render() {
    return (
      <View style={[]}>
        <Text>Im an expamle</Text>
      </View>
    );
  }
}

export default Example;
