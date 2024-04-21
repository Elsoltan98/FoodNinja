import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { fontScale, sHeight, sWidth, scale, vScale } from '../../config/scale';
import { SvgXml } from 'react-native-svg';
import { Logo } from '../../assets/Logo';
import AppText from '../../components/AppText';
import Colors from '../../config/colors';
import CustomInput from '../../components/CustomInput';
import CustomIcon from '../../components/Icon';

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
        <View style={styles.formContainer}>
          <CustomInput inputPlaceHolder="Email" />
          <CustomInput
            withIcons
            inputPlaceHolder="Password"
            rightIcon={
              <CustomIcon
                type="FontAwesome6"
                name="eye"
                color={Colors.light.gridPrimary}
                size={fontScale(20)}
              />
            }
          />
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
  formContainer: {
    marginTop: vScale(50),
  },
});

export default Login;
