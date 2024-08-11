import { StyleSheet, View } from "react-native";
import React from "react";

import { NotifiIcon } from "@assets/NotifiIcon";
import { SvgXml } from "react-native-svg";
import { fontScale, scale } from "@config/scale";
import Colors from "@config/colors";
import AppText from "@components/AppText";
import Layout from "@components/Layout";

const Home = () => {
  return (
    <Layout>
      <View style={styles.header}>
        <AppText
          text={`Find Your \nFavorite Food`}
          fontWeight="bold"
          size={fontScale(40)}
          color={Colors.light.textPrimary}
        />
        <View style={styles.iconContainer}>
          <SvgXml xml={NotifiIcon} width={25} height={25} />
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: Colors.light.white,
    padding: scale(14),
    borderRadius: scale(15),
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    elevation: 15,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
});

export default Home;
