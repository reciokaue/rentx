import React, { useEffect, useState } from 'react';

import { Alert, BackHandler, Keyboard, KeyboardAvoidingView,  StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Yup from 'yup'

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/authContext';

import {
  Container,
  Header,
  Subtitle,
  Title,
  Form,
  Box,
  ErrorMessage,
} from './styles';

export function Signin(){
  const [ email, setEmail ] = useState('')
  const { signIn, setStarted } = useAuth()
  
  const [ password, setPassword ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  const { navigate } = useNavigation<any>()

  async function handleSignIn(){
    setErrorMessage('')
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      })

      await schema.validate({ email, password})
      await signIn({ email, password })
    }catch(error){
      if(error instanceof Yup.ValidationError){
        setErrorMessage(error.message)
      }else{
        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, verifique as credenciais')
        console.log(error)
      }
    }
  }

  function GoSignUp(){
    navigate('Signup')
  }
  useEffect(() => {
    setStarted(true)
  }, [])

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <StatusBar translucent barStyle={'dark-content'} backgroundColor="#0000"/>
            <Header>
              <Title>Estamos{'\n'}quase lá.</Title>
              <Subtitle>Faça seu login para começar{'\n'}uma experiência incrível.</Subtitle>
            </Header>

            <Form>
              <Input
                placeholder='Email'
                keyboardType='email-address'
                iconName="mail"
                onChangeText={setEmail}
                value={email}
              />
              <Input
                placeholder="Senha"
                password
                iconName="lock"
                onChangeText={setPassword}
                value={password}
              />
            </Form>
            <Box>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </Box>
            <Button onPress={handleSignIn} title='Login'/>
            <Button onPress={GoSignUp} color='#fff' title='Criar conta gratuita' style={{marginTop: 8}}/>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
