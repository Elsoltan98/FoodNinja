import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomIcon from "@components/Icon";
import Colors from "@config/colors";
import { fontScale, sHeight, sWidth, scale, vScale } from "@config/scale";
import AppText from "@components/AppText";
import CustomInput from "@components/CustomInput";
import CustomBtn from "@components/CustomBtn";
import { SvgXml } from "react-native-svg";
import { Paypal } from "@assets/paypal";
import { VisaIcon } from "@assets/visa ";
import { Payoneer } from "@assets/Payoneer";
import { GalleryIcon } from "@assets/Gallery Icon";
import { CameraIcon } from "@assets/Camera Icon";
import { PinLogo } from "@assets/PinLogo";
import { useNavigation } from "@react-navigation/native";
import { NavTypes } from "@config/NavTypes";

const SignupProcess = () => {
  const [processNum, setProcessNum] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation: any = useNavigation();

  //console.log(processNum);

  const nextProcess = () => {
    setProcessNum(processNum + 1);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../assets/bg.png")}
        style={styles.container}
      >
        {processNum === 0 ? (
          <View style={styles.overlayContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backContainer}
            >
              <CustomIcon
                type="Entypo"
                name="chevron-left"
                size={fontScale(20)}
                color={Colors.light.orange}
              />
            </TouchableOpacity>
            <View>
              <AppText
                text="Fill in your bio to get started"
                fontWeight="bold"
                size={fontScale(30)}
                style={{ marginBottom: vScale(20) }}
              />
              <AppText
                text={`This data will be displayed in your account \nprofile for security`}
                style={{ marginBottom: vScale(40) }}
              />
              <CustomInput inputPlaceHolder="First Name" />
              <CustomInput inputPlaceHolder="Last Name" />
              <CustomInput inputPlaceHolder="Mobile Number" />
            </View>
          </View>
        ) : processNum === 1 ? (
          <View style={styles.overlayContainer}>
            <TouchableOpacity
              onPress={() => setProcessNum(processNum - 1)}
              style={styles.backContainer}
            >
              <CustomIcon
                type="Entypo"
                name="chevron-left"
                size={fontScale(20)}
                color={Colors.light.orange}
              />
            </TouchableOpacity>
            <View>
              <AppText
                text="Payment Method"
                fontWeight="bold"
                size={fontScale(30)}
                style={{ marginBottom: vScale(20) }}
              />
              <AppText
                text={`This data will be displayed in your account \nprofile for security`}
                style={{ marginBottom: vScale(40) }}
              />
              <CustomBtn
                style={styles.paymentBtns}
                colors={[Colors.light.white, Colors.light.white]}
                title=""
                icon={<SvgXml xml={Paypal} />}
              />
              <CustomBtn
                style={styles.paymentBtns}
                colors={[Colors.light.white, Colors.light.white]}
                title=""
                icon={<SvgXml xml={VisaIcon} />}
              />
              <CustomBtn
                style={styles.paymentBtns}
                colors={[Colors.light.white, Colors.light.white]}
                title=""
                icon={<SvgXml xml={Payoneer} />}
              />
            </View>
          </View>
        ) : processNum === 2 ? (
          <View style={styles.overlayContainer}>
            <TouchableOpacity
              onPress={() => setProcessNum(processNum - 1)}
              style={styles.backContainer}
            >
              <CustomIcon
                type="Entypo"
                name="chevron-left"
                size={fontScale(20)}
                color={Colors.light.orange}
              />
            </TouchableOpacity>
            <View>
              <AppText
                text="Upload Your Photo Profile"
                fontWeight="bold"
                size={fontScale(30)}
                style={{ marginBottom: vScale(20) }}
              />
              <AppText
                text={`This data will be displayed in your account \nprofile for security`}
                style={{ marginBottom: vScale(40) }}
              />
              <CustomBtn
                style={[styles.paymentBtns, styles.photoBtns]}
                colors={[Colors.light.white, Colors.light.white]}
                title=""
                icon={<SvgXml xml={GalleryIcon} />}
              />
              <CustomBtn
                style={[styles.paymentBtns, styles.photoBtns]}
                colors={[Colors.light.white, Colors.light.white]}
                title=""
                icon={<SvgXml xml={CameraIcon} />}
              />
            </View>
          </View>
        ) : (
          <View style={styles.overlayContainer}>
            <TouchableOpacity
              onPress={() => setProcessNum(processNum - 1)}
              style={styles.backContainer}
            >
              <CustomIcon
                type="Entypo"
                name="chevron-left"
                size={fontScale(20)}
                color={Colors.light.orange}
              />
            </TouchableOpacity>
            <View>
              <AppText
                text="Set Your Location"
                fontWeight="bold"
                size={fontScale(30)}
                style={{ marginBottom: vScale(20) }}
              />
              <AppText
                text={`This data will be displayed in your account \nprofile for security`}
                style={{ marginBottom: vScale(40) }}
              />
              <View style={[styles.locationBtns, styles.photoBtns]}>
                <View style={styles.yourLocation}>
                  <SvgXml xml={PinLogo} />
                  <AppText
                    text="Your Location"
                    size={fontScale(15)}
                    style={{ marginLeft: scale(10) }}
                    fontWeight="medium"
                  />
                </View>
                <CustomBtn
                  title="Set Location"
                  style={{
                    paddingHorizontal: scale(10),
                    bottom: -15,
                  }}
                  colors={[Colors.light.lightGray2, Colors.light.lightGray2]}
                  textColor={Colors.light.textPrimary}
                />
              </View>
            </View>
          </View>
        )}
        <View style={styles.nextContainer}>
          <CustomBtn
            title="Next"
            onPress={() =>
              processNum === 3
                ? navigation.navigate(NavTypes.SIGN_UP_SUCCESS)
                : nextProcess()
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
  },
  backContainer: {
    backgroundColor: Colors.light.lightOrange,
    width: sWidth * 0.13,
    height: sHeight * 0.06,
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: vScale(25),
  },
  overlayContainer: {
    backgroundColor: Colors.light.transWhite,
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingHorizontal: scale(25),
    paddingVertical: vScale(15),
  },
  nextContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: vScale(-40),
  },
  paymentBtns: {
    paddingHorizontal: scale(0),
    height: sHeight * 0.085,
    marginBottom: vScale(20),
    backgroundColor: Colors.light.white,
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    elevation: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  photoBtns: {
    height: sHeight * 0.18,
    borderRadius: scale(22),
  },
  locationBtns: {
    paddingHorizontal: scale(0),
    marginBottom: vScale(20),
    backgroundColor: Colors.light.white,
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    elevation: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  yourLocation: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
});
export default SignupProcess;
