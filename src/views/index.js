import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Fragment, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomeScreen, ProfileScreen } from "./sla";

const Index = () => {
  const Stack = createNativeStackNavigator();
  //const navigate
  useEffect(() => {
    console.log("t");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
