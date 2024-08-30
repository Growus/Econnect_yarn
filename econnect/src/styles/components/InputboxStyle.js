import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import {SemiBoldText} from '../../components/CustomText';

const {width} = Dimensions.get('window');
const contentWidth = width - 66;

export const Content = styled.View`
  width: ${contentWidth};
  height: 73px;
  flex: 1;
  justify-content: flex-start;
`;

export const Text = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 16px;
  margin-left: 18px;
`;

export const Input = styled.TextInput`
  width: ${contentWidth};
  height: 44px;
  border-radius: 30px;
  margin-top: 7px;
  padding: 0 16px;
  background-color: ${palette.white};
`;
