import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomIcon from "@components/Icon";
import Colors from "@config/colors";

const SignupProcess = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../../assets/bg.png")}
        style={styles.container}
      >
        <TouchableOpacity style={styles.backContainer}>
          <CustomIcon
            type="Entypo"
            name="chevron-left"
            size={20}
            color={Colors.light.orange}
          />
        </TouchableOpacity>
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
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignupProcess;
