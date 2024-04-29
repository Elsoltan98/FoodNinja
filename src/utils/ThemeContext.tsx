import Colors, { TColors } from "@config/colors";
import { FC, createContext, useState } from "react";

type ThemeContextType = {
  colors: TColors;
  applyColors: (colors: TColors) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const [colors, setColors] = useState(Colors.light);

  const applyColors = (colorTheme: TColors) => {
    setColors(colorTheme);
  };

  return (
    <ThemeContext.Provider value={{ applyColors, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
