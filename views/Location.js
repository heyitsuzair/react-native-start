import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';

export default function Location() {
  const [data, setData] = useState({
    lat: '',
    lon: '',
  });

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(res => {
          if (res === 'granted') {
            Geolocation.getCurrentPosition(data =>
              setData({lat: data.coords.latitude, lon: data.coords.longitude}),
            );
          }
        })
        .catch(res => {
          alert('Please Allow Location To Continue!');
        });
    } else {
      Geolocation.getCurrentPosition(data =>
        setData({lat: data.coords.latitude, lon: data.coords.longitude}),
      );
    }

    //eslint-disable-next-line
  }, []);

  return (
    <View>
      <Text>Your Longitude:{data.lon}</Text>
      <Text>Your Latitude:{data.lat}</Text>
    </View>
  );
}
