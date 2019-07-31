import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Loader from "../components/Loader";

class ForgotPassword extends Component {
  state = {
    formValid: true,
    loadingVisible: false,
    validEmail: false,
    emailAddress: ""
  };

  handleEmailChange = email => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validEmail } = this.state;

    this.setState({ emailAddress: email });
    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  };

  gotoNextStep = () => {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (this.state.emailAddress === "wrong@email.com") {
        this.setState({
          loadingVisible: false,
          formValid: false
        });
      } else {
        this.setState({
          loadingVisible: false,
          formValid: true
        });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({
      formValid: true
    });
  };

  render() {
    const { loadingVisible, formValid, validEmail } = this.state;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const showNotification = formValid ? false : true;
    return (
      <View
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.form}>
          <Text style={styles.forgotPasswordHeading}>
            Forgot your password?
          </Text>
          <Text style={styles.forgotPasswordSubHeading}>
            Enter your email to find your account
          </Text>
          <InputField
            customStyle={{ marginBottom: 30 }}
            textColor={colors.white}
            labelText="EMAIL_ADDRRESS"
            labelTextSize={14}
            labelColor={colors.white}
            borderBottomColor={colors.white}
            inputType="email"
            onChangeText={this.handleEmailChange}
            showCheckmark={validEmail}
          />
        </View>
        <View style={styles.nextButtonWrapper}>
          <NextArrowButton
            handleNextButton={this.gotoNextStep}
            disabled={!validEmail}
          />
        </View>
        <View>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="error:"
            firstLine="No account exist for the requested"
            secondLine="email address."
          />
        </View>
        <Loader modalVisible={loadingVisible} animationType="fade" />
      </View>
    );
  }
}

export default ForgotPassword;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  forgotPasswordHeading: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300"
  },
  forgotPasswordSubHeading: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 60
  },
  nextButtonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});
