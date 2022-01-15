import React from 'react';

import {
  Container,
  Header,
  Content,
  Details,
  Column,
  Subtitle,
  Name,
  Price,
  UtilityDisplay,
  About,
  Footer,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { StatusBar, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';


interface CarProps{
  car: CarDTO
}

const STATUS_BAR_HEIGHT = getStatusBarHeight()

export function CarDetail(){
  const { navigate } = useNavigation<any>();
  const route = useRoute()
  const { 
    car
  } = route.params as CarProps

  const scrollY = useSharedValue(0)
  // const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
    console.log(event.contentOffset.y)
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value,
        [0, 120], [1, 0], Extrapolate.CLAMP),
    }
  })
  // const navStyleAnimation = useAnimatedStyle(() => {
  //   // if(scrollY.value > 120){
  //     return {
  //       opacity: interpolate(scrollY.value,
  //         [0, 120], [1, 0], Extrapolate.CLAMP),
  //     }
  //   // }else return
  // })


  function handleNavigate() {
    navigate('Schedule', {car});
  }
  return (
    <Container>
      <StatusBar translucent barStyle={'dark-content'} backgroundColor="#0000"/>
        <Header>
          <BackButton/>
          {/* <Animated.View style={[navStyleAnimation, {
            width: '100%', backgroundColor: 'red',
            position: 'absolute', top: 0, height: 40,
          }]}>
            
          </Animated.View> */}
        </Header>

      <Animated.ScrollView
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
      >
      <Animated.View style={[headerStyleAnimation]}>
        <ImageSlider imagesUrl={car.photos}/>
      </Animated.View>

      <Details>
        <Column>
          <Subtitle>{car.brand}</Subtitle>
          <Name>{car.name}</Name>
        </Column>
        <Column>
          <Subtitle>{car.period}</Subtitle>
          <Price>R$ {car.price}</Price>
        </Column>
      </Details>
      <UtilityDisplay>
        {car.accessories.map((item) => (
          <Accessory key={item.type} icon={
            getAccessoryIcon(item.type)
          } title={item.name}/>
          ))}
      </UtilityDisplay>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
      </Animated.ScrollView>
      <Footer>
        <Button onPress={handleNavigate} title='Escolher período de aluguel'/>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '120%',
    height: getStatusBarHeight() + 40,
    position: 'absolute',
    zIndex: 9,
    backgroundColor: '#29292E',
  }
})
