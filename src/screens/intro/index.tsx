import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Intro1 } from '../../assets/intro1';
import { sHeight, sWidth } from '../../config/scale';
import Colors from '../../config/colors';
import AppText from '../../components/AppText';

const Intro = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={Intro1} width={sWidth * 0.7} height={sHeight * 0.7} />
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
