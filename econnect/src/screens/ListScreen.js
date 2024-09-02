import React from 'react';
import * as L from '../styles/ListStyle';
import PlantCard from '../components/PlantCard';

const ListScreen = () => {
    return (
        <L.Screen>
            <L.ScrollView>
                <L.Container>
                    <PlantCard name='다육이' plant='테라코타' date='2024.3.14' />
                    <PlantCard name='다육이' plant='테라코타' date='2024.3.14' />
                </L.Container>
            </L.ScrollView>
        </L.Screen>
    );
};

export default ListScreen;
