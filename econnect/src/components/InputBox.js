import React from 'react';
import * as I from '../styles/components/InputboxStyle';

const InputBox = ({label, placeholder, value, onChangeText, type = 'text'}) => {
  return (
    <I.Content>
      <I.Text>{label}</I.Text>
      <I.Input
        onChangeText={onChangeText} // 입력값이 바뀔 때 상태 업데이트
        placeholder={placeholder}
        value={value} // 입력된 텍스트를 표시
        secureTextEntry={type === 'password'} // password 타입인 경우 텍스트 마스킹
      />
    </I.Content>
  );
};

export default InputBox;
