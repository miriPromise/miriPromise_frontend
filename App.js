import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./bottomTab/HomeScreen";
import BottomTabNavigator from "./bottomTab/BottomTabNavigator";
import CurrentLocationScreen from "./bottomTab/CurrentLocationScreen";
import SelectHospitalScreen from "./bottomTab/SelectHospitalScreen";

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
