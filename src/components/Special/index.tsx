import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Colors from "@config/colors";
import { scale, sHeight, sWidth } from "@config/scale";
import AppText from "@components/AppText";
import CustomBtn from "@components/CustomBtn";

const SpecialCard = () => {
  return (
    <LinearGradient
      colors={[Colors.light.gridPrimary, Colors.light.gridSecondary]}
      style={styles.container}
    >
      <ImageBackground
        source={require("@assets/Pattern.png")}
        style={{ height: sHeight * 0.21, padding: scale(35) }}
      >
        <Image source={require("@assets/Image.png")} style={styles.img} />
        <View style={styles.card}>
          <AppText
            text={`Special Deal For \nOctober`}
            color={Colors.light.white}
            size={scale(22)}
            fontWeight="bold"
          />
          <CustomBtn
            title="Buy Now"
            colors={[Colors.light.white, Colors.light.white]}
            textColor={Colors.light.gridPrimary}
            style={{ padding: 0, alignSelf: "center", marginLeft: 60 }}
            gridStyle={{ paddingHorizontal: 0, width: sWidth * 0.25 }}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default SpecialCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginTop: 20,
  },
  img: {
    position: "absolute",
    right: 77,
    top: -50,
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
