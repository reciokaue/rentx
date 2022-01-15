import styled from "styled-components/native";

import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface EllipseProps{
  active: boolean
}
export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
`;
export const Nav= styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  height: ${RFValue(40)}px;
  padding: ${RFValue(19)}px ${RFValue(24)}px;
`;
export const ImageIndexes= styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Ellipse= styled.View<EllipseProps>`
  width: 6px;
  height: 6px;
  background: ${({theme, active}) => active?
  theme.colors.title:  theme.colors.text_detail};
  margin-left: 8px;
  border-radius: 100px;
`;
export const Wrapper= styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;

  align-items: center;
  justify-content: center;
`;
export const CarImage= styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;