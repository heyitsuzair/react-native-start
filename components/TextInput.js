/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
export default function TextInputComp() {
  const [value, setValue] = useState();

  const handleOnChange = e => {
    setValue(e);
  };

  const handleOnPress = () => {
    alert(value);
  };

  return (
    <View>
      <Text>{value}</Text>
      <TextInput
        placeholder="Enter Your Name"
        value={value}
        onChangeText={e => handleOnChange(e)}
        style={{
          height: 100,
          fontSize: 40,
          color: 'red',
          backgroundColor: 'yellow',
        }}
      />
      <Button title="Submit" onPress={() => handleOnPress()} />
    </View>
  );
}
