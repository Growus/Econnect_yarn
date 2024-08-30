import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import {SemiBoldText} from '../../components/CustomText';
import {RegularText} from '../../components/CustomText';

const {width} = Dimensions.get('window');
const contentWidth = width - 66;
const inputWidth = contentWidth - 67;

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

export const InputBox = styled.View`
  width: ${contentWidth};
  height: 44px;
  margin-top: 7px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: ${inputWidth};
  height: 100%;
  border-radius: 30px 0 0 30px;
  padding: 0 16px;
  background-color: ${palette.white};
`;

export const Btn = styled.Pressable`
  width: 67px;
  height: 100%;
  border-radius: 0 30px 30px 0;
  justify-content: center;
  align-items: center;
  background-color: ${palette.deepGreen};
`;

export const BtnText = styled(RegularText)`
  color: ${palette.white};
  font-size: 14px;
`;
