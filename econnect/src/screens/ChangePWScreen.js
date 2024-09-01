import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as C from '../styles/ChangePWStyle';

import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const ChangePWScreen = () => {
  const navigation = useNavigation();
  const [currentPW, setCurrentPW] = useState('');
  const [newPW, setNewPW] = useState('');
  const [newRePW, setNewRePW] = useState('');

  const handleReset = () => {
    // 저장 버튼을 눌렀을 때 실행할 로직
    console.log('CurrentPW:', currentPW);
    console.log('NewPW:', newPW);
    console.log('NewRePW:', newRePW);
    // 여기에 API 호출 등을 추가할 수 있습니다.
    navigation.navigate('My');
  };

  return (
    <C.StyledSafeAreaView>
      <C.InputGap>
        <InputBox
          label="CURRENT PASSWORD"
          placeholder="현재 비밀번호를 입력해 주세요."
          value={currentPW}
          onChangeText={setCurrentPW} // 현재 비번 상태 업데이트
          type="password"
        />
        <InputBox
          label="NEW PASSWORD"
          placeholder="8자리 이상(영문, 숫자, 특수문자 포함)"
          value={newPW}
          onChangeText={setNewPW} // 새로운 비번 상태 업데이트
          type="password"
        />
        <InputBox
          label="RE-NEW PASSWORD"
          placeholder="변경할 비밀번호를 다시 입력해 주세요."
          value={newRePW}
          onChangeText={setNewRePW} // 새로운 비번 재입력 상태 업데이트
          type="password"
        />
      </C.InputGap>
      <C.ButtonGap>
        <CustomButton onPress={handleReset} label="RESET-PASSWORD" />
      </C.ButtonGap>
    </C.StyledSafeAreaView>
  );
};

export default ChangePWScreen;
