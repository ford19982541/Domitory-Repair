import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Repair } from '../screens/Repair';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={Home}/>
    <Screen name='Details' component={Detail}/>
    <Screen name='Repair' component={Repair}/>

  </Navigator>
);

export const AppNavigator = () => (
    <HomeNavigator/>
);
