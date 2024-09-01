import React from 'react';
import * as S from '../styles/SettingStyle';

import NotiLabel from '../components/NotiLabel';

const SettingScreen = () => {
  return (
    <>
      <S.StyledSafeAreaView>
        <S.LabelGroup>
          <NotiLabel label="푸시 알림" />
          <S.GreenLine />
          <NotiLabel label="식물 상태 변경" />
          <S.PlantGroup>
            <NotiLabel label="대기 습도" />
            <NotiLabel label="토양 습도" />
            <NotiLabel label="온도" />
          </S.PlantGroup>
          <S.GreenLine />
          <NotiLabel label="공지사항" />
        </S.LabelGroup>
        <S.CopyRight>Copyright 2024. GrowUs All rights reserved.</S.CopyRight>
      </S.StyledSafeAreaView>
    </>
  );
};

export default SettingScreen;
