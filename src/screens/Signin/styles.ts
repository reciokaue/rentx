import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.background};
`;
export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(100)}px;
  `;
export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.secondary_600};
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  margin-top: ${RFValue(16)}px;
`;
export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(10)}px;
`;
export const Box = styled.View`
  width: 100%;
  height: ${RFValue(24)}px;
  /* margin-top: ${RFValue(64)}px; */
  margin-bottom: ${RFValue(30)}px;
`;
export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary_400};
`;


