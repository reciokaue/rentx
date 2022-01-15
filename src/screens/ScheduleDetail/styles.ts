import styled from "styled-components/native";

import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.shapes};
`;
export const Header = styled.View`
  width: 100%;
  padding-left: ${RFValue(12)}px;
  padding-top: ${getStatusBarHeight()}px;
  position: absolute;
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
export const Column = styled.TouchableOpacity``;
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
export const Section = styled.View`
  padding: ${RFValue(40)}px ${RFValue(24)}px ${RFValue(14)}px;
  width: 100%;
`;
export const FirstRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${RFValue(18.5)}px ${RFValue(16)}px 0;
  margin-bottom: ${RFValue(16)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.line};
`;
export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
`;
export const Icon = styled(RectButton)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.primary};
  margin-right: ${RFValue(29)}px;
  border-radius: 1px;
`;
export const TotalPrice = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
`;
export const Footer = styled.View`
  padding: ${RFValue(24)}px; 
  padding-bottom: ${getBottomSpace() + RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.shapes};
`;