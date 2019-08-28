import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import Loading from "../components/Loading";
import API from "../components/AxiosAPI";
import RenderImage from '../components/RenderImage';
import RenderText from '../components/RenderText';

class SimpleFlatList extends Component {
  state = {
    loading: true,
    personsData: [],
    personsImage: [],
    name: ""
  };

  componentDidMount = () => {
    this.getImage();
  };
  
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  getImage = () => {
    API.get(`https://randomuser.me/api/`)
      .then(res => {
        const data = res.data;
        this.setState({ personsImage: data.results });
        this.getTextualData();
      })
      .catch(err => {
        this.toggleLoading();
        alert("Image Data Error" + err);
      });
  };

  getTextualData = () => {
    API.get(`users/`)
      .then(res => {
        const data = res.data;
        this.setState({ personsData: data, loading: false});
      })
      .catch(err => {
        this.toggleLoading();
        alert("Textual Data Error ==> " + err);
      });
  };

  // this is the way to get and render data from
  // JSON Arrays & Objects through AxiosAPI...

  // renderImages = props => {
  //   const { large } = props.item.picture;
  //   return (
  //     <View style={styles.flatListItemContainer}>
  //       <Image
  //         style={styles.imageStyle}
  //         resizeMode="cover"
  //         source={{ uri: large }}
  //       />
  //     </View>
  //   );
  // };

  // renderText = props => {
  //   const { name, email } = props.item;
  //   const { street, city } = props.item.address;
  //   const { lat, lng } = props.item.address.geo;
  //   return (
  //     <View style={styles.flatListItemContainer}>
  //       <Text style={styles.textStyle}>Name : {name}</Text>
  //       <Text style={styles.textStyle}>Email : {email}</Text>
  //       <Text style={styles.textStyle}>
  //         Address : {street}, {city}
  //       </Text>
  //       <Text style={styles.textStyle}>
  //         Location : {lat}, {lng}
  //       </Text>
  //     </View>
  //   );
  // };

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <View style={styles.FlatListContainer}>
            <View style={{ flex: 0.25 }}>
              <FlatList
                data={this.state.personsImage}
                keyExtractor={(item, index) => item.id.toString()}
                // renderItem= {this.renderImage}
                renderItem= {({ item }) => <RenderImage item={item} />}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={{ flex: 0.75 }}>
              <FlatList
                data={this.state.personsData}
                keyExtractor={(item, index) => item.id.toString()}
                // renderItem= {this.renderText}
                renderItem= {({ item }) => <RenderText item={item} />}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default SimpleFlatList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "white"
  },
  imageStyle: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: "center"
  },
  flatListItemContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "gray"
  },
  FlatListContainer: {
    flex: 1,
    margin: 10
  },
  textStyle: {
    fontSize: 14,
    padding: 5,
    color: "black"
  }
});
