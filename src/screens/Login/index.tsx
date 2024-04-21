import { View, Text, ImageBackground, StyleSheet } from 'react-native';
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

const Login = () => {
  const [show, setShow] = useState<boolean>(false);
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
                show={show}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                rightIcon={
                  !show ? (
                    <CustomIcon
                      type="FontAwesome6"
                      name="eye-slash"
                      color={Colors.light.gridPrimary}
                      size={fontScale(20)}
                      onPress={() => setShow(!show)}
                    />
                  ) : (
                    <CustomIcon
                      type="FontAwesome6"
                      name="eye"
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: vScale(10),
            marginBottom: vScale(20),
          }}>
          <AppText text="Or Continue With" fontWeight="bold" />
          <View style={styles.socialContainer}>
            <CustomBtn title="Facebook" />
            <CustomBtn title="Google" />
          </View>
          <AppText text="Forgot Your Password?" fontWeight="bold" />
        </View>
        <View>
          <CustomBtn title="Login" />
          <AppText text="Don’t have an account? Sign up" />
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
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vScale(20),
  },
});

export default Login;
