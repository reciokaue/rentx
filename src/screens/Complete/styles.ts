import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.header};
  align-items: center;
  justify-content: center;
  padding-top: ${RFValue(66)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};
  color: ${({theme}) => theme.colors.shapes};

  margin: ${RFValue(40)}px 0 ${RFValue(16)}px;
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text_detail};
  text-align: center;
`;
export const Button = styled(RectButton)`
  padding: ${RFValue(19)}px ${RFValue(25)}px;
  margin: ${RFValue(80)}px 0;

  width: 150px;
  height: 65px;

  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.dark};
  border-radius: 1px;
  overflow: hidden;
  z-index: 5;
`;
export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.shapes};
`;
