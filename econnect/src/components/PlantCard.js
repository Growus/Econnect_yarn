import React from 'react';
import * as P from '../styles/components/PlantCardStyle';

const PlantCard = ({name, plant, date, onPress}) => {
    return (
        <P.Card onPress={onPress}>
            <P.Img/>
            <P.Label>
                <P.Name>{name}</P.Name>
                <P.Plant>{plant}</P.Plant>
                <P.Date>{date}</P.Date>
            </P.Label>
        </P.Card>
    );
};

export default PlantCard;
