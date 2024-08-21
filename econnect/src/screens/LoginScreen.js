import React from 'react';
import * as L from '../styles/LoginStyle';

const LoginScreen = ({ navigation }) => {
    return (
        <L.Screen>
            <L.Text>로그인 페이지</L.Text>
            <L.Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
        </L.Screen>
    );
};

export default LoginScreen;
