import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import InputField from "../../components/InputField";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    address: "",
    password: "",
    textInputData: [
      {
        inputType: "text",
        placeholder: "Enter Name",
        multiline: false,
        autoCorrect: false,
        autoFocus: true,
        onChangeText: this.handleEmailChange
      },
      {
        inputType: "email",
        placeholder: "Enter Email",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: this.handleEmailChange
      },
      {
        inputType: "text",
        placeholder: "Enter Number",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: this.handleEmailChange
      },
      {
        inputType: "text",
        placeholder: "Enter Address",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
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

  //handle name text input change
  handlePasswordChange = name => {
    this.setState({ name: name });
  };

  //handle email text input change
  handleEmailChange = email => {
    this.setState({ email: email });
  };

  //handle phoneNumber text input change
  handlePasswordChange = number => {
    this.setState({ number: number });
  };

  //handle address text input change
  handlePasswordChange = address => {
    this.setState({ address: address });
  };

  //handle password text input change
  handlePasswordChange = password => {
    this.setState({ password });
  };

  replaceScreen = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../images/placeholder.png")}
        />
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
            this.replaceScreen("SignIn");
          }}
        >
          <Text style={styles.buttonTextStyle}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              this.replaceScreen("SignIn");
            }}
          >
            <Text style={styles.signUpTextStyle}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignUp;
