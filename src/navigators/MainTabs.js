import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

// import Home from '../pages/Home';
import About from '../pages/About';

import {styles} from '../../styles';

import User from '../assets/user.png';
import MyStack from './MyStack';

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let sourceIcon = null;

          switch (route.name) {
            case 'HomeStack':
              sourceIcon = require('../assets/home.png');
              break;
            case 'About':
              sourceIcon = require('../assets/info.png');
              break;
            default:
              break;
          }

          return <Image source={sourceIcon} style={{width: 20, height: 20}} />;
        },
        tabBarBadge: 3,
        headerTitleAlign: 'left',
        tabBarActiveTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#000',
        headerRight: () => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.title}>Login</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Image source={User} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>
        ),
      })}>
      <Tab.Screen
        name="HomeStack"
        component={MyStack}
        options={{
          title: 'NutriBrain',
        }}
      />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
