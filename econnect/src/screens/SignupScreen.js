import React, {useState} from 'react';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import Config from 'react-native-config';
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

  const handleSignup = async () => {
    console.log('회원가입 시도');

    if (password !== repassword) {
      console.log('비밀번호가 일치하지 않습니다.');
      return;
    }

    const url = `http://54.180.227.239:8080/api/auth/signup`;
    const data = {
      nickName: nickname,
      email: email,
      password: password,
    };

    try {
      const response = await RNFetchBlob.fetch(
        'POST',
        url,
        {
          'Content-Type': 'application/json',
        },
        JSON.stringify(data),
      );

      const responseText = await response.text();

      if (!responseText) {
        console.error('응답 본문이 비어 있습니다.');
        return;
      }

      console.log('Raw response:', responseText);

      try {
        const responseJson = JSON.parse(responseText);

        if (responseJson.isSuccess) {
          console.log('회원가입 성공:', responseJson.message);
          navigation.navigate('Login');
        } else {
          console.log('회원가입 실패:', responseJson.message);
        }
      } catch (parseError) {
        console.error('응답 JSON 파싱 실패:', parseError.message);
      }
    } catch (error) {
      console.error('회원가입 요청 실패:', error.message);
      console.log(
        'Response data:',
        error.response ? error.response.data : 'No response data',
      );
      console.log(
        'Response status:',
        error.response ? error.response.status : 'No response status',
      );
      console.log(
        'Response headers:',
        error.response ? error.response.headers : 'No response headers',
      );
    }
  };

  const handleEmail = async () => {
    console.log('이메일 인증');
    const url = `http://54.180.227.239:8080/api/auth/send-email?email=${email}`;

    try {
      const response = await RNFetchBlob.fetch('POST', url, {
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      const responseText = await response.text();

      if (!responseText) {
        console.error('응답 본문이 비어 있습니다.');
        return;
      }

      console.log('Raw response:', responseText);

      try {
        const responseJson = JSON.parse(responseText);
        console.log('이메일 인증 번호 전송 성공:', responseJson);
        setModalVisible(true);
      } catch (parseError) {
        console.error('응답 JSON 파싱 실패:', parseError.message);
      }
    } catch (error) {
      console.error('이메일 인증 번호 전송 실패:', error.message);
      console.log('Request URL:', url);
      console.log('이메일:', email);
    }
  };

  const handleNumber = async () => {
    console.log('인증번호 확인');
    const url = `http://54.180.227.239:8080/api/auth/code-check?email=${email}&code=${number}`;

    try {
      const response = await RNFetchBlob.fetch('GET', url, {
        'Content-Type': 'application/json',
      });

      const responseText = await response.text();

      if (!responseText) {
        console.error('응답 본문이 비어 있습니다.');
        return;
      }

      console.log('Raw response:', responseText);

      try {
        const responseJson = JSON.parse(responseText);

        if (responseJson.isSuccess) {
          console.log('인증 번호 확인에 성공했습니다:', responseJson.message);
        } else {
          console.log('인증 번호 확인에 실패했습니다:', responseJson.message);
        }
      } catch (parseError) {
        console.error('응답 JSON 파싱 실패:', parseError.message);
      }
    } catch (error) {
      console.error('인증 번호 확인 요청 실패:', error.message);
      console.log('Request URL:', url);
      console.log('이메일:', email);
      console.log('인증번호:', number);
    }
  };

  return (
    <S.StyledSafeAreaView>
      <S.ScrollView>
        <S.LogoImg />
        <S.InputGap>
          <InputBox
            label="NICKNAME"
            placeholder="닉네임을 입력하세요."
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
