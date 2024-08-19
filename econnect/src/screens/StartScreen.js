import React from 'react';
import {Text, Button} from 'react-native';
import * as S from '../styles/StartStyle';

const StartScreen = () => {
  return (
    <S.StyledSafeAreaView>
      <Text>Main Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </S.StyledSafeAreaView>
  );
};

export default StartScreen;
