import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../pages/Home';
import HomeLogin from '../pages/HomeLogin';

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLogin" component={HomeLogin} />
    </Stack.Navigator>
  );
}
