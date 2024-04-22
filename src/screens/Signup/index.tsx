import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
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
import { ProfileIcon } from '../../assets/Profile';
import { MessageIcon } from '../../assets/Message';
import { LockIcon } from '../../assets/Lock';

const Signup = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./../../assets/bg.png')}
        style={styles.container}>
        <View style={styles.imageContainer}>
          <SvgXml xml={Logo} width={sWidth * 0.4} height={sHeight * 0.3} />
          <AppText
            text="Sign Up For Free"
            size={fontScale(20)}
            color={Colors.light.textPrimary}
            fontWeight="bold"
          />
        </View>
        <Formik
          initialValues={{ userName: '', email: '', password: '' }}
          onSubmit={values => console.log(values)}>
          {props => (
            <View style={styles.formContainer}>
              <CustomInput
                inputPlaceHolder="User Name"
                value={props.values.userName}
                onChangeText={props.handleChange('userName')}
                onBlur={props.handleBlur('userName')}
                withIcons
                leftIcon={
                  <SvgXml
                    xml={ProfileIcon}
                    width={sWidth * 0.06}
                    height={sHeight * 0.03}
                  />
                }
              />
              <CustomInput
                inputPlaceHolder="Email"
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                withIcons
                leftIcon={
                  <SvgXml
                    xml={MessageIcon}
                    width={sWidth * 0.06}
                    height={sHeight * 0.03}
                  />
                }
              />
              <CustomInput
                inputPlaceHolder="Password"
                isPassword
                show={!show}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                withIcons
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
                leftIcon={
                  <SvgXml
                    xml={LockIcon}
                    width={sWidth * 0.06}
                    height={sHeight * 0.03}
                  />
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
          <AppText
            text="Don’t have an account? Sign up"
            style={styles.signupText}
            color={Colors.light.gridSecondary}
          />
        </View>
      </ImageBackground>
    </ScrollView>
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

export default Signup;