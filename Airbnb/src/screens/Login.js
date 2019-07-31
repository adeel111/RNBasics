import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";
import Loader from "../components/Loader";

export default class Login extends Component {
  state = {
    formValid: true,
    validEmail: false,
    emailAddress: "",
    validPassword: false,
    loadingVisible: false
  };
  handleNextButton = () => {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (
        this.state.emailAddress === "Aydil@gmail.com" &&
        this.state.validPassword
      ) {
        this.setState({ formValid: true, loadingVisible: false });
      } else {
        this.setState({ formValid: false, loadingVisible: false });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };

  handleEmailchange = email => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const validEmail = this.state
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  };

  handlePasswordChange = password => {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({ validPassword: true });
      } else if (password.length <= 4) {
        this.setState({ validPassword: false });
      }
    }
  };

  toggleNextButtonState = () => {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  };

  render() {
    const { formValid, loadingVisible, validEmail, validPassword } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailchange}
              showCheckmark={validEmail}
              autoFocus={true}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
            />
          </ScrollView>
        </View>
        <View style={styles.nextButton}>
          <NextArrowButton
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
        </View>
        <View
          style={[
            styles.notificationWrapper,
            { marginTop: notificationMarginTop }
          ]}
        >
          <Notification
            showNotification={showNotification}
            handleCloseNotification={() => this.handleCloseNotification()}
            type="Error:"
            firstLine="These credentials don't look right."
            secondLine="Plz try again."
          />
        </View>
        <Loader modalVisible={loadingVisible} animationType="fade" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
  },
  scrollViewWrapper: {
    flex: 1,
    marginTop: 70
  },
  scrollView: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  nextButton: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0,
    zIndex: 999
  }
});
