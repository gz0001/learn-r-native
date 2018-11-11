import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";

// Styles:
import { margin } from "../../styles/globalStyles";
import home from "./styles";

class Home extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLoginInput = key => val => {
    this.setState({ [key]: val });
  };

  handleLogin = () => {
    this.props.navigation.navigate("PlaceSearch");
  };

  render() {
    const { username, password } = this.state;

    return (
      <View style={home.container}>
        <Text style={home.heading}>Welcome to awesome places</Text>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={this.handleLoginInput("username")}
          style={[home.input, margin.mb_5, margin.mt_5]}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={this.handleLoginInput("password")}
          secureTextEntry={true}
          style={[home.input, margin.mb_5]}
          textContentType="password"
        />

        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

export default connect()(Home);
