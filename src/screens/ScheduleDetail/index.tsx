import React, { useEffect, useState } from 'react';

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
  Footer,
  Section,
  Row,
  Icon,
  Text,
  TotalPrice,
  FirstRow,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, StatusBar } from 'react-native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { CarDTO } from '../../dtos/carDTO';
import { format, addDays } from 'date-fns';
import api from '../../services/api';

interface CarProps{
  car: CarDTO
  dates: string[]
}

interface RentalPeriod{
  start: string
  end: string
}

export function ScheduleDetail(){
  const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod)
  const [ loading, setLoading] = useState(false)

  const { navigate } = useNavigation<any>();
  const theme = useTheme()
  const route = useRoute()
  const { 
    car,
    dates,
  } = route.params as CarProps

  async function handleNavigate() {
    setLoading(true)
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]
    await api.post(`schedules_byuser`, {
      user_id: 1,
      car: car,
      startDate: dates[0],
      endDate: dates[dates.length -1],
    })
    await api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates: unavailable_dates
    }).catch( () =>{
      setLoading(false)
      Alert.alert('nao foi possivel confirmar o agendamento')
      navigate('Home');
    }).then(() => {
      setLoading(true)
      navigate('Complete', {title: 'Carro alugado!', message: 'Agora você só precisa ir\naté a concessionária da RENTX'})
    })
  }

  let totalDays = dates.length
  let totalPrice = (totalDays*car.rent.price)

  useEffect(() => {
    setRentalPeriod({
      start: format(addDays(new Date(dates[0]), 1), 'dd/MM/yyyy'),
      end: format(addDays(new Date(dates[dates.length -1]), 1), 'dd/MM/yyyy'),
    })
  }, [])

  return (
    <Container>
      <StatusBar translucent barStyle='dark-content' backgroundColor="#0000"/>

      <Header>
        <BackButton/>
      </Header>
      <Content>
      <ImageSlider imagesUrl={car.photos}/>

      <Details>
        <Column>
          <Subtitle>{car.brand}</Subtitle>
          <Name>{car.name}</Name>
        </Column>
        <Column>
          <Subtitle>{car.rent.period}</Subtitle>
          <Price>R$ {car.rent.price}</Price>
        </Column>
      </Details>
      <UtilityDisplay>
        {car.accessories.map((item) => (
          <Accessory key={item.type} icon={
            getAccessoryIcon(item.type)
          } title={item.name}/>
        ))}
      </UtilityDisplay>
      <Section>
        <FirstRow>
          <Icon>
            <Feather name="calendar" size={24} color={theme.colors.shapes} />
          </Icon>
          <Row>
            <Column>
              <Subtitle>de</Subtitle>
              <Text>{rentalPeriod.start}</Text>
            </Column>
            <Feather name="chevron-right" size={24} color={theme.colors.text_detail} />
            <Column>
              <Subtitle>até</Subtitle>
              <Text>{rentalPeriod.end}</Text>
            </Column>
          </Row>
        </FirstRow>
        <Row>
          <Column>
            <Subtitle>total</Subtitle>
            <Text>R$ {car.rent.price} x{totalDays} {totalDays == 1? 'diária': 'diárias'}</Text>
          </Column>
          <TotalPrice>R$ {totalPrice}</TotalPrice>
        </Row>
      </Section>
      </Content>
      <Footer>
        <Button loading={loading} onPress={handleNavigate} title='Alugar agora' color={theme.colors.secondary}/>
      </Footer>
    </Container>
  );
}
