import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import RNFetchBlob from "react-native-fetch-blob";
import styles from "./styles";
import InputField from "../../components/InputField";
import firebaseService from "../../services/firebase";

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class SignUp extends Component {
  state = {
    image: null,
    gotImage: false,
    imageURI: null,
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
        onChangeText: () => {
          this.handleNameChange;
        }
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
        onChangeText: this.handleNumberChange
      },
      {
        inputType: "text",
        placeholder: "Enter Address",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: this.handleAddressChange
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
  handleNameChange = name => {
    // console.warn("method called");
    this.setState({ name: name });
    // console.warn(name);
  };

  //handle email text input change
  handleEmailChange = email => {
    this.setState({ email: email });
    console.warn(email);
  };

  //handle phoneNumber text input change
  handleNumberChange = number => {
    this.setState({ number: number });
    console.warn(number);
  };

  //handle address text input change
  handleAddressChange = address => {
    this.setState({ address: address });
    console.warn(address);
  };

  //handle password text input change
  handlePasswordChange = password => {
    this.setState({ password: password });
    console.warn(password);
  };

  // get Image from gallery
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

  // User signUp method
  signUp = (comingEmail, comingPassword) => {
    const { image } = this.state;
    this.uploadImage(image);
    // let validation = this.validateData();
    // if (validation == true) {
    const { name, email, number, address, password } = this.state;
    //   console.warn("Data is Valid");
    firebaseService
      .auth()
      .createUserWithEmailAndPassword(comingEmail, comingPassword)
      .then(() => {
        console.warn("User SignUp Successfully");
        this.saveUserToDB(name, email, number, address, password);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.warn("ERROR => ", errorCode, errorMessage);
      });
    // } else {
    //   console.warn("Data is not Valid");
    // }
  };

  // validate User's Register Data...
  validateData = () => {
    const { gotImage, name, email, number, address, password } = this.state;
    console.warn(gotImage, name, email, number, address, password);
    if (gotImage != true) {
      console.warn("Please get an image");
      return false;
    } else {
      if (
        name == "" ||
        email == "" ||
        number == "" ||
        address == "" ||
        password ||
        ""
      ) {
        console.warn("Please fill all fields");
        return false;
      } else {
        return true;
      }
    }
  };

  // First Upload image and download Image URI...

  uploadImage(uri, mime = "image/jpeg") {
    return new Promise((resolve, reject) => {
      const uploadUri =
        Platform.OS === "ios" ? uri.replace("file://", "") : uri;
      let uploadBlob = "";

      const imageRef = firebaseService
        .storage()
        .ref("images")
        .child("image_001");

      fs.readFile(uploadUri, "base64")
        .then(data => {
          return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then(blob => {
          uploadBlob = blob;
          return imageRef.put(blob, { contentType: mime });
        })
        .then(() => {
          uploadBlob.close();
          this.setState({ imageURI: imageRef.getDownloadURL() });
          console.warn("Image URI (Method) ==> ", imageRef.getDownloadURL());
          return imageRef.getDownloadURL();
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // save User's SignUp info...
  saveUserToDB = (name, email, number, address, password) => {
    const currentUserId = firebaseService.auth().currentUser.uid;
    // console.warn("saveUserToDB User Id", currentUserId);

    if (currentUserId != null) {
      console.warn("Image URI ==> ", this.state.imageURI);
      firebaseService
        .database()
        .ref("RegisteredUsers")
        .child(currentUserId)
        .set({
          image: this.state.imageURI,
          name: "name",
          email: "email",
          number: "number",
          address: "address",
          password: "password"
        })
        .then(() => {
          console.warn("Data Entered Successfully");
        })
        .catch(error => {
          console.warn("Error => ", error);
        });
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
                onChangeText={() => item.onChangeText}
              />
            </View>
          );
        })}

        <TouchableOpacity
          style={styles.buttonContainerStyle}
          activeOpacity={0.7}
          onPress={() => {
            this.signUp("aydil67@gmail.com", "qwerty");
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
