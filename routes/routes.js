import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "../screens/home";
import React from "react";
import review from "../screens/review";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();
export const Navigator = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="review"
            component={review}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
