import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Success } from "@assets/Success";
import AppText from "@components/AppText";
import Colors from "@config/colors";
import { fontScale, vScale } from "@config/scale";
import CustomBtn from "@components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import NavTypes from "@config/NavTypes";

const SignUpSuccess = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@assets/bg.png")}
        style={styles.contentContainer}
      >
        <View style={styles.congratsContainer}>
          <SvgXml xml={Success} />
          <AppText
            text="Congrats!"
            color={Colors.light.gridSecondary}
            style={styles.congratsText}
            fontWeight="bold"
            size={fontScale(30)}
          />
          <AppText
            text="Your Profile Is Ready To Use"
            color={Colors.light.textPrimary}
            fontWeight="bold"
            size={fontScale(23)}
          />
        </View>

        <CustomBtn
          title="Try Order"
          style={styles.tryBtn}
          onPress={() => navigation.navigate(NavTypes.BOTTOM_TAB_NAV)}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  congratsText: {
    marginTop: vScale(33),
    marginBottom: vScale(16),
  },
  congratsContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  tryBtn: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    top: -40,
  },
});
export default SignUpSuccess;
