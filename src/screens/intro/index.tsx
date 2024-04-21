import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Intro1 } from '../../assets/intro1';
import { fontScale, sHeight, sWidth } from '../../config/scale';
import Colors from '../../config/colors';
import AppText from '../../components/AppText';

const Intro = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={Intro1} width={sWidth * 0.7} height={sHeight * 0.7} />
      <AppText
        text={`Find your Comfort \n Food here`}
        color={Colors.light.textPrimary}
        fontWeight="bold"
        size={fontScale(22)}
        style={{ textAlign: 'center' }}
      />
      <AppText
        text={`Here You Can find a chef or dish for every \n taste and color. Enjoy!`}
        style={{ textAlign: 'center' }}
        color={Colors.light.black}
      />
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
});

export default Intro;
