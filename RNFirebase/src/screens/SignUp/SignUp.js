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
import uuid from "react-native-uuid";
import styles from "./styles";
import Loading from "../../components/Loading";
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
    loading: false,
    textInputData: [
      {
        inputType: "text",
        placeholder: "Enter Name",
        multiline: false,
        autoCorrect: false,
        autoFocus: true,
        onChangeText: text => this.handleNameChange(text)
      },
      {
        inputType: "email",
        placeholder: "Enter Email",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: text => this.handleEmailChange(text)
      },
      {
        inputType: "text",
        placeholder: "Enter Number",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: text => this.handleNumberChange(text)
      },
      {
        inputType: "text",
        placeholder: "Enter Address",
        multiline: false,
        autoCorrect: false,
        autoFocus: false,
        onChangeText: text => this.handleAddressChange(text)
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

  //handle name text input change
  handleNameChange = name => {
    this.setState({ name: name });
  };

  //handle email text input change
  handleEmailChange = email => {
    this.setState({ email: email });
  };

  //handle phoneNumber text input change
  handleNumberChange = number => {
    this.setState({ number: number });
  };

  //handle address text input change
  handleAddressChange = address => {
    this.setState({ address: address });
  };

  //handle password text input change
  handlePasswordChange = password => {
    this.setState({ password: password });
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
  signUp = () => {
    const { image, email, password } = this.state;
    let validation = this.validateData();
    if (validation == true) {
      this.toggleLoading();
      firebaseService
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          // console.warn("User SignUp Successfully");
          this.uploadImage(image);
        })
        .catch(error => {
          this.toggleLoading();
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // console.warn("ERROR => ", errorCode, errorMessage);
        });
    }
  };

  // validate User's Register Data...
  validateData = () => {
    const { gotImage, name, email, number, address, password } = this.state;
    // console.warn(gotImage, name, email, number, address, password);
    if (gotImage != true) {
      console.warn("Please get an image");
      return false;
    } else {
      if (
        name == "" ||
        email == "" ||
        number == "" ||
        address == "" ||
        password == ""
      ) {
        console.warn("Please fill all fields");
        return false;
      } else {
        return true;
      }
    }
  };

  // First Upload image and download Image URI then call saveUserToDB()...
  uploadImage(uri, mime = "image/jpeg") {
    return new Promise((resolve, reject) => {
      const uploadUri =
        Platform.OS === "ios" ? uri.replace("file://", "") : uri;
      let uploadBlob = "";

      const imageRef = firebaseService
        .storage()
        .ref("images")
        .child(uuid.v4());

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

          const downnloadImageURI = imageRef.getDownloadURL().then(url => {
            this.setState(
              {
                imageURI: url
              },
              () => {
                // console.warn("ImageURI ==> ", this.state.imageURI);
                this.saveUserToDB();
              }
            );
          });
          return downnloadImageURI;
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          this.toggleLoading();
          reject(error);
        });
    });
  }

  // save User's SignUp info...
  saveUserToDB = () => {
    const { name, email, number, address, password } = this.state;
    const currentUserId = firebaseService.auth().currentUser.uid;
    // console.warn("saveUserToDB User Id", currentUserId);

    if (currentUserId != null) {
      firebaseService
        .database()
        .ref("RegisteredUsers")
        .child(currentUserId)
        .set({
          image: this.state.imageURI,
          name: name,
          email: email,
          number: number,
          address: address,
          password: password
        })
        .then(() => {
          this.toggleLoading();
          console.warn("User Registered Successfully");
          this.replaceScreen("SignIn");
        })
        .catch(error => {
          this.toggleLoading();
          console.warn("Error => ", error);
        });
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
    const { image } = this.state;
    return this.state.loading ? (
      <Loading text="SignUp in Progress" />
    ) : (
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
            this.signUp();
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
