// eslint-disable-next-line no-undef
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@config": "./src/config",
        },
      },
    ],
  ],
};
