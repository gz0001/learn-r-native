import React, { Component } from "react";
import { AsyncStorage, View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";

// Ajax:
import { get, post } from "../../utils/AJAX";
import url from "../../config/url";

// Styles:
import { margin } from "../../styles/globalStyles";
import userProfile from "./styles";

class UserProfile extends Component {
  static navigationOptions = ({}) => {
    return {
      title: "User profile",
      headerRight: (
        <View style={margin.mr_4}>
          <Button
            onPress={() => alert("This is a button!")}
            title="Log "
            color="black"
          />
        </View>
      )
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
  }

  handleLoginInput = key => val => {
    this.setState({ [key]: val });
  };

  handleLogin = async () => {
    const { username, password } = this.state;

    const auth = await post(url.users + "/login", { username, password });

    if (auth.data) {
      this.setState({ error: false });
      await AsyncStorage.setItem("token", auth.data.token, err => {
        console.log("fail to store. ", err);
      });
      console.log("logged in: ", auth.data);
      this.props.navigation.navigate("PlaceSearch", { place: "New York" });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { username, password, error } = this.state;

    //console.log("router state", this.props.navigation.state);
    return (
      <View style={home.container}>
        {/* <NavigationEvents
          onWillFocus={payload => console.log("will focus", payload)}
          onDidFocus={payload => console.log("did focus", payload)}
          onWillBlur={payload => console.log("will blur", payload)}
          onDidBlur={payload => console.log("did blur", payload)}
        /> */}
        <Text style={home.heading}>Welcome to awesome places</Text>

        <TextInput
          placeholder="Username"
          value={username}
          onSubmitEditing={this.handleLogin}
          onChangeText={this.handleLoginInput("username")}
          style={[home.input, margin.mb_5, margin.mt_5]}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={this.handleLoginInput("password")}
          onSubmitEditing={this.handleLogin}
          secureTextEntry={true}
          style={[home.input, margin.mb_5]}
          textContentType="password"
        />

        <Button title="Login" onPress={this.handleLogin} />
        {error && (
          <Text style={[margin.mt_4, { color: "red" }]}>
            Wrong username or password
          </Text>
        )}
      </View>
    );
  }
}

export default connect()(Home);
