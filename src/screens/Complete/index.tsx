import React, { useEffect } from 'react';

import {
  Button,
  ButtonText,
  Container, Subtitle, Title
} from './styles';

import Brand from '../../assets/logo_background_gray.svg'
import Done from '../../assets/done.svg'

import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, { 
  Easing, 
  runOnJS, 
  useAnimatedStyle,
  useSharedValue,
  withTiming 
} from 'react-native-reanimated';

interface Params {
  title: string
  message: string
  nextScreen?: string
}

export function Complete(){
  const { navigate } = useNavigation<any>();

  const route = useRoute()
  const { title, message, nextScreen = 'Home' } = route.params as Params

  const loadingAnimation = useSharedValue(0)

  const brandStyle = useAnimatedStyle(() => {
    return {
      width: loadingAnimation.value
    }
  })

  function handleNavigate() {
    navigate(nextScreen);
  }
  function handleBack() {
    loadingAnimation.value = withTiming(0, {duration: 5000})
  }
  
  useEffect(() => {
    loadingAnimation.value = withTiming(150, {
      duration: 5000,
      easing: Easing.linear
    }, () => {
      'worklet' 
      runOnJS(handleNavigate)()
    })
  }, [])
  
  return (
    <Container>
      <StatusBar translucent barStyle='light-content' backgroundColor="#0000"/>
      <Brand/>
      <Done/>
      <Title>{title}</Title>
      <Subtitle>{message}</Subtitle>
    
      <Button onPress={handleNavigate}>
        <ButtonText>Ok</ButtonText>
        <Animated.View style={[brandStyle, {
          width: 150,
          height: 65,
          backgroundColor: '#1B1B1F',
          position: 'absolute',
          opacity: .5,
          left: 0,
        }]}/>
      </Button>
    </Container>
  );
}
