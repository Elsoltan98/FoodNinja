import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Colors from './src/config/colors';
import CustomIcon from './src/components/Icon';
import { fontScale } from './src/config/scale';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Start codeing Coffee App</Text>
        <CustomIcon
          type="AntDesign"
          name="minuscircle"
          size={fontScale(30)}
          color={Colors.dark.black}
        />
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
