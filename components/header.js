import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://velog.velcdn.com/images/thgus05061/post/8fc7c151-1246-417d-90ff-dcc84c6f5ca8/image.png",
          width: 440,
          height: 230,
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 274.5,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    color: "#1C386F",
    textAlign: "center",
    fontSize: 26,
    fontWeight: 700,
    top: -110,
  },
  headerinnerText: {
    color: "#FFB800",
  },
});
