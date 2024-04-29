import { StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import Colors from "./src/config/colors";
import SplashScreen from "react-native-splash-screen";
import AppNav from "./src/navigation";
import { ThemeProvider } from "./src/utils/ThemeContext";

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    }, 2000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <AppNav />
      </ThemeProvider>
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
