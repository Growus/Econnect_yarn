import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';

import Camera from '../assets/img/profile_camera.svg';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const ProfileImg = styled.Image`
  width: 118px;
  height: 118px;
  border-radius: 59px;
  overflow: hidden;
  margin-top: 35px;
`;

export const ProfileBtn = styled.Pressable.attrs({
  shadowColor: 'rgb(0,0,0)',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
})`
  margin-top: -30px;
  margin-right: -95px;
  margin-bottom: 38px;
`;

export const ProfileCamera = styled(Camera)`
  width: 23px;
  height: 23px;
`;

export const InputGap = styled.View`
  width: 100%;
  height: 184px;
  padding: 0 33px;
  gap: 38px;
`;

export const ButtonGap = styled.View`
  width: 100%;
  padding: 0 33px;
  align-items: center;
  position: absolute;
  bottom: 80px;
`;
