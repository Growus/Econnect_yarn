import React from 'react';
import * as I from '../styles/components/InputboxBtnStyle';

const InputBoxBtn = ({
  label,
  placeholder,
  value,
  onChangeText,
  btnLabel,
  btnOnpress,
}) => {
  return (
    <I.Content>
      <I.Text>{label}</I.Text>
      <I.InputBox>
        <I.Input
          onChangeText={onChangeText} // 입력값이 바뀔 때 상태 업데이트
          placeholder={placeholder}
          value={value} // 입력된 텍스트를 표시
        />
        <I.Btn onPress={btnOnpress}>
          <I.BtnText>{btnLabel}</I.BtnText>
        </I.Btn>
      </I.InputBox>
    </I.Content>
  );
};

export default InputBoxBtn;
