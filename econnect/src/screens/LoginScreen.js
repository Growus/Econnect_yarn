import React, {useState} from 'react';
import * as L from '../styles/LoginStyle';

import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 버튼을 눌렀을 때 실행할 로직
    console.log('Email:', email);
    console.log('Password:', password);
    // 여기에 로그인 API 호출 등을 추가할 수 있습니다.
    navigation.navigate('Tab');
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
