import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: ${RFValue(100)}px;
  height: ${RFValue(92)}px;

  align-items: center;
  justify-content: center;
  background:  ${({theme}) => theme.colors.background};

  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
  border-radius: 1px;
`;
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(13)}px;
  text-align: center;
`;
