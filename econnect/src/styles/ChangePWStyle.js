import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const InputGap = styled.View`
  width: 100%;
  height: 283px;
  padding: 0 33px;
  margin-top: 50px;
  gap: 32px;
`;

export const ButtonGap = styled.View`
  width: 100%;
  padding: 0 33px;
  align-items: center;
  position: absolute;
  bottom: 80px;
`;
