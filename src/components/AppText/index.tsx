import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import fonts from '../../config/fonts';
import { fontScale } from '../../config/scale';
import Colors from '../../config/colors';

interface AppTextProps {
  size?: number;
  color?: string;
  text: string;
}

const AppText: FC<AppTextProps> = ({ size, color, text }) => {
  return (
    <View>
      <Text style={[styles.text, { fontSize: size, color: color }]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontScale(12),
    color: Colors.dark.black,
    fontFamily: fonts.REGULAR,
  },
  textBold: {
    fontFamily: fonts.BOLD,
  },
  textMedium: {
    fontFamily: fonts.MEDIUM,
  },
});

export default AppText;
