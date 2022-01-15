import React from 'react';
import { ActivityIndicator } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

interface Props extends RectButtonProps {
  title: string
  color?: string
  loading?: boolean
}

export function Button({title, color, enabled = true, loading = false, ...rest}: Props){
  return (
    <Container
      enabled={!(!enabled || loading)}
      style={{opacity:( !enabled || loading)? .5: 1}}
      color={color}
      {...rest}
    >
      {loading?
        <ActivityIndicator color="#FFF"/>:
        <Title color={color}>{title}</Title>}
    </Container>
  );
}
