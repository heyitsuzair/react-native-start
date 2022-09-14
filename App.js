/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={[styles.red, styles.fonts]}>Just Red</Text>
      <Text style={[styles.others, styles.fonts]}>Just Blue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
    backgroundColor: 'green',
  },
  fonts: {
    fontSize: 30,
  },
  others: {
    color: 'blue',
    backgroundColor: 'yellow',
  },
});

export default App;
