/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
export default function Form() {
  const [value, setValue] = useState({address: '', name: '', password: ''});

  const handleOnPress = () => {
    console.warn(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Your Name"
        value={value.name}
        style={styles.textbox}
        onChangeText={text => setValue({...value, name: text})}
      />
      <TextInput
        placeholder="Enter Your Password"
        value={value.password}
        style={styles.textbox}
        secureTextEntry
        onChangeText={text => setValue({...value, password: text})}
      />
      <TextInput
        placeholder="Enter Your Address"
        value={value.address}
        style={styles.textbox}
        onChangeText={text => setValue({...value, address: text})}
      />
      <Button
        style={styles.button}
        title="Submit"
        onPress={() => handleOnPress()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textbox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 8,
  },
});
