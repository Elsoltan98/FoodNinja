import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { fontScale, sHeight, sWidth, scale, vScale } from "@config/scale";
import { SvgXml } from "react-native-svg";
import { Logo } from "@assets/Logo";
import AppText from "@components/AppText";
import Colors from "@config/colors";
import CustomInput from "@components/CustomInput";
import CustomIcon from "@components/Icon";
import { Formik } from "formik";
import CustomBtn from "@components/CustomBtn";
import { ProfileIcon } from "@assets/Profile";
import { MessageIcon } from "@assets/Message";
import { LockIcon } from "@assets/Lock";
import { useNavigation } from "@react-navigation/native";
import NavTypes from "@config/NavTypes";
import CustomCheckbox from "@components/CustomCheckBox";

const Signup = () => {
  const [show, setShow] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation: { navigate: any } = useNavigation();
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedEmail, setCheckedEmail] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("./../../assets/bg.png")}
        style={styles.container}
      >
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
          initialValues={{ userName: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {(props) => (
            <View style={styles.formContainer}>
              <CustomInput
                inputPlaceHolder="User Name"
                value={props.values.userName}
                onChangeText={props.handleChange("userName")}
                onBlur={props.handleBlur("userName")}
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
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
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
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
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
        <View style={styles.continueContainer}>
          <View style={styles.checkContainer}>
            <CustomCheckbox
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
            <AppText
              text="Keep Me Signed In"
              color={Colors.light.textPrimary}
              size={fontScale(14)}
            />
          </View>
          <View style={styles.checkContainer}>
            <CustomCheckbox
              checked={checkedEmail}
              onPress={() => setCheckedEmail(!checkedEmail)}
            />
            <AppText
              text="Email Me About Special Pricing"
              color={Colors.light.textPrimary}
              size={fontScale(14)}
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <CustomBtn
            title="Create Account"
            onPress={() => navigation.navigate(NavTypes.SIGN_UP_PROCESS)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate(NavTypes.LOG_IN)}
          >
            <AppText
              text="already have an account?"
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
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    marginTop: vScale(50),
  },
  continueContainer: {
    justifyContent: "center",
    marginTop: vScale(10),
    marginBottom: vScale(10),
    marginLeft: scale(10),
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vScale(15),
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: vScale(10),
  },
  signupText: {
    marginTop: vScale(20),
    textDecorationLine: "underline",
  },
});

export default Signup;
