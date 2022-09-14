import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <View
        style={{flex: 2, width: 100, height: 730, backgroundColor: 'red'}}
      />
      <View
        style={{
          flex: 2,
          width: 100,
          height: 730,
          backgroundColor: 'darkorange',
        }}
      />
      <View
        style={{flex: 2, width: 100, height: 730, backgroundColor: 'green'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;
