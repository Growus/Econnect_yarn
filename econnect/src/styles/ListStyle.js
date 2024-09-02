import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';

export const Screen = styled.SafeAreaView`
    flex: 1;
    padding-top: 30px;
    background-color: ${palette.backGreen};
`;

export const ScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text``;
