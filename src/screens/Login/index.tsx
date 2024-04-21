import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { sWidth } from '../../config/scale';

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./../../assets/bg.png')}
        style={{ flex: 1 }}></ImageBackground>
    </View>
  );
};

export default Login;
