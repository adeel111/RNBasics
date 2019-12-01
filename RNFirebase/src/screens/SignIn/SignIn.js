import React, { Component } from "react";
import { StatusBar, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import InputField from "../../components/InputField";
import firebaseService from "../../services/firebase";
import Loading from "../../components/Loading";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
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

  componentDidMount = () => {
    this.toggleLoading(); // start
    firebaseService.auth().onAuthStateChanged(user => {
      if (user) {
        this.toggleLoading(); // stop
        this.replaceScreen("AllUsers");
      } else {
        this.toggleLoading(); // stop
        // console.warn("user not logged in");
      }
    });
  };

  //handle email text input change...
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

  // let the valid user signIn...
  signIn = () => {
    let validation = this.validateData();
    let { email, password } = this.state;
    if (validation === true) {
      this.toggleLoading(); // start
      firebaseService
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.toggleLoading(); // stop
          this.replaceScreen("AllUsers");
        })
        .catch(err => {
          this.toggleLoading(); // stop
          // alert(err);
          alert("Invalid credentials or user may not registered.");
        });
    }
  };

  // validate User's SignIn Data...
  validateData = () => {
    const { email, password } = this.state;
    if (email == "" || password == "") {
      console.warn("Please fill all fields");
      return false;
    } else {
      return true;
    }
  };

  // toggle loading to show or hide progress model...
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  // navigate to the asked screen...
  replaceScreen = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  render() {
    return this.state.loading ? (
      <Loading text="SignIn in Progress" />
    ) : (
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
            this.signIn();
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
