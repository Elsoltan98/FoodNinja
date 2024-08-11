import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Colors from "./src/config/colors";
//import SplashScreen from "react-native-splash-screen";
import AppNav from "./src/navigation";
import { ThemeProvider } from "./src/utils/ThemeContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <ThemeProvider>
          <AppNav />
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
});

export default App;
