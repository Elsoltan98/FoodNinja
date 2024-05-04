import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { Intro1 } from "@assets/intro1";
import { fontScale, sHeight, sWidth, vScale } from "@config/scale";
import Colors from "@config/colors";
import AppText from "@components/AppText";
import CustomBtn from "@components/CustomBtn";
import { Intro2 } from "@assets/intro2";
import { useNavigation } from "@react-navigation/native";
import { NavTypes } from "@config/NavTypes";

const Intro = () => {
  const [nextIntro, setNextIntro] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      {nextIntro === 0 ? (
        <>
          <SvgXml xml={Intro1} width={sWidth * 0.9} height={sHeight * 0.5} />
          <View style={styles.findTextContainer}>
            <AppText
              text={`Find your Comfort \n Food here`}
              color={Colors.light.textPrimary}
              fontWeight="bold"
              size={fontScale(22)}
              style={{ textAlign: "center" }}
            />
            <AppText
              text={`Here You Can find a chef or dish for every \n taste and color. Enjoy!`}
              style={{ textAlign: "center", marginTop: vScale(30) }}
              color={Colors.light.black}
              size={fontScale(12)}
            />
          </View>
          <CustomBtn title="Next" onPress={() => setNextIntro(1)} />
        </>
      ) : (
        <>
          <SvgXml xml={Intro2} width={sWidth * 0.8} height={sHeight * 0.5} />
          <View style={styles.findTextContainer}>
            <AppText
              text={`Food Ninja is Where Your \nComfort Food Lives`}
              color={Colors.light.textPrimary}
              fontWeight="bold"
              size={fontScale(22)}
              style={{ textAlign: "center" }}
            />
            <AppText
              text={`Enjoy a fast and smooth food delivery at \nyour doorstep`}
              style={{ textAlign: "center", marginTop: vScale(30) }}
              color={Colors.light.black}
              size={fontScale(12)}
            />
          </View>
          <CustomBtn
            title="Finish"
            onPress={() => navigation.navigate(NavTypes.AUTH_NAV)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
    alignItems: "center",
    justifyContent: "center",
  },
  findTextContainer: {
    marginTop: vScale(20),
    marginBottom: vScale(30),
  },
});

export default Intro;
