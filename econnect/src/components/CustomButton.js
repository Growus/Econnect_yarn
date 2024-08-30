import React from 'react';
import * as C from '../styles/components/CustomButtonStyle';

const CustomButton = ({label, onPress}) => {
  return (
    <C.Button onPress={onPress}>
      <C.Label>{label}</C.Label>
    </C.Button>
  );
};

export default CustomButton;
