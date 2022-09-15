import {View, Text, ScrollView} from 'react-native';
import React from 'react';

export default function ScrollViewComp() {
  return (
    <View>
      <Text>Hello</Text>
      <ScrollView horizontal={false}>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
        <View
          style={{height: 200, width: 200, backgroundColor: 'green'}}></View>
        <View
          style={{height: 200, width: 200, backgroundColor: 'green'}}></View>
        <View
          style={{height: 200, width: 200, backgroundColor: 'green'}}></View>
        <View
          style={{height: 200, width: 200, backgroundColor: 'green'}}></View>
        <View
          style={{height: 200, width: 200, backgroundColor: 'yellow'}}></View>
        <View style={{height: 200, width: 200, backgroundColor: 'blue'}}></View>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}></View>
      </ScrollView>
    </View>
  );
}
