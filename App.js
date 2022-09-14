/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/Home';
import Profile from './views/Profile';

const Stack = createNativeStackNavigator();

// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <>
      {/* Stack Navigator */}
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer> */}

      {/* Top Tabs Navigator */}

      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer> */}

      {/* Bottom Tabs Navigator */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          shifting={true}
          barStyle={{backgroundColor: 'red'}}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
              tabBarColor: 'red',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="email" color={color} size={26} />
              ),
              tabBarColor: 'green',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

// const styles = StyleSheet.create({
//   red: {
//     color: 'red',
//     backgroundColor: 'green',
//   },
//   fonts: {
//     fontSize: 30,
//   },
//   others: {
//     color: 'blue',
//     backgroundColor: 'yellow',
//   },
// });

// export default App;
