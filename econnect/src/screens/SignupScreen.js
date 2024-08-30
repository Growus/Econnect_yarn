import React, {useState} from 'react';
import * as S from '../styles/SignupStyle';

import InputBox from '../components/InputBox';
import InputBoxBtn from '../components/InputBoxBtn';
import CustomButton from '../components/CustomButton';
import Modal from '../components/Modal';

const SignupScreen = ({navigation}) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const handleSignup = () => {
    // 로그인 버튼을 눌렀을 때 실행할 로직
    console.log('Nickname:', nickname);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Password:', password);
    console.log('Repassword:', repassword);
    // 여기에 로그인 API 호출 등을 추가할 수 있습니다.
    navigation.navigate('Login');
  };

  const handleEmail = () => {
    console.log('이메일 인증');
    setModalVisible(true);
  };

  const handleNumber = () => {
    console.log('번호 입력');
  };

  return (
    <S.StyledSafeAreaView>
      <S.ScrollView>
        <S.LogoImg />
        <S.InputGap>
          <InputBox
            label="NICKNAME"
            placeholder="유효성 검사 관련된 거 규칙 정하면 넣기"
            value={nickname}
            onChangeText={setNickname} // nickname 상태 업데이트
          />
          <InputBoxBtn
            label="ID"
            placeholder="이메일을 입력하세요."
            value={email}
            onChangeText={setEmail} // email 상태 업데이트
            btnLabel="인증번호"
            btnOnpress={handleEmail}
          />
          <InputBoxBtn
            label="Certification Number"
            placeholder="인증번호를 입력하세요."
            value={number}
            onChangeText={setNumber} //number 상태 업데이트
            btnLabel="확인"
            btnOnpress={handleNumber}
          />
          <InputBox
            label="PASSWORD"
            placeholder="8자리 이상(영문, 숫자, 특수문자 포함)"
            value={password}
            onChangeText={setPassword} // password 상태 업데이트
            type="password"
          />
          <InputBox
            label="RE-PASSWORD"
            placeholder="비밀번호를 다시 입력히세요."
            value={repassword}
            onChangeText={setRepassword} // repassword 상태 업데이트
            type="password"
          />
        </S.InputGap>
        <S.ButtonGap>
          <CustomButton onPress={handleSignup} label="SIGNUP" />
        </S.ButtonGap>
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          label="번호를"
        />
      </S.ScrollView>
    </S.StyledSafeAreaView>
  );
};

export default SignupScreen;
