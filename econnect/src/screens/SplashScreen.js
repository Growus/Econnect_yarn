import React from 'react';
import * as S from '../styles/SplashStyle';
import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';

const SplashScreenE = () => {
  // 화면 너비와 높이를 가져옵니다.
  const {width} = Dimensions.get('window');

  // 애니메이션의 비율 (393x852)
  const aspectRatio = 393 / 852;

  // 화면 너비에 맞춰서 높이를 계산합니다.
  const animationWidth = width;
  const animationHeight = animationWidth / aspectRatio;

  return (
    <S.Screen>
      <LottieView
        style={{
          width: animationWidth,
          height: animationHeight,
        }}
        source={require('../assets/lottie/splash.json')} autoPlay loop />
    </S.Screen>
  );
};

export default SplashScreenE;
