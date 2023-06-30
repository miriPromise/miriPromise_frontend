import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <Image
      source={{
        uri: "https://velog.velcdn.com/images/kkaerrung/post/117fc1b5-2c9b-4335-a20d-1274783d533c/image.png",
        width: 575,
        height: 274,
      }}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F3AC61",
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    padding: 10,
    top: 50,
  },
});

export default Header;
