import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavTypes from "@config/NavTypes";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import SignupProcess from "../screens/SignUpProcess";
const Stack = createNativeStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavTypes.LOG_IN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavTypes.SIGN_UP}
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavTypes.SIGN_UP_PROCESS}
        component={SignupProcess}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
