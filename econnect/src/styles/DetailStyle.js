import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';
import { SemiBoldText, MediumText } from '../components/CustomText';

import PlantImage from '../assets/img/detail_plant.svg';
import SoilMoisture from '../assets/img/soil_moisture.svg';
import WaterImage from '../assets/img/water.svg';
import Temperature from '../assets/img/temperature.svg';
import Smile from '../assets/img/smile.svg';

export const Screen = styled.SafeAreaView`
    flex: 1;
    background-color: ${palette.backGreen};
    align-items: center;
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

export const PImage = styled(PlantImage)`
    margin-top: 20px;
    margin-bottom: 29px;
`;

export const Content = styled.View``;

export const Title = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const Left = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-end
`;

export const Name = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 24px;
    margin-right: 10px;
`;

export const Plant = styled(MediumText)`
    color: ${palette.black};
    font-size: 16px;
`;

export const Date = styled(MediumText)`
    color: ${palette.black};
    font-size: 18px;
`;

export const ButtonArea = styled.View`
    width: 350px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
`;

export const DetailBox = styled.Pressable.attrs({
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.15,
    shadowRadius: 2, 
    elevation: 2,
})`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 125px;
    background-color: #FFF;
    border-radius: 20px;
    margin-top: 9px;
    margin-bottom: 29px;
`;

export const Detail = styled.View`
    width: 50px;
    justify-content: center;
    align-items: center;
`;

export const SImage = styled(SoilMoisture)``;

export const WImage = styled(WaterImage)``;

export const TImage = styled(Temperature)``;

export const CImage = styled(Smile)`
    margin-top: 10px;
`;

export const Value = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 14px;
    margin-top: 13px;
`;
