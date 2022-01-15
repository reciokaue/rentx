import React from 'react';

import { Container } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

interface Props extends RectButtonProps {
  color?: string
}

export function BackButton({color, ...rest}: Props){
  const { goBack } = useNavigation<any>();
  const theme = useTheme()

  function handleGoBack() {
    goBack()
  }
  return (
    <Container onPress={handleGoBack} {...rest}>
      <MaterialCommunityIcons name="chevron-left" size={24}
        color={color? color: theme.colors.text}
      />
    </Container>
  );
}
