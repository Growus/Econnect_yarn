import styled from 'styled-components/native';
import {Animated} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import {MediumText} from '../../components/CustomText';

export const ToggleContainer = styled.TouchableOpacity`
  width: 58px;
  height: 25px;
  border-radius: 12.5px;
  justify-content: center;
  background-color: ${props =>
    props.$isOn ? palette.subGreen : palette.cocoa};
`;

export const ToggleWheel = styled(Animated.View)`
  width: 21px;
  height: 21px;
  background-color: ${palette.white};
  border-radius: 99px;
`;

export const ToggleText = styled(MediumText)`
  color: ${palette.white};
  font-size: 12px;
  position: absolute;
  align-self: center;
  left: ${props => (props.$isOn ? '10px' : 'auto')};
  right: ${props => (props.$isOn ? 'auto' : '10px')};
`;
