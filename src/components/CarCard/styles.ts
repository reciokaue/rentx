import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;
  background: ${({theme}) => theme.colors.shapes};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
  margin: ${RFValue(8)}px 0;

  border-bottom-width: 1px;
  border-bottom-color: #fd0;
  border-radius: 1px;
`;
export const Info = styled.View``;
export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
`;
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;  
export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;
export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.primary};
`;
export const Type = styled.View``;
export const CarImage = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(92)}px;
`;
export const Footer = styled(RectButton)`
  width: 100%;
  height: ${RFValue(40)}px;
  background: ${({theme}) => theme.colors.shapes};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${RFValue(24)}px;
  margin: ${RFValue(-6)}px 0 ${RFValue(8)}px;
  border-radius: 1px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
`;
export const Box = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Dates = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.title};
`;
