import { AppStackParams } from "src/navigation";
import { AuthStackParams } from "src/navigation/authNav";
import { BottomStackParams } from "src/navigation/bottomTabsNav";

export const NavTypes: {
  INTRO: keyof AppStackParams;
  LOG_IN: keyof AuthStackParams;
  SIGN_UP: keyof AuthStackParams;
  SIGN_UP_PROCESS: keyof AuthStackParams;
  SIGN_UP_SUCCESS: keyof AuthStackParams;
  AUTH_NAV: keyof AppStackParams;
  BOTTOM_TAB_NAV: keyof AppStackParams;
  HOME: keyof BottomStackParams;
} = {
  INTRO: "INTRO",
  LOG_IN: "LOG_IN",
  SIGN_UP: "SIGN_UP",
  SIGN_UP_PROCESS: "SIGN_UP_PROCESS",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  AUTH_NAV: "AUTH_NAV",
  BOTTOM_TAB_NAV: "BOTTOM_TAB_NAV",
  HOME: "HOME",
};
