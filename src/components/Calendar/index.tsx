import React from 'react';

import { Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler,   }  from 'react-native-calendars'

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

LocaleConfig.locales['pt-br'] = {
  monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
  today: 'Hoje',
}
LocaleConfig.defaultLocale = 'pt-br'

export interface MarkedDateProps{
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
  }
}
export interface DayProps{
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}

interface CalendarProps{
  markedDates: MarkedDateProps
  onDayPress: DateCallbackHandler
}

export function Calendar({ markedDates, onDayPress }: CalendarProps){
  const theme = useTheme()
  return (
    <CustomCalendar
      enableSwipeMonths
      renderArrow={(direction) => 
        <Feather name={`chevron-${direction}`} size={24} color={theme.colors.text} />
      }
      headerStyle={{
        backgroundColor: theme.colors.shapes,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.line,
        paddingBottom: RFValue(10),
        marginBottom: RFValue(10)
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayFontSize: RFValue(15),
        textMonthFontSize: RFValue(20),
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.secondary_600,
        textDayHeaderFontSize: RFValue(10),
        arrowStyle: {
          marginHorizontal: RFValue(-15)
        },
        'stylesheet.calendar.main': {
          week: {
            marginVertical: 0,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        'stylesheet.day.period': {
          fillers: {
            position: 'absolute',
            height: 40,
            flexDirection: 'row',
            left: 0,
            right: 0
          },
          base: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
          },
        }
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType={'period'}
      markedDates={markedDates}
      onDayPress={onDayPress}
      
    />
  );
}