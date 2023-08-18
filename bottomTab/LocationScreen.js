import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import HospitalCircle from "../components/HospitalCircle";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const LocationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const region = route.params.region.currentRegion; // currentRegion 값 가져오기

  console.log(region);

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetchNearbyHospitals(region);
  }, [region]);

  const fetchNearbyHospitals = async (region) => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log("API Key:", apiKey);
    const radius = 2000;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${region.latitude},${region.longitude}&radius=${radius}&type=hospital&key=${apiKey}`
      );
      const data = await response.json();
      setHospitals(data.results);
      data.results.forEach((hospital) => {
        const { lat, lng } = hospital.geometry.location;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleNoButtonPress = () => {
    navigation.navigate("HomeScreen");
  };

  const renderMarkers = () => {
    return hospitals.map((hospital, index) => (
      <Marker
        key={index}
        title={hospital.name}
        coordinate={{
          latitude: hospital.geometry.location.lat,
          longitude: hospital.geometry.location.lng,
        }}
        pinColor="blue" // 병원 마커의 색상 지정
      />
    ));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://velog.velcdn.com/images/thgus05061/post/8fc7c151-1246-417d-90ff-dcc84c6f5ca8/image.png",
              width: 440,
              height: 220,
            }}
          />
        </View>
        <Text style={styles.headerText}>
          내 주변 <Text style={styles.headerinnerText}>병원</Text>을 찾았어요!
        </Text>
        <HospitalCircle />
        <MapView style={styles.map} initialRegion={region}>
          <Marker
            title="Current Location"
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          {renderMarkers()}
        </MapView>
        <Text style={styles.confirmText}>
          병원과 가까운{"\n"} <Text style={styles.confirmText2}>약국</Text>을
          찾아드릴까요?
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>예</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.noButton}
            onPress={handleNoButtonPress}
          >
            <Text style={styles.buttonText}>아니오</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5181FF",
  },
  header: {
    height: 274.5,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#5181FF",
  },
  map: {
    flex: 1,
    top: -100,
    backgroundColor: "#5181FF",
  },
  confirmText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 22,
    top: -70,
    fontWeight: "700",
  },
  confirmText2: {
    color: "#FFB800",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    top: -50,
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
  headerText: {
    color: "#1C386F",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
    top: -160,
  },
  headerinnerText: {
    color: "#FFB800",
  },
});

export default LocationScreen;
