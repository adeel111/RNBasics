import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function ShowTodos(props) {
  return (
    <View style={styles.listContainer}>
      <Feather
        name={props.checked ? "check" : "square"}
        size={30}
        color="black"
        style={{ marginLeft: 15 }}
        onPress={props.setChecked}
      />
      <View>
        {props.checked && <View style={styles.verticalLine} />}
        <Text style={styles.listItem}>{props.text}</Text>
      </View>
      <Feather
        name="trash-2"
        size={30}
        color="red"
        style={{ marginLeft: "auto" }}
        onPress={props.deleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: "5%",
    flexDirection: "row",
    borderColor: "#aaaaaa",
    borderBottomWidth: 1.5,
    width: "100%",
    alignItems: "stretch",
    minHeight: 40
  },
  listItem: {
    paddingLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
    color: "black"
  }
});
