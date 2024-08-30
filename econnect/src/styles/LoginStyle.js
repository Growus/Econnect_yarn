import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';
import {RegularText} from '../components/CustomText';

import Logo from '../assets/img/econnect.svg'; // svg 파일 임포트

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const LogoImg = styled(Logo)`
  width: 175px;
  height: 175px;
  margin: 39px 0 45px 0;
`;

export const InputGap = styled.View`
  width: 100%;
  height: 178px;
  padding: 0 33px;
  gap: 32px;
`;

export const ButtonGap = styled.View`
  width: 100%;
  padding: 0 33px;
  align-items: center;
  margin-top: 67px;
`;

export const SignupText = styled(RegularText)`
  color: ${palette.mainGreen};
  font-size: 16px;
  margin-top: 26px;
`;

export const FindpwText = styled(RegularText)`
  color: #01110a;
  font-size: 16px;
  margin-top: 15px;
`;
