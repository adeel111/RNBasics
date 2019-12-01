import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
  },
  animationView: {
    width: 150,
    height: 100,
    marginLeft: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    tintColor: 'red',
  },
  buttonsViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    height: 45,
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  buttonTextStyle: {
    padding: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
