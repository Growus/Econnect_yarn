import styled from 'styled-components/native';
import palette from '../../lib/styles/colorPalette';
import {SemiBoldText} from '../../components/CustomText';

export const Content = styled.View`
  width: 318px;
  height: 39px;
  padding: 7px 17px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 17px;
`;
