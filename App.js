import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./bottomTab/HomeScreen";
import BottomTabNavigator from "./bottomTab/BottomTabNavigator";
import CurrentLocationScreen from "./bottomTab/CurrentLocationScreen";
import SelectHospitalScreen from "./bottomTab/SelectHospitalScreen";
import MedicationScreen from "./bottomTab/MedicationScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectHospitalScreen"
            component={SelectHospitalScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CurrentLocationScreen"
            component={CurrentLocationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MedicationScreen"
            component={MedicationScreen}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
