import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import ShowTodos from "./components/ShowTodos";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue("");
    }
  }

  checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        if (todo.key !== id) return true;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <Text style={styles.completedTodosStyle}>
        Completed Todos:
        <Text style={styles.countTextStyle}>
          {" "}
          {todos.filter(todo => todo.checked).length}
        </Text>
      </Text>
      <Text style={styles.notCompletedTodosStyle}>
        Not Completed Todos:
        <Text style={styles.countTextStyle}>
          {" "}
          {todos.filter(todo => !todo.checked).length}
        </Text>
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="What do you want to do today?"
          placeholderTextColor="#abbabb"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={addTodo}>
          <Feather
            name="plus"
            size={30}
            color="blue"
            style={{ marginLeft: 15, alignSelf: "center" }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {todos.map(item => (
          <ShowTodos
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  header: {
    marginTop: "15%",
    fontSize: 20,
    color: "red",
    alignSelf: "center",
    paddingBottom: 10
  },
  completedTodosStyle: {
    fontSize: 14,
    fontWeight: "500",
    color: "green",
    padding: 5
  },
  notCompletedTodosStyle: {
    fontSize: 14,
    fontWeight: "500",
    color: "red",
    padding: 5
  },
  countTextStyle: {
    fontSize: 16,
    fontWeight: "700",
    color: "black"
  },
  textInputContainer: {
    flexDirection: "row",
    borderColor: "black",
    borderBottomWidth: 1,
    paddingRight: 10
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    paddingLeft: 10
  }
});
