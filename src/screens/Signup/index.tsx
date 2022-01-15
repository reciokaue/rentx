import React, { useState } from 'react';

import { Dimensions, Keyboard, KeyboardAvoidingView, StatusBar, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import * as Yup from 'yup'

import Animated, { 
  useAnimatedStyle,
  useSharedValue, 
  withTiming
} from 'react-native-reanimated';

import {
  Container,
  Header,
  Box,
  Ellipse,
  Title,
  Subtitle,
  StepTitle,
  Form,
  Slider,
  Footer,
  ErrorSection,
  ErrorMessage
} from './styles';

const WINDOW_WIDTH = Dimensions.get('window').width

const schema = Yup.object().shape({
  driverLicense: Yup.string()
    .required('A CNH é obrigatoria'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  name: Yup.string()
    .required('O nome é obrigatorio'),
  })

export function Signup(){
  const [ step, setStep ] = useState(0)
  const [ passwordFocus, setPasswordFocus ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState('')

  const { goBack, navigate } = useNavigation<any>()

  const slideAnimation = useSharedValue(0)
  const widthAnimation = useSharedValue(WINDOW_WIDTH)

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ driverLicense, setDriverLicense ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordAgain, setPasswordAgain ] = useState('')

  const brandStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: slideAnimation.value}],
      width: widthAnimation.value,
    }
  })

  async function handleNextStep(){
    setErrorMessage('')
    if(step == 0){
      try {
        await schema.validate({name, email, driverLicense}) 

        setStep(1)
        widthAnimation.value = withTiming(0, {duration: 500})
        slideAnimation.value = withTiming(-WINDOW_WIDTH, {duration: 500})
        setPasswordFocus(true)
      } catch (error) {
        if(error instanceof Yup.ValidationError){
          setErrorMessage(error.message)
        }
      }
    }else if(password == passwordAgain){
      await api.post('users', {
        name: name,
        email: email,
        driver_license: driverLicense,
        password: password
      }).then(() => 
        navigate('Complete', {title: 'Conta criada!', message: 'Agora é so fazer login\ne aproveitar', nextScreen: 'Signin'})
      ).catch(() =>
        setErrorMessage('Não foi possivel criar a conta, tente novamente')
      )
    }
  }
  function handleGoBack(){
    if(step == 1){
      setStep(0)
      widthAnimation.value = withTiming(WINDOW_WIDTH, {duration: 500})
      slideAnimation.value = withTiming(0, {duration: 500})
      setPasswordFocus(false)
      setErrorMessage('')
    }else{
      goBack()
    }
  }

  return (
    <Container>
      <StatusBar translucent barStyle={'dark-content'} backgroundColor="#0000"/>
      <Header>
        <BackButton onPress={handleGoBack} />
        <Box>
          <Ellipse active={step == 0? true: false}/>
          <Ellipse active={step == 1? true: false}/>
        </Box>
      </Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior='position' enabled>
          <Title>Crie sua{'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil.</Subtitle>
          <StepTitle>{step == 0? '1. Dados': '02. Senha'}</StepTitle>
          <Slider>
            <Animated.View style={brandStyle}>
                <Form>
                  <Input value={name} onChangeText={setName} placeholder='Nome' iconName="user"/>
                  <Input value={email} onChangeText={setEmail} placeholder='Email' iconName="mail" keyboardType='email-address'/>
                  <Input value={driverLicense} onChangeText={setDriverLicense} placeholder='CNH' iconName="credit-card" keyboardType='numeric'/>
                </Form>
            </Animated.View>
            <Form>
              <Input password value={password} onChangeText={setPassword} focus={passwordFocus} placeholder='Senha' iconName="lock"/>
              <Input password value={passwordAgain} onChangeText={setPasswordAgain} placeholder='Repetir senha' iconName="lock"/>
            </Form>
          </Slider>
          <ErrorSection>
            <ErrorMessage>
              {errorMessage}
              {step == 1 && password != passwordAgain && 'As senhas devem ser iguais'}
            </ErrorMessage>
          </ErrorSection>
          <Footer>
            <Button
              color={password != '' && step == 1 && password == passwordAgain? '#03B252': ''}
              enabled={(password != '' && step == 1 && password == passwordAgain ) || step == 0}
              onPress={handleNextStep}
              title='Próximo'
            />
          </Footer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
