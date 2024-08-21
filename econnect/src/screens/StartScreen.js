import React from 'react';
import * as S from '../styles/StartStyle';

const StartScreen = ({ navigation }) => {
    return (
        <S.Screen>
            <S.Text>Main Screen</S.Text>
            <S.Button title="로그인" onPress={() => navigation.navigate('Login')} />
            <S.Button title="회원가입" onPress={() => navigation.navigate('Signup')} />
        </S.Screen>
    );
};

export default StartScreen;
