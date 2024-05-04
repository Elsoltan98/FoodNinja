import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "../screens/intro";
import { NavTypes } from "@config/NavTypes";
import AuthNav from "./authNav";
import BottomTabsNav from "./bottomTabsNav";
import useColors from "../hooks/useColors";
import { useColorScheme } from "react-native";
import Colors from "@config/colors";

export type AppStackParams = {
  INTRO: undefined;
  AUTH_NAV: undefined;
  BOTTOM_TAB_NAV: undefined;
};

const Stack = createNativeStackNavigator<AppStackParams>();
const AppNav = () => {
  const { AppColors, applyColors } = useColors();
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    applyColors(colorScheme === "dark" ? Colors.dark : Colors.light);
  }, [applyColors, AppColors]);

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
        <Stack.Screen
          name={NavTypes.BOTTOM_TAB_NAV}
          component={BottomTabsNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
