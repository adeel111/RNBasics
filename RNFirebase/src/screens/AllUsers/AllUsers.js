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

class AllUsers extends Component {
  static navigationOptions = () => ({
    title: "All Registered Users",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#607D8B"
    },
    headerRight: (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          // this.logout();
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
    usersData: [
      {
        id: 1,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 2,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 3,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 4,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 5,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 6,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 7,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 8,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 9,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      },
      {
        id: 10,
        image: require("../../images/placeholder.png"),
        name: "Adeel Iftikhar",
        email: "adeel67@gmail.com",
        number: "03066798594"
      }
    ]
  };

  renderItem = props => {
    const { item } = props;
    return (
      <View style={styles.flatListContainer}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.listItemContainer}>
            <View style={styles.leftContentContainer}>
              <Image style={styles.imageStyle} source={item.image} />
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
                  // this.updateUserData();
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
                  // this.deleteUser();
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
    return (
      <View style={styles.appContainer}>
        <StatusBar backgroundColor={"#455A64"} />
        <FlatList
          data={this.state.usersData}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default AllUsers;
