import React, { Component } from "react";
import { AsyncStorage, View, Text, ImageBackground } from "react-native";
import { connect } from "react-redux";
import {
  NavigationEvents,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

// Ajax:
import { get, post } from "../../../utils/AJAX";
import url from "../../../config/url";

// Styles:
import { margin } from "../../../styles/globalStyles";
import styles from "./styles";

// Nav Components:
import Register from "./../Register/index";
import Animation from "./../Animation";

// Custom Components:
import DefaultButton from "../../../components/DefaultButton";
import DefaultInput from "../../../components/DefaultInput";

// Images:
import bgWhite from "../../../assets/bg-white.jpeg";

class Login extends Component {
  static navigationOptions = ({}) => {
    return {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return focused ? (
          <Icon name="home" size={16} color={tintColor} />
        ) : null;
      }
    };
  };

  state = {
    username: "",
    password: "",
    error: false
  };

  async componentDidMount() {
    /* const result = await get(url.users);
    console.log("get users: ", result); */

    console.log("Ready to start");
  }

  handleLoginInput = key => val => {
    this.setState({ [key]: val });
  };

  handleLogin = async () => {
    const { username, password } = this.state;

    //const auth = await post(url.users + "/login", { username, password });
    if (username === "admin" || password === "admin" || username === "Admin") {
      this.setState({ error: false });
      this.props.onLogin({ username, password });
      /* await AsyncStorage.setItem("token", auth.data.token, err => {
        console.log("fail to store. ", err);
      }); */
      this.props.navigation.navigate("PlaceStack");
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { username, password, error } = this.state;

    //console.log("router state", this.props.navigation.state);
    return (
      <ImageBackground source={bgWhite} style={styles.bg}>
        <View style={styles.container}>
          {/* <NavigationEvents
          onWillFocus={payload => console.log("will focus", payload)}
          onDidFocus={payload => console.log("did focus", payload)}
          onWillBlur={payload => console.log("will blur", payload)}
          onDidBlur={payload => console.log("did blur", payload)}
        /> */}
          <Text style={styles.heading}>Welcome to awesome places</Text>

          <DefaultInput
            placeholder="Username"
            value={username}
            onSubmitEditing={this.handleLogin}
            onChangeText={this.handleLoginInput("username")}
            style={[styles.input, margin.mb_5, margin.mt_5]}
          />

          <DefaultInput
            placeholder="Password"
            value={password}
            onChangeText={this.handleLoginInput("password")}
            onSubmitEditing={this.handleLogin}
            secureTextEntry={true}
            style={[styles.input, margin.mb_5]}
            textContentType="password"
          />

          <DefaultButton
            title="Login"
            buttonStyle={styles.login}
            onPress={this.handleLogin}
          />
          {error && (
            <Text style={[margin.mt_4, { color: "red" }]}>
              Wrong username or password
            </Text>
          )}
        </View>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch({ type: "LOGIN", user })
  };
};

const LoginConnect = connect(
  null,
  mapDispatchToProps
)(Login);

export default createMaterialTopTabNavigator(
  { Register, Animation, Login: LoginConnect },
  {
    initialRouteName: "Register",
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#f0edf6",
      showIcon: true,
      inactiveTintColor: "#3e2465",
      tabStyle: { backgroundColor: "#694fad" }
    }
  }
);
