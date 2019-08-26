import React, { Component } from "react";
import { View, StyleSheet, Modal, ActivityIndicator } from "react-native";
import { PropTypes } from "prop-types";

class Loading extends Component {
  render() {
    const { animationType, visible } = this.props;
    return (
      <Modal visible={visible} animationType={animationType} transparent>
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={"green"} size="large" />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: "transparent",
    borderRadius: 15,
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: -45,
    marginTop: -45,
    justifyContent: "center",
    alignItems: "center"
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
});

Loading.propTypes = {
  animationType: PropTypes.string,
  visible: PropTypes.bool
};

export default Loading;
