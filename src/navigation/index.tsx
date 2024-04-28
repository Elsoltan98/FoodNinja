import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/intro";
import NavTypes from "@config/NavTypes";
import AuthNav from "./authNav";
const Stack = createNativeStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavTypes.INTRO}
          component={Intro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavTypes.AUTH_NAV}
          component={AuthNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
