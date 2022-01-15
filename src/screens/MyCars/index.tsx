import React, { useEffect, useState } from 'react';

import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';
import { CarDTO } from '../../dtos/carDTO';

import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  Subtitle,
  CarsContainer,
  Status,
  Text,
  Amount,
} from './styles';

import Animated, { 
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet, View, FlatList } from 'react-native';

export interface CarByUserProps{
  user_id: number
  car: CarDTO
  startDate: string
  endDate: string
  id: number
}

export function MyCars(){
  const [ cars, setCars ] = useState<CarByUserProps[]>([])
  const [ loading, setLoading ] = useState(true)

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
    console.log(event.contentOffset.y)
  })
  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value,
        [0, 273], [273, 0], Extrapolate.CLAMP),
      transform: [{translateY: interpolate(scrollY.value,
        [0, 220], [0, -273], Extrapolate.CLAMP  
      )}],
    }
  })
  const opacityStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value,
        [0, 50], [1, 0], Extrapolate.CLAMP)
    }
  })
  const flatlistStyleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateY: interpolate(scrollY.value,
        [0, 220], [0, -273], Extrapolate.CLAMP  
      )}],
    }
  })


  useEffect(() => {
    fetchCars()
    async function fetchCars(){
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`)
        setCars(response.data)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
  }, [])

  return (
    <Container>
        <Header>
          <BackButton color='#FFF' style={{marginLeft: -12}}/>
        </Header>
        <Animated.FlatList
          data={cars}
          ListHeaderComponentStyle={{padding: 0}}
          ListHeaderComponent={CompleteHeader}
          ListEmptyComponent={
            <Load/>
          } 
          keyExtractor={item => String(item.id)}
          renderItem={({item}) =>
            <CarCard
              data={item.car}
              period={{start: item.startDate, end: item.endDate}}
            />
          }
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.flatlist, flatlistStyleAnimation]}
        />
    </Container>
  );
  function CompleteHeader(){
    return (<>
        <Animated.View style={[headerStyleAnimation]}>
          <View style={styles.header}>
            <Animated.View style={opacityStyleAnimation}>
              <Title>Seus agendamentos,{'\n'}estão aqui.</Title>
              <Subtitle>Conforto, segurança e praticidade.</Subtitle>
            </Animated.View>
          </View>
        </Animated.View>
        {cars.length > 0?
          <Status>
              <Text>Agendamentos feitos</Text>
              <Amount>{cars.length}</Amount>
          </Status>
        :null}
</>)}}

const styles = StyleSheet.create({
  header: {
    height: RFValue(273), 
    backgroundColor: '#1B1B1F',
    paddingTop: RFValue(78), 
    padding: RFValue(24),
    // justifyContent: 'flex-end',

    marginHorizontal: -17,

    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  flatlist: {
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(8),
  }
})
