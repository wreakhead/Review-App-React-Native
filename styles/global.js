import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontFamily: "nunito-regular",
  },
  header: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    alignSelf: "center",
  },
  para: {
    lineHeight: 20,
  },
  about: {
    backgroundColor: "lightgray",
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  gameCards: {
    backgroundColor: "lightgray",
    padding: 5,
    margin: 5,
    borderRadius: 2,
    height: 210,
    width: 150,
  },
  gameCardsTitle: {
    fontFamily: "nunito-bold",
    fontSize: 12,
    alignSelf: "center",
    justifyContent: "flex-end",
    paddingTop: 10,
  },
  gameCardsImage: {
    borderRadius: 2,
    height: 150,
    width: 140,
  },
  reviewImage: {
    padding: 5,
    margin: 5,
    borderRadius: 2,
    height: 310,
    width: 250,
    alignSelf: "center",
    margin: 10,
  },
  rating: {
    alignSelf: "center",
    color: "#ffb300",
    fontSize: 20,
    fontFamily: "nunito-bold",
  },
  heading: {
    fontFamily: "nunito-bold",
    fontSize: 17,
    paddingLeft: 5,
  },
});
