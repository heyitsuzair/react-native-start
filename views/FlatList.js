import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';

export default function FlatListComp({navigation}) {
  const [data, setData] = useState([
    {name: 'uzair', email: 'uzair@gmail.com'},
    {name: 'ahmed', email: 'uzair@gmail.com'},
    {name: 'ali', email: 'uzair@gmail.com'},
    {name: 'uzair', email: 'uzair@gmail.com'},
    {name: 'uzair', email: 'uzair@gmail.com'},
  ]);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontSize: 109}}>{item.name}</Text>
            <Pressable
              style={{
                marginTop: 10,
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate('Profile')}>
              <Text style={{color: 'white', fontWeight: '800'}}>
                Go To Profile
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
