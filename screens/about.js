import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const about = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>about</Text>
    </View>
  );
};

export default about;
