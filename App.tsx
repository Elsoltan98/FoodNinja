import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Colors from './src/config/colors';

const App = () => {
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
