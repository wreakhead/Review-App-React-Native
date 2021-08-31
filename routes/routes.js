import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "../screens/home";
import React from "react";
import review from "../screens/review";
const Stack = createNativeStackNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={home}
            options={{
              title: "GameSpot",
              headerStyle: {
                backgroundColor: "tomato",
              },
            }}
          />
          <Stack.Screen
            name="review"
            component={review}
            options={{
              title: "Reviews",
              headerStyle: {
                backgroundColor: "tomato",
              },
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
