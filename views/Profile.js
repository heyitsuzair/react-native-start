import {View, Text, Button, Pressable} from 'react-native';
import React, {useEffect} from 'react';

export default function Profile({route, navigation}) {
  // useEffect(() => {
  //   console.warn(route.params);
  //   alert(JSON.stringify(route.params));
  // }, []);

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
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'white', fontWeight: '800'}}>Go Back To Home</Text>
      </Pressable>
    </View>
  );
}
