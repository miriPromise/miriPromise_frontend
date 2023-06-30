import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import Header from "../components/header";
import HospitalCircle from "../components/HospitalCircle";
import { useNavigation } from "@react-navigation/native";

const CurrentLocationScreen = () => {
  const navigation = useNavigation();

  const region = {
    latitude: 37.484463,
    longitude: 127.014433,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleYesButtonPress = () => {
    navigation.navigate("SelectHospitalScreen");
  };

  return (
    <View style={styles.container}>
      <Header title={"내 주변 병원 찾기"} />
      <HospitalCircle />
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          title="Current Location"
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        ></Marker>
      </MapView>

      <Text style={styles.confirmText}> 이 위치가 맞나요? </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.yesButton}
          onPress={handleYesButtonPress}
        >
          <Text style={styles.buttonText}>예</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.noButton}>
          <Text style={styles.buttonText}>아니오</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5181FF",
  },
  map: {
    flex: 1,
    top: -90,
  },
  confirmText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 26,
    top: -70,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    top: -30,
  },
  yesButton: {
    width: 126,
    height: 55,
    right: 20,
    borderRadius: 23,
    backgroundColor: "#48FF9C",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  noButton: {
    width: 126,
    height: 55,
    left: 20,
    borderRadius: 23,
    backgroundColor: "#FF9292",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default CurrentLocationScreen;
