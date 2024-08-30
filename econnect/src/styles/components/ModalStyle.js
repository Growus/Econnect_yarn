import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import {RegularText} from '../../components/CustomText';

const {width} = Dimensions.get('window');
const contentWidth = width - 76;

// 화면 중앙에 정렬된 뷰
export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// 모달 콘텐츠 스타일
export const ModalContent = styled.View.attrs({
  shadowColor: 'rgba(0, 0, 0, 0.25)',
  shadowOffset: {width: 2, height: 4},
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 4,
})`
  width: ${contentWidth};
  max-height: 260px;
  padding-top: 93px;
  background-color: ${palette.white};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

// 텍스트 스타일
export const Text = styled(RegularText)`
  color: ${palette.black};
  font-size: 18px;
  text-align: center;
  line-height: normal;
`;

// 버튼 스타일
export const Pressable = styled.Pressable`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${palette.cocoa};
  border-radius: 0 0 16px 16px;
  margin-top: 75px;
`;

// 버튼 텍스트 스타일
export const PText = styled(RegularText)`
  color: ${palette.white};
  font-size: 16px;
`;
