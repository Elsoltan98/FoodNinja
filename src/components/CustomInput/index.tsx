import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { sHeight, scale, vScale } from '../../config/scale';
import Colors from '../../config/colors';

const CustomInput = () => {
  return <TextInput style={styles.inputContainer} placeholder="Email" />;
};

const styles = StyleSheet.create({
  inputContainer: {
    height: sHeight * 0.06,
    backgroundColor: Colors.light.white,
    borderRadius: scale(15),
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    marginVertical: vScale(20),
    elevation: 5,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: -1, height: 7 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    paddingHorizontal: scale(25),
  },
});

export default CustomInput;
