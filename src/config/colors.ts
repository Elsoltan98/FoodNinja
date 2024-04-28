export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
  gridPrimary: string;
  gridSecondary: string;
  lightGray: string;
  shadow: string;
  checkBorder: string;
  orange: string;
  lightOrange: string;
  transWhite: string;
};

const sharedColors = {
  black: "#000000",
  white: "#FFFFFF",
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const Colors: ColorPalettes = {
  dark: {
    primary: "#080811",
    secondary: "#161629",
    textPrimary: sharedColors.white,
    textSecondary: "#67686E",
    gridPrimary: "#0",
    gridSecondary: "#0",
    lightGray: "#0",
    shadow: "0",
    checkBorder: "0",
    orange: "0",
    lightOrange: "0",
    transWhite: "0",
    ...sharedColors,
  },
  light: {
    primary: "#F8F8F8",
    secondary: "#E4E4E4",
    textPrimary: "#09051C",
    textSecondary: "#9D5DB0",
    gridPrimary: "#53E88B",
    gridSecondary: "#15BE77",
    lightGray: "#F4F4F4",
    shadow: "#5A6CEA",
    checkBorder: "#eceff1",
    orange: "#DA6317",
    lightOrange: "rgba(255, 180, 96, 0.8)",
    transWhite: "rgba(255, 255, 255, 0.5)",
    ...sharedColors,
  },
};

export default Colors;
