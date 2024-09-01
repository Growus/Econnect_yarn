import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as U from '../styles/UserStyle';

import MypageBtn from '../components/MypageButton';
import defaultImg from '../assets/img/econnect_default.png';

const UserScreen = () => {
  const navigation = useNavigation();
  const [imgSource, setImgSource] = useState(defaultImg);
  const [level, setLevel] = useState('0');
  const [nickname, setNickname] = useState('에코넥트');
  const [message, sesMessage] = useState('상태 메시지를 입력해주세요.');

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleChangePW = () => {
    navigation.navigate('ChangePW');
  };

  const handleSetting = () => {
    navigation.navigate('Setting');
  };

  const handleNotice = () => {
    console.log('노션 페이지로 이동 예정');
  };

  const handleQNA = () => {
    console.log('노션 페이지로 이동 예정');
  };

  const handleLogout = () => {
    // 로그아웃 구현 (token 삭제 등)
    navigation.navigate('Start');
  };

  const handleWithdraw = () => {
    // 탈퇴 구현 (token 삭제, API 연동 등)
    navigation.navigate('Start');
  };

  return (
    <U.StyledSafeAreaView>
      <U.ProfileImg source={imgSource} resizeMode="cover" />
      <U.Inform>
        <U.Level>Lv.{level}</U.Level>
        <U.Nickname>{nickname}</U.Nickname>
      </U.Inform>
      <U.Message>
        <U.Pencil />
        <U.MContent>
          <U.MText>{message}</U.MText>
          <U.MLine></U.MLine>
        </U.MContent>
      </U.Message>
      <U.GreenLine />
      <MypageBtn label="회원 정보 수정" onPress={handleProfile} />
      <MypageBtn label="비밀번호 변경" onPress={handleChangePW} />
      <U.GreenLine />
      <MypageBtn label="푸시 알림 설정" onPress={handleSetting} />
      <MypageBtn label="공지사항" onPress={handleNotice} />
      <MypageBtn label="문의" onPress={handleQNA} />
      <U.GreenLine />
      <U.Btns>
        <U.Btn onPress={handleLogout}>
          <U.LogoutText>로그아웃</U.LogoutText>
        </U.Btn>
        <U.Btn onPress={handleWithdraw}>
          <U.WithdrawText>회원탈퇴</U.WithdrawText>
        </U.Btn>
      </U.Btns>
    </U.StyledSafeAreaView>
  );
};

export default UserScreen;
