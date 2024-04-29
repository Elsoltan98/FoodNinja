import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavTypes from "@config/NavTypes";

import Home from "../screens/Home";
const Stack = createNativeStackNavigator();
const BottomTabsNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavTypes.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomTabsNav;
