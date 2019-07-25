import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Easing,
  Animated
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";

class Notification extends Component {
  state = {
    positionValue: new Animated.Value(60)
  };

  animatedNotification = value => {
    const { positionValue } = this.state;
    Animated.timing(positionValue, {
      toValue: value,
      duration: 400,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeOutBack
    }).start();
  };
  closeNotification = () => {
    this.props.handleCloseNotification();
  };

  render() {
    const {
      type,
      firstLine,
      secondLine,
      showNotification,
      handleCloseNotification
    } = this.props;
    showNotification
      ? this.animatedNotification(0)
      : this.animatedNotification(60);
    const { positionValue } = this.state;

    return (
      <Animated.View
        style={[{ transform: [{ translateY: positionValue }] }, styles.wrapper]}
      >
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}> {type} </Text>
          <Text style={styles.errorMessage}> {firstLine} </Text>
          <Text style={styles.errorMessage}> {secondLine} </Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.closeNotification()}
          >
            <FontAwesome name="times" size={20} color={colors.lightGray} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func
};
export default Notification;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    width: "100%",
    height: 60,
    padding: 10
  },
  notificationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2
  },
  errorMessage: {
    fontSize: 14,
    marginBottom: 2
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10
  }
});
