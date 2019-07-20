import React, { Component } from "react";
import DBHandler from "./src/DBHandler";
import Home from "./src/Home";
import UploadImage from "./src/UploadImage";

export default class App extends Component {
  componentDidMount = () => {
    DBHandler.init();
  };
  render() {
    return <UploadImage />
  }
}
