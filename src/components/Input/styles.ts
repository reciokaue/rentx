import styled, { css } from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface Props{
  isFocused: boolean
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${RFValue(56)}px;
  
  background: ${({theme}) => theme.colors.background};
  flex-direction: row;
  margin-bottom: ${RFValue(6)}px;
  z-index: 2;

  border-bottom-color: #ffff;
  border-bottom-width: 2px;

  ${({isFocused, theme}) => isFocused && css`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.primary};
  `}
`;
export const Box = styled.View`
  width: ${RFValue(56)}px;

  align-items: center;
  justify-content: center;

  margin-right: 2px;
  background: ${({theme}) => theme.colors.shapes};
`;
export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 ${RFValue(23)}px;
  background: ${({theme}) => theme.colors.shapes};
  
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;
export const Visible = styled(RectButton)`
  width: ${RFValue(56)}px;
  background: ${({theme}) => theme.colors.shapes};

  align-items: center;
  justify-content: center;
`;
