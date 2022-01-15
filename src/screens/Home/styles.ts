import styled from 'styled-components/native';

import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from 'react-native';
import { CarDTO } from '../../dtos/carDTO';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(60)}px ${RFValue(24)}px ${RFValue(28)}px ${RFValue(16)}px;

  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme}) => theme.colors.header};
`;
export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
`;
export const CarsContainer = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(8),
  }
})``as React.ComponentType as new <CarDTO>() =>
FlatList<CarDTO>;

export const MyCarsButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background: ${({theme}) => theme.colors.primary};
  border-radius: 120px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 22px;
  bottom: 13px;
`;
