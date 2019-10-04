import React, { Component } from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Card } from "react-native-elements";
import styles from "./styles";
import Loading from "../../components/Loading";
import firebaseService from "../../services/firebase";

class AllUsers extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "All Registered Users",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#607D8B"
    },
    headerRight: (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.state.params.signOut();
        }}
      >
        <Image
          source={require("../../images/logout_icon.png")}
          style={{
            marginRight: 15,
            width: 30,
            height: 30,
            tintColor: "white"
          }}
        />
      </TouchableOpacity>
    )
  });

  state = {
    data: [],
    loading: false,
    isFetching: false
  };

  // setParam for icon on header and call retrieveUserData() to
  // retrive data from database...
  componentDidMount = () => {
    this.toggleLoading(); // start
    this.props.navigation.setParams({ signOut: this.signOut });
    this.retrieveUserData();
  };

  // let the user signOut...
  signOut = async () => {
    try {
      await firebaseService.auth().signOut();
      this.replaceScreen("SignIn");
    } catch (e) {
      console.warn("Error: ", e);
    }
  };

  // Read From Database
  // It will read data `once` from the `Users` object and print it on console.
  // If we want to get data whenever there is any change in it,
  // we can use `on` instead of `once`

  // and this is the way to use `on` ==> https://stackoverflow.com/questions/37134351/firebase-query-on-failed-was-called-with-1-argument-expects-at-least-2
  // on, once
  retrieveUserData = () => {
    firebaseService
      .database()
      .ref("/RegisteredUsers")
      .once("value")
      .then(snapshot => {
        // .on("value", snapshot => { <=== on takes 2 arguments: the name for event, and callback,
        //  callback is just plain function which takes event as argument. ===>
        const comingArrayData = Object.values(snapshot.val());
        this.setState(
          {
            data: comingArrayData,
            isFetching: false
          },
          () => {
            if (this.state.loading === true) {
              this.toggleLoading(); // stop
            }
          }
        ).catch(error => {
          console.warn("Error => ", error);
        });
      });
  };

  // Update database (not used yet)
  updateSingleData = email => {
    firebase
      .database()
      .ref("/RegisteredUsers")
      .update({
        email
      })
      .then(data => {
        console.warn("Data Updated Successfully");
      })
      .catch(error => {
        console.warn("Error => ", error);
      });
  };

  // Delete from database (not used yet)
  deleteData = () => {
    firebaseService
      .database()
      .ref("/RegisteredUsers")
      .remove()
      .then(() => {
        console.warn("User Deleted Successfully");
      })
      .catch(error => {
        console.warn("Error => ", error);
      });
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

  // click listener on flat list items...
  onItemPress = item => {
    alert(item);
  };

  // pull to referesh the flatlist...
  onRefresh() {
    this.setState({ isFetching: true }, () => {
      this.retrieveUserData();
    });
  }

  // render items of FlatList...
  renderItem = props => {
    const { item } = props;
    return (
      <View style={styles.flatListContainer}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.listItemContainer}>
            <View style={styles.leftContentContainer}>
              <Image style={styles.imageStyle} source={{ uri: item.image }} />
            </View>
            <View style={styles.centerContentContainer}>
              <Text style={styles.nameTextStyle}>{item.name}</Text>
              <Text style={styles.otherTextStyle}>{item.email}</Text>
              <Text style={styles.otherTextStyle}>{item.number}</Text>
            </View>
            <View style={styles.rightContentContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonContainerStyle,
                  {
                    backgroundColor: "#EF6C00"
                  }
                ]}
                activeOpacity={0.7}
                onPress={() => {
                  // this.onItemPress(item);
                }}
              >
                <Text style={styles.buttonTextStyle}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonContainerStyle,
                  {
                    backgroundColor: "#ff0000"
                  }
                ]}
                activeOpacity={0.7}
                onPress={() => {
                  // this.onItemPress(item);
                }}
              >
                <Text style={styles.buttonTextStyle}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  render() {
    return this.state.loading ? (
      <Loading text="Please wait..." />
    ) : (
      <View style={styles.appContainer}>
        <StatusBar backgroundColor={"#455A64"} />
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default AllUsers;
