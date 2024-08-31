import styled from 'styled-components/native';
import palette from '../../lib/styles/colorPalette';
import { MediumText, SemiBoldText } from '../../components/CustomText';

export const Box = styled.Pressable.attrs({
    shadowColor: '#000000', 
    shadowOffset: { width: 2.26, height: 4.52 }, 
    shadowOpacity: 0.25,
    shadowRadius: 4.52, 
    elevation: 4.52,
})`
    width: 202.976px;
    height: 269.97px;
    border-radius: 16.949px;
    align-items: center;
    background-color: #FFF;
`;

export const Img = styled.View`
    width: 177.994px;
    height: 143.984px;
    border-radius: 16.949px;
    background-color: ${palette.backGreen};
    margin-top: 11.74px;
`;

export const Label = styled.View`
    width: 100%;
    padding: 12.49px 13px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 27.12px;
`;

export const Date = styled(MediumText)`
    color: ${palette.black};
    font-size: 13.56px;
`;