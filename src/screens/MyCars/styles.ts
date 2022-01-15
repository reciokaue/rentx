import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  position: relative;
`;
export const Header= styled.View`
  /* height: ${RFValue(273)}px; */
  background: ${({theme}) => theme.colors.header};
  /* padding: ${RFValue(24)}px; */
  padding-top: ${getStatusBarHeight()}px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 12px;
  z-index: 9;
`;
export const Title= styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};  
  color: ${({theme}) => theme.colors.shapes};  
  margin: ${RFValue(22)}px 0 ${RFValue(18)}px;
`;
export const Subtitle= styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};  
  color: ${({theme}) => theme.colors.shapes};  
`;
export const CarsContainer = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(8),
  }
})``as React.ComponentType as new <CarByUserProps>() =>
FlatList<CarByUserProps>;

export const Status= styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(8)}px  ${RFValue(8)}px  ${RFValue(21)}px;
  margin-top: ${RFValue(28)}px;
`;
export const Text= styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};  
  color: ${({theme}) => theme.colors.text}; 
`;
export const Amount= styled.Text`
font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};  
  color: ${({theme}) => theme.colors.title};  
`;
