import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../config/colors';
import { fontScale, scale, vScale } from '../../config/scale';
import AppText from '../AppText';

interface CustomBtnProps {
  title: string;
  onPress?: (event?: GestureResponderEvent) => void;
}

const CustomBtn: FC<CustomBtnProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[Colors.light.gridPrimary, Colors.light.gridSecondary]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}>
        <AppText
          text={title}
          size={fontScale(16)}
          color={Colors.light.white}
          fontWeight="bold"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: scale(60),
    paddingVertical: vScale(20),
    borderRadius: scale(15),
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default CustomBtn;
