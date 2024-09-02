import React, {useState} from 'react';
import * as L from '../styles/LoginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    // 로그인 API 호출
    RNFetchBlob.fetch(
      'POST',
      `http://54.180.227.239:8080/api/auth/login`,
      {
        'Content-Type': 'application/json',
      },
      JSON.stringify({
        email: email,
        password: password,
      }),
    )
      .then(response => {
        // JSON 응답 파싱
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.isSuccess) {
          console.log('로그인 성공:', responseJson.message);

          // token을 AsyncStorage에 저장
          AsyncStorage.setItem('token', responseJson.result.token)
            .then(() => {
              console.log('Token 저장 성공: ', responseJson.result.token);
              // 로그인 성공 후 이동
              navigation.navigate('Tab');
            })
            .catch(error => {
              console.error('Token 저장 실패:', error.message);
            });
        } else {
          console.log('로그인 실패:', responseJson.message);
        }
      })
      .catch(error => {
        console.error('로그인 요청 실패:', error.message);
      });
  };

  return (
    <L.StyledSafeAreaView>
      <L.LogoImg />
      <L.InputGap>
        <InputBox
          label="ID"
          placeholder="이메일을 입력하세요."
          value={email}
          onChangeText={setEmail} // email 상태 업데이트
        />
        <InputBox
          label="PASSWORD"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChangeText={setPassword} // password 상태 업데이트
          type="password"
        />
      </L.InputGap>

      <L.ButtonGap>
        <CustomButton onPress={handleLogin} label="LOGIN" />
        <L.SignupText onPress={() => navigation.navigate('Signup')}>
          회원가입
        </L.SignupText>
        <L.FindpwText onPress={() => navigation.navigate('FindPW')}>
          비밀번호 찾기
        </L.FindpwText>
      </L.ButtonGap>
    </L.StyledSafeAreaView>
  );
};

export default LoginScreen;
