import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default RenderImage = ({item}) => {
  return (
    <View style={styles.flatListItemContainer}>
      <Image
        style={styles.imageStyle}
        resizeMode="cover"
        source={{ uri: item.picture.large }}
      />
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
  imageStyle: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: "center"
  }
});
