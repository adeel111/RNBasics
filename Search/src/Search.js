import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator
} from "react-native";
import { SearchBar } from "react-native-elements";

export default class Search extends Component {
  state = {
    isFetching: false,
    isLoading: true,
    text: "",
    dataSource: [],
    arrayholder: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          arrayholder: responseJson,
          isFetching: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  //   Pull to Refresh
  onRefresh() {
    this.setState({ isFetching: true }, function() {
      this.getData();
    });
  }

  SearchFilter(text) {
    //passing the inserted text in textinput
    const newData = this.state.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808"
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          containerStyle={{
            backgroundColor: "white",
            borderBottomColor: "transparent",
            borderTopColor: "transparent"
          }}
          inputContainerStyle={{
            backgroundColor: "pink"
          }}
          inputStyle={{ fontSize: 14 }}
          style={{
            alignSelf: "center"
          }}
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilter(text)}
          onClear={text => this.SearchFilter("")}
          placeholder="Search here..."
          lightTheme={true}
          value={this.state.text}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    padding: 16
  },
  textStyle: {
    padding: 10
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF"
  }
});
