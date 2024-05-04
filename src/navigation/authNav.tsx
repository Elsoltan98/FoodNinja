import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavTypes } from "@config/NavTypes";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import SignupProcess from "../screens/SignUpProcess";
import SignUpSuccess from "../screens/SignUpSuccess";

export type AuthStackParams = {
  LOG_IN: undefined;
  SIGN_UP: undefined;
  SIGN_UP_PROCESS: undefined;
  SIGN_UP_SUCCESS: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();
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
      <Stack.Screen
        name={NavTypes.SIGN_UP_SUCCESS}
        component={SignUpSuccess}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
