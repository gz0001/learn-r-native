import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import posed from "react-native-pose";
import DateTimePicker from "react-native-modal-datetime-picker";

// Styles:
import { container, margin } from "app/src/styles/globalStyles";
import styles from "./styles";

// Custom components:
import DefaultButton from "app/src/components/DefaultButton";
import Selectbox from "app/src/ui/Selectbox";

const Box = posed.View({
  visible: { opacity: 1, scale: 1, transition: { duration: 500 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 500 } }
});

class Animation extends Component {
  state = {
    open: false,
    visible: true,
    showPicker: false,
    date: ""
  };

  toggleAttr(key) {
    const curValue = this.state[key];
    this.setState({ [key]: !curValue });
  }

  showDatePicker = () => {
    this.setState({ showPicker: true });
  };

  hideDatePicker = () => {
    this.setState({ showPicker: false });
  };

  handleDateInput = date => {
    console.log("A date has been picked: ", date);
    this.setState({ date: date.toString() });
  };

  render() {
    const { open, visible, date, showPicker } = this.state;

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
            title="show DatePicker"
            onPress={this.showDatePicker}
          />
          <Text>Date: {date}</Text>
          <DateTimePicker
            mode="datetime"
            isVisible={showPicker}
            onConfirm={this.handleDateInput}
            onCancel={this.hideDatePicker}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Animation;
