import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";
import { PropTypes } from "prop-types";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { animationType, visible, text } = this.props;
    return (
      <Modal visible={visible} animationType={animationType} transparent>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={"red"} size={50} />
            <Text style={styles.textStyle}>{text}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  loaderContainer: {
    width: 150,
    height: 150,
    borderRadius: 15,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  },
  textStyle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
    color: "red"
  }
});

Loading.propTypes = {
  animationType: PropTypes.string,
  visible: PropTypes.bool,
  text: PropTypes.string.isRequired
};
export default Loading;
