import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import Colors from './src/config/colors';
import SplashScreen from 'react-native-splash-screen';

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
      <View>
        <Text>Food Ninga App</Text>
      </View>
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
