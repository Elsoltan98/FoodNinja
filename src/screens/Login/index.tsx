import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { fontScale, sHeight, sWidth, scale, vScale } from '../../config/scale';
import { SvgXml } from 'react-native-svg';
import { Logo } from '../../assets/Logo';
import AppText from '../../components/AppText';
import Colors from '../../config/colors';
import CustomInput from '../../components/CustomInput';
import CustomIcon from '../../components/Icon';
import { Formik } from 'formik';
import CustomBtn from '../../components/CustomBtn';
import { facebookLogo } from '../../assets/facebookLogo';
import { googleLogo } from '../../assets/googleLogo';
import { useNavigation } from '@react-navigation/native';
import NavTypes from '../../config/NavTypes';

const Login = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigation: any = useNavigation();
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
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}>
          {props => (
            <View style={styles.formContainer}>
              <CustomInput
                inputPlaceHolder="Email"
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
              />
              <CustomInput
                withIcons
                inputPlaceHolder="Password"
                isPassword
                show={!show}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                rightIcon={
                  !show ? (
                    <CustomIcon
                      type="FontAwesome6"
                      name="eye"
                      color={Colors.light.gridPrimary}
                      size={fontScale(20)}
                      onPress={() => setShow(!show)}
                    />
                  ) : (
                    <CustomIcon
                      type="FontAwesome6"
                      name="eye-slash"
                      color={Colors.light.gridPrimary}
                      size={fontScale(20)}
                      onPress={() => setShow(!show)}
                    />
                  )
                }
              />
            </View>
          )}
        </Formik>
        <View style={styles.continueContainer}>
          <AppText text="Or Continue With" fontWeight="bold" />
          <View style={styles.socialContainer}>
            <CustomBtn
              title="Facebook"
              icon={<SvgXml xml={facebookLogo} />}
              style={[styles.socialBtns, { marginRight: scale(20) }]}
              colors={[Colors.light.white, Colors.light.white]}
              textColor={Colors.light.textPrimary}
            />
            <CustomBtn
              title="Google"
              icon={<SvgXml xml={googleLogo} />}
              style={styles.socialBtns}
              colors={[Colors.light.white, Colors.light.white]}
              textColor={Colors.light.textPrimary}
            />
          </View>
          <AppText
            text="Forgot Your Password?"
            fontWeight="bold"
            style={styles.signupText}
            color={Colors.light.gridSecondary}
          />
        </View>
        <View style={styles.footerContainer}>
          <CustomBtn title="Login" />
          <TouchableOpacity
            onPress={() => navigation.navigate(NavTypes.SIGN_UP)}>
            <AppText
              text="Don’t have an account? Sign up"
              style={styles.signupText}
              color={Colors.light.gridSecondary}
            />
          </TouchableOpacity>
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
  continueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vScale(10),
    marginBottom: vScale(20),
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vScale(20),
  },
  socialBtns: {
    paddingHorizontal: scale(0),
    width: sWidth * 0.42,
    backgroundColor: Colors.light.white,
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    elevation: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vScale(10),
  },
  signupText: {
    marginTop: vScale(20),
    textDecorationLine: 'underline',
  },
});

export default Login;