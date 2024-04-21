import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { FC, ReactElement } from 'react';
import { fontScale, sHeight, scale, vScale } from '../../config/scale';
import Colors from '../../config/colors';

interface CustomInputProps {
  withIcons?: boolean;
  inputPlaceHolder: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

const CustomInput: FC<CustomInputProps> = ({
  withIcons,
  inputPlaceHolder,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View>
      {withIcons ? (
        <View style={[styles.inputContainer, styles.iconsContainer]}>
          <View>
            {leftIcon && leftIcon}
            <TextInput placeholder={inputPlaceHolder} />
          </View>
          {rightIcon && rightIcon}
        </View>
      ) : (
        <TextInput
          style={styles.inputContainer}
          placeholder={inputPlaceHolder}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: sHeight * 0.06,
    backgroundColor: Colors.light.white,
    borderRadius: scale(15),
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    marginBottom: vScale(20),
    elevation: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    paddingHorizontal: scale(25),
    fontSize: fontScale(16),
  },
  iconsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CustomInput;
