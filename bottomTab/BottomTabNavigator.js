import React, { useState } from "react";
import { View, Image, Modal, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CurrentLocationScreen from "./CurrentLocationScreen";
import SelectHospitalScreen from "./SelectHospitalScreen";
import LocationScreen from "./LocationScreen";
import RegisterMedicationScreen from "./RegisterMedicationScreen";
import MedicationScreen from "./MedicationScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            height: 90,
            top: 15,
            width: 400,
            borderRadius: 30,
          },
          tabBarIconStyle: { marginBottom: 1, marginTop: 10 },
          tabBarLabelStyle: { display: "none" },
        })}
      >
        <Tab.Screen
          name="MedicationScreen"
          component={MedicationScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/f2c4d8eb-2f35-4428-aa34-1cd7089b68ba/image.png",
                }}
                style={{
                  top: -10,
                  width: 35,
                  height: 37,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="CurrentLocationScreen"
          component={CurrentLocationScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View
                style={{
                  top: -30,
                  width: 95,
                  height: 95,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                  shadowColor: "#000",
                  shadowRadius: 4,
                  elevation: 4,
                }}
              >
                <Image
                  source={{
                    uri: "https://velog.velcdn.com/images/kkaerrung/post/026844ce-b04d-4b2b-bb39-3167382d52fe/image.png",
                    width: 47,
                    height: 60,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/869900ca-ea5d-4e5c-beed-d5a08aa8285e/image.png",
                }}
                style={{
                  top: -10,
                  width: 35,
                  height: 37,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingBottom: 0,
  },
});
