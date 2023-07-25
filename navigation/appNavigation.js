import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AppLoading from "../screens/AppLoading";
import HomeSolid from "../assets/icons/home_solid.png";
import RewardSolid from "../assets/icons/rewards_solid.png";
import RecordSolid from "../assets/icons/records_solid.png";
import HomeOutline from "../assets/icons/home_outline.png";
import RewardOutline from "../assets/icons/rewards_outline.png";
import RecordOutline from "../assets/icons/records_outline.png";
import RewardScreen from "../screens/RewardScreen";
import RecordScreen from "../screens/RecordScreen";
import { Image, View } from "react-native";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={AppLoading}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Detail"
          options={{ headerShown: false }}
          component={DetailScreen}
        />
        <Stack.Screen
          name="Cart"
          options={{ headerShown: false }}
          component={CartScreen}
        />
        <Stack.Screen
          name="Checkout"
          options={{ headerShown: false }}
          component={CheckoutScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 19,
          borderRadius: 17,
          backgroundColor: "#FFFFFF",
          position: "absolute",
          marginHorizontal: 24,
          shadowColor: "rgba(50, 74, 89, 0.12)",
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 4 },
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="rewards" component={RewardScreen} />
      <Tab.Screen name="records" component={RecordScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == "home") {
    icon = focused ? (
      <Image source={HomeSolid} />
    ) : (
      <Image source={HomeOutline} />
    );
  } else if (route.name == "rewards") {
    icon = focused ? (
      <Image source={RewardSolid} />
    ) : (
      <Image source={RewardOutline} />
    );
  } else if (route.name == "records") {
    icon = focused ? (
      <Image source={RecordSolid} />
    ) : (
      <Image source={RecordOutline} />
    );
  }

  return <View>{icon}</View>;
};
