import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FlatListComp() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const {data} = await axios.get('https://www.reactnative.dev/movies.json');
      setData(data.movies);
    } catch (error) {
      console.warn(error);
    }
  };

  const delData = id => {
    const filteredData = data.filter(item => {
      return item.id !== id;
    });
    setData(filteredData);
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

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
            <Text style={{fontSize: 109}}>{item.title}</Text>
            <Pressable
              style={{
                marginTop: 10,
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => delData(item.id)}>
              <Text style={{color: 'white', fontWeight: '800'}}>
                Delete {item.id}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
