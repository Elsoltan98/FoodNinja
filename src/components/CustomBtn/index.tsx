import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
} from "react-native";
import React, { FC, ReactNode } from "react";
import LinearGradient from "react-native-linear-gradient";
import Colors from "@config/colors";
import { fontScale, scale, vScale } from "@config/scale";
import AppText from "../AppText";

interface CustomBtnProps {
  title: string;
  onPress?: (event?: GestureResponderEvent) => void;
  icon?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  colors?: string[];
  textColor?: string;
  gridStyle?: ViewStyle;
}

const CustomBtn: FC<CustomBtnProps> = ({
  title,
  onPress,
  icon,
  style,
  colors,
  textColor,
  gridStyle,
}) => {
  return (
    <TouchableOpacity
      style={[icon ? styles.linearGradient : null, style]}
      onPress={onPress}
    >
      <LinearGradient
        style={[icon ? styles.iconContainer : styles.linearGradient, gridStyle]}
        colors={
          colors
            ? colors
            : [Colors.light.gridPrimary, Colors.light.gridSecondary]
        }
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        {icon && icon}
        <AppText
          text={title}
          size={fontScale(16)}
          color={textColor ? textColor : Colors.light.white}
          fontWeight="bold"
          style={{ textAlign: "center" }}
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
    fontFamily: "Gill Sans",
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default CustomBtn;
