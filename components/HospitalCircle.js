import { View, StyleSheet, Image } from "react-native";

const HospitalCircle = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://velog.velcdn.com/images/kkaerrung/post/49d2736e-5bad-4bb3-bf69-1a35b5352ab2/image.png",
          width: 80,
          height: 80,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -475,
    left: 150,
  },
});

export default HospitalCircle;
