import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default RenderText = ({item}) => {
    const { name, email } = item;
    const { street, city } = item.address;
    const { lat, lng } = item.address.geo;
    return (
      <View style={styles.flatListItemContainer}>
        <Text style={styles.textStyle}>Name : {name}</Text>
        <Text style={styles.textStyle}>Email : {email}</Text>
        <Text style={styles.textStyle}>
          Address : {street}, {city}
        </Text>
        <Text style={styles.textStyle}>
          Location : {lat}, {lng}
        </Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  flatListItemContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "gray"
  },
  textStyle: {
    fontSize: 14,
    padding: 5,
    color: "black"
  }
});
