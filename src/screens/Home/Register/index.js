import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "react-navigation";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

// Ajax:
import { get, post } from "../../../utils/AJAX";
import url from "../../../config/url";

// Styles:
import { container, margin } from "../../../styles/globalStyles";
import styles from "./styles";

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passConfirm: ""
  };

  handleInput = key => value => {
    console.log({ [key]: value });
  };

  render() {
    return (
      <View style={[container.center]}>
        <Text>Im an expamle</Text>
        <FormLabel>Email:</FormLabel>
        <FormInput onChangeText={this.handleInput("email")} />
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    );
  }
}

export default Register;
