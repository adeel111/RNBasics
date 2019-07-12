import React from 'react';
import { StyleSheet } from "react-native";
import { containerPadding } from "../../prefabs/dimens";
import { colorPrimary } from "../../prefabs/colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle:{
    width: '100%',
    height: 55,
    padding: containerPadding,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
headerText: {
   fontSize: 20,
   textAlign: 'center',
   color: colorPrimary,
   fontWeight: 'bold',
   textAlign: 'center',
},
  textStyle: {
      fontSize: 25,
      alignSelf: 'center',
      color: colorPrimary,
  }, 
})