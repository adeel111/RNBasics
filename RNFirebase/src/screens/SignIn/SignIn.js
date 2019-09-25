import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
        multiline: false,
        autoCorrect: false,
        autoFocus: true,
        onChangeText: this.handleEmailChange
      },
      {
        inputType: "password",
        placeholder: "Enter Password",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: this.handlePasswordChange
      }
    ]
  };

  //handle email text input change
  handleEmailChange = email => {
    this.setState({ email: email });
  };

  //handle password text input change
  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  replaceScreen = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
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
          onPress={() => {
            this.replaceScreen("HomeNavigation");
          }}
        >
          <Text style={styles.buttonTextStyle}>SignIn</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
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
