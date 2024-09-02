import React, {useState} from 'react';
import * as F from '../styles/FindPWStyle';

import InputBox from '../components/InputBox';
import InputBoxBtn from '../components/InputBoxBtn';
import CustomButton from '../components/CustomButton';
import Modal from '../components/Modal';

const FindPWScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const handlePW = () => {
    // 로그인 버튼을 눌렀을 때 실행할 로직
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
    <F.StyledSafeAreaView>
      <F.ScrollView>
        <F.LogoImg />
        <F.InputGap>
          <InputBoxBtn
            label="ID"
            placeholder="이메일을 입력하세요."
            value={email}
            onChangeText={setEmail} // email 상태 업데이트
            btnLabel="전송"
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
            label="RESET-PASSWORD"
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
        </F.InputGap>
        <F.ButtonGap>
          <CustomButton onPress={handlePW} label="RESET-PASSWORD" />
        </F.ButtonGap>
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          label="메일을"
        />
      </F.ScrollView>
    </F.StyledSafeAreaView>
  );
};

export default FindPWScreen;
