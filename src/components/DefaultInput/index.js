import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DefaultInput = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: "transparent",
    borderBottomColor: "#000",
    borderWidth: 1
  }
});

export default DefaultInput;
