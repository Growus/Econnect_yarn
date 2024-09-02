import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as L from '../styles/ListStyle';
import PlantCard from '../components/PlantCard';

const ListScreen = () => {
    const navigation = useNavigation();

    return (
        <L.Screen>
            <L.ScrollView>
                <L.Container>
                    <PlantCard name='다육이' plant='테라코타' date='2024.3.14' onPress={() => navigation.navigate('Detail')} />
                    <PlantCard name='다육이' plant='테라코타' date='2024.3.14' onPress={() => navigation.navigate('Detail')} />
                </L.Container>
            </L.ScrollView>
        </L.Screen>
    );
};

export default ListScreen;
