import { StyleSheet } from "react-native";

const margin = StyleSheet.create({
  mt_1: { marginTop: 2 },
  mt_2: { marginTop: 4 },
  mt_3: { marginTop: 6 },
  mt_4: { marginTop: 8 },
  mt_5: { marginTop: 10 },

  mb_1: { marginBottom: 2 },
  mb_2: { marginBottom: 4 },
  mb_3: { marginBottom: 6 },
  mb_4: { marginBottom: 8 },
  mb_5: { marginBottom: 10 },

  ml_1: { marginLeft: 2 },
  ml_2: { marginLeft: 4 },
  ml_3: { marginLeft: 6 },
  ml_4: { marginLeft: 8 },
  ml_5: { marginLeft: 10 },

  mr_1: { marginRight: 2 },
  mr_2: { marginRight: 4 },
  mr_3: { marginRight: 6 },
  mr_4: { marginRight: 8 },
  mr_5: { marginRight: 10 }
});

const container = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  full: {
    flex: 1
  }
});
export { container, margin };
