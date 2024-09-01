import React from 'react';
import {Text} from 'react-native';
import * as S from '../styles/StartStyle';

import CustomButton from '../components/CustomButton';

const StartScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <S.StyledSafeAreaView>
      <S.LogoImg />
      <S.ButtonGap>
        <CustomButton onPress={handleLogin} label="LOGIN" />
        <CustomButton onPress={handleSignup} label="SIGNUP" />
      </S.ButtonGap>
      <S.CopyRight>Copyright 2024. GrowUs All rights reserved.</S.CopyRight>
    </S.StyledSafeAreaView>
  );
};

export default StartScreen;
