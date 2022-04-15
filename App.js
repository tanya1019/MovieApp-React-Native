import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./Navigation/AppNavigation";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "Bold-Text": require("./assets/Fonts/Roboto-Bold.ttf"),
      "Light-Text": require("./assets/Fonts/Roboto-Light.ttf"),
      "Regular-Text": require("./assets/Fonts/Roboto-Regular.ttf"),
      "Medium-Text": require("./assets/Fonts/Roboto-Medium.ttf"),
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFonts()}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
