import React, { Component } from "react";
import { View, Text, TouchableOpacity, CheckBox } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import posed from "react-native-pose";

// Styles:
import { margin, layout } from "../../styles/globalStyles";
import styles from "./styles";

// Posed:
const ListItem = posed.View({
  enter: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 }
});

const PersonListItem = ({ people, onItemPress, selected }) => {
  const { id, first_name, last_name, country, email, vip } = people;

  return (
    <TouchableOpacity onPress={() => onItemPress(id)}>
      <ListItem style={[styles.listWrapper]}>
        <View
          style={[
            styles.listContainer,
            { backgroundColor: selected ? "#a7f442" : "white" }
          ]}
        >
          <View style={[styles.icon, layout.center_center]}>
            <View style={[styles.iconWrap, layout.center_center]}>
              <Icon name="user" size={16} color="white" />
            </View>
          </View>

          <View style={[styles.content]}>
            <Text>
              {first_name} {last_name}
            </Text>
            <Text>{email}</Text>
            <Text>{country}</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <CheckBox value={vip} />
          </View>
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

export default PersonListItem;
