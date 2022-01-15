import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  color?: string
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  padding: ${RFValue(19)}px;

  align-items: center;
  justify-content: center;
  background-color: ${({theme, color}) => color? color: theme.colors.primary};
  border-radius: 1px;
`;
export const Title = styled.Text<Props>`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme, color}) => color == '#fff'? theme.colors.title: theme.colors.shapes};
`;
