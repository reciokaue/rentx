import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { Signin } from '../screens/Signin';
import { Signup } from '../screens/Signup';
import { Complete } from '../screens/Complete';
import { useAuth } from '../context/authContext';

const {  Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  const { started } = useAuth()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!started && <Screen name="Splash" component={Splash} />}
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Complete" component={Complete} />
    </Navigator>
  );
}
