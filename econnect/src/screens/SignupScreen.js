import React from 'react';
import * as S from '../styles/SignupStyle';

const SignupScreen = ({ navigation }) => {
    return (
        <S.Screen>
            <S.Text>회원가입 페이지</S.Text>
            <S.Button onPress={() => navigation.navigate('Login')}>
                <S.ButtonText>로그인하러 가기</S.ButtonText>
            </S.Button>
        </S.Screen>
    );
};

export default SignupScreen;
