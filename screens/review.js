import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const review = ({ route, navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>{route.params.title}</Text>

      <Image
        style={globalStyles.reviewImage}
        source={{
          uri: route.params.image,
        }}
      />

      <Text style={globalStyles.rating}>{route.params.rating} 🌟</Text>
      <Text style={globalStyles.heading}>About:</Text>
      <ScrollView>
        <Text style={globalStyles.para}>{route.params.body}</Text>
      </ScrollView>
    </View>
  );
};

export default review;
