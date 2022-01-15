import React, { useState } from 'react';

import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Nav,
  Scroll,
  Header,
  Title, 
  Period,
  Column,
  Placeholder,
  DateInput,
  Footer,
} from './styles';

import ArrowIcon from '../../assets/arrow.svg'

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Alert, StatusBar } from 'react-native';

import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { addDays, format } from 'date-fns';
import { CarDTO } from '../../dtos/carDTO';

interface RentalPeriod{
  start: string
  end: string
}

interface CarProps{
  car: CarDTO
}

export function Schedule(){
  const [ lastSelected, setLastSelected ] = useState<DayProps>({} as DayProps)
  const [ markedDates, setMarkedDates ] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod)

  const { navigate } = useNavigation<any>();
  const theme = useTheme()
  const route = useRoute()
  const { 
    car
  } = route.params as CarProps

  function handleNavigate() {
    navigate('ScheduleDetail', {
      car: car,
      dates: Object.keys(markedDates),
    });
  }
  function handleChangeDate(date: DayProps){
    const trueDate = {
      ...date,
      timestamp: addDays(new Date(date.timestamp), 1).getTime()
    }
    let start = !lastSelected.timestamp ? trueDate: lastSelected
    let end = trueDate

    if(start.timestamp > end.timestamp){
      start = end
      end = start
    }
    setLastSelected(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    setRentalPeriod({
      start: format(start.timestamp, 'dd/MM/yyyy'),
      end: format(end.timestamp, 'dd/MM/yyyy'),
    })
  }

  return (
    <Container>
      <StatusBar translucent barStyle='light-content' backgroundColor="#0000"/>
      <Nav>
        <BackButton color={theme.colors.shapes}/>
      </Nav>
      <Scroll>
        <Header>
          <Title>
            Escolha uma{'\n'}
            data de início e{'\n'}
            fim do aluguel
          </Title>
          <Period>
            <Column>
              <Placeholder>De</Placeholder>
              <DateInput selected={!!rentalPeriod.start}>
              {rentalPeriod.start}
              </DateInput>
            </Column>
            <ArrowIcon width={48} height={10}/>
            <Column>
              <Placeholder>Até</Placeholder>
              <DateInput selected={!!rentalPeriod.end}>
                {rentalPeriod.end}
              </DateInput>
            </Column>
          </Period>
        </Header>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Scroll>
      <Footer>
        <Button enabled={!!rentalPeriod.start} onPress={handleNavigate} title='Confirmar'/>
      </Footer>
    </Container>
  );
}
