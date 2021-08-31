import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    fontFamily: "nunito-regular",
    marginBottom: 10,
  },
  header: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    alignSelf: "center",
  },
  para: {
    lineHeight: 20,
    fontFamily: "nunito-regular",
    fontSize: 15,
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
  },
});
