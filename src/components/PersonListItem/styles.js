import { StyleSheet } from "react-native";

export default StyleSheet.create({
  listWrapper: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10
  },

  listContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey"
  },

  icon: {
    flexBasis: "25%"
  },
  iconWrap: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "grey"
  },
  content: {
    flex: 1,
    paddingVertical: 10
  }
});
