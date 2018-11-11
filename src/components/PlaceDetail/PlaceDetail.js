import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconButton = ({ color = "black", name, size = 12, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Icon size={size} name={name} color={color} />
  </TouchableOpacity>
);

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>
          {"Awesome Place : " + props.selectedPlace.name}
        </Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.btn_group}>
          {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
          <IconButton
            color="red"
            name="trash"
            size={30}
            onPress={props.onItemDeleted}
            style={{ marginRight: 10 }}
          />

          <IconButton
            color="cyan"
            name="close"
            size={30}
            onPress={props.onModalClosed}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  btn_group: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default placeDetail;
