import styled from "styled-components/native";

import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.shapes};
`;
export const Header = styled.View`
  width: 100%;
  padding-left: ${RFValue(12)}px;
  padding-top: ${getStatusBarHeight()}px;
  position: absolute;
  top: 0;
  z-index: 9;
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;
export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;
export const Column = styled.View``;
export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;
export const Name = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
`;
export const Price = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
`;
export const UtilityDisplay = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(16)}px;
`;
export const About = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  text-align: justify;

  padding: ${RFValue(24)}px; 
`;
export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px; 
  padding-bottom: ${getBottomSpace() + RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.shapes};
`;