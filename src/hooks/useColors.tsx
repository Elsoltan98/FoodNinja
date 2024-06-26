import { TColors } from "@config/colors";
import { useContext } from "react";
import { ThemeContext } from "./../utils/ThemeContext";

interface ColorType {
  AppColors: TColors;
  applyColors: (colors: TColors) => void;
}

const useColors = (): ColorType => {
  const store = useContext(ThemeContext);
  if (!store) {
    throw new Error("useColors must be defined.");
  }

  return {
    applyColors: store.applyColors,
    AppColors: store.colors,
  };
};

export default useColors;
