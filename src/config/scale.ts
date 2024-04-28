import { Dimensions, Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";
const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const is_X_Ratio =
  (screenWidth / screenHeight).toFixed(2) == (428 / 926).toFixed(2) &&
  !isAndroid;
const guidelineBaseWidth = 428;

const sWidth = screenWidth;

const statusBarHeight = StatusBar.currentHeight ?? 0;

const sHeight = isAndroid ? screenHeight - statusBarHeight : screenHeight;

/**
 * Horizontal Size Scale
 */
const scale = (size: number) => (sWidth / guidelineBaseWidth) * size;

/**
 * Vertical Size Scale
 * @param {number} size
 */
// const vScale = (size: number) => (screenHeight / guidelineBaseHeight) * size;
const vScale = (size: number) => (sWidth / guidelineBaseWidth) * size;

/**
 * Font Size Scale
 * @param {number} size
 * @param {number} [factor]
 */
const fontScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

export { fontScale, is_X_Ratio, scale, sHeight, sWidth, vScale };
