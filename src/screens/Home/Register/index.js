import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import posed, { Transition } from "react-native-pose";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { SQLite, openDatabase } from "react-native-sqlite-storage";

// Ajax:
import { get, post } from "app/src/utils/AJAX";
import url from "app/src/config/url";

// Styles:
import { container, margin } from "app/src/styles/globalStyles";
import styles from "./styles";

// Data:
import people from "./people.json";
import PersonListItem from "app/src/components/PersonListItem";
import DefaultButton from "app/src/components/DefaultButton";

// Posed:

const ListContainer = posed.View({
  enter: { opacity: 1, delayChildren: 100, staggerChildren: 100 },
  exit: { opacity: 0, delay: 40 }
});

class Register extends Component {
  state = {
    people,
    selected: 1,
    open: false
  };

  sql = null;

  componentDidMount() {
    /*  this.sql = openDatabase({ name: "mydb.db" });
    console.log("bd: ", this.sql); */
  }
  toogleList = () => {
    this.setState({ open: !this.state.open });
  };

  handeItemSelect = id => {
    console.log("got id:", id);

    this.setState({ selected: id });
  };

  handleStatusChange = id => {
    const { people } = this.state;

    const newPeople = JSON.parse(JSON.stringify(people));

    const index = newPeople.findIndex(p => (p.id = id));

    newPeople[index].vip = !newPeople[index].vip;

    this.setState({ people: newPeople });
  };

  renderListItem = ({ item }) => (
    <PersonListItem
      people={item}
      onItemPress={this.handeItemSelect}
      onStatusChange={this.handleStatusChange}
      selected={this.state.selected === item.id}
    />
  );

  extractKey = (item, index) => item.email;

  render() {
    const { people, open } = this.state;
    return (
      <View style={[container.center]}>
        <DefaultButton
          onPress={this.toogleList}
          title="toogle list of people"
          buttonStyle={[margin.mb_3, styles.toogleBtn]}
        />
        <Transition>
          {open && (
            <ListContainer style={[styles.listContainer]} key="container">
              <FlatList
                data={people}
                renderItem={this.renderListItem}
                keyExtractor={this.extractKey}
                extraData={this.state}
                key="list"
              />
            </ListContainer>
          )}
        </Transition>
      </View>
    );
  }
}

export default Register;
