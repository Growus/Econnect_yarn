import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';
import * as S from '../styles/components/ToggleStyle';

const Toggle = ({onToggle, isOn}) => {
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 2],
    outputRange: [2, 68],
  });

  return (
    <S.ToggleContainer onPress={onToggle} $isOn={isOn}>
      <S.ToggleText $isOn={isOn}>{isOn ? 'ON' : 'OFF'}</S.ToggleText>
      <S.ToggleWheel
        style={{
          transform: [{translateX}],
        }}
      />
    </S.ToggleContainer>
  );
};

export default Toggle;
