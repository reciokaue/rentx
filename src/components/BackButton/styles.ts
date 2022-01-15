import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  align-items: center;
  justify-content: center;
  border-radius: 1px;
`;
