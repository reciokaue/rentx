import React, { useEffect } from 'react';

import {
  Dimensions,
  StatusBar,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import {
  Container
} from './styles';

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/authContext';

const HALF_WIDTH = Dimensions.get('window').width/2

export function Splash(){
  const brandAnimation = useSharedValue(0)
  const logoAnimation = useSharedValue(0)

  const { navigate }: any = useNavigation()
  const { user } = useAuth()

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(brandAnimation.value, [0, 50], [1, 0]),
      transform: [{translateX: interpolate(brandAnimation.value,
        [0, 50], [0, -HALF_WIDTH], Extrapolate.CLAMP  
      )}]
    }
  })
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(logoAnimation.value, [0, 50], [0, 1]),
      transform: [{translateX: interpolate(logoAnimation.value,
        [0, 50], [HALF_WIDTH, 0], Extrapolate.CLAMP  
      )}]
    }
  })
  function startApp(){
    if(user){
      navigate('BottomTabs')
    }else{
      navigate('Signin')
    }
  }
  
  useEffect(() => {
    brandAnimation.value = withTiming(50, {duration: 500}, () => {
      logoAnimation.value = withTiming(50, {duration: 500}, () => {
        'worklet' 
        runOnJS(startApp)()
      })
    })
  }, [])

  return (
    <Container>
      <StatusBar translucent barStyle={'light-content'} backgroundColor="#0000"/>

      <Animated.View style={[brandStyle, {position: 'absolute'}]}>
        <BrandSvg width={80} height={50}/>
      </Animated.View>
      <Animated.View style={[logoStyle, {position: 'absolute'}]}>
        <LogoSvg width={180} height={20}/>
      </Animated.View>
    </Container>
  );
}
