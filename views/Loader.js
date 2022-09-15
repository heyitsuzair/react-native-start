import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading === true ? (
        <ActivityIndicator color="red" size={100} />
      ) : (
        <Text>Loaded</Text>
      )}
    </View>
  );
}
