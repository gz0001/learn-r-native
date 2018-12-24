import React from "react";
import { Text, StyleSheet } from "react-native";

const defaultStyle = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "600"
  }
});

const TextDefault = props => {
  const { children, style, ...textProps } = props;

  return (
    <Text style={[defaultStyle.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default TextDefault;
