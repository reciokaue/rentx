import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { useAuth } from '../context/authContext';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { user  }  = useAuth()

  return (
    <NavigationContainer>
      {user ?
        <StackRoutes/>:
        <AuthRoutes/>
      }
    </NavigationContainer>
  );
}
