import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as U from '../styles/UserStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';

import MypageBtn from '../components/MypageButton';
import defaultImg from '../assets/img/econnect_default.png';

const UserScreen = () => {
  const navigation = useNavigation();
  const [imgSource, setImgSource] = useState(defaultImg);
  const [level, setLevel] = useState('1');
  const [nickname, setNickname] = useState('에코넥트');
  const [message, setMessage] = useState('상태 메시지를 입력해주세요.');

  // 사용자 정보 조회
  const fetchUserInfo = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const response = await RNFetchBlob.fetch(
          'GET',
          `http://54.180.227.239:8080/api/my-page`,
          {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        );

        const responseData = JSON.parse(response.data);

        if (responseData.isSuccess) {
          const {profileImage, nickname, stateMessage} = responseData.result;

          setImgSource(profileImage ? {uri: profileImage} : defaultImg);
          setNickname(nickname || '에코넥트');
          setMessage(stateMessage || '상태 메시지를 입력해주세요.');
        } else {
          console.error('사용자 정보 조회 실패:', responseData.message);
        }
      }
    } catch (error) {
      console.error('사용자 정보 조회 요청 실패:', error.message);
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보 조회
  useEffect(() => {
    fetchUserInfo();
  }, []);

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
    navigation.navigate('WebViewNotice');
  };

  const handleQNA = () => {
    navigation.navigate('WebViewQNA');
  };

  const handleLogout = async () => {
    // 로그아웃 구현 (token 삭제 등)
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Start');
    } catch (error) {
      console.error('로그아웃 실패:', error.message);
    }
  };

  const handleWithdraw = async () => {
    // 탈퇴 구현 (token 삭제, API 연동 등)
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Start');
    } catch (error) {
      console.error('회원탈퇴 실패:', error.message);
    }
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
