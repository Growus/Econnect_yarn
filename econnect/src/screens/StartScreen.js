import React from 'react';
import {Text, Button} from 'react-native';
import * as S from '../styles/StartStyle';

const StartScreen = ({ navigation }) => {
  return (
    <S.StyledSafeAreaView>
      <Text>시작 페이지</Text>
      <Button title="로그인" onPress={() => navigation.navigate('Login')}/>
      <Button title="회원가입" onPress={() => navigation.navigate('Signup')}/>
      <Button title="메인페이지" onPress={() => navigation.navigate('Main')}/>
    </S.StyledSafeAreaView>
  );
};

export default StartScreen;
