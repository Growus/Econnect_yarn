import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';
import { SemiBoldText } from '../components/CustomText';

import Upload from '../assets/img/upload_box.svg';

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
    padding-bottom: 29px;
`;

export const PostImg = styled(Upload)``;

export const Title = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 18px;
    margin-top: 30px;
    padding-right: 120px;
    margin-bottom: 7px;
`;

export const InputBox = styled.TextInput`
    width: 282px;
    height: 44px;
    padding-left: 16px;
    border-radius: 30px;
    background-color: ${palette.white};
`;

export const TInputArea = styled.View`
    width: 282px;
    height: 95px;
    border-radius: 30px;
    background-color: ${palette.white};
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    padding: 11px 16px;
    margin-top: 20px;
`;

export const InputArea = styled.View`
    width: 282px;
    height: 47px;
    border-radius: 30px;
    background-color: ${palette.white};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 11px 16px;
    margin-top: 20px;
    margin-bottom: 34px;
`;

export const Label = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 18px;
`;

export const DateButton = styled.TouchableOpacity`
    height: 40px;
    border-color: #fff;
    border-width: 1px;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    justify-content: center;
`;

export const DateText = styled.Text`
    font-size: 16px;
`;