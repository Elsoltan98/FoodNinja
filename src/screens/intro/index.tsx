import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Intro1 } from '../../assets/intro1';
import { fontScale, sHeight, sWidth, vScale } from '../../config/scale';
import Colors from '../../config/colors';
import AppText from '../../components/AppText';
import CustomBtn from '../../components/CustomBtn';

const Intro = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={Intro1} width={sWidth * 0.9} height={sHeight * 0.5} />
      <View style={styles.findTextContainer}>
        <AppText
          text={`Find your Comfort \n Food here`}
          color={Colors.light.textPrimary}
          fontWeight="bold"
          size={fontScale(22)}
          style={{ textAlign: 'center' }}
        />
        <AppText
          text={`Here You Can find a chef or dish for every \n taste and color. Enjoy!`}
          style={{ textAlign: 'center', marginTop: vScale(30) }}
          color={Colors.light.black}
          size={fontScale(12)}
        />
      </View>
      <CustomBtn title="Next" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  findTextContainer: {
    marginTop: vScale(20),
    marginBottom: vScale(30),
  },
});

export default Intro;
