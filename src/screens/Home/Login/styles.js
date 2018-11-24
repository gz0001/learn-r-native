import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue"
  },

  input: {
    width: "60%"
  },
  login: {
    padding: 10,
    paddingHorizontal: 20
  }
}));
