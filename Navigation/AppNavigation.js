import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LandingPage from "../src/LandingPage";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Home";
import Detail from "../src/Detail";
import Search from "../src/Search";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"LandingPage"}
      >
        <Stack.Screen component={Detail} name="Detail" />
        <Stack.Screen component={LandingPage} name="LandingPage" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Search} name="Search" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
