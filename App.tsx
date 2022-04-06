//import { StatusBar } from 'expo-status-bar'; 
      {/*<StatusBar style="auto" />*/}
//The Status-Bar purely gives an indication of the client side status e.g Loading, Errors, Time etc.

//constructor(email: string, username?: string) - The question mark means that the attribute it not mandatory for creating an object.
//Much like overloading a constructor in Java where you can have several different constructor, to give several object options.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChampionBundle from './components/Champion';

export default function App() {
  return (
    <View style={styles.appTsxStyling}>
      <Text>This is to back track React, as I have not learned much.</Text>
      <Text>I will focus on step by step, through the react development website. </Text>
      <ChampionBundle />
    </View>

    
  );
}


const styles = StyleSheet.create({
  appTsxStyling: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//You are able to call functions like this = export default App
