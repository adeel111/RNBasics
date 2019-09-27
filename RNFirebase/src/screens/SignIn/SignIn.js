import React, { Component } from "react";
import { StatusBar, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import InputField from "../../components/InputField";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    textInputData: [
      {
        inputType: "email",
        placeholder: "Enter Email",
        multiline: true,
        autoCorrect: false,
        autoFocus: true,
        onChangeText: text => this.handleEmailChange(text)
      },
      {
        inputType: "password",
        placeholder: "Enter Password",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: text => this.handlePasswordChange(text)
      }
    ]
  };

  //handle email text input change
  handleEmailChange = email => {
    this.setState({ email: email }, () => {
      // console.warn(this.state.email);
    });
  };

  //handle password text input change
  handlePasswordChange = password => {
    this.setState({ password: password }, () => {
      // console.warn(this.state.password);
    });
  };

  replaceScreen = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={"#455A64"} />
        {this.state.textInputData.map((item, index) => {
          return (
            <View key={index} style={styles.inputViewContainer}>
              <InputField
                inputType={item.inputType}
                placeholder={item.placeholder}
                multiline={item.multiline}
                autoCorrect={item.autoCorrect}
                autoFocus={item.autoFocus}
                onChangeText={item.onChangeText}
              />
            </View>
          );
        })}

        <TouchableOpacity
          style={styles.buttonContainerStyle}
          activeOpacity={0.7}
          onPress={() => {
            this.replaceScreen("HomeNavigation");
          }}
        >
          <Text style={styles.buttonTextStyle}>SignIn</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.replaceScreen("SignUp");
            }}
          >
            <Text style={styles.signUpTextStyle}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignIn;
