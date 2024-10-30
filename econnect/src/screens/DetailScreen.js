import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';
import * as D from '../styles/DetailStyle';
import CustomButton from '../components/CustomButton';
import DetailButton from '../components/DetailButton';

const DetailScreen = () => {
    const API_URL = process.env.REACT_APP_API;
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const [plantDetails, setPlantDetails] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPlantDetails = async () => {
            try {
                const response = await RNFetchBlob.fetch('GET', `${API_URL}/plants/articles/${id}`, {
                    'Content-Type': 'application/json',
                }, JSON.stringify({ id }));

                const data = JSON.parse(response.data); 

                if (data.statusCode === 0) {
                    setPlantDetails(data.plantDetails);
                } else {
                    console.error('API Error:', data.message);
                    setError(data.message);
                }
            } catch (error) {
                console.error('Error fetching plant details:', error);
                setError('Error fetching plant details. Please try again later.');
            }
        };

        fetchPlantDetails();
    }, [id]);

    if (!plantDetails) {
        return (
            <D.Screen>
                <D.Container>
                    <D.LoadingMessage>Loading...</D.LoadingMessage>
                </D.Container>
            </D.Screen>
        );
    }

    const calculateDDay = (dday) => {
        const targetDate = new Date(dday);
        const today = new Date();
        const diffTime = targetDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays === 0 ? 'D+1' : `D${diffDays > 0 ? '+' : ''}${diffDays + 1}`;
    };

    return (
        <D.Screen>
            <D.ScrollView>
            <D.Container>
            <D.PImage  source={{ uri: plantDetails.image }}/>
                <D.Content>
                    <D.Title>
                        <D.Left>
                            <D.Name>{plantDetails.name}</D.Name>
                            <D.Plant>{plantDetails.type}</D.Plant>
                        </D.Left>
                        <D.Date>{calculateDDay(plantDetails.dday)}</D.Date>
                    </D.Title>
                    <D.ButtonArea>
                        <DetailButton label='대표 식물 설정' />
                        <DetailButton label='식물 정보 수정' onPress={() => navigation.navigate('Update')} />
                        <DetailButton label='삭제' />
                    </D.ButtonArea>
                    <D.DetailBox>
                        <D.Detail>
                            <D.SImage/>
                            <D.Value>{plantDetails.solidHumidity}%</D.Value>
                        </D.Detail>
                        <D.Detail>
                            <D.WImage/>
                            <D.Value>{plantDetails.airHumidity}%</D.Value>
                        </D.Detail>
                        <D.Detail>
                            <D.TImage/>
                            <D.Value>{plantDetails.temperature}°C</D.Value>
                        </D.Detail>
                        <D.Detail>
                            <D.CImage/>
                            <D.Value>{plantDetails.status}</D.Value>
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
