import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { scale } from "@config/scale";

interface IProp {
  children: React.ReactNode;
}

const Layout = ({ children }: IProp) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@assets/bg.png")}
        style={styles.container}
      >
        <View style={styles.opactiyContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  opactiyContainer: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
    paddingHorizontal: scale(15),
  },
});
