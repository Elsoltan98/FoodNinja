import { StyleSheet, View } from "react-native";
import React from "react";

import { NotifiIcon } from "@assets/NotifiIcon";
import { SvgXml } from "react-native-svg";
import { fontScale, scale, vScale } from "@config/scale";
import Colors from "@config/colors";
import AppText from "@components/AppText";
import Layout from "@components/Layout";
import CustomInput from "@components/CustomInput";
import { SearchInput } from "@assets/SearchInput";
import { FilterIcon } from "@assets/Filter";
import SpecialCard from "@components/Special";

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
      <View style={styles.searchContainer}>
        <CustomInput
          leftIcon={<SvgXml xml={SearchInput} width={15} height={15} />}
          inputPlaceHolder="What do you want to order?"
          style={styles.inputContainer}
          withIcons
        />
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: Colors.light.lightOrange, marginLeft: -10 },
          ]}
        >
          <SvgXml xml={FilterIcon} width={25} height={25} />
        </View>
      </View>
      <SpecialCard />
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vScale(30),
  },
  inputContainer: {
    backgroundColor: Colors.light.lightOrange,
    marginBottom: 0,
    width: "90%",
  },
});

export default Home;
