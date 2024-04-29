import { TColors } from "@config/colors";
import { StyleSheet } from "react-native";
import useColors from "./useColors";
import { useMemo } from "react";

interface Styles<T extends StyleSheet.NamedStyles<T>> {
  colors: TColors;
  styles: T;
}

export default function <T extends StyleSheet.NamedStyles<T>>(
  createStyle: (colors: TColors) => T,
): Styles<T> {
  const { AppColors } = useColors();

  return {
    colors: AppColors,
    styles: useMemo(() => createStyle(AppColors), [AppColors, createStyle]),
  };
}
