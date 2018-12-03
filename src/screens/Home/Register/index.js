import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

// Ajax:
import { get, post } from "../../../utils/AJAX";
import url from "../../../config/url";

// Styles:
import { container, margin } from "../../../styles/globalStyles";
import styles from "./styles";

// Data:
import people from "./people.json";
import PersonListItem from "../../../components/PersonListItem";

class Register extends Component {
  state = {
    selected: 1
  };

  handleInput = key => value => {
    console.log({ [key]: value });
  };

  handeItemSelect = id => {
    console.log("got id:", id);

    this.setState({ selected: id });
  };

  renderListItem = ({ item }) => (
    <PersonListItem
      people={item}
      onItemPress={this.handeItemSelect}
      selected={this.state.selected === item.id}
    />
  );

  extractKey = (item, index) => item.email;

  render() {
    console.log(this.state);
    return (
      <View style={[container.center]}>
        <View style={[styles.listContainer]}>
          <FlatList
            data={people}
            renderItem={this.renderListItem}
            keyExtractor={this.extractKey}
            extraData={this.state}
          />
        </View>
      </View>
    );
  }
}

export default Register;
