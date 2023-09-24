import React from 'react';
import {StatusBar} from 'expo-status-bar';

//formik
import {Formik} from 'formik';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
} from '../components/styles';

import {View} from 'react-native';

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require('./../components/images/tasteasy-logo.png')}
        />
        <PageTitle>Tasteasy</PageTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
          }}>
          {(handleChange, handleBlur, handleSubmit, values) => (
            <StyledFormArea></StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, ...props}) => {};

export default Login;