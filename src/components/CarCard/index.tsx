import React from 'react';

import {
  Container,
  Info,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
  Footer,
  Title,
  Box,
  Dates,
} from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { format } from 'date-fns';

interface Props extends RectButtonProps{
  data: CarDTO
  period?:{
    start: string
    end: string
  }
}

export function CarCard({data, period, ...rest}: Props){
  const { navigate } = useNavigation<any>();

  function handleNavigate() {
    navigate('CarDetail',{car: data});
  }
  
  const startDate = period? format(new Date(period.start), 'dd/MM/yyyy'): null
  const endDate = period? format(new Date(period.end), 'dd/MM/yyyy'): null

  const MotorIcon = getAccessoryIcon(data.fuel_type)

  return (<>
    <Container  onPress={handleNavigate} {...rest}>
      <Info>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>R$ {data.price}</Price>
          </Rent>
          <Type><MotorIcon/></Type>
        </About>
      </Info>
      <CarImage source={{uri: data.thumbnail}} resizeMode='contain'/>
    </Container>
    {period? 
      <Footer>
        <Title>Período</Title>
        <Box>
          <Dates>{startDate}</Dates>
          <AntDesign style={{marginHorizontal: 10}} name="arrowright" size={14} color="#AEAEB3" />
          <Dates>{endDate}</Dates>
        </Box>
      </Footer>: null
    }
  </>);
}