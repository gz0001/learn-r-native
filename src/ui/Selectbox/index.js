import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import posed from "react-native-pose";

// Styles:
import { margin } from "../../styles/globalStyles";
import styles from "./styles";

// Animated Component:
const SelectContainer = posed(FlatList)({
  open: { opacity: 1, transition: { duration: 500 } },
  close: { opacity: 0, transition: { duration: 500 } }
});

class Selectbox extends Component {
  state = {
    open: false,
    height: 0
  };

  toogleOpen = () => {
    this.setState({ open: !this.state.open });
    if (!this.state.open) {
      setTimeout(() => {
        console.log("to the end");

        this.list.scrollToEnd();
      }, 500);
    }
  };

  getSize = e => {
    console.log("Flatlist: ", e);
    this.setState({ height: e.nativeEvent.layout.height });
  };

  renderListItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    const { style } = this.props;
    const { open, height } = this.state;
    const data = [
      { name: "you" },
      { name: "she" },
      { name: "he" },
      { name: "me" }
    ];
    return (
      <TouchableOpacity style={[styles.container]} onPress={this.toogleOpen}>
        <Text style={[margin.mb_1]}>Im a selectbox</Text>
        <View
          style={[styles.listWrap, { transform: [{ translateY: height }] }]}
          onLayout={this.getSize}
        >
          <SelectContainer
            ref="list"
            data={data}
            renderItem={this.renderListItem}
            keyExtractor={item => item.name}
            pose={open ? "open" : "close"}
            style={[styles.listContainer]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default Selectbox;
