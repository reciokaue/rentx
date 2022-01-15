import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  TotalCars,
  CarsContainer,
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import { CarCard } from '../../components/CarCard';

import Logo from '../../assets/logo.svg'
import api from '../../services/api'

import { CarDTO } from '../../dtos/carDTO';
import { Load } from '../../components/Load';
import { useAuth } from '../../context/authContext';

export function Home(){
  const [ cars, setCars ] = useState<CarDTO[]>()
  const [ loading, setLoading ] = useState(true)

  const { setStarted } = useAuth()

  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('/cars')
        setCars(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchCars()
  }, [])
  
  useEffect(() => {
    setStarted(true)
  }, [])

  return (
    <Container>
      <StatusBar translucent barStyle={'light-content'} backgroundColor="#0000"/>
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)}/>
        <TotalCars>{cars? `Total de ${cars.length} carros`: null}</TotalCars>
      </Header>
      {loading? <Load/>:
        <CarsContainer
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) =>
            <CarCard data={item}/>
          }
        />
      } 
    </Container>
  );
}

