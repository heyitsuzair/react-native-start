import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';

export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      {/* <Button title="Go To Home" onPress={() => navigation.navigate('Home')} /> */}
      <Pressable
        style={{
          marginTop: 10,
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'white', fontWeight: '800'}}>Go Back To Home</Text>
      </Pressable>
    </View>
  );
}
