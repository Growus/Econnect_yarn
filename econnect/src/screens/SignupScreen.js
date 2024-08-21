import React from 'react';
import * as S from '../styles/SignupStyle';

const SignupScreen = ({ navigation }) => {
    return (
        <S.SignupScreen>
            <S.Text>회원가입 페이지</S.Text>
            <S.Button title="로그인하러 가기" onPress={() => navigation.navigate('Login')} />
        </S.SignupScreen>
    );
};

export default SignupScreen;
