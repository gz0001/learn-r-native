import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import posed from "react-native-pose";

// Styles:
import { container, margin } from "../../../styles/globalStyles";
import styles from "./styles";

// Custom components:
import DefaultButton from "../../../components/DefaultButton";
import Selectbox from "../../../ui/Selectbox";

const Box = posed.View({
  visible: { opacity: 1, scale: 1, transition: { duration: 500 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 500 } }
});

class Animation extends Component {
  state = {
    open: false,
    visible: true
  };

  toggleAttr(key) {
    const curValue = this.state[key];
    this.setState({ [key]: !curValue });
  }

  render() {
    const { open, visible } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Basic expamle: </Text>
          <Box
            style={[margin.mt_4, styles.box]}
            initialPose="visible"
            pose={visible ? "visible" : "hidden"}
          />
          <DefaultButton
            buttonStyle={margin.mt_4}
            title="toogle visible"
            onPress={this.toggleAttr.bind(this, "visible")}
          />

          <DefaultButton
            buttonStyle={[{ marginTop: 100 }]}
            title="toogle visible"
            onPress={this.toggleAttr.bind(this, "visible")}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Animation;
