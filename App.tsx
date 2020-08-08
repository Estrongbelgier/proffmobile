import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { activateKeepAwake } from "expo-keep-awake";
import Landing from "./src/pages/Landing";
export default function App() {
  activateKeepAwake();
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}

/* TIP se  keep awake não funcionar, 
basta importarexpo-keep-awake e utilizar 
a função que esta dentro. */
