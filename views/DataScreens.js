import {View, Text, Button} from 'react-native';
import React from 'react';

export default function DataScreens({navigation}) {
  return (
    <View>
      <Text>DataScreens</Text>
      <Button
        title="Go"
        onPress={() =>
          navigation.navigate('Profile', {
            id: 1,
            name: 'uzair',
            email: 'uzair@gmail.com',
          })
        }
      />
    </View>
  );
}
