import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import {RegularText} from '../../components/CustomText';

const {width} = Dimensions.get('window');
const contentWidth = width - 66;

export const Button = styled.Pressable.attrs({
  shadowColor: '#62b46a',
  shadowOffset: {width: 1, height: 4},
  shadowOpacity: 0.8,
  shadowRadius: 5,
  elevation: 5,
})`
  width: ${contentWidth}px;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${palette.mainGreen};
  border-radius: 14px;
`;

export const Label = styled(RegularText)`
  color: ${palette.white};
  font-size: 16px;
`;
