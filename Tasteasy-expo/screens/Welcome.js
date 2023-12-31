import React from "react";
import { StatusBar } from "expo-status-bar";


import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "../components/styles";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage
          resizeMode="cover"
          source={require("../img/tasteasy-logo.png")}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome</PageTitle>
          <SubTitle welcome={true}>Your Name</SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require("../img/tasteasy-logo.png")}
            />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
