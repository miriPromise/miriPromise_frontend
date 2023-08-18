import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const imageUrls = [
  "https://velog.velcdn.com/images/thgus05061/post/b45c4ed2-b6fc-4f90-9fa1-0d537692871f/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/91e1d20a-1c53-4bf7-bd8a-aeeb7b6e626b/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/ca256136-d3cc-49f9-956f-b8b6f4db7741/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/3906a86b-ca65-444f-8643-6058dd888f3c/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/8275ed57-5356-4c47-a45c-ca16c35370f0/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/97662a37-3c8f-47d2-9831-248d27d30d74/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/ffb2a9af-0dea-4e0d-8a71-99eb99141dc0/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/4e1ca0d2-50c8-411f-8dfb-c58f3fbe251d/image.png",
  "https://velog.velcdn.com/images/thgus05061/post/7639e916-b90c-4d8e-8b52-4acb467f8787/image.png",
];

const SelectHospitalScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const region = route.params;

  const hospitalNames = [
    "내과",
    "한의원",
    "이비인후과",
    "피부과",
    "흉부외과",
    "안과",
    "재활의학과",
    "정형외과",
    "응급의학과",
  ];

  const renderGridItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() =>
        navigation.navigate("LocationScreen", {
          imageUrl: item,
          hospitalName: hospitalNames[index],
          region,
        })
      }
    >
      <Image source={{ uri: item }} style={styles.images} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://velog.velcdn.com/images/thgus05061/post/8fc7c151-1246-417d-90ff-dcc84c6f5ca8/image.png",
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          어떤 병원<Text style={styles.text}>을 찾으세요?</Text>
        </Text>
      </View>
      <View style={styles.FlatListContainer}>
        <FlatList
          data={imageUrls}
          renderItem={renderGridItem}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          style={styles.cardStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5484FF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 440,
    height: 230,
  },
  textContainer: {
    position: "absolute",
    top: 110,
    textAlign: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1C386E",
    textAlign: "center",
  },
  nameText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFB800",
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 100,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 19,
  },
  images: {
    width: 117,
    height: 117,
  },
  FlatListContainer: {
    flex: 1,
    padding: 7,
    width: 365,
    height: 1389,
    marginTop: 19,
  },
});

export default SelectHospitalScreen;
