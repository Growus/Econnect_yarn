import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import palette from '../lib/styles/colorPalette';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${palette.backGreen};
`;
