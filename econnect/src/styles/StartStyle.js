import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import palette from '../lib/styles/colorPalette';
import {RegularText} from '../components/CustomText';

import Logo from '../assets/img/econnect.svg';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const LogoImg = styled(Logo)`
  width: 175px;
  height: 175px;
  margin-top: 180px;
`;

export const ButtonGap = styled.View`
  width: 100%;
  padding: 0 33px;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
`;

export const CopyRight = styled(RegularText)`
  color: #9e9e9e;
  font-size: 12px;
  position: absolute;
  bottom: 30px;
`;
