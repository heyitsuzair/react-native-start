import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      {/* <Button onPress={() => navigation.openDrawer()} title="Open Drawer" /> */}
      <Pressable
        style={{
          marginTop: 10,
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.openDrawer()}>
        <Text style={{color: 'white', fontWeight: '800'}}>Open Drawer</Text>
      </Pressable>
    </View>
  );
}
