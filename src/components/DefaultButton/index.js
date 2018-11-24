import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DefaultButton = props => {
  const { title, buttonStyle, textStyle } = props;
  return (
    <TouchableOpacity {...props} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f60"
  },
  text: {
    fontSize: 16,
    color: "#fff"
  }
});

export default DefaultButton;
