import React, { useEffect, useRef, useState } from 'react';

import { TextInput, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Box,
  InputText,
  Visible,
} from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps{
  iconName: React.Component<typeof Feather>['name']
  password?: boolean
  value?: string
  focus?: boolean
}

export function Input({iconName, value, password = false, focus = false, ...rest}: InputProps){
  const theme = useTheme()

  const [ isVisible, setIsVisible ] = useState(true)
  const [ isFocused, setIsFocused ] = useState(false)

  const inputRef = useRef<TextInput>(null)

  function handleToggleVisible(){
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if(focus){
      inputRef.current?.focus()
    }
  }, [focus])
  useEffect(() => {
    if(password){
      setIsVisible(false)
    }
  }, [])

  return (
    <Container isFocused={isFocused}>
      <Box>
        <Feather
          name={iconName}
          size={24} 
          color={isFocused || !!value ? theme.colors.primary: theme.colors.text_detail}
        />
      </Box>
      <InputText {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCorrect={false}
        autoCapitalize='none'
        textContentType='password'
        secureTextEntry={!isVisible}
        ref={inputRef}
      />
      {password?
        <Visible onPress={handleToggleVisible}>
          <Feather name={isVisible? 'eye': 'eye-off'} size={24} color={theme.colors.text_detail}/>
        </Visible>
      :null}
    </Container>
  );
}
