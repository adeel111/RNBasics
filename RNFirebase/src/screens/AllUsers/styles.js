import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#B0BEC5"
  },
  flatListContainer: {
    flex: 1,
    // marginBottom: 10,
    // marginLeft: 10,
    // marginRight: 10
  },
  cardContainer: {
    elevation: 2,
    shadowOpacity: 2,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    justifyContent: "center"
  },
  listItemContainer: {
    flex: 1,
    padding: 5,
    flexDirection: "row"
  },
  leftContentContainer: {
    flex: 0.25,
    justifyContent: "center"
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: "center"
  },
  centerContentContainer: {
    flex: 0.5,
    justifyContent: "center"
  },
  nameTextStyle: {
    marginLeft: 5,
    margin: 2,
    fontSize: 16,
    fontWeight: "500"
  },
  otherTextStyle: {
    marginLeft: 5,
    margin: 2,
    fontSize: 14,
    // fontWeight: "500"
  },
  rightContentContainer: {
    flex: 0.25
  },
  buttonContainerStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  buttonTextStyle: {
    fontSize: 15,
    color: "white"
  }
});
