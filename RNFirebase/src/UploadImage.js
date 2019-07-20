import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";
import { AskPermission } from "./AskPermission";

const options = {
  title: "Upload Photo",
  takePhotoButtonTitle: "Take Photo from Camera",
  chooseFromLibraryButtonTitle: "Take Photo from Gallery",
  quality: 1
};

class UploadImage extends Component {
  state = {
    imageUri: ""
  };

  componentDidMount() {
    const permission = [
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    ];
    AskPermission(permission);
  }

  getImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        Alert.alert(response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imageUri: source
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 300, height: 300 }}>{this.state.imageUri}</Image>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.getImage()}
        >
          <Text style={styles.buttonText}>Get Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          //   onPress={() => this.getImage()}
        >
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          //   onPress={() => this.getImage()}
        >
          <Text style={styles.buttonText}>Download Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UploadImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: "green",
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    margin: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});
