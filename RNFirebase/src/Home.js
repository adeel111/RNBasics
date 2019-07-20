import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import firebase from "@firebase/app";
require("firebase/database");
require("firebase/storage");
require("firebase/auth");

class Home extends Component {
  // User signUp method
  signUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.warn("User SignUp Successfully");
        this.saveUserToDB(email, password);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.warn("ERROR => ", errorCode, errorMessage);
      });
  };

  // save User's SignUp info...
  saveUserToDB = (email, password) => {
    firebase
      .database()
      .ref("Users")
      .child("AllUsers")
      .push({
        //   .set({
        email: email,
        password: password
      })
      .then(data => {
        console.warn("Data Entered Successfully");
      })
      .catch(error => {
        console.warn("Error => ", error);
      });
  };

  // Read From Database
  // It will read data once from the `Users` object and print it on console.
  // If we want to get data whenever there is any change in it,
  // we can use on instead of once

  // on, once
  readUserData = () => {
    firebase
      .database()
      .ref("/Users/AllUsers")
      .on("value", function(snapshot) {
        console.warn(snapshot.val());
      });
    //   .then(data => {
    //     console.warn("Retrieved Data Successfully");
    //   })
    //   .catch(error => {
    //     console.warn("Error => ", error);
    //   });
  };

  // Update Database
  updateSingleData = email => {
    firebase
      .database()
      .ref("/Users/AllUsers")
      .update({
        email
      });
    //   .then(data => {
    //     console.warn("Data Updated Successfully");
    //   })
    //   .catch(error => {
    //     console.warn("Error => ", error);
    //   });
  };

  // Delete From Database
  deleteData = () => {
    console.warn("Deleting Specific Data");
    firebase
      .database()
      .ref("/Users/AllUsers")
      .remove();
    //   .then(data => {
    //     console.warn("Data Deleted Successfully");
    //   })
    //   .catch(error => {
    //     console.warn("Error => ", error);
    //   });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ margin: 25 }}
          onPress={() => this.signUp("raheel@gmail.com", "qwerty")}
        >
          <Text> Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ margin: 25 }}
          onPress={() => this.readUserData()}
        >
          <Text> Retrieve Data </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 25 }}
          onPress={() => this.updateSingleData("aydil67@gmail.com")}
        >
          <Text> Update Data </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 25 }}
          onPress={() => this.deleteData()}
        >
          <Text> Delete Data </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home;
