import { eachDayOfInterval, format, addDays } from "date-fns";
import { DayProps,MarkedDateProps } from '.'
import { Platform } from "react-native";

import theme from '../../styles/theme'

export function generateInterval(start: DayProps, end: DayProps){
  let interval: MarkedDateProps = {}

  eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)}).
  forEach((item) => {
    // const date = format(addDays(item, 1), 'yyyy-MM-dd')
    const date = format(item, 'yyyy-MM-dd')

    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date?
        theme.colors.primary: theme.colors.primary_light,

        textColor: start.dateString === date || end.dateString === date?
        theme.colors.shapes: theme.colors.primary,
      }
    }
  });
  return interval
}
// function getPlatformDate(date: Date){
//   if(Platform.OS === 'ios'){
//     return addDays(date, 1)
//   }else{
//     return date
//   }
// }