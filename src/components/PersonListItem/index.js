import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Styles:
import { margin, layout } from "../../styles/globalStyles";
import styles from "./styles";

const PersonListItem = ({ people, onItemPress, selected }) => {
  const { id, first_name, last_name, country, email, vip } = people;
  console.log(id + ": " + selected);

  return (
    <TouchableOpacity onPress={() => onItemPress(id)}>
      <View style={[styles.listWrapper]}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PersonListItem;
