import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

class RenderImage extends Component {
  render() {
    const { large } = props.item.picture;
    return (
      <View style={styles.flatListItemContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={{ uri: large }}
        />
      </View>
    );
  }
}

export default RenderImage;

const styles = StyleSheet.create({
  flatListItemContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "pink"
  },
  imageStyle: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: "center"
  }
});
