import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import { RegularText } from '../../components/CustomText';

import Crown from '../../assets/img/crown.svg';
import Pencil from '../../assets/img/pencil.svg';
import Delete from '../../assets/img/delete.svg';


const {width} = Dimensions.get('window');
const contentWidth = width - 248;

export const Button = styled.Pressable.attrs((label, ...props) => ({
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
}))`
    width: ${({ label }) => (label === '삭제' ? '39px' : `${contentWidth}px`)};
    height: ${({ label }) => (label === '삭제' ? '39px' : '39px')};
    padding: ${({ label }) => (label === '삭제' ? '10px' : '11px 15px 11px 11px')};
    flex-direction: row;
    justify-content: ${({ label }) => (label === '삭제' ? 'center' : 'space-between')};
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
`;

export const Left = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Icon = styled(({ label, ...props }) => {
    switch (label) {
        case '대표 식물 설정':
            return <Crown {...props} />;
        case '식물 정보 수정':
            return <Pencil {...props} />;
        default:
            return <Delete {...props} />;
    }
})`
    width: ${({ label }) => 
        label === '삭제' ? '18px' : 
        label === '대표 식물 설정' ? '25px' : 
        label === '식물 정보 수정' ? '18px' : 
        '21px'};
    
    height: ${({ label }) => 
        label === '삭제' ? '20px' : 
        label === '대표 식물 설정' ? '25px' : 
        label === '식물 정보 수정' ? '18px' : 
        '22px'};
    
    justify-content: center;
    align-items: center;
    margin-right: ${({ label }) => (label === '삭제' ? '0' : '14px')};
`;


export const Label = styled(RegularText)`
    color: ${palette.black};
    font-size: 14px;
`;
