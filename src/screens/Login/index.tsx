import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { fontScale, sHeight, sWidth, scale } from '../../config/scale';
import { SvgXml } from 'react-native-svg';
import { Logo } from '../../assets/Logo';
import AppText from '../../components/AppText';
import Colors from '../../config/colors';
import CustomInput from '../../components/CustomInput';

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./../../assets/bg.png')}
        style={styles.container}>
        <View style={styles.imageContainer}>
          <SvgXml xml={Logo} width={sWidth * 0.4} height={sHeight * 0.3} />
          <AppText
            text="Login To Your Account"
            size={fontScale(20)}
            color={Colors.light.textPrimary}
            fontWeight="bold"
          />
        </View>
        <View>
          <CustomInput />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(25),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
