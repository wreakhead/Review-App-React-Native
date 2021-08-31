import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { Navigator } from "./routes";
import { AboutRoute } from "./AboutRoute";
const Drawer = createDrawerNavigator();

export const MasterDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Navigator}
          options={{
            title: "GameSpot",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#00acc1",
            },
            headerTitleStyle: {
              letterSpacing: 1,
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutRoute}
          options={{
            title: "About us",
            headerStyle: {
              backgroundColor: "#00acc1",
            },
            headerTitleStyle: {
              letterSpacing: 1,
            },
            headerTitleAlign: "center",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
