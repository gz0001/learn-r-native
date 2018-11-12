import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";

// Styles:
import { margin } from "../../styles/globalStyles";
import home from "./styles";

class Home extends Component {
  static navigationOptions = ({}) => {
    return {
      title: "Home",
      headerRight: (
        <View style={margin.mr_4}>
          <Button
            onPress={() => alert("This is a button!")}
            title="Info"
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

  handleLoginInput = key => val => {
    this.setState({ [key]: val });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    if (username === "admin" && password === "admin") {
      this.setState({ error: false });
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
