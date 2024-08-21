import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

// 기본 CustomText 컴포넌트
const CustomText = styled(Text)`
  font-family: ${({fontWeight}) => fontWeight || 'Pretendard-Regular'};
  color: #000000;
`;

// 두께별로 정의된 컴포넌트들
// 900
export const BlackText = props => (
  <CustomText fontWeight="Pretendard-Black" {...props} />
);
// 800
export const ExtraBoldText = props => (
  <CustomText fontWeight="Pretendard-ExtraBold" {...props} />
);
// 700
export const BoldText = props => (
  <CustomText fontWeight="Pretendard-Bold" {...props} />
);
// 600
export const SemiBoldText = props => (
  <CustomText fontWeight="Pretendard-SemiBold" {...props} />
);
// 500
export const MediumText = props => (
  <CustomText fontWeight="Pretendard-Medium" {...props} />
);
// 400
export const RegularText = props => (
  <CustomText fontWeight="Pretendard-Regular" {...props} />
);
// 300
export const LightText = props => (
  <CustomText fontWeight="Pretendard-Light" {...props} />
);
// 200
export const ExtraLightText = props => (
  <CustomText fontWeight="Pretendard-ExtraLight" {...props} />
);
// 100
export const ThinText = props => (
  <CustomText fontWeight="Pretendard-Thin" {...props} />
);

export default CustomText;
