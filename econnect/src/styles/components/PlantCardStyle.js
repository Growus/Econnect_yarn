import styled from 'styled-components/native';
import palette from '../../lib/styles/colorPalette';
import { RegularText, SemiBoldText } from '../../components/CustomText';

export const Card = styled.Pressable.attrs({
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.25,
    shadowRadius: 4, 
    elevation: 4,
})`
    width: 347px;
    height: 144px;
    flex-direction: row;
    align-items: center;
    background-color: #FFF;
    border-radius: 30px;
    margin-bottom: 24px;
`;

export const Img = styled.View`
    width: 113px;
    height: 113px;
    margin-right: 18px;
`;

export const Label = styled.View`
    justify-content: center;
`;

export const Name = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 20px;
`;

export const Plant = styled(RegularText)`
    color: ${palette.black};
    font-size: 14px;
`;

export const Date = styled(RegularText)`
    color: ${palette.black};
    font-size: 14px;
`;