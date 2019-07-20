import React, { Component } from "react";
import firebase from "@firebase/app";
require("firebase/database");
require("firebase/storage");
require("firebase/auth");

const config = {
  apiKey: "AIzaSyD2XhuLADgE1TCJyKT3nwPgMIrxORxfoUI",
  authDomain: "rnfirebase-30d6d.firebaseapp.com",
  databaseURL: "https://rnfirebase-30d6d.firebaseio.com",
  projectId: "rnfirebase-30d6d",
  storageBucket: "",
  messagingSenderId: "97941237093",
  appId: "1:97941237093:web:ad53a32102939b28"
};

export default class DBHandler {
  static auth;
  static database;
  static storage;

  static init() {
    firebase.initializeApp(config);
    // database = firebase.database();
    // auth = firebase.auth();
    // auth = firebase.storage();
  }
}
