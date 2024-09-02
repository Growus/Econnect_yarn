import styled from 'styled-components/native';
import palette from '../../lib/styles/colorPalette';
import {SemiBoldText} from '../../components/CustomText';

import Arrow from '../../assets/img/arrow_right.svg';

export const Button = styled.Pressable`
  width: 318px;
  height: 44px;
  padding: 11px 17px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 16px;
`;

export const RArrow = styled(Arrow)`
  width: 22px;
  height: 22px;
`;
