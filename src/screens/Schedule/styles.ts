import styled, { css } from "styled-components/native";

import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps{
  selected?: boolean
}
export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.shapes};
`;
export const Nav = styled.View`
  width: 100%;
  padding: 0 ${RFValue(12)}px;
  position: absolute;
  margin-top: ${getStatusBarHeight()}px;
  z-index: 9;
  background: ${({theme}) => theme.colors.header};
`;
export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(305)}px;
  background: ${({theme}) => theme.colors.header};
  
  padding: ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight() + RFValue(20)}px;
`;
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shapes};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  margin-top: ${RFValue(24)}px;
`;
export const Period = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${RFValue(32)}px 0;
`;
export const Column = styled.View`
  width: 30%;
`;
export const Placeholder = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;
export const DateInput = styled.Text<DateValueProps>`
  width: 100%;
  color: ${({theme}) => theme.colors.shapes};
  font-family: ${({theme}) => theme.fonts.primary_500};
  padding-top: 5px;

  ${({selected, theme}) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.text};
  `}
`;
export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px; 
  padding-bottom: ${getBottomSpace() + RFValue(24)}px;
  /* background-color: ${({theme}) => theme.colors.background}; */
`;