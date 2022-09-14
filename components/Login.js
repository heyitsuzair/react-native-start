/* eslint-disable no-alert */
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
export default function Login() {
  const [btnText, setBtnText] = useState('Login');

  const onPressLogin = () => {
    alert('Hello Login');
    setBtnText('Clicked');
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title={btnText} onPress={() => onPressLogin()} />
    </View>
  );
}
