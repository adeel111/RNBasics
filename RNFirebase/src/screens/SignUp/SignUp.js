import React, { Component } from "react";
import { StatusBar, View, Text, TouchableOpacity, Image } from "react-native";
import DocumentPicker from "react-native-document-picker";
import styles from "./styles";
import InputField from "../../components/InputField";

class SignUp extends Component {
  state = {
    image: null,
    gotImage: false,
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
    this.setState({ password: password });
  };

  getImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images]
      });
      this.setState({ image: res.uri, gotImage: true }, () => {
        // console.warn(this.state.image, this.state.gotImage);
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  replaceScreen = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={"#455A64"} />
        <TouchableOpacity
          style={styles.imageStyle}
          activeOpacity={0.7}
          onPress={() => {
            this.getImage();
          }}
        >
          {this.state.gotImage ? (
            <Image style={styles.imageStyle} source={{ uri: image }} />
          ) : (
            <Image
              style={styles.imageStyle}
              source={require("../../images/placeholder.png")}
            />
          )}
        </TouchableOpacity>
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
            this.replaceScreen("SignIn");
          }}
        >
          <Text style={styles.buttonTextStyle}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
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
