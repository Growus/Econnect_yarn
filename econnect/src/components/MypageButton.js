import React from 'react';
import * as M from '../styles/components/MypageButtonStyle';

const MypageBtn = ({label, onPress}) => {
  return (
    <M.Button onPress={onPress}>
      <M.Label>{label}</M.Label>
      <M.RArrow />
    </M.Button>
  );
};

export default MypageBtn;
