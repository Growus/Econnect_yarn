import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import palette from '../../lib/styles/colorPalette';
import { MediumText } from '../../components/CustomText';

import Garden from '../../assets/img/garden.svg';
import Plus from '../../assets/img/plus.svg';
import Check from '../../assets/img/check.svg';
import Camera from '../../assets/img/ar.svg';
import Arrow from '../../assets/img/arrow_right_black.svg';

const {width} = Dimensions.get('window');
const contentWidth = width - 66;

export const Button = styled.Pressable.attrs({
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.25,
    shadowRadius: 4, 
    elevation: 4,
})`
    width: ${contentWidth}px;
    padding: 14px 19px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 16px;
`;

export const Left = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
export const Icon = styled(({ label, ...props }) => {
    switch (label) {
        case 'My Garden':
            return <Garden {...props} />;
        case 'Registarate Plant':
            return <Plus {...props} />;
        case 'Plant Care':
            return <Check {...props} />;
        case 'With My Plant':
            return <Camera {...props} />;
        default:
            return <Garden {...props} />;
    }
})`
    width: 21px;
    height: 22px;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
`;3

export const Label = styled(MediumText)`
    color: ${palette.black};
    font-size: 20px;
`;

export const ArrowIcon = styled(Arrow)`
    width: 20px;
    height: 22px;
    justify-content: center;
    align-items: center;
`;