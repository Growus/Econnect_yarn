import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as D from '../styles/DetailStyle';
import CustomButton from '../components/CustomButton';
import DetailButton from '../components/DetailButton';

const DetailScreen = () => {
    const navigation = useNavigation();

    return (
        <D.Screen>
            <D.ScrollView>
            <D.Container>
            <D.PImage/>
                <D.Content>
                    <D.Title>
                        <D.Left>
                            <D.Name>다육이</D.Name>
                            <D.Plant>테라코타</D.Plant>
                        </D.Left>
                        <D.Date>D+22</D.Date>
                    </D.Title>
                    <D.ButtonArea>
                        <DetailButton label='대표 식물 설정' />
                        <DetailButton label='식물 정보 수정' onPress={() => navigation.navigate('Update')} />
                        <DetailButton label='삭제' />
                    </D.ButtonArea>
                    <D.DetailBox>
                        <D.Detail>
                            <D.SImage/>
                            <D.Value>40%</D.Value>
                        </D.Detail>
                        <D.Detail>
                            <D.WImage/>
                            <D.Value>40%</D.Value>
                        </D.Detail>
                        <D.Detail>
                            <D.TImage/>
                            <D.Value>40%</D.Value>
                        </D.Detail>
                        <D.Detail>
                            <D.CImage/>
                            <D.Value>40%</D.Value>
                        </D.Detail>
                    </D.DetailBox>
                </D.Content>
                <CustomButton label='Tip' />
            </D.Container>
            </D.ScrollView>
        </D.Screen>
    );
};

export default DetailScreen;
