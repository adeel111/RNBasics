import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  //   Increment the Counter
  function incrementCounter() {
    setCount(count + 1);
  }

  //   Decrement the Counter
  function decrementCounter() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={incrementCounter}
        title="Increment"
        color="green"
        accessibilityLabel="Click this button to increase count"
      />
      <Text style={styles.textStyle}>
        You clicked
        <Text style={styles.countTextStyle}> {count}</Text> times.
      </Text>
      <Button
        onPress={decrementCounter}
        title="Decrement"
        color="red"
        accessibilityLabel="Click this button to increase count"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "500",
    margin: 10
  },
  countTextStyle: {
    fontSize: 16,
    fontWeight: "700",
    color: "blue"
  }
});
