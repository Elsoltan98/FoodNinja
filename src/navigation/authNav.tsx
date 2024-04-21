import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/intro';
import NavTypes from '../config/NavTypes';
import Login from '../screens/Login';
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
    </Stack.Navigator>
  );
};

export default AuthNav;
