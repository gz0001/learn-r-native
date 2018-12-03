import { StyleSheet } from "react-native";

const margin = StyleSheet.create({
  mt_1: { marginTop: 5 },
  mt_2: { marginTop: 10 },
  mt_3: { marginTop: 15 },
  mt_4: { marginTop: 20 },
  mt_5: { marginTop: 25 },

  mb_1: { marginBottom: 5 },
  mb_2: { marginBottom: 10 },
  mb_3: { marginBottom: 15 },
  mb_4: { marginBottom: 20 },
  mb_5: { marginBottom: 25 },

  ml_1: { marginLeft: 5 },
  ml_2: { marginLeft: 10 },
  ml_3: { marginLeft: 15 },
  ml_4: { marginLeft: 20 },
  ml_5: { marginLeft: 25 },

  mr_1: { marginRight: 5 },
  mr_2: { marginRight: 10 },
  mr_3: { marginRight: 15 },
  mr_4: { marginRight: 20 },
  mr_5: { marginRight: 25 }
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

const layout = StyleSheet.create({
  center_center: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export { container, margin, layout };
