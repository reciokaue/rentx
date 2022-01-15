import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface EllipseProps{
  active?: boolean
}

export const Container = styled.View`
  padding-top: ${getStatusBarHeight() + RFValue(19)}px;
  background: ${({theme}) => theme.colors.background};
  position: relative;
`;
export const Header = styled.View`
  background: ${({theme}) => theme.colors.background};
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;

  height: ${RFValue(24)}px;
  padding: 0 ${RFValue(24)}px 0 ${RFValue(12)}px;
  height: ${RFValue(getStatusBarHeight() + 40)}px;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`
export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${RFValue(45)}px;
`
export const Ellipse= styled.View<EllipseProps>`
  width: 4px;
  height: 4px;
  background: ${({theme, active}) => active?
  theme.colors.title:  theme.colors.text_detail};
  margin-left: 8px;
  border-radius: 100px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  margin-top: ${RFValue(88)}px;
  padding: 0 ${RFValue(24)}px;
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  margin-top: ${RFValue(16)}px;
  padding: 0 ${RFValue(24)}px;
`;
export const StepTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  margin-top: ${RFValue(48)}px;
  padding: 0 ${RFValue(24)}px;
`;
export const Form = styled.View`
  max-width: 100%;
  width: 100%;
  padding: 0 ${RFValue(24)}px;
`;
export const Slider = styled.View`
  padding: ${RFValue(24)}px 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ErrorSection = styled.View`
  height:  ${RFValue(40)}px;
  justify-content: center;
  padding: 0 ${RFValue(24)}px ${RFValue(8)}px;
  width: 100%;
`;
export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary_400};
`;
export const Footer = styled.View`
  margin-bottom: ${RFValue(70)}px ;
  padding: 0 ${RFValue(24)}px;
`;
