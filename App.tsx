import React from 'react';

import { useFonts, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'

import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes/';

import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';
import { AuthProvider } from './src/context/authContext';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  )
}
