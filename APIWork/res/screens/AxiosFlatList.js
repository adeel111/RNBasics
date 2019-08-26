import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Loading from "../components/Loading";
import API from "../components/AxiosAPI";

class AxiosFlatList extends Component {
  state = {
    loading: true,
    personsData: []
  };

  componentDidMount = () => {
    API.get(`api/`).then(res => {
      const data = res.data;
      this.setState({ personsData: data.results, loading: false });
    });
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  renderItem = personData => {
    return (
      <View>
        <Text style={styles.textStyle}>
          Name : {personData.name.first} {personData.name.first}
        </Text>
        <Image
          style={styles.imageStyle}
          source={{ uri: personData.picture.large }}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          {this.state.loading ? (
            <Loading />
          ) : (
            this.state.personsData.map(personData =>
              this.renderItem(personData)
            )
          )}
        </View>
      </View>
    );
  }
}

export default AxiosFlatList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "serif",
    margin: 20,
    color: "green"
  },
  imageStyle: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderRadius: 10
  }
});
