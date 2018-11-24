import React, { Component } from "react";
import { AsyncStorage, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";

// Ajax:
import { get, post } from "../../utils/AJAX";
import url from "../../config/url";

// Custom components:
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import PlaceList from "../../components/PlaceList/PlaceList";
import PlaceDetail from "../../components/PlaceDetail/PlaceDetail";

// Screen:

// Actions:
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "../../store/actions/index";

class PlaceAdd extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Search a place in " + navigation.getParam("place", "Berlin")
    };
  };

  async componentDidMount() {
    /* const token = await AsyncStorage.getItem("token");

    const users = await get(url.users, { token });

    //console.log("get users: " + users.data[0].username);*/

    alert(`${this.props.user.username} is logged in`);
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  render() {
    //console.log("place is: ", this.props.navigation.state.params);

    //console.log("router state", this.props.navigation.state);

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

const PlaceStack = createStackNavigator(
  {
    PlaceAdd: connect(
      mapStateToProps,
      mapDispatchToProps
    )(PlaceAdd)
  },
  {
    initialRouteName: "PlaceAdd",
    //headerMode: "none",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center"
        //flex: 1
      }
    }
  }
);

export default PlaceStack;
