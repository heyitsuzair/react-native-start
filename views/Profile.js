import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
