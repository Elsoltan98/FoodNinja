import { TextStyle, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import fonts from '@config/fonts';
import { fontScale } from '@config/scale';
import Colors from '@config/colors';

interface AppTextProps {
  size?: number;
  color?: string;
  text: string;
  fontWeight?: 'bold' | 'medium';
  style?: TextStyle;
}

const AppText: FC<AppTextProps> = ({
  size,
  color,
  text,
  fontWeight,
  style,
}) => {
  return (
    <Text
      style={[
        style,
        styles.text,
        fontWeight === 'bold'
          ? styles.textBold
          : fontWeight === 'medium'
            ? styles.textMedium
            : null,
        { fontSize: size, color: color },
      ]}>
      {text}
    </Text>
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
    fontWeight: 'bold',
  },
  textMedium: {
    fontWeight: '600',
    fontFamily: fonts.MEDIUM,
  },
});

export default AppText;
