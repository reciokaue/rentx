import React from 'react';

import { StyleSheet, View } from 'react-native';

import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export const PanGestureExample: React.FC = () => {
  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const ButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionX.value},
        {translateY: positionY.value}
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any){
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx){
      positionX.value = ctx.positionX + event.translationX
      positionY.value = ctx.positionY + event.translationY

    },
    onEnd(event, ctx){
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }
  })

  return (
    <View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[ButtonStyle, styles.panGesture]}>
          <ButtonAnimated style={[styles.button]} onPress={() => {}}>
            <Ionicons name="car-sport" size={32} color="#FFF" />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC1637'
  },
  panGesture: {
    position: 'absolute',
    bottom: 13,
    right: 22,
  }
})
