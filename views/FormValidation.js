import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';

export default function FormValidation() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleOnPress = () => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            flex: 2,
            borderColor: 'red',
            margin: 5,
            borderWidth: 4,
            borderRadius: 4,
          }}
          maxLength={5}
          onChangeText={text => setValues({...values, name: text})}
        />
        <TextInput
          style={{
            flex: 2,
            borderColor: 'red',
            margin: 5,
            borderWidth: 4,
            borderRadius: 4,
          }}
          keyboardType={'numeric'}
          onChangeText={text => setValues({...values, address: text})}
        />
        <TextInput
          style={{
            flex: 2,
            borderColor: 'red',
            margin: 5,
            borderWidth: 4,
            borderRadius: 4,
          }}
          keyboardType={'email-address'}
          onChangeText={text => setValues({...values, email: text})}
        />
      </View>
      <View>
        <Pressable
          style={{
            marginTop: 10,
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            margin: 5,
            borderRadius: 4,
          }}
          onPress={() => handleOnPress()}>
          <Text
            style={{color: 'white', fontWeight: '800', textAlign: 'center'}}>
            Submit
          </Text>
        </Pressable>
      </View>
    </>
  );
}
