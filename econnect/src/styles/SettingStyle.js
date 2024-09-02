import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';
import {RegularText} from '../components/CustomText';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const GreenLine = styled.View`
  width: 318px;
  height: 1px;
  background-color: rgba(90, 175, 118, 0.43);
  margin: 14px 0;
`;

export const LabelGroup = styled.View`
  margin-top: 40px;
`;

export const PlantGroup = styled.View`
  margin-top: 16px;
`;

export const CopyRight = styled(RegularText)`
  color: #9e9e9e;
  font-size: 12px;
  position: absolute;
  bottom: 20px;
`;
