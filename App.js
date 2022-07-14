import * as React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigation/BottomTabs";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
  );
}