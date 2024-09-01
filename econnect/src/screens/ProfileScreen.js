import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import * as P from '../styles/ProfileStyle';

import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
import defaultImg from '../assets/img/econnect_default.png';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');

  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState('');

  // 이미지 가져오기
  const onSelectImage = () => {
    launchImageLibrary(
      {
        madiaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      response => {
        console.log(response);
        // console.log(response.assets[0].base64)
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }

        setResponse(response);
        setImageFile(response.assets[0].base64);
      },
    );
  };

  const handleSave = () => {
    // 저장 버튼을 눌렀을 때 실행할 로직
    console.log('Nickname:', nickname);
    console.log('Message:', message);
    // 여기에 API 호출 등을 추가할 수 있습니다.
    navigation.navigate('My');
  };

  return (
    <P.StyledSafeAreaView>
      <P.ProfileImg
        source={response ? {uri: response.assets[0].uri} : defaultImg}
        resizeMode="cover"
      />
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
