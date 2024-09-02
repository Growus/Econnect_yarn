import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import * as P from '../styles/ProfileStyle';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';

import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
import defaultImg from '../assets/img/econnect_default.png';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  // 사용자 정보 조회
  const fetchUserProfile = async () => {
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
          setImageUri(profileImage || defaultImg); // 프로필 이미지 URI 설정
          setNickname(nickname || null);
          setMessage(stateMessage || null);
        } else {
          console.error('사용자 정보 조회 실패:', responseData.message);
        }
      }
    } catch (error) {
      console.error('사용자 정보 조회 요청 실패:', error.message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // 이미지 가져오기
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }

        // 이미지의 base64 데이터 설정
        setImageFile(response.assets[0].base64);
        setImageUri(response.assets[0].uri); // 이미지 URI 업데이트
      },
    );
  };

  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const formData = new FormData();
        formData.append('nickname', nickname || null);
        formData.append('message', message || null);

        if (imageFile) {
          // base64 데이터를 바이너리 데이터로 변환
          const imageData = `data:image/jpeg;base64,${imageFile}`;

          // 바이너리 데이터로 변환
          const binaryData = RNFetchBlob.base64.decode(imageFile);

          // 바이너리 데이터로 파일을 업로드
          formData.append('profileImage', binaryData, 'image/jpeg');
        }

        const res = await RNFetchBlob.fetch(
          'PATCH',
          'http://54.180.227.239:8080/api/my-page/info',
          {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // 바이너리 데이터 전송을 위한 Content-Type 설정
          },
          formData,
        );

        // 응답 데이터 로깅
        console.log(nickname);
        console.log(message);
        console.log(imageFile);
        console.log('Save Response Data:', res.data);

        if (!res.data) {
          // res.data = null;
          // console.error('빈 응답');
          // return;
        }

        const responseData = JSON.parse(res.data);

        if (responseData.isSuccess) {
          console.log('회원 정보 수정 성공:', responseData.message);
          navigation.navigate('My');
        } else {
          console.error('회원 정보 수정 실패:', responseData.message);
        }
      }
    } catch (error) {
      console.error('회원 정보 수정 요청 실패:', error.message);
    }
  };

  return (
    <P.StyledSafeAreaView>
      <P.ProfileImg source={{uri: imageUri || defaultImg}} resizeMode="cover" />
      <P.ProfileBtn onPress={() => onSelectImage()}>
        <P.ProfileCamera />
      </P.ProfileBtn>
      <P.InputGap>
        <InputBox
          label="NICKNAME"
          placeholder="닉네임을 입력하세요."
          value={nickname}
          onChangeText={setNickname} // nickname 상태 업데이트
        />
        <InputBox
          label="MESSAGE"
          placeholder="상태 메시지를 입력해주세요."
          value={message}
          onChangeText={setMessage} // message 상태 업데이트
        />
      </P.InputGap>
      <P.ButtonGap>
        <CustomButton onPress={handleSave} label="SAVE" />
      </P.ButtonGap>
    </P.StyledSafeAreaView>
  );
};

export default ProfileScreen;
