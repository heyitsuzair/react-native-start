/* eslint-disable no-alert */
import React from 'react';
import {Button, Text, View} from 'react-native';
export default function Login({text}) {
  const onPressLogin = () => {
    alert('Hello Login');
  };

  return (
    <View>
      <Text>{text}</Text>
      <Button title={text} onPress={() => onPressLogin()} />
    </View>
  );
}
