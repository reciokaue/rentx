import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { CarDetail } from '../screens/CarDetail';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetail } from '../screens/ScheduleDetail';
import { Complete } from '../screens/Complete';
import { BottomTabs } from './tab.routes';
import { useAuth } from '../context/authContext';

const {  Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
  const { started } = useAuth()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!started && <Screen name="Splash" component={Splash} />}
      <Screen name="BottomTabs" component={BottomTabs} />
      <Screen name="CarDetail" component={CarDetail} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="ScheduleDetail" component={ScheduleDetail} />
      <Screen name="Complete" component={Complete} />
    </Navigator>
  );
}
