import React from 'react';
import * as L from '../styles/LoginStyle';

const LoginScreen = ({ navigation }) => {
    return (
        <L.Screen>
            <L.Text>로그인 페이지</L.Text>
            <L.Button onPress={() => navigation.navigate('Signup')}>
                <L.ButtonText>회원가입하러가기</L.ButtonText>
            </L.Button>
        </L.Screen>
    );
};

export default LoginScreen;
