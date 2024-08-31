import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';
import { RegularText, SemiBoldText } from '../components/CustomText';

import Plant from '../assets/img/plant.svg';

export const Screen = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Top = styled.View`
  width: 352px;
  height: 126px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${palette.white};
`;

export const Image = styled(Plant)`
  width: 57px;
  height: 57px;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export const Text = styled.View`

`;

export const Title = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 22px;
`;

export const Contents = styled(RegularText)`
  color: ${palette.black};
  font-size: 16px;
`;

export const Plants = styled.View`
`;

export const PTitle = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 30px;
  padding-top: 40px;
  padding-right: 50%;
  margin-bottom: 12.3px;
`;

export const Slick = styled.View`

`;

export const Menu = styled.View`
  margin-bottom: 31px;
`;

export const MTitle = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 30px;
  padding-top: 40px;
  padding-right: 65%;
  margin-bottom: 16px;
`;
