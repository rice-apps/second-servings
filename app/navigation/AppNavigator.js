import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoodScreen from "../screens/FoodScreen";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Account" component={AccountNavigator} />
    <Tab.Screen name="Food" component={FoodScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
