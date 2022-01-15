import React from 'react';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

import HomeIcon from '../assets/home.svg'
import CarIcon from '../assets/car.svg'
import PeopleIcon from '../assets/people.svg'

import { useTheme } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';
const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabs() {
  const theme = useTheme()

  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: getBottomSpace(),
          height: 78,
          backgroundColor: theme.colors.background
        }
      }}
    >
      <Screen name="MyCars" component={MyCars} options={{tabBarIcon: ({color}) => (
          <CarIcon width={24} height={24} fill={color}/>
      )}}/>
      <Screen name="Home" component={Home} options={{tabBarIcon: ({color}) => (
          <HomeIcon width={24} height={24} fill={color}/>
      )}}/>
      <Screen name="Profile" component={Home} options={{tabBarIcon: ({color}) => (
          <PeopleIcon width={24} height={24} fill={color}/>
      )}}/>
    </Navigator>
  );
}
