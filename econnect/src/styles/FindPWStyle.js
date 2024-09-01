import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';

import Logo from '../assets/img/econnect.svg'; // svg 파일 임포트

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const LogoImg = styled(Logo)`
  width: 175px;
  height: 175px;
  margin: 39px 0 45px 0;
`;

export const InputGap = styled.View`
  width: 100%;
  height: 353px;
  padding: 0 33px;
  gap: 20px;
`;

export const ButtonGap = styled.View`
  width: 100%;
  padding: 0 33px;
  align-items: center;
  margin-top: 58px;
  margin-bottom: 20px;
`;
