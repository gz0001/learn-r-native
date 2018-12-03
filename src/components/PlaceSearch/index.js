import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

// Ajax:
import { get, post } from "../../utils/AJAX";
import url from "../../config/url";

// Styles:
import { margin, container } from "../../styles/globalStyles";
import styles from "./styles";

class PlaceSearch extends Component {
  render() {
    return (
      <View style={[container.center]}>
        <Text>Search a place</Text>
      </View>
    );
  }
}

export default PlaceSearch;
