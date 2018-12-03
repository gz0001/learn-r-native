import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 150,
    height: 30,
    justifyContent: "flex-end",
    borderColor: "transparent",
    borderBottomColor: "#000",
    borderWidth: 1
  },
  listContainer: {
    borderColor: "#155",
    borderWidth: 1,
    maxHeight: 50
    //transform: [{ translateY: 40 }]
  },
  listWrap: {
    width: "100%",
    flex: 1,
    maxHeight: 50,
    position: "absolute",
    zIndex: 999
  }
});
