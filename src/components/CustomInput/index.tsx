import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
} from "react-native";
import React, { FC, ReactElement } from "react";
import { fontScale, sHeight, sWidth, scale, vScale } from "@config/scale";
import Colors from "@config/colors";
import AppText from "@components/AppText";
import useColors from "../../hooks/useColors";

interface CustomInputProps {
  withIcons?: boolean;
  inputPlaceHolder: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  isPassword?: boolean;
  show?: boolean;
  errors?: string;
  touched?: boolean;
  style?: ViewStyle;
}

const CustomInput: FC<CustomInputProps> = ({
  withIcons,
  inputPlaceHolder,
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  onBlur,
  isPassword,
  show,
  errors,
  touched,
  style,
}) => {
  const { AppColors } = useColors();
  return (
    <View>
      {withIcons ? (
        <View
          style={[
            styles.inputContainer,
            styles.iconsContainer,
            leftIcon && styles.withLeftContainer,
            style,
          ]}
        >
          <View style={styles.leftContainer}>
            {leftIcon && leftIcon}
            <TextInput
              placeholder={inputPlaceHolder}
              value={value}
              onChangeText={onChangeText}
              onBlur={onBlur}
              secureTextEntry={isPassword ? show : false}
              style={[
                styles.inputWidth,
                { marginLeft: leftIcon ? scale(10) : 0 },
              ]}
            />
          </View>
          {rightIcon && rightIcon}
        </View>
      ) : (
        <TextInput
          style={[styles.inputContainer]}
          placeholder={inputPlaceHolder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPassword ? show : false}
        />
      )}
      {errors && touched && (
        <AppText
          style={styles.errorText}
          color={AppColors.danger}
          text={errors}
          fontWeight="medium"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: sHeight * 0.065,
    backgroundColor: Colors.light.white,
    borderRadius: scale(15),
    borderWidth: scale(1),
    borderColor: Colors.light.lightGray,
    marginBottom: vScale(20),
    elevation: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    paddingHorizontal: scale(25),
    fontSize: fontScale(16),
  },
  iconsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  withLeftContainer: {
    paddingLeft: scale(16),
  },

  inputWidth: {
    width: sWidth * 0.63,
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorText: {
    marginTop: vScale(-10),
    marginBottom: vScale(15),
    marginLeft: scale(10),
    fontSize: fontScale(16),
  },
});

export default CustomInput;
