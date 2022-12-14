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
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScrollView from './views/ScrollView';
import FlatList from './views/FlatList';
import Apis from './views/Apis';
import FormValidation from './views/FormValidation';
import DataScreens from './views/DataScreens';
import Loader from './views/Loader';
import Modal from './views/Modal';
import Location from './views/Location';

const Stack = createNativeStackNavigator();

// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

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

      {/* Drawer Navigation */}

      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Scroll View" component={ScrollView} />
          <Drawer.Screen name="Flat List" component={FlatList} />
          <Drawer.Screen name="Api" component={Apis} />
          <Drawer.Screen name="Form Validation" component={FormValidation} />
          <Drawer.Screen name="Data Between Screens" component={DataScreens} />
          <Drawer.Screen name="Loader" component={Loader} />
          <Drawer.Screen name="Modal" component={Modal} />
          <Drawer.Screen name="Location" component={Location} />
        </Drawer.Navigator>
      </NavigationContainer>

      {/* Bottom Tabs Navigator */}

      {/* <NavigationContainer>
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
      </NavigationContainer> */}
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
